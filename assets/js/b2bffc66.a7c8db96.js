"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[72635],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(g,l(l({ref:t},d),{},{components:a})):n.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),i=a(86010),l=a(72957),o=a(16550),s=a(75238),u=a(33609),d=a(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(n.location.search);t.set(i,e),n.replace({...n.location,search:t.toString()})}),[i,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,i=p(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[s,u]=g({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,i]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:n}),f=(()=>{const e=s??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,i]),tabValues:i}}var f=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,a=d.indexOf(t),n=u[a].value;n!==o&&(c(t),s(n))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function k(e){const t=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function w(e){const t=(0,f.Z)();return r.createElement(k,(0,n.Z)({key:String(t)},e))}},54285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(73992),l=a(18679);const o={title:"Lineage",slug:"/api/tutorials/lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/lineage.md"},s="Lineage",u={unversionedId:"docs/api/tutorials/lineage",id:"docs/api/tutorials/lineage",title:"Lineage",description:"Why Would You Use Lineage?",source:"@site/genDocs/docs/api/tutorials/lineage.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/lineage",permalink:"/docs/next/api/tutorials/lineage",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/lineage.md",tags:[],version:"current",frontMatter:{title:"Lineage",slug:"/api/tutorials/lineage",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/lineage.md"},sidebar:"overviewSidebar",previous:{title:"Dataset",permalink:"/docs/next/api/tutorials/datasets"},next:{title:"Tags",permalink:"/docs/next/api/tutorials/tags"}},d={},c=[{value:"Why Would You Use Lineage?",id:"why-would-you-use-lineage",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Lineage",id:"add-lineage",level:2},{value:"Expected Outcomes of Adding Lineage",id:"expected-outcomes-of-adding-lineage",level:3},{value:"Add Column-level Lineage",id:"add-column-level-lineage",level:2},{value:"Expected Outcome of Adding Column Level Lineage",id:"expected-outcome-of-adding-column-level-lineage",level:3},{value:"Read Lineage",id:"read-lineage",level:2}],p={toc:c},m="wrapper";function g(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lineage"},"Lineage"),(0,r.kt)("h2",{id:"why-would-you-use-lineage"},"Why Would You Use Lineage?"),(0,r.kt)("p",null,"Lineage is used to capture data dependencies within an organization. It allows you to track the inputs from which a data asset is derived, along with the data assets that depend on it downstream.\nFor more information about lineage, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/lineage/lineage-feature-guide"},"About DataHub Lineage"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add lineage between datasets."),(0,r.kt)("li",{parentName:"ul"},"Add column-level lineage between datasets.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed steps, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before adding lineage, you need to ensure the targeted dataset is already present in your datahub.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("h2",{id:"add-lineage"},"Add Lineage"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateLineage {\n  updateLineage(\n    input: {\n      edgesToAdd: [\n        {\n          downstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)"\n          upstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"\n        }\n      ]\n      edgesToRemove: []\n    }\n  )\n}\n')),(0,r.kt)("p",null,"Note that you can create a list of edges. For example, if you want to assign multiple upstream entities to a downstream entity, you can do the following."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation updateLineage {\n  updateLineage(\n    input: {\n      edgesToAdd: [\n        {\n          downstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)"\n          upstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)"\n        }\n        {\n          downstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)"\n          upstreamUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"\n        }\n      ]\n      edgesToRemove: []\n    }\n  )\n}\n\n')),(0,r.kt)("p",null,"For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateLineage")," mutation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/mutations/#updatelineage"},"updateLineage"),"."),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "updateLineage": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(l.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\'  --data-raw \'{ "query": "mutation updateLineage { updateLineage( input:{ edgesToAdd : { downstreamUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\", upstreamUrn : \\"urn:li:dataset:(urn:li:dataPlatform:hive,logging_events,PROD)\\"}, edgesToRemove :{downstreamUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\",upstreamUrn : \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)\\" } })}", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "updateLineage": true }, "extensions": {} }\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/lineage_emitter_rest.py\nimport datahub.emitter.mce_builder as builder\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Construct a lineage object.\nlineage_mce = builder.make_lineage_mce(\n    [\n        builder.make_dataset_urn("hive", "fct_users_deleted"),  # Upstream\n    ],\n    builder.make_dataset_urn("hive", "logging_events"),  # Downstream\n)\n\n# Create an emitter to the GMS REST API.\nemitter = DatahubRestEmitter("http://localhost:8080")\n\n# Emit metadata!\nemitter.emit_mce(lineage_mce)\n\n')))),(0,r.kt)("h3",{id:"expected-outcomes-of-adding-lineage"},"Expected Outcomes of Adding Lineage"),(0,r.kt)("p",null,"You can now see the lineage between ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"logging_events"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/lineage-added.png"})),(0,r.kt)("h2",{id:"add-column-level-lineage"},"Add Column-level Lineage"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/lineage_emitter_dataset_finegrained_sample.py\nimport datahub.emitter.mce_builder as builder\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\nfrom datahub.metadata.com.linkedin.pegasus2avro.dataset import (\n    DatasetLineageType,\n    FineGrainedLineage,\n    FineGrainedLineageDownstreamType,\n    FineGrainedLineageUpstreamType,\n    Upstream,\n    UpstreamLineage,\n)\n\n\ndef datasetUrn(tbl):\n    return builder.make_dataset_urn("hive", tbl)\n\n\ndef fldUrn(tbl, fld):\n    return builder.make_schema_field_urn(datasetUrn(tbl), fld)\n\n\nfineGrainedLineages = [\n    FineGrainedLineage(\n        upstreamType=FineGrainedLineageUpstreamType.FIELD_SET,\n        upstreams=[\n            fldUrn("fct_users_deleted", "browser_id"),\n            fldUrn("fct_users_created", "user_id"),\n        ],\n        downstreamType=FineGrainedLineageDownstreamType.FIELD,\n        downstreams=[fldUrn("logging_events", "browser")],\n    ),\n]\n\n\n# this is just to check if any conflicts with existing Upstream, particularly the DownstreamOf relationship\nupstream = Upstream(\n    dataset=datasetUrn("fct_users_deleted"), type=DatasetLineageType.TRANSFORMED\n)\n\nfieldLineages = UpstreamLineage(\n    upstreams=[upstream], fineGrainedLineages=fineGrainedLineages\n)\n\nlineageMcp = MetadataChangeProposalWrapper(\n    entityUrn=datasetUrn("logging_events"),\n    aspect=fieldLineages,\n)\n\n# Create an emitter to the GMS REST API.\nemitter = DatahubRestEmitter("http://localhost:8080")\n\n# Emit metadata!\nemitter.emit_mcp(lineageMcp)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-adding-column-level-lineage"},"Expected Outcome of Adding Column Level Lineage"),(0,r.kt)("p",null,"You can now see the column-level lineage between datasets. Note that you have to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"Show Columns")," to be able to see the column-level lineage."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/column-level-lineage-added.png"})),(0,r.kt)("h2",{id:"read-lineage"},"Read Lineage"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query searchAcrossLineage {\n  searchAcrossLineage(\n    input: {\n      query: "*"\n      urn: "urn:li:dataset:(urn:li:dataPlatform:dbt,long_tail_companions.adoption.human_profiles,PROD)"\n      start: 0\n      count: 10\n      direction: DOWNSTREAM\n      orFilters: [\n        {\n          and: [\n            {\n              condition: EQUAL\n              negated: false\n              field: "degree"\n              values: ["1", "2", "3+"]\n            }\n          ]\n        }\n      ]\n    }\n  ) {\n    searchResults {\n      degree\n      entity {\n        urn\n        type\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This example shows using lineage degrees as a filter, but additional search filters can be included here as well. ")),(0,r.kt)(l.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\'  --data-raw \'{ { "query": "mutation searchAcrossLineage { searchAcrossLineage( input: { query: \\"*\\" urn: \\"urn:li:dataset:(urn:li:dataPlatform:dbt,long_tail_companions.adoption.human_profiles,PROD)\\" start: 0 count: 10 direction: DOWNSTREAM orFilters: [ { and: [ { condition: EQUAL negated: false field: \\"degree\\" values: [\\"1\\", \\"2\\", \\"3+\\"] } ] } ] } ) { searchResults { degree entity { urn type } } }}"\n}}\'\n'))),(0,r.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/read_lineage_rest.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation searchAcrossLineage {\n  searchAcrossLineage(\n    input: {\n      query: "*"\n      urn: "urn:li:dataset:(urn:li:dataPlatform:dbt,long_tail_companions.adoption.human_profiles,PROD)"\n      start: 0\n      count: 10\n      direction: DOWNSTREAM\n      orFilters: [\n        {\n          and: [\n            {\n              condition: EQUAL\n              negated: false\n              field: "degree"\n              values: ["1", "2", "3+"]\n            }\n          ]                                     # Additional search filters can be included here as well\n        }\n      ]\n    }\n  ) {\n    searchResults {\n      degree\n      entity {\n        urn\n        type\n      }\n    }\n  }\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,r.kt)("p",null,"This will perform a multi-hop lineage search on the urn specified. For more information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"searchAcrossLineage")," mutation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/graphql/queries/#searchacrosslineage"},"searchAcrossLineage"),"."))}g.isMDXComponent=!0}}]);