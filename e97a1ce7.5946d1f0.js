(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{183:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var n=t(3),r=t(7),o=(t(0),t(194)),l={id:"manage-users-using-ldap",title:"Authentication and authorization (Enterprise)",sidebar_label:"Authentication and authorization (Enterprise)"},i={unversionedId:"database-functionalities/manage-users-using-ldap",id:"database-functionalities/manage-users-using-ldap",isDocsHomePage:!1,title:"Authentication and authorization (Enterprise)",description:"In large organizations it is often difficult to manage permissions that staff",source:"@site/docs/database-functionalities/manage-users-using-ldap.md",slug:"/database-functionalities/manage-users-using-ldap",permalink:"/memgraph/database-functionalities/manage-users-using-ldap",editUrl:"https://github.com/memgraph/docs/tree/master/docs/database-functionalities/manage-users-using-ldap.md",version:"current",sidebar_label:"Authentication and authorization (Enterprise)",sidebar:"memgraph",previous:{title:"User privileges (Enterprise)",permalink:"/memgraph/database-functionalities/manage-user-privileges"},next:{title:"How to set up replication on a small cluster (Enterprise)",permalink:"/memgraph/database-functionalities/replication"}},s=[{value:"Authentication",id:"authentication",children:[]},{value:"Authorization",id:"authorization",children:[]},{value:"Where to next?",id:"where-to-next",children:[]}],c={toc:s};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("p",null,"In large organizations it is often difficult to manage permissions that staff\nmembers have in the organization.  Organizations typically use an LDAP server\nto hold and manage the permissions.  Because LDAP servers are already set-up in\nmost large organizations, it is convenient for the organization to allow all\nstaff members to have access to the database using the already available\ncentralized user management system."),Object(o.a)("p",null,"For this guide let's assume that we have an LDAP server that is serving the\nfollowing data:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"# Users root entry\ndn: ou=people,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: people\n\n# User dba\ndn: cn=dba,ou=people,dc=memgraph,dc=com\ncn: dba\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dba\n\n# User alice\ndn: cn=alice,ou=people,dc=memgraph,dc=com\ncn: alice\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: alice\n\n# User bob\ndn: cn=bob,ou=people,dc=memgraph,dc=com\ncn: bob\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: bob\n\n# User carol\ndn: cn=carol,ou=people,dc=memgraph,dc=com\ncn: carol\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: carol\n\n# User dave\ndn: cn=dave,ou=people,dc=memgraph,dc=com\ncn: dave\nobjectclass: person\nobjectclass: top\nsn: user\nuserpassword: dave\n\n# Roles root entry\ndn: ou=roles,dc=memgraph,dc=com\nobjectclass: organizationalUnit\nobjectclass: top\nou: roles\n\n# Role moderator\ndn: cn=moderator,ou=roles,dc=memgraph,dc=com\ncn: moderator\nmember: cn=alice,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n\n# Role admin\ndn: cn=admin,ou=roles,dc=memgraph,dc=com\ncn: admin\nmember: cn=carol,ou=people,dc=memgraph,dc=com\nmember: cn=dave,ou=people,dc=memgraph,dc=com\nobjectclass: groupOfNames\nobjectclass: top\n")),Object(o.a)("p",null,"To summarize, in this dataset we have the following data:"),Object(o.a)("ul",null,Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"ou=people,dc=memgraph,dc=com")," - entry that holds all users",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=dba,ou=people,dc=memgraph,dc=com")," - user ",Object(o.a)("inlineCode",{parentName:"li"},"dba")," that will be used as the database administrator"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=alice,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.a)("inlineCode",{parentName:"li"},"alice")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=bob,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.a)("inlineCode",{parentName:"li"},"bob")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=carol,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.a)("inlineCode",{parentName:"li"},"carol")),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=dave,ou=people,dc=memgraph,dc=com")," - regular user ",Object(o.a)("inlineCode",{parentName:"li"},"dave")))),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"ou=roles,dc=memgraph,dc=com")," - entry that holds all roles",Object(o.a)("ul",{parentName:"li"},Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=moderator,ou=roles,dc=memgraph,dc=com")," - role ",Object(o.a)("inlineCode",{parentName:"li"},"moderator")," that has ",Object(o.a)("inlineCode",{parentName:"li"},"alice")," as its member"),Object(o.a)("li",{parentName:"ul"},Object(o.a)("inlineCode",{parentName:"li"},"cn=admin,ou=roles,dc=memgraph,dc=com")," - role ",Object(o.a)("inlineCode",{parentName:"li"},"admin")," that has ",Object(o.a)("inlineCode",{parentName:"li"},"carol")," and ",Object(o.a)("inlineCode",{parentName:"li"},"dave")," as its members")))),Object(o.a)("p",null,"For detailed information about the LDAP integration you should first see the\nreference guide:\n",Object(o.a)("a",{parentName:"p",href:"/memgraph/reference-guide/ldap-security"},"LDAP security"),"."),Object(o.a)("h2",{id:"authentication"},"Authentication"),Object(o.a)("p",null,"Before enabling LDAP authentication, Memgraph should be prepared for the\nintegration. Here we assume that you have an already running Memgraph instance\nthat doesn't have any users in its local authentication storage. For more\ndetails on how the native authentication storage works in Memgraph you should\nsee: ",Object(o.a)("a",{parentName:"p",href:"/memgraph/database-functionalities/manage-user-privileges"},"User privileges"),"."),Object(o.a)("p",null,"First you should create the user that should be the database administrator.  It\nis important to have in mind that the username that you create ",Object(o.a)("em",{parentName:"p"},"must")," exist in\nthe LDAP directory.  For the described LDAP directory we will connect to the\ndatabase and issue the following queries all in the same connection:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER dba;\nGRANT ALL PRIVILEGES TO dba;\n")),Object(o.a)("p",null,"After the user is created and all privileges are granted, it is safe to\ndisconnect from the database and proceed with LDAP integration."),Object(o.a)("p",null,"To enable LDAP integration you should specify the following flag to Memgraph:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"--auth-module-executable=/usr/lib/memgraph/auth_module/ldap.py\n")),Object(o.a)("p",null,"You should also have the following LDAP module configuration in\n",Object(o.a)("inlineCode",{parentName:"p"},"/etc/memgraph/auth_module/ldap.yaml"),":"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-yaml"},'server:\n  host: "<LDAP_SERVER_HOSTNAME>"\n  port: <LDAP_SERVER_PORT>\n  encryption: "disabled"\n  cert_file: ""\n  key_file: ""\n  ca_file: ""\n  validate_cert: false\n\nusers:\n  prefix: "cn="\n  suffix: ",ou=people,dc=memgraph,dc=com"\n\nroles:\n  root_dn: ""\n  root_objectclass: ""\n  user_attribute: ""\n  role_attribute: ""\n')),Object(o.a)("p",null,"You should adjust the security settings according to your LDAP server security\nsettings."),Object(o.a)("p",null,"After setting these configuration options you should restart your Memgraph\ninstance."),Object(o.a)("p",null,"Now you can verify that you can still log in to the database using username\n",Object(o.a)("inlineCode",{parentName:"p"},"dba")," and password ",Object(o.a)("inlineCode",{parentName:"p"},"dba"),"."),Object(o.a)("p",null,"Issuing ",Object(o.a)("inlineCode",{parentName:"p"},"SHOW USERS;")," should list that currently only user ",Object(o.a)("inlineCode",{parentName:"p"},"dba")," exists.  This\nis normal. It means that LDAP authentication is successfully enabled (because\nyou were able to log in) and no other users have yet logged in."),Object(o.a)("p",null,"You should now be able to log in using username ",Object(o.a)("inlineCode",{parentName:"p"},"alice")," and password ",Object(o.a)("inlineCode",{parentName:"p"},"alice"),".\nBecause Alice has never before logged in to the database a new user will be\ncreated for Alice and she won't have any privileges (yet)."),Object(o.a)("p",null,"Using user ",Object(o.a)("inlineCode",{parentName:"p"},"dba")," we modify Alice's privileges to include the ",Object(o.a)("inlineCode",{parentName:"p"},"MATCH")," privilege."),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"GRANT MATCH TO alice;\n")),Object(o.a)("p",null,"After Alice logs in again into the database (to refresh her privileges) she\nwill be able to execute the following query:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"MATCH (n) RETURN n;\n")),Object(o.a)("p",null,"Issuing ",Object(o.a)("inlineCode",{parentName:"p"},"SHOW USERS;")," as ",Object(o.a)("inlineCode",{parentName:"p"},"dba")," should now yield both ",Object(o.a)("inlineCode",{parentName:"p"},"dba")," and ",Object(o.a)("inlineCode",{parentName:"p"},"alice"),"."),Object(o.a)("p",null,"Users Bob, Carol and Dave will also be able to log in to the database using\ntheir LDAP password.  As with Alice, their users will be created and won't have\nany privileges."),Object(o.a)("p",null,"If automatic user account creation is disabled using the database flag:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-user=false\n")),Object(o.a)("p",null,"The database administrator (user ",Object(o.a)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe users that he wishes to allow to connect to the database:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE USER alice;\nCREATE USER bob;\n")),Object(o.a)("p",null,"In this scenario only Alice and Bob will be allowed to log in to the database\nbecause they already have existing user accounts, but users Carol and Dave\nwon't be able to log in."),Object(o.a)("h2",{id:"authorization"},"Authorization"),Object(o.a)("p",null,"In the previous example users could only authenticate using LDAP. In this\nexample we will explain how to set-up the LDAP auth module to deduce the user's\nrole using LDAP search queries."),Object(o.a)("p",null,"First, you should enable and verify that user authentication works. To enable\nrole mapping for the described LDAP schema, we will modify the LDAP auth module\nconfiguration file, specifically the section ",Object(o.a)("inlineCode",{parentName:"p"},"roles"),", to have the following\ncontent:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-yaml"},'roles:\n  root_dn: "ou=roles,dc=memgraph,dc=com"\n  root_objectclass: "groupOfNames"\n  user_attribute: "member"\n  role_attribute: "cn"\n')),Object(o.a)("p",null,"This configuration tells the LDAP module that all role mapping entries are\nchildren of the ",Object(o.a)("inlineCode",{parentName:"p"},"ou=roles,dc=memgraph,dc=com")," entry, that the children have\nuser DNs specified in their ",Object(o.a)("inlineCode",{parentName:"p"},"member")," attribute and that the ",Object(o.a)("inlineCode",{parentName:"p"},"cn")," attribute\nshould be used to determine the role name."),Object(o.a)("p",null,"When a user logs in to the database, the LDAP auth module will go through all\nrole mapping entries and will try to find out which role mapping entry has the\nuser as its member."),Object(o.a)("p",null,"So now when Alice logs in, the LDAP auth module will go through the following\nentries: ",Object(o.a)("inlineCode",{parentName:"p"},"cn=admin,ou=roles,dc=memgraph,dc=com")," and\n",Object(o.a)("inlineCode",{parentName:"p"},"cn=moderator,ou=roles,dc=memgraph,dc=com"),".  Because Alice is a member of the\n",Object(o.a)("inlineCode",{parentName:"p"},"moderator")," role mapping, the LDAP auth module will assign role moderator to\nAlice."),Object(o.a)("p",null,"Now as the user ",Object(o.a)("inlineCode",{parentName:"p"},"dba")," we can issue ",Object(o.a)("inlineCode",{parentName:"p"},"SHOW ROLE FOR alice;")," and we will see that\nindeed Alice now has the role ",Object(o.a)("inlineCode",{parentName:"p"},"moderator"),"."),Object(o.a)("p",null,"Permissions for users and roles are still managed through Memgraph, they can't\nbe managed through the LDAP server."),Object(o.a)("p",null,"If automatic role creation is disabled using the flag:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-plaintext"},"--auth-ldap-create-role=false\n")),Object(o.a)("p",null,"The database administrator (user ",Object(o.a)("inlineCode",{parentName:"p"},"dba"),") will first have to explicitly create\nthe role for users that he wishes to allow to connect to the database:"),Object(o.a)("pre",null,Object(o.a)("code",{parentName:"pre",className:"language-cypher"},"CREATE ROLE moderator;\n")),Object(o.a)("p",null,"In this scenario only Alice and Bob will be allowed to log in. Alice will be\nallowed to log in because her role (moderator) already exists. Bob will be\nallowed to log in because he doesn't have any role. Carol and Dave won't be\nallowed to log in because their role (administrator) doesn't exist."),Object(o.a)("p",null,"If both automatic role creation and automatic user creation are disabled, then\nboth the user and the role must exist for a user to successfully log in to the\ndatabase."),Object(o.a)("h2",{id:"where-to-next"},"Where to next?"),Object(o.a)("p",null,"To learn more about Memgraph's functionalities, visit the ",Object(o.a)("strong",{parentName:"p"},Object(o.a)("a",{parentName:"strong",href:"../reference-guide"},"Reference guide")),".\nFor real-world examples of how to use Memgraph, we strongly suggest going through one of the available ",Object(o.a)("strong",{parentName:"p"},Object(o.a)("a",{parentName:"strong",href:"/memgraph/tutorials/tutorials"},"Tutorials")),"."))}u.isMDXComponent=!0},194:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),u=function(e){var a=r.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=n,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return t?r.a.createElement(b,i(i({ref:a},c),{},{components:t})):r.a.createElement(b,i({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=d;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);