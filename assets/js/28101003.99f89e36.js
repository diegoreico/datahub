"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[7385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,b=u["".concat(d,".").concat(p)]||u[p]||m[p]||r;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},88426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:38,title:"DataHubRetention",slug:"/generated/metamodel/entities/datahubretention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md"},i="DataHubRetention",l={unversionedId:"docs/generated/metamodel/entities/dataHubRetention",id:"docs/generated/metamodel/entities/dataHubRetention",title:"DataHubRetention",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubRetention.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubretention",permalink:"/docs/next/generated/metamodel/entities/datahubretention",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md",tags:[],version:"current",sidebarPosition:38,frontMatter:{sidebar_position:38,title:"DataHubRetention",slug:"/generated/metamodel/entities/datahubretention",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubRetention.md"},sidebar:"overviewSidebar",previous:{title:"DataHubExecutionRequest",permalink:"/docs/next/generated/metamodel/entities/datahubexecutionrequest"},next:{title:"DataPlatformInstance",permalink:"/docs/next/generated/metamodel/entities/dataplatforminstance"}},d={},s=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubRetentionKey",id:"datahubretentionkey",level:3},{value:"dataHubRetentionConfig",id:"datahubretentionconfig",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubretention"},"DataHubRetention"),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubretentionkey"},"dataHubRetentionKey"),(0,o.kt)("p",null,"Key for a DataHub Retention"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRetentionKey"\n  },\n  "name": "DataHubRetentionKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "type": "string",\n      "name": "entityName",\n      "doc": "Entity name to apply retention to. * (or empty) for applying defaults."\n    },\n    {\n      "type": "string",\n      "name": "aspectName",\n      "doc": "Aspect name to apply retention to. * (or empty) for applying defaults."\n    }\n  ],\n  "doc": "Key for a DataHub Retention"\n}\n'))),(0,o.kt)("h3",{id:"datahubretentionconfig"},"dataHubRetentionConfig"),(0,o.kt)("p",null,"None"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubRetentionConfig"\n  },\n  "name": "DataHubRetentionConfig",\n  "namespace": "com.linkedin.retention",\n  "fields": [\n    {\n      "type": {\n        "type": "record",\n        "name": "Retention",\n        "namespace": "com.linkedin.retention",\n        "fields": [\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "VersionBasedRetention",\n                "namespace": "com.linkedin.retention",\n                "fields": [\n                  {\n                    "type": "int",\n                    "name": "maxVersions"\n                  }\n                ],\n                "doc": "Keep max N latest records"\n              }\n            ],\n            "name": "version",\n            "default": null\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "TimeBasedRetention",\n                "namespace": "com.linkedin.retention",\n                "fields": [\n                  {\n                    "type": "int",\n                    "name": "maxAgeInSeconds"\n                  }\n                ],\n                "doc": "Keep records that are less than X seconds old"\n              }\n            ],\n            "name": "time",\n            "default": null\n          }\n        ],\n        "doc": "Base class that encapsulates different retention policies.\\nOnly one of the fields should be set"\n      },\n      "name": "retention"\n    }\n  ]\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);