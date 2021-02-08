(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{194:function(e,n,a){"use strict";a.d(n,"a",(function(){return s}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function u(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),c=function(e){var n=r.a.useContext(d),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=c(a),s=t,h=p["".concat(i,".").concat(s)]||p[s]||m[s]||o;return a?r.a.createElement(h,l(l({ref:n},d),{},{components:a})):r.a.createElement(h,l({ref:n},d))}));function s(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},78:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return l})),a.d(n,"toc",(function(){return u})),a.d(n,"default",(function(){return c}));var t=a(3),r=a(7),o=(a(0),a(194)),i={id:"query-modules",title:"Query modules",sidebar_label:"Query modules",slug:"/reference-guide/query-modules"},l={unversionedId:"reference-guide/query-modules/query-modules",id:"reference-guide/query-modules/query-modules",isDocsHomePage:!1,title:"Query modules",description:"Memgraph supports extending the query language with user-written procedures.",source:"@site/docs/reference-guide/query-modules/query-modules.md",slug:"/reference-guide/query-modules",permalink:"/memgraph/reference-guide/query-modules",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/query-modules/query-modules.md",version:"current",sidebar_label:"Query modules",sidebar:"memgraph",previous:{title:"Making a backup",permalink:"/memgraph/reference-guide/backup"},next:{title:"Query modules C API",permalink:"/memgraph/reference-guide/query-modules/c-api"}},u=[{value:"Loading query modules",id:"loading-query-modules",children:[]},{value:"Syntax for calling procedures",id:"syntax-for-calling-procedures",children:[]},{value:"Controlling procedure memory usage",id:"controlling-procedure-memory-usage",children:[]},{value:"Implementing custom query modules",id:"implementing-custom-query-modules",children:[]},{value:"Query modules provided by Memgraph",id:"query-modules-provided-by-memgraph",children:[]}],d={toc:u};function c(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(t.a)({},d,a,{components:n,mdxType:"MDXLayout"}),Object(o.a)("p",null,"Memgraph supports extending the query language with user-written procedures.\nThese procedures are grouped into modules, which can then be loaded on startup."),Object(o.a)("h2",{id:"loading-query-modules"},"Loading query modules"),Object(o.a)("p",null,"Upon startup, Memgraph will attempt to load the query modules form all ",Object(o.a)("inlineCode",{parentName:"p"},"*.so"),"\nand ",Object(o.a)("inlineCode",{parentName:"p"},"*.py")," files it finds in the default (",Object(o.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/query-modules"),")\ndirectory."),Object(o.a)("p",null,"If you want to change the directory in which Memgraph searches for query\nmodules, just change the ",Object(o.a)("inlineCode",{parentName:"p"},"--query-modules-directory")," flag in the main\nconfiguration file (",Object(o.a)("inlineCode",{parentName:"p"},"/etc/memgraph/memgraph.conf"),") or supply it as\na command-line parameter (e.g. when using Docker)."),Object(o.a)("h2",{id:"syntax-for-calling-procedures"},"Syntax for calling procedures"),Object(o.a)("p",null,"OpenCypher has a special syntax for calling procedures in loaded query\nmodules:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) YIELD res1, res2, ...;\n")),Object(o.a)("p",null,"Each procedure returns zero or more records, where each record contains named\nfields. The ",Object(o.a)("inlineCode",{parentName:"p"},"YIELD")," part is used to select fields we are interested in. If we\nare not interested in any fields, the ",Object(o.a)("inlineCode",{parentName:"p"},"YIELD")," part can be omitted."),Object(o.a)("p",null,"Procedures may be called standalone as the above, or as a part of a\nlarger query. This is useful if we want the procedure to work on data the\nquery is producing. For example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(node) YIELD result RETURN *;\n")),Object(o.a)("p",null,"When we use ",Object(o.a)("inlineCode",{parentName:"p"},"CALL")," in a larger query, we have to explicitly\n",Object(o.a)("inlineCode",{parentName:"p"},"RETURN")," from the query to get the results. Naturally, the ",Object(o.a)("inlineCode",{parentName:"p"},"RETURN")," is not\nneeded if we perform updates after ",Object(o.a)("inlineCode",{parentName:"p"},"CALL"),". This follows the openCypher\nconvention that read-only queries need to end with a ",Object(o.a)("inlineCode",{parentName:"p"},"RETURN"),", while queries\nwhich update something don't need to ",Object(o.a)("inlineCode",{parentName:"p"},"RETURN")," anything."),Object(o.a)("p",null,"If a procedure returns a record with a field name that may clash with some\nvariable we already have in a query, that field name can be aliased into some\nother name. For example:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (node) CALL module.procedure(42) YIELD node AS result RETURN *;\n")),Object(o.a)("h2",{id:"controlling-procedure-memory-usage"},"Controlling procedure memory usage"),Object(o.a)("p",null,"When running a procedure, Memgraph controls the maximum memory usage that the\nprocedure may consume during its execution.  By default, the upper memory limit\nwhen running a procedure is ",Object(o.a)("inlineCode",{parentName:"p"},"100 MB"),".  If your query procedure requires more\nmemory to be able to yield its results, you can increase the memory limit using\nthe following syntax:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"CALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 KB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY LIMIT 100 MB YIELD res1, res2, ...;\nCALL module.procedure(arg1, arg2, ...) MEMORY UNLIMITED YIELD res1, res2, ...;\n")),Object(o.a)("p",null,"The limit can either be specified to a specific value (either in ",Object(o.a)("inlineCode",{parentName:"p"},"KB")," or in\n",Object(o.a)("inlineCode",{parentName:"p"},"MB"),"), or it can be set to unlimited."),Object(o.a)("h2",{id:"implementing-custom-query-modules"},"Implementing custom query modules"),Object(o.a)("p",null,"Query modules can be implemented by either using the C API or Python API\nprovided by Memgraph."),Object(o.a)("p",null,"Modules implemented using the C API need to be compiled to a shared library\n(",Object(o.a)("inlineCode",{parentName:"p"},".so")," file), so they can be loaded when Memgraph starts.  The C API is well\ndocumented in the ",Object(o.a)("inlineCode",{parentName:"p"},"/usr/include/memgraph/mg_procedure.h")," header and in the\n",Object(o.a)("a",{parentName:"p",href:"/memgraph/reference-guide/query-modules/c-api"},"reference guide"),"."),Object(o.a)("p",null,"Modules implemented using the Python API need to be written in Python version\n",Object(o.a)("inlineCode",{parentName:"p"},"3.5.0")," and above. The Python API is well documented in the\n",Object(o.a)("inlineCode",{parentName:"p"},"/usr/lib/memgraph/python_support/mgp.py")," file and in the\n",Object(o.a)("a",{parentName:"p",href:"/memgraph/reference-guide/query-modules/python-api"},"reference guide"),"."),Object(o.a)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},Object(o.a)("strong",{parentName:"p"},"WARNING:")," If your programming language of choice throws exceptions, these\nexceptions must never leave the scope of your module! You should have a top\nlevel exception handler which returns with an error value and potentially logs\nthe error message. Exceptions which cross the module boundary will cause all\nsorts of unexpected issues."))),Object(o.a)("p",null,"For a more detailed example on how to implement your own query modules, we\nsuggest you take a look at the ",Object(o.a)("a",{parentName:"p",href:"/memgraph/database-functionalities/query-modules/implement-query-modules"},"Implement custom query modules")," guide."),Object(o.a)("h2",{id:"query-modules-provided-by-memgraph"},"Query modules provided by Memgraph"),Object(o.a)("p",null,"The following query modules have been implemented by the Memgraph\nteam. Note that some of them are only available in Memgraph's Enterprise\noffering."),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"mg"),": Utility module that offers more insight into custom query modules."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"louvain")," ","[Enterprise]",": Louvain algorithm for community detection."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"connectivity")," ","[Enterprise]",": Algorithms that analyse graph connectivity."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"nxalg")," : Wrapper functions providing the most common algorithms found in the\nNetworkX package. The users can extend the module with their own custom\nfunctions based on NetworkX algorithms."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"graph_analyzer"),": Module that offers more insights about the stored graph. To\nget a detailed list of provided functionalities within this module run\n",Object(o.a)("inlineCode",{parentName:"li"},"CALL graph_analyzer.help() YIELD *;"),"."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"wcc"),": Module that offers analysis of weakly connected components.")),Object(o.a)("div",{className:"admonition admonition-info alert alert--info"},Object(o.a)("div",{parentName:"div",className:"admonition-heading"},Object(o.a)("h5",{parentName:"div"},Object(o.a)("span",{parentName:"h5",className:"admonition-icon"},Object(o.a)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.a)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.a)("div",{parentName:"div",className:"admonition-content"},Object(o.a)("p",{parentName:"div"},Object(o.a)("strong",{parentName:"p"},"NOTE:")," If you intend to implement your custom algorithms based on the NetworkX\npackage, please note that we provide the extra library ",Object(o.a)("inlineCode",{parentName:"p"},"mgp_networkx.py")," module\ncontaining data structures that adapt the native graph for use with NetworkX\nalgorithms. It can be used to implement custom algorithms with the added\nbenefit of better memory usage."))),Object(o.a)("p",null,"The utility module offers the following functionality:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"mg.procedures() :: (name :: STRING, signature :: STRING)"),": Lists loaded\nprocedures and their signatures."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"mg.reload(module_name :: STRING) :: ()"),": Reloads the given module."),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"mg.reload_all() :: ()"),": Reloads all loaded modules.")),Object(o.a)("p",null,"To get a detailed list of all procedures from all modules, run the following\nquery:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre"},"CALL mg.procedures() YIELD *;\n")))}c.isMDXComponent=!0}}]);