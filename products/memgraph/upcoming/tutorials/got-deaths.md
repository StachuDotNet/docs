## Game of Thrones deaths

This article is a part of a series intended to show how to use Memgraph
on real-world data to retrieve some interesting and useful
information.

We highly recommend checking out the other articles from this series which
are listed in our [tutorial overview section](tutorials-overview.md).

### Introduction

**WARNING** - If you've been living under a rock and still have not watched Game of Thrones, this tutorial could contain ***spoilers***. 

We can all agree that 2020. was one of the worst years in our lives because of the worldwide pandemic, 2019. still comes close with that disappointing, poorly written ending to one of the best shows of all time, Game of Thrones. Seven-year build-up to that awful last season crushed the souls of millions of fans around the world. Nevertheless, the Game of Thrones world is full of interesting characters, locations, scenarios, and most importantly deaths. If you want to know how many characters would survive if Jon Snow stayed dead, which House has the best Kill/Death Ratio or who was the biggest traitor in the show, you have come to the right place!

### Data Model

Although you know the Game of Thrones TV show is based on series of books called A Song of Ice and Fire, our graph database contains only characters from said TV shows as books are still not finished. This tutorial would not be possible with data analyst David Murphy who shared his collection of on-screen deaths on [this link](https://data.world/datasaurusrex/game-of-thones-deaths). Some of the rules you have to take into concern are that kills that happened off-screen and undead(wraiths) are not counted. The dataset we used was slightly modified, to be precise, columns "Episode Name" and "IMDb Rating" were added.

Now, the data we'll be using in our queries can be classified as follows:
  * nodes, labeled as "Character", "Allegiance", "Death", "Episode", "Season", or "Location"
    * a "Character" node has a "name" attribute corresponding to the character's name (e.g. "Jon Snow")
    * an "Allegiance" node has a "name" attribute corresponding to the house name the character 
      is loyal to (e.g.  "House Stark")
    * a "Death" node has an "order" attribute corresponding to the order in which the death happened 
      in show (e.g. "602")
    * an "Episode" node has a "number" attribute corresponding to the number of episodes (e.g. "10"), 
      "name" attribute corresponding to the name of the episode (e.g. "Mothers Mercy") and "imdb_rating"
      episode corresponding to the IMDB rating of the episode (e.g. "9.1")
    * a "Season" node has a "number" attribute corresponding to the number of the season (e.g. "10")
    * a "Character" node has a "name" attribute corresponding to the character's name (e.g. "Castle Black")
  * edges, of type "KilledBy", "Killed","LoyalTo", "VictimIn","KillerIn", "InEpisode", "InSeason", or "InLocation"
    * edges "KilledBy" and "Killed" connect two Character nodes and they have 2 attributes, 
      "method" which says how was the character killed (e.g. "Knife") and "count" attributes which says
      how many of these characters was killed (e.g. if "Jon Snow" killed 10 "Lannister soldiers" then on 
      this path "count" would be "10")
    * edge "LoyalTo" connects "Character" node with "Allegiance" node
    * edges "VictimIn" and "KillerIn" connects "Character" node with "Death" node
    * edge "InLocation" connects node "Death" with "Location" node
    * edge "InEpisode" connects node "Death" node "Episode"
    * edge "InSeason" connects nodes "Death" and "Episode" with "Season" node

### Importing the Snapshot

We have prepared a database snapshot for this example, so the user can easily
import it when starting Memgraph using the `--data-directory` option.

```plaintext
sudo -u memgraph \
  /usr/lib/memgraph/memgraph --data-directory /usr/share/memgraph/examples/Got \
    --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
    --storage-snapshot-on-exit=false --storage-properties-on-edges=true
```

When using Memgraph installed from DEB or RPM package, the currently running
Memgraph server may need to be stopped before importing the example. The user
can do so using the following command:

```plaintext
systemctl stop memgraph
```

When using Docker, the example can be imported with the following command:

```plaintext
docker run -p 7687:7687 \
  -v mg_lib:/var/lib/memgraph -v mg_log:/var/log/memgraph -v mg_etc:/etc/memgraph \
  memgraph --data-directory /usr/share/memgraph/examples/Got \
  --storage-snapshot-interval-sec=0 --storage-wal-enabled=false \
  --storage-snapshot-on-exit=false --storage-properties-on-edges=true
```

The user should note that any modifications of the database state will persist
only during this run of Memgraph.

### Example Queries using OpenCypher

In the queries below, we are, as usual, using [OpenCypher](https://www.opencypher.org)
to query Memgraph via the console.

Here are some queries you might find interesting:

**MINI-GAME** - If you have watched the TV Show, try to guess each result before executing the query!
1) Let's start with a couple of simple queries. List the locations with the most deaths occurred. Can you guess which one is it?

```opencypher
MATCH (l:Location)<-[:InLocation]-(d:Death) 
return l.name AS LocationName, COUNT(d) AS DeathCount
ORDER BY DeathCount DESC
```

2) Now that we have the location with the most deaths, let's list the episodes with the most deaths as well.

```opencypher
MATCH (d:Death)-[:InEpisode]->(e:Episode)
RETURN e.name, COUNT(d) AS KillCount
ORDER BY KillCount DESC
```

3) List the number of kills per season. I think we all know the highest count one. 

