"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[15820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),k=r,m=u["".concat(i,".").concat(k)]||u[k]||d[k]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=k;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={title:"Access Token Management",slug:"/api/graphql/token-management",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/token-management.md"},s="Access Token Management",l={unversionedId:"docs/api/graphql/token-management",id:"docs/api/graphql/token-management",title:"Access Token Management",description:"DataHub provides the following graphql endpoints for managing Access Tokens. In this page you will see examples as well",source:"@site/genDocs/docs/api/graphql/token-management.md",sourceDirName:"docs/api/graphql",slug:"/api/graphql/token-management",permalink:"/docs/next/api/graphql/token-management",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/token-management.md",tags:[],version:"current",frontMatter:{title:"Access Token Management",slug:"/api/graphql/token-management",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/graphql/token-management.md"},sidebar:"overviewSidebar",previous:{title:"Getting Started With GraphQL",permalink:"/docs/next/api/graphql/getting-started"},next:{title:"OpenAPI Guide",permalink:"/docs/next/api/openapi/openapi-usage-guide"}},i={},c=[{value:"Generating Access Tokens",id:"generating-access-tokens",level:3},{value:"Listing Access Tokens",id:"listing-access-tokens",level:3},{value:"Revoking Access Tokens",id:"revoking-access-tokens",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"access-token-management"},"Access Token Management"),(0,r.kt)("p",null,"DataHub provides the following ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," endpoints for managing Access Tokens. In this page you will see examples as well\nas explanations as to how to administrate access tokens within the project whether for yourself or others, depending on the caller's privileges."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": This API makes use of DataHub Policies to safeguard against improper use. By default, a user will not be able to interact with it at all unless they have at least ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate Personal Access Tokens")," privileges."),(0,r.kt)("h3",{id:"generating-access-tokens"},"Generating Access Tokens"),(0,r.kt)("p",null,"To generate an access token, simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createAccessToken(input: GetAccessTokenInput!)")," ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," Query.\nThis endpoint will return an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessToken")," object, containing the access token string itself alongside with metadata\nwhich will allow you to identify said access token later on."),(0,r.kt)("p",null,"For example, to generate an access token for the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," corp user, you can issue the following ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql")," Query:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As GraphQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  createAccessToken(\n    input: {\n      type: PERSONAL\n      actorUrn: "urn:li:corpuser:datahub"\n      duration: ONE_HOUR\n      name: "my personal token"\n    }\n  ) {\n    accessToken\n    metadata {\n      id\n      name\n      description\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As CURL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query":"mutation { createAccessToken(input: { type: PERSONAL, actorUrn: \\"urn:li:corpuser:datahub\\", duration: ONE_HOUR, name: \\"my personal token\\" } ) { accessToken metadata { id name description} } }", "variables":{}}\'\n')),(0,r.kt)("h3",{id:"listing-access-tokens"},"Listing Access Tokens"),(0,r.kt)("p",null,"Listing tokens is a powerful endpoint that allows you to list the tokens owned by a particular user (ie. YOU).\nTo list all tokens that you own, you must specify a filter with: ",(0,r.kt)("inlineCode",{parentName:"p"},'{field: "actorUrn", value: "<your user urn>"}')," configuration."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As GraphQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'{\n  listAccessTokens(\n    input: {\n      start: 0\n      count: 100\n      filters: [{ field: "ownerUrn", value: "urn:li:corpuser:datahub" }]\n    }\n  ) {\n    start\n    count\n    total\n    tokens {\n      urn\n      id\n      actorUrn\n    }\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As CURL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'X-DataHub-Actor: urn:li:corpuser:datahub\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query":"{ listAccessTokens(input: {start: 0, count: 100, filters: [{field: \\"ownerUrn\\", value: \\"urn:li:corpuser:datahub\\"}]}) { start count total tokens {urn id actorUrn} } }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Admin users can also list tokens owned by other users of the platform. To list tokens belonging to other users, you must have the ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage All Access Tokens")," Platform privilege."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As GraphQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  listAccessTokens(input: { start: 0, count: 100, filters: [] }) {\n    start\n    count\n    total\n    tokens {\n      urn\n      id\n      actorUrn\n    }\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As CURL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'X-DataHub-Actor: urn:li:corpuser:datahub' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\":\"{ listAccessTokens(input: {start: 0, count: 100, filters: []}) { start count total tokens {urn id actorUrn} } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Other filters besides ",(0,r.kt)("inlineCode",{parentName:"p"},"actorUrn=<some value>")," are possible. You can filter by property in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DataHubAccessTokenInfo")," aspect which you can find in the Entities documentation."),(0,r.kt)("h3",{id:"revoking-access-tokens"},"Revoking Access Tokens"),(0,r.kt)("p",null,"To revoke an existing access token, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"revokeAccessToken")," mutation."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"As GraphQL")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  revokeAccessToken(tokenId: "HnMJylxuowJ1FKN74BbGogLvXCS4w+fsd3MZdI35+8A=")\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'X-DataHub-Actor: urn:li:corpuser:datahub' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\"query\":\"mutation {revokeAccessToken(tokenId: \\\"HnMJylxuowJ1FKN74BbGogLvXCS4w+fsd3MZdI35+8A=\\\")}\",\"variables\":{}}}'\n")),(0,r.kt)("p",null,"This endpoint will return a boolean detailing whether the operation was successful. In case of failure, an error message will appear explaining what went wrong."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Visit our ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"Slack channel")," to ask questions, tell us what we can do better, & make requests for what you'd like to see in the future. Or just\nstop by to say 'Hi'.")))}d.isMDXComponent=!0}}]);