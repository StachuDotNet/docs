(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{194:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,h=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return a?r.a.createElement(h,l(l({ref:t},s),{},{components:a})):r.a.createElement(h,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),i=(a(0),a(194)),o={id:"replication",title:"Replication (Enterprise)",sidebar_label:"Replication (Enterprise)"},l={unversionedId:"reference-guide/replication",id:"reference-guide/replication",isDocsHomePage:!1,title:"Replication (Enterprise)",description:"User facing setup",source:"@site/docs/reference-guide/replication.md",slug:"/reference-guide/replication",permalink:"/memgraph/reference-guide/replication",editUrl:"https://github.com/memgraph/docs/tree/master/docs/reference-guide/replication.md",version:"current",sidebar_label:"Replication (Enterprise)",sidebar:"memgraph",previous:{title:"Audit log (Enterprise)",permalink:"/memgraph/reference-guide/audit-log"},next:{title:"Storage",permalink:"/memgraph/concepts/storage"}},c=[{value:"User facing setup",id:"user-facing-setup",children:[{value:"How to set up a Memgraph cluster with replication?",id:"how-to-set-up-a-memgraph-cluster-with-replication",children:[]},{value:"How to see the current replication status?",id:"how-to-see-the-current-replication-status",children:[]},{value:"How to promote a new main?",id:"how-to-promote-a-new-main",children:[]}]},{value:"Limitations and potential features",id:"limitations-and-potential-features",children:[]}],s={toc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"user-facing-setup"},"User facing setup"),Object(i.a)("h3",{id:"how-to-set-up-a-memgraph-cluster-with-replication"},"How to set up a Memgraph cluster with replication?"),Object(i.a)("p",null,"Replication configuration is done primarily through Memgraph Cypher commands. This\nallows the cluster to be dynamically rearranged (promoting a new main, addition\nof a new replica, etc.)."),Object(i.a)("p",null,"Each Memgraph instance when first started will be a main. You have to change\nthe role of all replica nodes using the following query before you\ncan enable replication on the main:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO (MAIN|REPLICA) [WITH PORT <port_number>];\n")),Object(i.a)("p",null,'Note that the "WITH PORT <port_number>" part of the query sets the replication port,\nbut it applies only to the replica. In other words, if you try to set the\nreplication port as the main, the query will fail.\nAfter you have set your replica instance to the correct operating role, you can\nenable replication in the main instance by issuing the following Memgraph Cypher\ncommand:'),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"REGISTER REPLICA name (SYNC|ASYNC) [WITH TIMEOUT 0.5] TO <socket_address>;\n")),Object(i.a)("p",null,"The socket address must be a string of the following form:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},'"IP_ADDRESS:PORT_NUMBER"\n')),Object(i.a)("p",null,"where IP_ADDRESS is a valid IP address, and PORT_NUMBER is a valid port number,\nboth given in decimal notation.\nNote that in this case they must be separated by a single colon.\nAlternatively, one can give the socket address as:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},'"IP_ADDRESS"\n')),Object(i.a)("p",null,"where IP_ADDRESS must be a valid IP address, and the port number will be\nassumed to be the default one (we specify it to be 10000)."),Object(i.a)("p",null,"Each Memgraph instance will remember what the configuration was set to and will\nautomatically resume with its role when restarted."),Object(i.a)("h3",{id:"how-to-see-the-current-replication-status"},"How to see the current replication status?"),Object(i.a)("p",null,"To see the replication ROLE of the current Memgraph instance, you can issue the\nfollowing query:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"SHOW REPLICATION ROLE;\n")),Object(i.a)("p",null,"To see the replicas of the current Memgraph instance, you can issue the\nfollowing query:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"SHOW REPLICAS;\n")),Object(i.a)("p",null,"To delete a replica, issue the following query:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"DROP REPLICA 'name';\n")),Object(i.a)("h3",{id:"how-to-promote-a-new-main"},"How to promote a new main?"),Object(i.a)("p",null,"When you have an already set-up cluster, to promote a new main, just set the\nreplica that you want to be a main to the main role."),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"SET REPLICATION ROLE TO MAIN;  # on desired replica\n")),Object(i.a)("p",null,"After the command is issued, if the original main is still alive, it won't be\nable to replicate its data to the replica (the new main) anymore and will enter\nan error state. You must ensure that at any given point in time there aren't\ntwo mains in the cluster."),Object(i.a)("h2",{id:"limitations-and-potential-features"},"Limitations and potential features"),Object(i.a)("p",null,"Currently, we do not support chained replicas, i.e. a replica can't have its\nown replica. When this feature becomes available, the user will be able to\nconfigure scenarios such as the following one:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},"main -[asynchronous]-> replica 1 -[semi-synchronous]-> replica 2\n")),Object(i.a)("p",null,"To configure the above scenario, the user will be able to issue the following\ncommands:"),Object(i.a)("pre",null,Object(i.a)("code",{parentName:"pre",className:"language-plaintext"},'SET REPLICATION ROLE TO REPLICA WITH PORT <port1>;  # on replica 1\nSET REPLICATION ROLE TO REPLICA WITH PORT <port2>;  # on replica 2\n\nREGISTER REPLICA replica1 ASYNC TO "replica1_ip_address:port1";  # on main\nREGISTER REPLICA replica2 SYNC WITH TIMEOUT 0.5\n  TO "replica2_ip_address:port2";  # on replica 1\n')),Object(i.a)("p",null,"In addition, we do not yet support advanced recovery mechanisms. For example,\nif a main crashes, a suitable replica will take its place as the new main. If\nthe crashed main goes back online, it will not be able to reclaim its previous\nrole, but will be forced to be a replica of the new main.\nIn the upcoming releases, we might be adding more advanced recovery mechanisms.\nHowever, users are able to set up their own recovery policies using the basic\nrecovery mechanisms we currently provide, that can cover a wide range of\nreal-life scenarios."),Object(i.a)("p",null,"Also, we do not yet support the replication of authentication configurations,\nrendering access control replication unavailable."),Object(i.a)("p",null,"The query and authentication modules, as well as audit logs are not replicated."))}p.isMDXComponent=!0}}]);