```opencypher
MATCH (d:Death)-[:InSeason]->(s:Season) 
RETURN s.number AS SeasonNumber, COUNT(d) as DeathNumber
ORDER BY SeasonNumber ASC
```

4) While we know which season was by far the worst, can you guess the best one based on user ratings? Let's list the seasons by IMDB ratings.
The problem we get with using the `AVG()` function is that it gives us too many decimals, therefore a useful solution is given in this example using `ROUND()`.

```opencypher
MATCH (e:Episode)-[:InSeason]->(s:Season) 
RETURN s.number AS SeasonName, ROUND(100 * AVG(e.imdb_rating))/100 AS Rating
ORDER BY Rating DESC
```

5) There are many methods characters died with such as with sword or Dragonfire, but let's list victims of unique methods.

```opencypher
MATCH (c:Character)-[k:Killed]->(c2:Character)
WITH k.method AS Method, COUNT(k.method) AS MethodCount
WHERE MethodCount < 2
MATCH (c:Character)-[k:Killed]->(c2:Character)
WHERE k.method = Method
RETURN Method, c2.name as Victim
```

6) Daenerys Stormborn of House Targaryen, the First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains or shortened to "Daenerys Targaryen" in our database is by far the biggest killer on the show. Let's list all the episodes she killed in as well as characters she killed.

```opencypher
MATCH (c:Character {name: 'Daenerys Targaryen'})-[k:Killed]->(c2:Character)
MATCH (c)-[:KillerIn]->(d:Death)<-[:VictimIn]-(c2)
MATCH (d)-[:InEpisode]-(e:Episode)
return distinct(c2.name) as Victim, COUNT(d) as Kills, e.name
ORDER BY Kills DESC
```

7) Remember that shocking last episode of the fifth season when they killed Jon Snow and we totally thought he was gonna stay dead? Well, let's list all the characters that would survive if he actually stayed dead.

```opencypher
MATCH (c:Character {name: 'Jon Snow'})-[k:Killed]->(c2:Character)
MATCH (c)-[:VictimIn]->(d2:Death)
MATCH (c)-[:KillerIn]->(d:Death)<-[:VictimIn]-(c2)
WHERE d.order>d2.order
return distinct(c2.name) as Victim, COUNT(d) as Kills
ORDER BY Kills DESC
```

8) Houses or allegiances are one of the main aspects of Westeros. We know some houses killed more characters than others, but that doesn't matter in the end, what matters is efficiency. Let's list the allegiances with the best Kill/Death Ratios. Here we came across one more problem, if an allegiance had more deaths than kills, the KD would be 0. This can easily be fixed with the `toFloat()` function.

```opencypher
MATCH (c:Character)-[death:Killed]->(c2:Character)-[l:LoyalTo]->(a:Allegiance)
WITH a, sum(death.count) as Deaths
MATCH (c:Character)<-[kill:Killed]-(c2:Character)-[l:LoyalTo]->(a:Allegiance)
RETURN a.name, sum(kill.count) as Kills, Deaths, ROUND(100 *(toFLoat(sum(kill.count))/Deaths))/100 as KD
ORDER BY KD DESC;
```

9) One of the best-rated episodes, Battle of the Bastards, showed us a fight between two houses: Stark and Bolton. Let's see which one had more casualties.

```opencypher
MATCH (c:Character)-[:LoyalTo]->(a:Allegiance)
MATCH (c)-[:VictimIn]-(d:Death)-[:InEpisode]-(e:Episode {name: 'Battle of the Bastards'})
RETURN a.name AS HouseName, COUNT(d) AS DeathCount
ORDER BY DeathCount DESC
LIMIT 2;
```

10) Who do you think was the biggest traitor in terms of killing in its own allegiance? Well, let's check it out!

```opencypher
MATCH (c:Character)-[:Killed]->(c2:Character)
MATCH (c)-[:LoyalTo]->(a:Allegiance)<-[:LoyalTo]-(c2)
RETURN c.name AS Traitor, COUNT(c2) AS Kills
ORDER BY Kills DESC
```

11) One of the biggest features of Memgraph is drawing the graphs of queries we execute. Let's visualize all the Loyalties with Characters. Execute the following query and head out to `GRAPH` tab.

```opencypher
match (c:Character)-[i:LoyalTo]-(l) return c,i,l;
```

12) Memgraphs LAB can also customize each one of the nodes. Let's see how it looks like if we want to visualize Jon Snow kills with its locations.

```opencypher
MATCH (c:Character {name: 'Jon Snow'})-[k:Killed]->(c2:Character)
MATCH (c)-[:KillerIn]->(d:Death)<-[di:VictimIn]-(c2)
MATCH (d)-[i:InLocation]->(l:Location)
return c2,di,d,i,l
```

13) Memgraph supports graph algorithms as well. Let's use Dijkstra's shortest path algorithm to show the most gruesome path of kills.

```opencypher
MATCH p = (:Character)-[:Killed * wShortest (e,v | e.count) total_weight]->(:Character)
RETURN nodes(p) as Kills, total_weight
ORDER BY total_weight DESC
LIMIT 1;
```

To learn more about these algorithms, we suggest you check out their Wikipedia
pages:

* [Breadth-first search](https://en.wikipedia.org/wiki/Breadth-first_search)
* [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)
