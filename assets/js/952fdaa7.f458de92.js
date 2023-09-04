"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(a),m=r,b=p["".concat(s,".").concat(m)]||p[m]||c[m]||d;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var i=2;i<d;i++)o[i]=a[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>d,metadata:()=>l,toc:()=>i});var n=a(87462),r=(a(67294),a(3905));const d={sidebar_position:42,title:"DataHubUpgrade",slug:"/generated/metamodel/entities/datahubupgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubUpgrade.md"},o="DataHubUpgrade",l={unversionedId:"docs/generated/metamodel/entities/dataHubUpgrade",id:"docs/generated/metamodel/entities/dataHubUpgrade",title:"DataHubUpgrade",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubUpgrade.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubupgrade",permalink:"/docs/next/generated/metamodel/entities/datahubupgrade",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubUpgrade.md",tags:[],version:"current",sidebarPosition:42,frontMatter:{sidebar_position:42,title:"DataHubUpgrade",slug:"/generated/metamodel/entities/datahubupgrade",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubUpgrade.md"},sidebar:"overviewSidebar",previous:{title:"DataHubAccessToken",permalink:"/docs/next/generated/metamodel/entities/datahubaccesstoken"},next:{title:"GlobalSettings",permalink:"/docs/next/generated/metamodel/entities/globalsettings"}},s={},i=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubUpgradeRequest",id:"datahubupgraderequest",level:3},{value:"dataHubUpgradeResult",id:"datahubupgraderesult",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:i},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahubupgrade"},"DataHubUpgrade"),(0,r.kt)("h2",{id:"aspects"},"Aspects"),(0,r.kt)("h3",{id:"datahubupgraderequest"},"dataHubUpgradeRequest"),(0,r.kt)("p",null,"Information collected when kicking off a DataHubUpgrade"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubUpgradeRequest"\n  },\n  "name": "DataHubUpgradeRequest",\n  "namespace": "com.linkedin.upgrade",\n  "fields": [\n    {\n      "type": "long",\n      "name": "timestampMs",\n      "doc": "Timestamp when we started this DataHubUpgrade"\n    },\n    {\n      "type": "string",\n      "name": "version",\n      "doc": "Version of this upgrade"\n    }\n  ],\n  "doc": "Information collected when kicking off a DataHubUpgrade"\n}\n'))),(0,r.kt)("h3",{id:"datahubupgraderesult"},"dataHubUpgradeResult"),(0,r.kt)("p",null,"Information collected when a DataHubUpgrade successfully finishes"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Schema"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubUpgradeResult"\n  },\n  "name": "DataHubUpgradeResult",\n  "namespace": "com.linkedin.upgrade",\n  "fields": [\n    {\n      "type": "long",\n      "name": "timestampMs",\n      "doc": "Timestamp when we started this DataHubUpgrade"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "map",\n          "values": "string"\n        }\n      ],\n      "name": "result",\n      "default": null,\n      "doc": "Result map to place helpful information about this upgrade job"\n    }\n  ],\n  "doc": "Information collected when a DataHubUpgrade successfully finishes"\n}\n'))),(0,r.kt)("h2",{id:"relationships"},"Relationships"),(0,r.kt)("h2",{id:"global-metadata-model"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}c.isMDXComponent=!0}}]);