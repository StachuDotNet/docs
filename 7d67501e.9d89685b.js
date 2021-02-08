(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return d})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),l=(a(0),a(194)),i={id:"functions",title:"Functions",sidebar_label:"Functions"},c={unversionedId:"functions",id:"functions",isDocsHomePage:!1,title:"Functions",description:"This section contains the list of supported functions.",source:"@site/cypher-manual/functions.md",slug:"/functions",permalink:"/docs/cypher-manual/functions",editUrl:"https://github.com/memgraph/docs/tree/master/cypher-manual/functions.md",version:"current",sidebar_label:"Functions",sidebar:"cypher_manual",previous:{title:"Reading and writing",permalink:"/docs/cypher-manual/reading-and-writing"},next:{title:"Cypher clauses overview",permalink:"/docs/cypher-manual/clauses"}},d=[],o={toc:d};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.a)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.a)("p",null,"This section contains the list of supported functions."),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",{parentName:"tr",align:null},"Name"),Object(l.a)("th",{parentName:"tr",align:null},"Description"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"startNode")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the starting node of an edge.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"endNode")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the destination node of an edge.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"degree")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the number of edges (both incoming and outgoing) of a node.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"head")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the first element of a list.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"last")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the last element of a list.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"properties")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the properties of a node or an edge.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"size")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the number of elements in a list or a map. When given a string it returns the number of characters. When given a path it returns the number of expansions (edges) in that path.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"toBoolean")),Object(l.a)("td",{parentName:"tr",align:null},"Converts the argument to a boolean.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"toFloat")),Object(l.a)("td",{parentName:"tr",align:null},"Converts the argument to a floating point number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"toInteger")),Object(l.a)("td",{parentName:"tr",align:null},"Converts the argument to an integer.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"type")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the type of an edge as a character string.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"keys")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a list keys of properties from an edge or a node. Each key is represented as a string of characters.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"labels")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a list of labels from a node. Each label is represented as a character string.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"nodes")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a list of nodes from a path.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"relationships")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a list of relationships (edges) from a path.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"range")),Object(l.a)("td",{parentName:"tr",align:null},"Constructs a list of value in given range.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"tail")),Object(l.a)("td",{parentName:"tr",align:null},"Returns all elements after the first of a given list.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"uniformSample")),Object(l.a)("td",{parentName:"tr",align:null},"Returns elements of given list randomly oversampled or undersampled to desired size, e.g. ",Object(l.a)("inlineCode",{parentName:"td"},"uniformSample([1, 2, 3], 5) -> [1, 2, 3, 2, 3]"))),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"abs")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the absolute value of a number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"ceil")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the smallest integer greater than or equal to given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"floor")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the largest integer smaller than or equal to given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"round")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the number, rounded to the nearest integer. Tie-breaking is done using the ",Object(l.a)("em",{parentName:"td"},"commercial rounding"),",  where -1.5 produces -2 and 1.5 produces 2.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"exp")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates ",Object(l.a)("inlineCode",{parentName:"td"},"e^n")," where ",Object(l.a)("inlineCode",{parentName:"td"},"e")," is the base of the natural logarithm, and ",Object(l.a)("inlineCode",{parentName:"td"},"n")," is the given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"log")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the natural logarithm of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"log10")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the logarithm (base 10) of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"sqrt")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the square root of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"acos")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the arccosine of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"asin")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the arcsine of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"atan")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the arctangent of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"atan2")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the arctangent2 of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"cos")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the cosine of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"sin")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the sine of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"tan")),Object(l.a)("td",{parentName:"tr",align:null},"Calculates the tangent of a given number.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"sign")),Object(l.a)("td",{parentName:"tr",align:null},"Applies the signum function to a given number and returns the result. The signum of positive numbers is 1, of negative -1 and for 0 returns 0.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"e")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the base of the natural logarithm.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"pi")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the constant ",Object(l.a)("em",{parentName:"td"},"pi"),".")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"rand")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a random floating point number between 0 (inclusive) and 1 (exclusive).")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"startsWith")),Object(l.a)("td",{parentName:"tr",align:null},"Check if the first argument starts with the second.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"endsWith")),Object(l.a)("td",{parentName:"tr",align:null},"Check if the first argument ends with the second.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"contains")),Object(l.a)("td",{parentName:"tr",align:null},"Check if the first argument has an element which is equal to the second argument.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"left")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a string containing the specified number of leftmost characters of the original string.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"lTrim")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the original string with leading whitespace removed.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"replace")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a string in which all occurrences of a specified string in the original string have been replaced by another (specified) string.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"reverse")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a string in which the order of all characters in the original string have been reversed.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"right")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a string containing the specified number of rightmost characters of the original string.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"rTrim")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the original string with trailing whitespace removed.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"split")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a list of strings resulting from the splitting of the original string around matches of the given delimiter.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"substring")),Object(l.a)("td",{parentName:"tr",align:null},"Returns a substring of the original string, beginning with a 0-based index start and length.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"toLower")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the original string in lowercase.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"toString")),Object(l.a)("td",{parentName:"tr",align:null},"Converts an integer, float or boolean value to a string.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"toUpper")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the original string in uppercase.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"trim")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the original string with leading and trailing whitespace removed.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"all")),Object(l.a)("td",{parentName:"tr",align:null},"Check if all elements of a list satisfy a predicate. The syntax is: ",Object(l.a)("inlineCode",{parentName:"td"},"all(variable IN list WHERE predicate)"),".",Object(l.a)("br",null)," NOTE: Whenever possible, use Memgraph's lambda functions when matching instead.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"single")),Object(l.a)("td",{parentName:"tr",align:null},"Check if only one element of a list satisfies a predicate. The syntax is: ",Object(l.a)("inlineCode",{parentName:"td"},"single(variable IN list WHERE predicate)"),".")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"reduce")),Object(l.a)("td",{parentName:"tr",align:null},"Accumulate list elements into a single result by applying an expression. The syntax is: ",Object(l.a)("inlineCode",{parentName:"td"},"reduce(accumulator = initial_value, variable IN list \\| expression)"),".")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"extract")),Object(l.a)("td",{parentName:"tr",align:null},"A list of values obtained by evaluating an expression for each element in list. The syntax is: ",Object(l.a)("inlineCode",{parentName:"td"},"extract(variable IN list \\| expression)"),".")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"assert")),Object(l.a)("td",{parentName:"tr",align:null},"Raises an exception reported to the client if the given argument is not ",Object(l.a)("inlineCode",{parentName:"td"},"true"),".")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"counter")),Object(l.a)("td",{parentName:"tr",align:null},"Generates integers that are guaranteed to be unique within a single query for a given counter name. The syntax is ",Object(l.a)("inlineCode",{parentName:"td"},'counter("counter_name", initial_value, [increment] = 1)'),". The increment parameter can be any integer besides zero.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"timestamp")),Object(l.a)("td",{parentName:"tr",align:null},"Returns the difference, measured in milliseconds, between the current time and midnight, January 1, 1970 UTC.")),Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",{parentName:"tr",align:null},Object(l.a)("inlineCode",{parentName:"td"},"id")),Object(l.a)("td",{parentName:"tr",align:null},"Returns identifier for a given node or edge. The identifier is generated during the initialization of node or edge and will be persisted through the durability mechanism.")))))}b.isMDXComponent=!0},194:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),b=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,s=p["".concat(i,".").concat(u)]||p[u]||m[u]||l;return a?r.a.createElement(s,c(c({ref:t},o),{},{components:a})):r.a.createElement(s,c({ref:t},o))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var o=2;o<l;o++)i[o]=a[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);