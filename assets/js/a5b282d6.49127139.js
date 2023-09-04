"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[38733],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),o=a(86010),i=a(72957),s=a(16550),p=a(75238),l=a(33609),u=a(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function d(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function g(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[p,l]=h({queryString:a,groupId:n}),[c,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=p??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),l(e),g(e)}),[l,g,o]),tabValues:o}}var f=a(51048);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:s,selectValue:p,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=l[a].value;n!==s&&(c(t),p(n))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},l.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":s===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function _(e){const t=g(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(_,(0,n.Z)({key:String(t)},e))}},94774:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),i=a(18679);const s={title:"Custom Properties",slug:"/api/tutorials/custom-properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/custom-properties.md"},p="Custom Properties",l={unversionedId:"docs/api/tutorials/custom-properties",id:"docs/api/tutorials/custom-properties",title:"Custom Properties",description:"Why Would You Use Custom Properties on Datasets?",source:"@site/genDocs/docs/api/tutorials/custom-properties.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/custom-properties",permalink:"/docs/next/api/tutorials/custom-properties",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/custom-properties.md",tags:[],version:"current",frontMatter:{title:"Custom Properties",slug:"/api/tutorials/custom-properties",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/custom-properties.md"},sidebar:"overviewSidebar",previous:{title:"Description",permalink:"/docs/next/api/tutorials/descriptions"},next:{title:"ML System",permalink:"/docs/next/api/tutorials/ml"}},u={},c=[{value:"Why Would You Use Custom Properties on Datasets?",id:"why-would-you-use-custom-properties-on-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Add Custom Properties programmatically",id:"add-custom-properties-programmatically",level:2},{value:"Expected Outcome of Adding Custom Properties",id:"expected-outcome-of-adding-custom-properties",level:3},{value:"Add and Remove Custom Properties programmatically",id:"add-and-remove-custom-properties-programmatically",level:2},{value:"Expected Outcome of Add and Remove Operations on Custom Properties",id:"expected-outcome-of-add-and-remove-operations-on-custom-properties",level:3},{value:"Replace Custom Properties programmatically",id:"replace-custom-properties-programmatically",level:2},{value:"Expected Outcome of Replacing Custom Properties",id:"expected-outcome-of-replacing-custom-properties",level:3}],m={toc:c},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"custom-properties"},"Custom Properties"),(0,r.kt)("h2",{id:"why-would-you-use-custom-properties-on-datasets"},"Why Would You Use Custom Properties on Datasets?"),(0,r.kt)("p",null,"Custom properties to datasets can help to provide additional information about the data that is not readily available in the standard metadata fields. Custom properties can be used to describe specific attributes of the data, such as the units of measurement used, the date range covered, or the geographical region the data pertains to. This can be particularly helpful when working with large and complex datasets, where additional context can help to ensure that the data is being used correctly and effectively."),(0,r.kt)("p",null,"DataHub models custom properties of a Dataset as a map of key-value pairs of strings."),(0,r.kt)("p",null,"Custom properties can also be used to enable advanced search and discovery capabilities, by allowing users to filter and sort datasets based on specific attributes. This can help users to quickly find and access the data they need, without having to manually review large numbers of datasets."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to add, remove or replace custom properties on a dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),". Here's what each operation means:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add: Add custom properties to a dataset without affecting existing properties"),(0,r.kt)("li",{parentName:"ul"},"Remove: Removing specific properties from the dataset without affecting other properties"),(0,r.kt)("li",{parentName:"ul"},"Replace: Completely replacing the entire property map without affecting other fields that are located in the same aspect. e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"DatasetProperties")," aspect contains ",(0,r.kt)("inlineCode",{parentName:"li"},"customProperties")," as well as other fields like ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"description"),".")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before adding custom properties, you need to ensure the target dataset is already present in your DataHub instance.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("p",null,"In this example, we will add some custom properties ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"retention_time")," to the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted"),"."),(0,r.kt)("p",null,"After you have ingested sample data, the dataset ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," should have a custom properties section with ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"utf-8"),"."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-before.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "encoding": "utf-8"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')),(0,r.kt)("h2",{id:"add-custom-properties-programmatically"},"Add Custom Properties programmatically"),(0,r.kt)("p",null,"The following code adds custom properties ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"retention_time")," to a dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," without affecting existing properties."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Adding Custom Properties on Dataset via GraphQL is currently not supported.\nPlease check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information,"))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesAdd.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.patch.dataset.DatasetPropertiesPatchBuilder;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n\n@Slf4j\nclass DatasetCustomPropertiesAdd {\n\n  private DatasetCustomPropertiesAdd() {\n\n  }\n\n  /**\n   * Adds properties to an existing custom properties aspect without affecting any existing properties\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n    public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n      MetadataChangeProposal datasetPropertiesProposal = new DatasetPropertiesPatchBuilder()\n          .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n          .addCustomProperty("cluster_name", "datahubproject.acryl.io")\n          .addCustomProperty("retention_time", "2 years")\n          .build();\n\n      String token = "";\n      RestEmitter emitter = RestEmitter.create(\n          b -> b.server("http://localhost:8080")\n              .token(token)\n      );\n      try {\n        Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n\n        System.out.println(response.get().getResponseContent());\n      } catch (Exception e) {\n        log.error("Failed to emit metadata to DataHub", e);\n        throw e;\n      } finally {\n        emitter.close();\n      }\n\n    }\n\n}\n\n\n\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .add_custom_property("cluster_name", "datahubproject.acryl.io")\n        .add_custom_property("retention_time", "2 years")\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(f"Added cluster_name, retention_time properties to dataset {dataset_urn}")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-adding-custom-properties"},"Expected Outcome of Adding Custom Properties"),(0,r.kt)("p",null,"You can now see the two new properties are added to ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and the previous property ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," is unchanged."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-added.png"})),(0,r.kt)("p",null,"We can also verify this operation by programmatically checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasetProperties")," aspect after running this code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "encoding": "utf-8",\n      "cluster_name": "datahubproject.acryl.io",\n      "retention_time": "2 years"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')),(0,r.kt)("h2",{id:"add-and-remove-custom-properties-programmatically"},"Add and Remove Custom Properties programmatically"),(0,r.kt)("p",null,"The following code shows you how can add and remove custom properties in the same call. In the following code, we add custom property ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_name")," and remove property ",(0,r.kt)("inlineCode",{parentName:"p"},"retention_time")," from a dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," without affecting existing properties."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Adding and Removing Custom Properties on Dataset via GraphQL is currently not supported.\nPlease check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information,"))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesAddRemove.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.patch.dataset.DatasetPropertiesPatchBuilder;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport java.util.concurrent.ExecutionException;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n\n@Slf4j\nclass DatasetCustomPropertiesAddRemove {\n\n  private DatasetCustomPropertiesAddRemove() {\n\n  }\n\n  /**\n   * Applies Add and Remove property operations on an existing custom properties aspect without\n   * affecting any other properties\n   * @param args\n   * @throws IOException\n   * @throws ExecutionException\n   * @throws InterruptedException\n   */\n    public static void main(String[] args) throws IOException, ExecutionException, InterruptedException {\n      MetadataChangeProposal datasetPropertiesProposal = new DatasetPropertiesPatchBuilder()\n          .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n          .addCustomProperty("cluster_name", "datahubproject.acryl.io")\n          .removeCustomProperty("retention_time")\n          .build();\n\n      String token = "";\n      RestEmitter emitter = RestEmitter.create(\n          b -> b.server("http://localhost:8080")\n              .token(token)\n      );\n      try {\n        Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n\n        System.out.println(response.get().getResponseContent());\n      } catch (Exception e) {\n        log.error("Failed to emit metadata to DataHub", e);\n        throw e;\n      } finally {\n        emitter.close();\n      }\n\n    }\n\n}\n\n\n\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_remove_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .add_custom_property("cluster_name", "datahubproject.acryl.io")\n        .remove_custom_property("retention_time")\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(\n    f"Added cluster_name property, removed retention_time property from dataset {dataset_urn}"\n)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-add-and-remove-operations-on-custom-properties"},"Expected Outcome of Add and Remove Operations on Custom Properties"),(0,r.kt)("p",null,"You can now see the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_name")," property is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"retention_time")," property is removed."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-added-removed.png"})),(0,r.kt)("p",null,"We can also verify this operation programmatically by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasetProperties")," aspect using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "encoding": "utf-8",\n      "cluster_name": "datahubproject.acryl.io"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')),(0,r.kt)("h2",{id:"replace-custom-properties-programmatically"},"Replace Custom Properties programmatically"),(0,r.kt)("p",null,"The following code replaces the current custom properties with a new properties map that includes only the properties ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"retention_time"),". After running this code, the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," property will be removed."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udeab Replacing Custom Properties on Dataset via GraphQL is currently not supported.\nPlease check out ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api/datahub-apis#datahub-api-comparison"},"API feature comparison table")," for more information,"))),(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'# Inlined from /metadata-integration/java/examples/src/main/java/io/datahubproject/examples/DatasetCustomPropertiesReplace.java\npackage io.datahubproject.examples;\n\nimport com.linkedin.common.urn.UrnUtils;\nimport com.linkedin.mxe.MetadataChangeProposal;\nimport datahub.client.MetadataWriteResponse;\nimport datahub.client.patch.dataset.DatasetPropertiesPatchBuilder;\nimport datahub.client.rest.RestEmitter;\nimport java.io.IOException;\nimport java.util.HashMap;\nimport java.util.Map;\nimport java.util.concurrent.Future;\nimport lombok.extern.slf4j.Slf4j;\n\n\n@Slf4j\nclass DatasetCustomPropertiesReplace {\n\n  private DatasetCustomPropertiesReplace() {\n\n  }\n\n  /**\n   * Replaces the existing custom properties map with a new map.\n   * Fields like dataset name, description etc remain unchanged.\n   * @param args\n   * @throws IOException\n   */\n  public static void main(String[] args) throws IOException {\n    Map<String, String> customPropsMap = new HashMap<>();\n    customPropsMap.put("cluster_name", "datahubproject.acryl.io");\n    customPropsMap.put("retention_time", "2 years");\n    MetadataChangeProposal datasetPropertiesProposal = new DatasetPropertiesPatchBuilder()\n        .urn(UrnUtils.toDatasetUrn("hive", "fct_users_deleted", "PROD"))\n        .setCustomProperties(customPropsMap)\n        .build();\n\n    String token = "";\n    RestEmitter emitter = RestEmitter.create(\n     b -> b.server("http://localhost:8080")\n     .token(token)\n     );\n\n    try {\n      Future<MetadataWriteResponse> response = emitter.emit(datasetPropertiesProposal);\n      System.out.println(response.get().getResponseContent());\n    } catch (Exception e) {\n      log.error("Failed to emit metadata to DataHub", e);\n    } finally {\n      emitter.close();\n    }\n\n  }\n\n}\n\n\n\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_replace_properties.py\nimport logging\nfrom typing import Union\n\nfrom datahub.configuration.kafka import KafkaProducerConnectionConfig\nfrom datahub.emitter.kafka_emitter import DatahubKafkaEmitter, KafkaEmitterConfig\nfrom datahub.emitter.mce_builder import make_dataset_urn\nfrom datahub.emitter.rest_emitter import DataHubRestEmitter\nfrom datahub.specific.dataset import DatasetPatchBuilder\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# Get an emitter, either REST or Kafka, this example shows you both\ndef get_emitter() -> Union[DataHubRestEmitter, DatahubKafkaEmitter]:\n    USE_REST_EMITTER = True\n    if USE_REST_EMITTER:\n        gms_endpoint = "http://localhost:8080"\n        return DataHubRestEmitter(gms_server=gms_endpoint)\n    else:\n        kafka_server = "localhost:9092"\n        schema_registry_url = "http://localhost:8081"\n        return DatahubKafkaEmitter(\n            config=KafkaEmitterConfig(\n                connection=KafkaProducerConnectionConfig(\n                    bootstrap=kafka_server, schema_registry_url=schema_registry_url\n                )\n            )\n        )\n\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\nproperty_map_to_set = {\n    "cluster_name": "datahubproject.acryl.io",\n    "retention_time": "2 years",\n}\n\nwith get_emitter() as emitter:\n    for patch_mcp in (\n        DatasetPatchBuilder(dataset_urn)\n        .set_custom_properties(property_map_to_set)\n        .build()\n    ):\n        emitter.emit(patch_mcp)\n\n\nlog.info(\n    f"Replaced custom properties on dataset {dataset_urn} as {property_map_to_set}"\n)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-replacing-custom-properties"},"Expected Outcome of Replacing Custom Properties"),(0,r.kt)("p",null,"You can now see the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster_name")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"retention_time")," properties are added to ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_deleted")," but the previous ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding")," property is no longer present."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/dataset-properties-replaced.png"})),(0,r.kt)("p",null,"We can also verify this operation programmatically by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasetProperties")," aspect using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_deleted,PROD)" --aspect datasetProperties\n{\n  "datasetProperties": {\n    "customProperties": {\n      "cluster_name": "datahubproject.acryl.io",\n      "retention_time": "2 years"\n    },\n    "description": "table containing all the users deleted on a single day",\n    "tags": []\n  }\n}\n')))}h.isMDXComponent=!0}}]);