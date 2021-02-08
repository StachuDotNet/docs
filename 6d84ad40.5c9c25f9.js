(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{132:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),p=(t(0),t(194)),l={id:"set",title:"SET clause",sidebar_label:"SET"},o={unversionedId:"clauses/set",id:"clauses/set",isDocsHomePage:!1,title:"SET clause",description:"The SET clause is used to update labels on nodes and properties on nodes and relationships.",source:"@site/cypher-manual/clauses/set.md",slug:"/clauses/set",permalink:"/cypher-manual/clauses/set",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/clauses/set.md",version:"current",sidebar_label:"SET",sidebar:"cypher_manual",previous:{title:"RETURN clause",permalink:"/cypher-manual/clauses/return"},next:{title:"UNION clause",permalink:"/cypher-manual/clauses/union"}},c=[{value:"Data Set",id:"data-set",children:[]},{value:"1. Setting a property",id:"1-setting-a-property",children:[]},{value:"2. Setting multiple properties",id:"2-setting-multiple-properties",children:[]},{value:"3. Setting node labels",id:"3-setting-node-labels",children:[]},{value:"4. Update a property",id:"4-update-a-property",children:[]},{value:"5. Remove a property",id:"5-remove-a-property",children:[]},{value:"6. Copy all properties",id:"6-copy-all-properties",children:[]},{value:"7. Replace all properties using map",id:"7-replace-all-properties-using-map",children:[]},{value:"8. Update all properties using map",id:"8-update-all-properties-using-map",children:[]},{value:"Data set Queries",id:"data-set-queries",children:[]}],i={toc:c};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(p.a)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," clause is used to update labels on nodes and properties on nodes and relationships."),Object(p.a)("ol",null,Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#1-setting-a-property"},"Setting a property")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#2-setting-multiple-properties"},"Setting multiple properties")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#3-setting-node-labels"},"Setting node labels")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#4-update-a-property"},"Update a property")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#5-remove-a-property"},"Remove a property")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#6-copy-all-properties"},"Copy all properties")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#7-replace-all-properties-using-map"},"Replace all properties using map")),Object(p.a)("li",{parentName:"ol"},Object(p.a)("a",{parentName:"li",href:"#8-update-all-properties-using-map"},"Update all properties using map"))),Object(p.a)("h2",{id:"data-set"},"Data Set"),Object(p.a)("p",null,"The following examples are executed with this data set. You can create this data set\nlocally by executing the queries at the end of the page: ",Object(p.a)("a",{parentName:"p",href:"#data-set-queries"},"Data Set"),"."),Object(p.a)("img",{src:"https://raw.githubusercontent.com/g-despot/images/master/data_set.png",alt:"Data set",style:{height:380}}),Object(p.a)("h2",{id:"1-setting-a-property"},"1. Setting a property"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," clause can be used to set the value of a property on a node or relationship."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c.population = 83000001\nRETURN c.name, c.population;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},"+--------------+--------------+\n| c.name       | c.population |\n+--------------+--------------+\n| Germany      | 83000001     |\n+--------------+--------------+\n")),Object(p.a)("h2",{id:"2-setting-multiple-properties"},"2. Setting multiple properties"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," clause can be used to set the value of multiple properties nodes or relationships by separating them with a comma."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c.capital = 'Berlin', c.population = 83000002\nRETURN c.name, c.population, c.capital;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},"+--------------+--------------+--------------+\n| c.name       | c.population | c.capital    |\n+--------------+--------------+--------------+\n| Germany      | 83000002     | Berlin       |\n+--------------+--------------+--------------+\n")),Object(p.a)("h2",{id:"3-setting-node-labels"},"3. Setting node labels"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," clause can be used to set the label on a node. If the node has a label, a new one will be added while the old one is left as is."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c { name: 'Germany' })\nSET c:Land\nRETURN labels(c);\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},'+---------------------+\n| labels(c)           |\n+---------------------+\n| ["Country", "Land"] |\n+---------------------+\n')),Object(p.a)("p",null,"Multiple labels can be also set."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c { name: 'Germany' })\nSET c:Place:Area\nRETURN labels(c);\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},'+--------------------------------------+\n| labels(c)                            |\n+--------------------------------------+\n| ["Country", "Land", "Place", "Area"] |\n+--------------------------------------+\n')),Object(p.a)("h2",{id:"4-update-a-property"},"4. Update a property"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," clause can be used to update the value or type of a property on a node or relationship."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c.population = 'not available'\nRETURN c.population;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},"+---------------+\n| c.population  |\n+---------------+\n| not available |\n+---------------+\n")),Object(p.a)("h2",{id:"5-remove-a-property"},"5. Remove a property"),Object(p.a)("p",null,"The ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," clause can be used to remove the value of a property on a node or relationship by setting it to ",Object(p.a)("inlineCode",{parentName:"p"},"NULL"),". "),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c.population = NULL\nRETURN c.population;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},"+--------------+\n| c.population |\n+--------------+\n| Null         |\n+--------------+\n")),Object(p.a)("h2",{id:"6-copy-all-properties"},"6. Copy all properties"),Object(p.a)("p",null,"If ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," is used to copy the properties of one node/relationship to another, all the properties of the latter will be removed and replaced with the new ones."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c1:Country { name: 'Germany' }), (c2:Country { name: 'France' })\nSET c2 = c1\nRETURN c2, c1;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},'+----------------------------------------------------------------------------+----------------------------------------------------------------------------+\n| c2                                                                         | c1                                                                         |\n+----------------------------------------------------------------------------+----------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany"})      | (:Country:Land {continent: "Europe", language: "German", name: "Germany"}) |\n+----------------------------------------------------------------------------+----------------------------------------------------------------------------+\n')),Object(p.a)("h2",{id:"7-replace-all-properties-using-map"},"7. Replace all properties using map"),Object(p.a)("p",null,"If ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," is used with the property replacement operator ",Object(p.a)("inlineCode",{parentName:"p"},"="),", all the properties in the map that are on the node or relationship will be updated.\nThe properties that are not on the node or relationship but are in the map will be added. The properties that are not in the map will be removed. "),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c = { name: 'Germany', population: '85000000'}\nRETURN c;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},'+------------------------------------------------------+\n| c                                                    |\n+------------------------------------------------------+\n| (:Country {name: "Germany", population: "85000000"}) |\n+------------------------------------------------------+\n')),Object(p.a)("p",null,"If an empty map is used, all the properties of a node or relationship will be set to ",Object(p.a)("inlineCode",{parentName:"p"},"NULL"),"."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c = { }\nRETURN c;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},"+------------+\n| c          |\n+------------+\n| (:Country) |\n+------------+\n")),Object(p.a)("h2",{id:"8-update-all-properties-using-map"},"8. Update all properties using map"),Object(p.a)("p",null,"If ",Object(p.a)("inlineCode",{parentName:"p"},"SET")," is used with the property mutation operator ",Object(p.a)("inlineCode",{parentName:"p"},"+="),", all the properties in the map that are on the node or relationship will be updated.\nThe properties that are not on the node or relationship but are in the map will be added. Properties that are not present in the map will be left as is. "),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (c:Country { name: 'Germany' })\nSET c += { name: 'Germany', population: '85000000'}\nRETURN c;\n")),Object(p.a)("p",null,"Output:"),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre"},'+-----------------------------------------------------------------------------------------------+\n| c                                                                                             |\n+-----------------------------------------------------------------------------------------------+\n| (:Country {continent: "Europe", language: "German", name: "Germany", population: "85000000"}) |\n+-----------------------------------------------------------------------------------------------+\n')),Object(p.a)("h2",{id:"data-set-queries"},"Data set Queries"),Object(p.a)("p",null,"We encourage you to try out the examples by yourself.\nYou can get our data set locally by executing the following query block."),Object(p.a)("pre",null,Object(p.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) DETACH DELETE n;\n\nCREATE (c1:Country { name: 'Germany', language: 'German', continent: 'Europe', population: 83000000 });\nCREATE (c2:Country { name: 'France', language: 'French', continent: 'Europe', population: 67000000 });\nCREATE (c3:Country { name: 'United Kingdom', language: 'English', continent: 'Europe', population: 66000000 });\n\nMATCH (c1),(c2)\nWHERE c1.name= 'Germany' AND c2.name = 'France'\nCREATE (c2)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'John' })-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (c)\nWHERE c.name= 'United Kingdom'\nCREATE (c)<-[:WORKING_IN { date_of_start: 2014 }]-(p:Person { name: 'Harry' })-[:LIVING_IN { date_of_start: 2013 }]->(c);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)-[:FRIENDS_WITH { date_of_start: 2011 }]->(p2);\n\nMATCH (p1),(p2)\nWHERE p1.name = 'John' AND p2.name = 'Harry'\nCREATE (p1)<-[:FRIENDS_WITH { date_of_start: 2012 }]-(:Person { name: 'Anna' })-[:FRIENDS_WITH { date_of_start: 2014 }]->(p2);\n\nMATCH (p),(c1),(c2)\nWHERE p.name = 'Anna' AND c1.name = 'United Kingdom' AND c2.name = 'Germany'\nCREATE (c2)<-[:LIVING_IN { date_of_start: 2014 }]-(p)-[:LIVING_IN { date_of_start: 2014 }]->(c1);\n\nMATCH (n)-[r]->(m) RETURN n,r,m;\n")))}u.isMDXComponent=!0},194:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t(0),r=t.n(n);function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),m=u(t),d=n,b=m["".concat(l,".").concat(d)]||m[d]||s[d]||p;return t?r.a.createElement(b,o(o({ref:a},i),{},{components:t})):r.a.createElement(b,o({ref:a},i))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var p=t.length,l=new Array(p);l[0]=m;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var i=2;i<p;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);