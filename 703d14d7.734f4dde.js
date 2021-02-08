(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(194)),o={id:"profiling-queries",title:"Profiling queries",sidebar_label:"Profiling queries"},l={unversionedId:"database-functionalities/profiling-queries",id:"database-functionalities/profiling-queries",isDocsHomePage:!1,title:"Profiling queries",description:"Along with inspecting a query's plan as described in the Inspecting queries,",source:"@site/docs/database-functionalities/profiling-queries.md",slug:"/database-functionalities/profiling-queries",permalink:"/memgraph/database-functionalities/profiling-queries",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/profiling-queries.md",version:"current",sidebar_label:"Profiling queries",sidebar:"memgraph",previous:{title:"Inspecting queries",permalink:"/memgraph/database-functionalities/inspecting-queries"},next:{title:"How to setup Memgraph TensorFlow Op?",permalink:"/memgraph/database-functionalities/tensorflow-setup"}},p=[{value:"Where to next?",id:"where-to-next",children:[]}],c={toc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.a)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"Along with inspecting a query's plan as described in the ",Object(i.a)("a",{parentName:"p",href:"/memgraph/database-functionalities/inspecting-queries"},"Inspecting queries"),",\nit is also possible to profile the execution of a query and get a detailed report\non how the query's plan behaved. For every logical operator the following info is provided:"),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("inlineCode",{parentName:"p"},"OPERATOR")," ","\u2014"," the name of the operator, just like in the output of an\n",Object(i.a)("inlineCode",{parentName:"p"},"EXPLAIN")," query.")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("inlineCode",{parentName:"p"},"ACTUAL HITS")," ","\u2014"," the number of times a particular logical operator was\npulled from.")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("inlineCode",{parentName:"p"},"RELATIVE TIME")," ","\u2014"," the amount of time that was spent processing a\nparticular logical operator, relative to the execution of the whole plan.")),Object(i.a)("li",{parentName:"ul"},Object(i.a)("p",{parentName:"li"},Object(i.a)("inlineCode",{parentName:"p"},"ABSOLUTE TIME")," ","\u2014"," the amount of time that was spent processing a\nparticular logical operator."))),Object(i.a)("p",null,"A simple example to illustrate the output:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-cypher"},"PROFILE MATCH (n :Node)-[:Edge]-(m :Node) WHERE n.prop = 42 RETURN *;\n")),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"+---------------+---------------+---------------+---------------+\n| OPERATOR      | ACTUAL HITS   | RELATIVE TIME | ABSOLUTE TIME |\n+---------------+---------------+---------------+---------------+\n| * Produce     | 1             |   7.134628 %  |   0.003949 ms |\n| * Filter      | 1             |  12.734765 %  |   0.007049 ms |\n| * Expand      | 1             |   5.181460 %  |   0.002868 ms |\n| * ScanAll     | 1             |   3.325061 %  |   0.001840 ms |\n| * ScanAll     | 1             |  71.061241 %  |   0.039334 ms |\n| * Once        | 2             |   0.562844 %  |   0.000312 ms |\n+---------------+---------------+---------------+---------------+\n")),Object(i.a)("h2",{id:"where-to-next"},"Where to next?"),Object(i.a)("p",null,"To learn more about Memgraph's functionalities, visit the ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"../reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(i.a)("strong",{parentName:"p"},Object(i.a)("a",{parentName:"strong",href:"/memgraph/tutorials/tutorials"},"Tutorials")),"."))}s.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),s=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),f=r,b=m["".concat(o,".").concat(f)]||m[f]||u[f]||i;return n?a.a.createElement(b,l(l({ref:t},c),{},{components:n})):a.a.createElement(b,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);