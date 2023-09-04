"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[36826],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?r.createElement(g,i(i({ref:t},h),{},{components:a})):r.createElement(g,i({ref:t},h))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},80159:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={title:"How To Set Up GraphQL",slug:"/api/graphql/how-to-set-up-graphql",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/how-to-set-up-graphql.md"},i="How To Set Up GraphQL",p={unversionedId:"docs/api/graphql/how-to-set-up-graphql",id:"docs/api/graphql/how-to-set-up-graphql",title:"How To Set Up GraphQL",description:"Preparing Local Datahub Deployment",source:"@site/genDocs/docs/api/graphql/how-to-set-up-graphql.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/how-to-set-up-graphql",permalink:"/docs/next/api/graphql/how-to-set-up-graphql",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/how-to-set-up-graphql.md",tags:[],version:"current",frontMatter:{title:"How To Set Up GraphQL",slug:"/api/graphql/how-to-set-up-graphql",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/how-to-set-up-graphql.md"},sidebar:"overviewSidebar",previous:{title:"Scalars",permalink:"/docs/next/graphql/scalars"},next:{title:"Getting Started With GraphQL",permalink:"/docs/next/api/graphql/getting-started"}},l={},s=[{value:"Preparing Local Datahub Deployment",id:"preparing-local-datahub-deployment",level:2},{value:"Querying the GraphQL API",id:"querying-the-graphql-api",level:2},{value:"GraphQL Explorer (GraphiQL)",id:"graphql-explorer-graphiql",level:3},{value:"CURL",id:"curl",level:3},{value:"Postman",id:"postman",level:3},{value:"Authentication + Authorization",id:"authentication--authorization",level:3},{value:"What&#39;s Next?",id:"whats-next",level:2}],h={toc:s},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-set-up-graphql"},"How To Set Up GraphQL"),(0,n.kt)("h2",{id:"preparing-local-datahub-deployment"},"Preparing Local Datahub Deployment"),(0,n.kt)("p",null,"The first thing you'll need to use the GraphQL API is a deployed instance of DataHub with some metadata ingested.\nFor more information, please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/quickstart"},"Datahub Quickstart Guide"),"."),(0,n.kt)("h2",{id:"querying-the-graphql-api"},"Querying the GraphQL API"),(0,n.kt)("p",null,"DataHub's GraphQL endpoint is served at the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/graphql"),", e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://my-company.datahub.com/api/graphql"),".\nThere are a few options when it comes to querying the GraphQL endpoint."),(0,n.kt)("p",null,"For ",(0,n.kt)("strong",{parentName:"p"},"Testing"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GraphQL Explorer (GraphiQL)"),(0,n.kt)("li",{parentName:"ul"},"CURL"),(0,n.kt)("li",{parentName:"ul"},"Postman")),(0,n.kt)("p",null,"For ",(0,n.kt)("strong",{parentName:"p"},"Production"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GraphQL ",(0,n.kt)("a",{parentName:"li",href:"https://graphql.org/code/"},"Client SDK")," for the language of your choice"),(0,n.kt)("li",{parentName:"ul"},"Basic HTTP client")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Notice: The DataHub GraphQL endpoint only supports POST requests at this time.")),(0,n.kt)("h3",{id:"graphql-explorer-graphiql"},"GraphQL Explorer (GraphiQL)"),(0,n.kt)("p",null,"DataHub provides a browser-based GraphQL Explorer Tool (",(0,n.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL"),") for live interaction with the GraphQL API. This tool is available at the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/graphiql")," (e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"https://my-company.datahub.com/api/graphiql"),")\nThis interface allows you to easily craft queries and mutations against real metadata stored in your live DataHub deployment."),(0,n.kt)("p",null,"To experiment with GraphiQL before deploying it in your live DataHub deployment, you can access a demo site provided by DataHub at ",(0,n.kt)("a",{parentName:"p",href:"https://demo.datahubproject.io/api/graphiql"},"https://demo.datahubproject.io/api/graphiql"),".\nFor instance, you can create a tag by posting the following query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'mutation createTag {\n    createTag(input:\n    {\n      name: "Deprecated",\n      description: "Having this tag means this column or table is deprecated."\n    })\n}\n')),(0,n.kt)("p",null,"For a detailed usage guide, check out ",(0,n.kt)("a",{parentName:"p",href:"https://www.gatsbyjs.com/docs/how-to/querying-data/running-queries-with-graphiql/"},"How to use GraphiQL"),"."),(0,n.kt)("h3",{id:"curl"},"CURL"),(0,n.kt)("p",null,"CURL is a command-line tool used for transferring data using various protocols including HTTP, HTTPS, and others.\nTo query the DataHub GraphQL API using CURL, you can send a ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," request to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/graphql")," endpoint with the GraphQL query in the request body.\nHere is an example CURL command to create a tag via GraphQL API:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createTag { createTag(input: { name: \\"Deprecated\\", description: \\"Having this tag means this column or table is deprecated.\\" }) }", "variables":{}}\'\n')),(0,n.kt)("h3",{id:"postman"},"Postman"),(0,n.kt)("p",null,"Postman is a popular API client that provides a graphical user interface for sending requests and viewing responses.\nWithin Postman, you can create a ",(0,n.kt)("inlineCode",{parentName:"p"},"POST")," request and set the request URL to the ",(0,n.kt)("inlineCode",{parentName:"p"},"/api/graphql")," endpoint.\nIn the request body, select the ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQL")," option and enter your GraphQL query in the request body."),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/postman-graphql.png"})),(0,n.kt)("p",null,"Please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://learning.postman.com/docs/sending-requests/graphql/graphql/"},"Querying with GraphQL")," in the Postman documentation for more information."),(0,n.kt)("h3",{id:"authentication--authorization"},"Authentication + Authorization"),(0,n.kt)("p",null,"In general, you'll need to provide an ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/authentication/personal-access-tokens"},"Access Token")," when querying the GraphQL by\nproviding an ",(0,n.kt)("inlineCode",{parentName:"p"},"Authorization")," header containing a ",(0,n.kt)("inlineCode",{parentName:"p"},"Bearer")," token. The header should take the following format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Authorization: Bearer <access-token>\n")),(0,n.kt)("p",null,"Authorization for actions exposed by the GraphQL endpoint will be performed based on the actor making the request.\nFor Personal Access Tokens, the token will carry the user's privileges. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/graphql/token-management"},"Access Token Management")," for more information."),(0,n.kt)("h2",{id:"whats-next"},"What's Next?"),(0,n.kt)("p",null,"Now that you are ready with GraphQL, how about browsing through some use cases?\nPlease refer to ",(0,n.kt)("a",{parentName:"p",href:"/docs/next/api/graphql/getting-started"},"Getting Started With GraphQL")," for more information."))}c.isMDXComponent=!0}}]);