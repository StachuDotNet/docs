(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(194)),o={id:"quick-start",title:"Quick start guide to Style script",sidebar_label:"Quick start"},l={unversionedId:"style-script/quick-start",id:"style-script/quick-start",isDocsHomePage:!1,title:"Quick start guide to Style script",description:"This guide will show you how to easily get started with style script. For",source:"@site/lab/style-script/quick-start.md",slug:"/style-script/quick-start",permalink:"/docs/memgraph-lab/style-script/quick-start",editUrl:"https://github.com/memgraph/docs/tree/master/lab/style-script/quick-start.md",version:"current",sidebar_label:"Quick start",sidebar:"lab",previous:{title:"Installing Memgraph Lab on macOS",permalink:"/docs/memgraph-lab/installation/osx-installation"},next:{title:"Style script reference guide",permalink:"/docs/memgraph-lab/style-script/reference-guide"}},c=[{value:"Graph example",id:"graph-example",children:[]},{value:"Setting graph labels",id:"setting-graph-labels",children:[]},{value:"Setting node images",id:"setting-node-images",children:[]},{value:"Highlighting interesting nodes",id:"highlighting-interesting-nodes",children:[]}],s={toc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("p",null,"This guide will show you how to easily get started with style script. For\ncomplete list available features consult\n",Object(i.a)("a",{parentName:"p",href:"/docs/memgraph-lab/style-script/reference-guide"},"style script reference"),"."),Object(i.a)("h2",{id:"graph-example"},"Graph example"),Object(i.a)("p",null,"In this guide, we will use an example graph with European countries and cities.\nThe data can be found ",Object(i.a)("a",{parentName:"p",href:"https://docs.memgraph.com/memgraph/tutorials-overview/backpacking-through-europe"},"here"),".\nCountries have the label ",Object(i.a)("inlineCode",{parentName:"p"},"Country"),", while cities have the label ",Object(i.a)("inlineCode",{parentName:"p"},"City"),". All\nnodes have the property ",Object(i.a)("inlineCode",{parentName:"p"},"name"),". Cities have many additional properties,\nincluding ",Object(i.a)("inlineCode",{parentName:"p"},"country")," (containing country) and ",Object(i.a)("inlineCode",{parentName:"p"},"drinks_USD")," (average drink price)."),Object(i.a)("h2",{id:"setting-graph-labels"},"Setting graph labels"),Object(i.a)("p",null,"We want to label country nodes with country names, and city nodes with city,\nnames and containing country names. To achieve that we can use to directives.\nThe first one selects countries and the second one selects cities."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'@NodeStyle HasLabel?(node, "Country") {\n  label: Format(Property(node, "name"))\n}\n\n@NodeStyle HasLabel?(node, "City") {\n    label: Format(Format("{cityName}, {countryName}"),\n                  Property(node, "name"),\n                  Property(node, "country_name"))\n}\n')),Object(i.a)("p",null,"The content inside the curly braces is ignored, but can be helpful for clarity."),Object(i.a)("h2",{id:"setting-node-images"},"Setting node images"),Object(i.a)("p",null,"It would be nice to display flags in the country nodes. This can be achieved\nusing URLs of flag images. There is a website that hosts many world flags so we\ncan use images from ",Object(i.a)("a",{parentName:"p",href:"https://cdn.countryflags.com"},"there"),". Their API expects a\ncountry name as a part of URL path so we will make the following directive."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'@NodeStyle HasLabel?[node, "Country"] {\n  image-url: Format("https://cdn.countryflags.com/thumbs/{}/flag-800.png",\n                    LowerCase(Proeprty(node, "name")))\n}\n')),Object(i.a)("p",null,"Unfortunately, this won't work for all countries. Flags for England and Scotland\ncannot be found on the website because they aren't real countries. So we can\nget around that by providing custom directives below the general one above."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'@NodeStyle Equals?(Property(node, "name"), "England") {\n   image-url: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/2560px-Flag_of_England.svg.png"\n}\n\n@NodeStyle Equals?(Property(node, "name"), "Scotland") {\n  image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1200px-Flag_of_Scotland.svg.png"\n }\n')),Object(i.a)("p",null,"Also, URLs for a country name with whitespace inside them don't so we also have\nto provide custom URLs for the Czech Republic and Bosnia and Herzegovina."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'@NodeStyle Equals?(Property(node, "name"), "Bosnia and Herzegovina") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Flag_of_Bosnia_and_Herzegovina.svg/1200px-Flag_of_Bosnia_and_Herzegovina.svg.png"\n }\n\n @NodeStyle Equals?(Property(node, "name"), "Czech Republic") {\n   image-url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2560px-Flag_of_the_Czech_Republic.svg.png"\n }\n')),Object(i.a)("p",null,"Now all the country nodes have their flags displayed."),Object(i.a)("h2",{id:"highlighting-interesting-nodes"},"Highlighting interesting nodes"),Object(i.a)("p",null,"We can highlight nodes with low drink price in the following way. We want to\nuse a beer image and a bigger size along with a red shadow."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre"},'@NodeStyle And()\n     HasLabel?(node, "City"),\n     Less?(Property(node, "drinks_USD"), 5)) {\n  size: 50\n  image-url: "https://www.sciencenews.org/wp-content/uploads/2020/05/050620_mt_beer_feat-1028x579.jpg"\n  shadow-color: red\n }\n')))}p.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),g=a,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return n?r.a.createElement(m,l(l({ref:t},s),{},{components:n})):r.a.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);