(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{185:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(194)),o={id:"indexing",title:"Indexing",sidebar_label:"Indexing"},l={unversionedId:"concepts/indexing",id:"concepts/indexing",isDocsHomePage:!1,title:"Indexing",description:"Introduction",source:"@site/docs/concepts/indexing.md",slug:"/concepts/indexing",permalink:"/docs/memgraph/concepts/indexing",editUrl:"https://github.com/memgraph/docs/tree/master/docs/concepts/indexing.md",version:"current",sidebar_label:"Indexing",sidebar:"memgraph",previous:{title:"Graph algorithms",permalink:"/docs/memgraph/concepts/graph-algorithms"},next:{title:"Upcoming features",permalink:"/docs/memgraph/upcoming-features"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Index Types",id:"index-types",children:[]},{value:"Underlying Implementation",id:"underlying-implementation",children:[]}],s={toc:c};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"introduction"},"Introduction"),Object(i.a)("p",null,"A database index is a data structure used to improve the speed of data retrieval\nwithin a database at the cost of additional writes and storage space for\nmaintaining the index data structure."),Object(i.a)("p",null,"Armed with deep understanding of their data model and use-case, users can decide\nwhich data to index and, by doing so, significantly improve their data retrieval\nefficiency"),Object(i.a)("h2",{id:"index-types"},"Index Types"),Object(i.a)("p",null,"At Memgraph, we support two types of indexes:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"label index"),Object(i.a)("li",{parentName:"ul"},"label-property index")),Object(i.a)("p",null,"Label indexing is NOT enabled by default in Memgraph, i.e., Memgraph will not\nautomatically index labeled data. Therefore, it is up to the user to perform\nthe indexing explicitly. By doing so, one can optimize queries that fetch\nnodes by label:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n: Label) ... RETURN n;\n")),Object(i.a)("p",null,"Indexes can also be created on data with a specific combination of label and\nproperty, hence the name label-property index. This operation needs to be\nspecified by the user and should be used with a specific data model and\nuse-case in mind."),Object(i.a)("p",null,"For example, suppose we are storing information about certain people in our\ndatabase and we are often interested in retrieving their age. In that case,\nit might be beneficial to create an index on nodes labeled as ",Object(i.a)("inlineCode",{parentName:"p"},":Person")," which\nhave a property named ",Object(i.a)("inlineCode",{parentName:"p"},"age"),". We can do so by using the following language\nconstruct:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE INDEX ON :Person(age);\n")),Object(i.a)("p",null,"After the creation of that index, those queries will be more efficient due to\nthe fact that Memgraph's query engine will not have to fetch each ",Object(i.a)("inlineCode",{parentName:"p"},":Person")," node\nand check whether the property exists. Moreover, even if all nodes labeled as\n",Object(i.a)("inlineCode",{parentName:"p"},":Person")," had an ",Object(i.a)("inlineCode",{parentName:"p"},"age")," property, creating such index might still prove to be\nbeneficial. The main reason is that entries within that index are kept sorted\nby property value. Queries such as the following are therefore more efficient:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n :Person {age: 42}) RETURN n;\n")),Object(i.a)("p",null,"Index based retrieval can also be invoked on queries with ",Object(i.a)("inlineCode",{parentName:"p"},"WHERE")," statements.\nFor instance, the following query will have the same effect as the previous\none:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:Person AND n.age = 42 RETURN n;\n")),Object(i.a)("p",null,"Naturally, indexes will also be used when filtering based on less than or\ngreater than comparisons. For example, filtering all minors (persons\nunder 18 years of age under Croatian law) using the following query will use\nindex based retrieval:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) WHERE n:PERSON and n.age < 18 RETURN n;\n")),Object(i.a)("p",null,"Bear in mind that ",Object(i.a)("inlineCode",{parentName:"p"},"WHERE")," filters could contain arbitrarily complex expressions\nand index based retrieval might not be used. Nevertheless, we are continually\nimproving our index usage recognition algorithms."),Object(i.a)("p",null,"Information about available indexes can be retrieved by using the following\nsyntax:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"SHOW INDEX INFO;\n")),Object(i.a)("p",null,"The results of this query will be all of the labels and label-property pairs\nthat Memgraph currently indexes."),Object(i.a)("p",null,"Created indexes can also be deleted by using the following syntax:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"DROP INDEX ON :Label(property);\n")),Object(i.a)("p",null,"Dropping an index will instruct all active transactions to abort as soon as\npossible, and it will wait for them to finish. Once all transaction have\nfinished, it will drop the index."),Object(i.a)("h2",{id:"underlying-implementation"},"Underlying Implementation"),Object(i.a)("p",null,"The central part of our index data structure is a highly-concurrent skip list.\nSkip lists are probabilistic data structures that allow fast search within an\nordered sequence of elements. The structure itself is built in layers where the\nbottom layer is an ordinary linked list that preserves the order. Each higher\nlevel can be imagined as a highway for layers below."),Object(i.a)("p",null,"The implementation details behind skip list operations are well documented\nin the literature and are out of scope for this article. Nevertheless, we\nbelieve that it is important for more advanced users to understand the following\nimplications of this data structure (",Object(i.a)("inlineCode",{parentName:"p"},"n")," denotes the current number of elements\nin a skip list):"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Average insertion time is ",Object(i.a)("inlineCode",{parentName:"li"},"O(log(n))")),Object(i.a)("li",{parentName:"ul"},"Average deletion time is ",Object(i.a)("inlineCode",{parentName:"li"},"O(log(n))")),Object(i.a)("li",{parentName:"ul"},"Average search time is ",Object(i.a)("inlineCode",{parentName:"li"},"O(log(n))")),Object(i.a)("li",{parentName:"ul"},"Average memory consumption is ",Object(i.a)("inlineCode",{parentName:"li"},"O(n)"))))}p.isMDXComponent=!0},194:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return t?r.a.createElement(m,l(l({ref:n},s),{},{components:t})):r.a.createElement(m,l({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);