(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return i})),n.d(a,"metadata",(function(){return o})),n.d(a,"toc",(function(){return p})),n.d(a,"default",(function(){return s}));var t=n(3),r=n(7),l=(n(0),n(194)),i={id:"match",title:"MATCH clause",sidebar_label:"MATCH"},o={unversionedId:"clauses/match",id:"clauses/match",isDocsHomePage:!1,title:"MATCH clause",description:"The MATCH clause is used to obtain data from the database by matching it to a given pattern.",source:"@site/cypher-manual/clauses/match.md",slug:"/clauses/match",permalink:"/cypher-manual/clauses/match",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/match.md",version:"current",sidebar_label:"MATCH",sidebar:"cypher_manual",previous:{title:"DELETE clause",permalink:"/cypher-manual/clauses/delete"},next:{title:"MERGE clause",permalink:"/cypher-manual/clauses/merge"}},p=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Matching nodes",id:"1-matching-nodes",children:[{value:"1.1 Get all nodes",id:"11-get-all-nodes",children:[]},{value:"1.2 Get all nodes with a label",id:"12-get-all-nodes-with-a-label",children:[]}]},{value:"2. Matching relationships",id:"2-matching-relationships",children:[{value:"2.1 Get all related nodes",id:"21-get-all-related-nodes",children:[]},{value:"2.2 Get related nodes with a label",id:"22-get-related-nodes-with-a-label",children:[]},{value:"2.3 Get related nodes with a directed relationship",id:"23-get-related-nodes-with-a-directed-relationship",children:[]},{value:"2.4 Get a relationship",id:"24-get-a-relationship",children:[]},{value:"2.5 Matching on a relationship with a type",id:"25-matching-on-a-relationship-with-a-type",children:[]},{value:"2.6 Matching on relationships with multiple types",id:"26-matching-on-relationships-with-multiple-types",children:[]},{value:"2.7 Uncommon characters in relationship types",id:"27-uncommon-characters-in-relationship-types",children:[]},{value:"2.8 Match with multiple relationships",id:"28-match-with-multiple-relationships",children:[]}]},{value:"3. Matching with variable length relationships",id:"3-matching-with-variable-length-relationships",children:[{value:"3.1 Variable length relationships",id:"31-variable-length-relationships",children:[]},{value:"3.2 Variable length relationships with multiple relationship types",id:"32-variable-length-relationships-with-multiple-relationship-types",children:[]},{value:"3.3 Returning multiple relationships with variable length",id:"33-returning-multiple-relationships-with-variable-length",children:[]}]},{value:"Data set Queries",id:"data-set-queries",children:[]}],c={toc:p};function s(e){var a=e.components,n=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(t.a)({},c,n,{components:a,mdxType:"MDXLayout"}),Object(l.a)("p",null,"The ",Object(l.a)("inlineCode",{parentName:"p"},"MATCH")," clause is used to obtain data from the database by matching it to a given pattern."),Object(l.a)("ol",null,Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#1-matching-nodes"},"Matching nodes"),Object(l.a)("ol",{parentName:"li"},Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#11-get-all-nodes"},"Get all nodes")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#12-get-all-nodes-with-a-label"},"Get all nodes with a label")))),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#2-matching-relationships"},"Matching relationships"),Object(l.a)("ol",{parentName:"li"},Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#21-get-all-related-nodes"},"Get all related nodes")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#22-get-related-nodes-with-a-label"},"Get related nodes with a label")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#23-get-related-nodes-with-a-directed-relationship"},"Get related nodes with a directed relationship")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#24-get-a-relationship"},"Get a relationship")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#25-matching-on-a-relationship-with-a-type"},"Matching on a relationship with a type")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#26-matching-on-relationships-with-multiple-types"},"Matching on relationships with multiple types")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#27-uncommon-characters-in-relationship-types"},"Uncommon characters in relationship types")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#28-match-with-multiple-relationships"},"Match with multiple relationships")))),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#3-matching-with-variable-length-relationships"},"Matching with variable length relationships"),Object(l.a)("ol",{parentName:"li"},Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#31-variable-length-relationships"},"Variable length relationships")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#32-variable-length-relationships-with-multiple-relationship-types"},"Variable length relationships with multiple relationship types")),Object(l.a)("li",{parentName:"ol"},Object(l.a)("a",{parentName:"li",href:"#33-returning-multiple-relationships-with-variable-length"},"Returning multiple relationships with variable length"))))),Object(l.a)("h2",{id:"data-set"},"Data Set"),Object(l.a)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(l.a)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(l.a)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(l.a)("h2",{id:"1-matching-nodes"},"1. Matching nodes"),Object(l.a)("h3",{id:"11-get-all-nodes"},"1.1 Get all nodes"),Object(l.a)("p",null,"Without specifying labels, the query will return all the nodes in a graph."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) \nRETURN n;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------------+\n| n                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |\n| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})          |\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n| (:Person {name: "John"})                                                                            |\n| (:Person {name: "Harry"})                                                                           |\n| (:Person {name: "Anna"})                                                                            |\n+-----------------------------------------------------------------------------------------------------+\n')),Object(l.a)("h3",{id:"12-get-all-nodes-with-a-label"},"1.2 Get all nodes with a label"),Object(l.a)("p",null,"By specifying the label of a node, all the nodes with that label are returned."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country)\nRETURN c;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------------+\n| c                                                                                                   |\n+-----------------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000})         |\n| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})          |\n| (:Country {continent: "Europe", language: "English", name: "United Kingdom", population: 66000000}) |\n+-----------------------------------------------------------------------------------------------------+\n')),Object(l.a)("h2",{id:"2-matching-relationships"},"2. Matching relationships"),Object(l.a)("h3",{id:"21-get-all-related-nodes"},"2.1 Get all related nodes"),Object(l.a)("p",null,"By using the ",Object(l.a)("em",{parentName:"p"},"related to")," symbol ",Object(l.a)("inlineCode",{parentName:"p"},"--"),", nodes that have a relationship with the specified node can be returned.\nThe symbol represents an undirected relationship which means the direction of the relationship is not taken into account."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person { name: 'John' })--(n)\nRETURN n;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+---------------------------------------------------------------------------------------------+\n| n                                                                                           |\n+---------------------------------------------------------------------------------------------+\n| (:Person {name: "Anna"})                                                                    |\n| (:Country {continent: "Europe", language: "French", name: "France", population: 67000000})  |\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000}) |\n| (:Person {name: "Harry"})                                                                   |\n+---------------------------------------------------------------------------------------------+\n')),Object(l.a)("h3",{id:"22-get-related-nodes-with-a-label"},"2.2 Get related nodes with a label"),Object(l.a)("p",null,"To only return ",Object(l.a)("em",{parentName:"p"},"related to")," nodes with a specific label you need to add it using the label syntax."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person { name: 'John' })--(p:Person)\nRETURN p;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+---------------------------+\n| p                         |\n+---------------------------+\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),Object(l.a)("h3",{id:"23-get-related-nodes-with-a-directed-relationship"},"2.3 Get related nodes with a directed relationship"),Object(l.a)("p",null,"The ",Object(l.a)("em",{parentName:"p"},"related to")," symbol ",Object(l.a)("inlineCode",{parentName:"p"},"--")," can be extended by using:"),Object(l.a)("ul",null,Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"--\x3e")," to specify outgoing relationships,"),Object(l.a)("li",{parentName:"ul"},Object(l.a)("inlineCode",{parentName:"li"},"<--")," to specify ingoing relationships.")),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country { name: 'France' })<--(p:Person)\nRETURN p;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+--------------------------+\n| p                        |\n+--------------------------+\n| (:Person {name: "John"}) |\n+--------------------------+\n')),Object(l.a)("h3",{id:"24-get-a-relationship"},"2.4 Get a relationship"),Object(l.a)("p",null,"If you want to return the relationship between two nodes or a property of the relationship, a variable is required.\nA directed or undirected relationship can be used."),Object(l.a)("p",null,"This query returns the relationship and its type:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person { name: 'John' })-[r]->()\nRETURN type(r);\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},"+--------------+\n| type(r)      |\n+--------------+\n| WORKING_IN   |\n| LIVING_IN    |\n| FRIENDS_WITH |\n+--------------+\n")),Object(l.a)("p",null,"This query also returns the property ",Object(l.a)("inlineCode",{parentName:"p"},"date_of_start")," of the relationship:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Person { name: 'John' })-[r]->()\nRETURN type(r), r.date_of_start;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},"+-----------------+-----------------+\n| type(r)         | r.date_of_start |\n+-----------------+-----------------+\n| WORKING_IN      | 2014            |\n| LIVING_IN       | 2014            |\n| FRIENDS_WITH    | 2011            |\n+-----------------+-----------------+\n")),Object(l.a)("h3",{id:"25-matching-on-a-relationship-with-a-type"},"2.5 Matching on a relationship with a type"),Object(l.a)("p",null,"To return a relationship with a specified type you need to use the type syntax.\nA directed or undirected relationship can be used."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person { name: 'John' })-[:LIVING_IN]-(c)\nRETURN c.name;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},"+---------+\n| c.name  |\n+---------+\n| Germany |\n+---------+\n")),Object(l.a)("h3",{id:"26-matching-on-relationships-with-multiple-types"},"2.6 Matching on relationships with multiple types"),Object(l.a)("p",null,"To return relationships with any of the specified types, the types need to be chained together with the pipe symbol ",Object(l.a)("inlineCode",{parentName:"p"},"|"),"."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (p:Person { name: 'John' })-[:LIVING_IN|:WORKING_IN]-(c)\nRETURN c.name;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},"+---------+\n| c.name  |\n+---------+\n| France  |\n| Germany |\n+---------+\n")),Object(l.a)("h3",{id:"27-uncommon-characters-in-relationship-types"},"2.7 Uncommon characters in relationship types"),Object(l.a)("p",null,"If a type has non-letter characters, like spaces, for example, the backtick symbol ","`"," needs to be used to quote these.\nIf the relationship type ",Object(l.a)("inlineCode",{parentName:"p"},"LIVING_IN")," had a space instead of an underscore, a possible query would look like this."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country { name: 'France' })<-[r:`LIVING IN`]-()\nRETURN r.name;\n")),Object(l.a)("h3",{id:"28-match-with-multiple-relationships"},"2.8 Match with multiple relationships"),Object(l.a)("p",null,"Multiple relationship statements can be specified in the query."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (:Country { name: 'France' })<-[l:WORKING_IN]-(p)-[w:LIVING_IN]->(:Country { name: 'Germany' })\nRETURN p.name;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},"+--------+\n| p.name |\n+--------+\n| John   |\n+--------+\n")),Object(l.a)("h2",{id:"3-matching-with-variable-length-relationships"},"3. Matching with variable length relationships"),Object(l.a)("h3",{id:"31-variable-length-relationships"},"3.1 Variable length relationships"),Object(l.a)("p",null,"If a node needs to be specified by its distance in relationship\u2192node hops, the following syntax is used: ",Object(l.a)("inlineCode",{parentName:"p"},"-[:TYPE*minHops..maxHops]\u2192"),".\nminHops and maxHops are optional and default to 1 and infinity respectively. The dots can be omitted if both are not specified or if\nonly one is set which implies a fixed length pattern."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH ({ name: 'United Kingdom' })-[:LIVING_IN*1..2]-(n)\nRETURN n;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+---------------------------------------------------------------------------------------------+\n| n                                                                                           |\n+---------------------------------------------------------------------------------------------+\n| (:Person {name: "Harry"})                                                                   |\n| (:Person {name: "Anna"})                                                                    |\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: 83000000}) |\n+---------------------------------------------------------------------------------------------+\n')),Object(l.a)("h3",{id:"32-variable-length-relationships-with-multiple-relationship-types"},"3.2 Variable length relationships with multiple relationship types"),Object(l.a)("p",null,"If variable lengths are used with multiple stacked up relationship types, ",Object(l.a)("inlineCode",{parentName:"p"},"*minHops..maxHops")," applies to any combination of relationships."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH ({ name: 'United Kingdom' })<-[:WORKING_IN|FRIENDS_WITH*1..2]-(P:Person)\nRETURN P;\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},'+---------------------------+\n| P                         |\n+---------------------------+\n| (:Person {name: "John"})  |\n| (:Person {name: "Harry"}) |\n| (:Person {name: "Anna"})  |\n+---------------------------+\n')),Object(l.a)("h3",{id:"33-returning-multiple-relationships-with-variable-length"},"3.3 Returning multiple relationships with variable length"),Object(l.a)("p",null,"If a variable length is used, the list of relationships can be returned by adding ",Object(l.a)("inlineCode",{parentName:"p"},"variable=")," at the beginning of the ",Object(l.a)("inlineCode",{parentName:"p"},"MATCH")," clause."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH p=({ name: 'John' })<-[:FRIENDS_WITH*1..2]-()\nRETURN relationships(p);\n")),Object(l.a)("p",null,"Output:"),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre"},"+----------------------------------------+\n| relationships(p)                       |\n+----------------------------------------+\n| [[FRIENDS_WITH {date_of_start: 2012}]] |\n+----------------------------------------+\n")),Object(l.a)("h2",{id:"data-set-queries"},"Data set Queries"),Object(l.a)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(l.a)("pre",null,Object(l.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}s.isMDXComponent=!0},194:function(e,a,n){"use strict";n.d(a,"a",(function(){return m}));var t=n(0),r=n.n(t);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var a=r.a.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},u=r.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=t,d=u["".concat(i,".").concat(m)]||u[m]||h[m]||l;return n?r.a.createElement(d,o(o({ref:a},c),{},{components:n})):r.a.createElement(d,o({ref:a},c))}));function m(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=e,o.mdxType="string"==typeof e?e:t,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);