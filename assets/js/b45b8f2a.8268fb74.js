"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[70273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(y,r(r({ref:t},p),{},{components:n})):a.createElement(y,r({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const i={sidebar_position:34,title:"DataHubPolicy",slug:"/generated/metamodel/entities/datahubpolicy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubPolicy.md"},r="DataHubPolicy",l={unversionedId:"docs/generated/metamodel/entities/dataHubPolicy",id:"docs/generated/metamodel/entities/dataHubPolicy",title:"DataHubPolicy",description:"DataHub Policies represent access policies granted to users or groups on metadata operations like edit, view etc.",source:"@site/genDocs/docs/generated/metamodel/entities/dataHubPolicy.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/datahubpolicy",permalink:"/docs/next/generated/metamodel/entities/datahubpolicy",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubPolicy.md",tags:[],version:"current",sidebarPosition:34,frontMatter:{sidebar_position:34,title:"DataHubPolicy",slug:"/generated/metamodel/entities/datahubpolicy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/dataHubPolicy.md"},sidebar:"overviewSidebar",previous:{title:"OwnershipType",permalink:"/docs/next/generated/metamodel/entities/ownershiptype"},next:{title:"DataHubIngestionSource",permalink:"/docs/next/generated/metamodel/entities/datahubingestionsource"}},s={},c=[{value:"Aspects",id:"aspects",level:2},{value:"dataHubPolicyKey",id:"datahubpolicykey",level:3},{value:"dataHubPolicyInfo",id:"datahubpolicyinfo",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datahubpolicy"},"DataHubPolicy"),(0,o.kt)("p",null,"DataHub Policies represent access policies granted to users or groups on metadata operations like edit, view etc."),(0,o.kt)("h2",{id:"aspects"},"Aspects"),(0,o.kt)("h3",{id:"datahubpolicykey"},"dataHubPolicyKey"),(0,o.kt)("p",null,"Key for a DataHub Policy"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubPolicyKey"\n  },\n  "name": "DataHubPolicyKey",\n  "namespace": "com.linkedin.metadata.key",\n  "fields": [\n    {\n      "type": "string",\n      "name": "id",\n      "doc": "A unique id for the DataHub access policy record. Generated on the server side at policy creation time."\n    }\n  ],\n  "doc": "Key for a DataHub Policy"\n}\n'))),(0,o.kt)("h3",{id:"datahubpolicyinfo"},"dataHubPolicyInfo"),(0,o.kt)("p",null,"Information about a DataHub (UI) access policy."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "dataHubPolicyInfo"\n  },\n  "name": "DataHubPolicyInfo",\n  "namespace": "com.linkedin.policy",\n  "fields": [\n    {\n      "Searchable": {\n        "fieldType": "TEXT_PARTIAL"\n      },\n      "type": "string",\n      "name": "displayName",\n      "doc": "Display name of the Policy"\n    },\n    {\n      "Searchable": {\n        "fieldType": "TEXT"\n      },\n      "type": "string",\n      "name": "description",\n      "doc": "Description of the Policy"\n    },\n    {\n      "type": "string",\n      "name": "type",\n      "doc": "The type of policy"\n    },\n    {\n      "type": "string",\n      "name": "state",\n      "doc": "The state of policy, ACTIVE or INACTIVE"\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "DataHubResourceFilter",\n          "namespace": "com.linkedin.policy",\n          "fields": [\n            {\n              "deprecated": true,\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "type",\n              "default": null,\n              "doc": "The type of resource that the policy applies to. This will most often be a data asset entity name, for\\nexample \'dataset\'. It is not strictly required because in the future we will want to support filtering a resource\\nby domain, as well."\n            },\n            {\n              "deprecated": true,\n              "type": [\n                "null",\n                {\n                  "type": "array",\n                  "items": "string"\n                }\n              ],\n              "name": "resources",\n              "default": null,\n              "doc": "A specific set of resources to apply the policy to, e.g. asset urns"\n            },\n            {\n              "deprecated": true,\n              "type": "boolean",\n              "name": "allResources",\n              "default": false,\n              "doc": "Whether the policy should be applied to all assets matching the filter."\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "PolicyMatchFilter",\n                  "namespace": "com.linkedin.policy",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "array",\n                        "items": {\n                          "type": "record",\n                          "name": "PolicyMatchCriterion",\n                          "namespace": "com.linkedin.policy",\n                          "fields": [\n                            {\n                              "type": "string",\n                              "name": "field",\n                              "doc": "The name of the field that the criterion refers to"\n                            },\n                            {\n                              "type": {\n                                "type": "array",\n                                "items": "string"\n                              },\n                              "name": "values",\n                              "doc": "Values. Matches criterion if any one of the values matches condition (OR-relationship)"\n                            },\n                            {\n                              "type": {\n                                "type": "enum",\n                                "symbolDocs": {\n                                  "EQUALS": "Whether the field matches the value"\n                                },\n                                "name": "PolicyMatchCondition",\n                                "namespace": "com.linkedin.policy",\n                                "symbols": [\n                                  "EQUALS"\n                                ],\n                                "doc": "The matching condition in a filter criterion"\n                              },\n                              "name": "condition",\n                              "default": "EQUALS",\n                              "doc": "The condition for the criterion"\n                            }\n                          ],\n                          "doc": "A criterion for matching a field with given value"\n                        }\n                      },\n                      "name": "criteria",\n                      "doc": "A list of criteria to apply conjunctively (so all criteria must pass)"\n                    }\n                  ],\n                  "doc": "The filter for specifying the resource or actor to apply privileges to"\n                }\n              ],\n              "name": "filter",\n              "default": null,\n              "doc": "Filter to apply privileges to"\n            }\n          ],\n          "doc": "Information used to filter DataHub resource."\n        }\n      ],\n      "name": "resources",\n      "default": null,\n      "doc": "The resource that the policy applies to. Not required for some \'Platform\' privileges."\n    },\n    {\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "privileges",\n      "doc": "The privileges that the policy grants."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "DataHubActorFilter",\n        "namespace": "com.linkedin.policy",\n        "fields": [\n          {\n            "type": [\n              "null",\n              {\n                "type": "array",\n                "items": "string"\n              }\n            ],\n            "name": "users",\n            "default": null,\n            "doc": "A specific set of users to apply the policy to (disjunctive)"\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "array",\n                "items": "string"\n              }\n            ],\n            "name": "groups",\n            "default": null,\n            "doc": "A specific set of groups to apply the policy to (disjunctive)"\n          },\n          {\n            "type": "boolean",\n            "name": "resourceOwners",\n            "default": false,\n            "doc": "Whether the filter should return true for owners of a particular resource.\\nOnly applies to policies of type \'Metadata\', which have a resource associated with them."\n          },\n          {\n            "type": [\n              "null",\n              {\n                "type": "array",\n                "items": "string"\n              }\n            ],\n            "name": "resourceOwnersTypes",\n            "default": null,\n            "doc": "Define type of ownership for the policy"\n          },\n          {\n            "type": "boolean",\n            "name": "allUsers",\n            "default": false,\n            "doc": "Whether the filter should apply to all users."\n          },\n          {\n            "type": "boolean",\n            "name": "allGroups",\n            "default": false,\n            "doc": "Whether the filter should apply to all groups."\n          },\n          {\n            "Relationship": {\n              "/*": {\n                "entityTypes": [\n                  "dataHubRole"\n                ],\n                "name": "IsAssociatedWithRole"\n              }\n            },\n            "type": [\n              "null",\n              {\n                "type": "array",\n                "items": "string"\n              }\n            ],\n            "name": "roles",\n            "default": null,\n            "doc": "A specific set of roles to apply the policy to (disjunctive)."\n          }\n        ],\n        "doc": "Information used to filter DataHub actors."\n      },\n      "name": "actors",\n      "doc": "The actors that the policy applies to."\n    },\n    {\n      "type": "boolean",\n      "name": "editable",\n      "default": true,\n      "doc": "Whether the policy should be editable via the UI"\n    },\n    {\n      "Searchable": {\n        "fieldType": "DATETIME"\n      },\n      "type": [\n        "null",\n        "long"\n      ],\n      "name": "lastUpdatedTimestamp",\n      "default": null,\n      "doc": "Timestamp when the policy was last updated"\n    }\n  ],\n  "doc": "Information about a DataHub (UI) access policy."\n}\n'))),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("h3",{id:"outgoing"},"Outgoing"),(0,o.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"IsAssociatedWithRole"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"DataHubRole via ",(0,o.kt)("inlineCode",{parentName:"li"},"dataHubPolicyInfo.actors.roles"))))),(0,o.kt)("h2",{id:"global-metadata-model"},(0,o.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/datahub/raw/master/docs/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}u.isMDXComponent=!0}}]);