"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[60593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={sidebar_position:28,title:"Post",slug:"/generated/metamodel/entities/post",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/post.md"},i="Post",s={unversionedId:"docs/generated/metamodel/entities/post",id:"docs/generated/metamodel/entities/post",title:"Post",description:"Aspects",source:"@site/genDocs/docs/generated/metamodel/entities/post.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/post",permalink:"/docs/next/generated/metamodel/entities/post",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/post.md",tags:[],version:"current",sidebarPosition:28,frontMatter:{sidebar_position:28,title:"Post",slug:"/generated/metamodel/entities/post",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/post.md"},sidebar:"overviewSidebar",previous:{title:"DataHubRole",permalink:"/docs/next/generated/metamodel/entities/datahubrole"},next:{title:"DataHubStepState",permalink:"/docs/next/generated/metamodel/entities/datahubstepstate"}},l={},c=[{value:"Aspects",id:"aspects",level:2},{value:"postInfo",id:"postinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],d={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post"},"Post"),(0,a.kt)("h2",{id:"aspects"},"Aspects"),(0,a.kt)("h3",{id:"postinfo"},"postInfo"),(0,a.kt)("p",null,"Information about a DataHub Post."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "postInfo"\n  },\n  "name": "PostInfo",\n  "namespace": "com.linkedin.post",\n  "fields": [\n    {\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "HOME_PAGE_ANNOUNCEMENT": "The Post is an Home Page announcement."\n        },\n        "name": "PostType",\n        "namespace": "com.linkedin.post",\n        "symbols": [\n          "HOME_PAGE_ANNOUNCEMENT"\n        ],\n        "doc": "Enum defining types of Posts."\n      },\n      "name": "type",\n      "doc": "Type of the Post."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "PostContent",\n        "namespace": "com.linkedin.post",\n        "fields": [\n          {\n            "Searchable": {\n              "fieldType": "TEXT_PARTIAL"\n            },\n            "type": "string",\n            "name": "title",\n            "doc": "Title of the post."\n          },\n          {\n            "type": {\n              "type": "enum",\n              "symbolDocs": {\n                "LINK": "Link content",\n                "TEXT": "Text content"\n              },\n              "name": "PostContentType",\n              "namespace": "com.linkedin.post",\n              "symbols": [\n                "TEXT",\n                "LINK"\n              ],\n              "doc": "Enum defining the type of content held in a Post."\n            },\n            "name": "type",\n            "doc": "Type of content held in the post."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "description",\n            "default": null,\n            "doc": "Optional description of the post."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.url.Url",\n              "coercerClass": "com.linkedin.common.url.UrlCoercer"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "link",\n            "default": null,\n            "doc": "Optional link that the post is associated with."\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "record",\n                "name": "Media",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": {\n                      "type": "enum",\n                      "symbolDocs": {\n                        "IMAGE": "The Media holds an image."\n                      },\n                      "name": "MediaType",\n                      "namespace": "com.linkedin.common",\n                      "symbols": [\n                        "IMAGE"\n                      ],\n                      "doc": "Enum defining the type of content a Media object holds."\n                    },\n                    "name": "type",\n                    "doc": "Type of content the Media is storing, e.g. image, video, etc."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.url.Url",\n                      "coercerClass": "com.linkedin.common.url.UrlCoercer"\n                    },\n                    "type": "string",\n                    "name": "location",\n                    "doc": "Where the media content is stored."\n                  }\n                ],\n                "doc": "Carries information about which roles a user is assigned to."\n              }\n            ],\n            "name": "media",\n            "default": null,\n            "doc": "Optional media that the post is storing"\n          }\n        ],\n        "doc": "Content stored inside a Post."\n      },\n      "name": "content",\n      "doc": "Content stored in the post."\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT"\n      },\n      "type": "long",\n      "name": "created",\n      "doc": "The time at which the post was initially created"\n    },\n    {\n      "Searchable": {\n        "fieldType": "COUNT"\n      },\n      "type": "long",\n      "name": "lastModified",\n      "doc": "The time at which the post was last modified"\n    }\n  ],\n  "doc": "Information about a DataHub Post."\n}\n'))),(0,a.kt)("h2",{id:"relationships"},"Relationships"),(0,a.kt)("h2",{id:"global-metadata-model"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}m.isMDXComponent=!0}}]);