"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[43924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,h=d["".concat(i,".").concat(c)]||d[c]||p[c]||s;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<s;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),s=a(86010),o=a(72957),l=a(16550),i=a(75238),u=a(33609),m=a(92560);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,u]=h({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,m.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),g=(()=>{const e=i??d;return c({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var g=a(51048);const _={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:l,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,a=m.indexOf(t),n=u[a].value;n!==l&&(d(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=m.indexOf(e.currentTarget)+1;t=m[a]??m[0];break}case"ArrowLeft":{const a=m.indexOf(e.currentTarget)-1;t=m[a]??m[m.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>m.push(e),onKeyDown:c,onClick:p},o,{className:(0,s.Z)("tabs__item",_.tabItem,o?.className,{"tabs__item--active":l===t})}),a??t)})))}function y(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function T(e){const t=f(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",_.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(T,(0,n.Z)({key:String(t)},e))}},79108:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=(a(67294),a(3905)),s=a(73992),o=a(18679);const l={title:"Terms",slug:"/api/tutorials/terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/terms.md"},i="Terms",u={unversionedId:"docs/api/tutorials/terms",id:"version-0.10.5/docs/api/tutorials/terms",title:"Terms",description:"Why Would You Use Terms on Datasets?",source:"@site/versioned_docs/version-0.10.5/docs/api/tutorials/terms.md",sourceDirName:"docs/api/tutorials",slug:"/api/tutorials/terms",permalink:"/docs/api/tutorials/terms",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/terms.md",tags:[],version:"0.10.5",frontMatter:{title:"Terms",slug:"/api/tutorials/terms",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/tutorials/terms.md"},sidebar:"overviewSidebar",previous:{title:"Tags",permalink:"/docs/api/tutorials/tags"},next:{title:"Ownership",permalink:"/docs/api/tutorials/owners"}},m={},d=[{value:"Why Would You Use Terms on Datasets?",id:"why-would-you-use-terms-on-datasets",level:2},{value:"Goal Of This Guide",id:"goal-of-this-guide",level:3},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create Terms",id:"create-terms",level:2},{value:"Expected Outcome of Creating Terms",id:"expected-outcome-of-creating-terms",level:3},{value:"Read Terms",id:"read-terms",level:2},{value:"Add Terms",id:"add-terms",level:2},{value:"Add Terms to a dataset",id:"add-terms-to-a-dataset",level:3},{value:"Add Terms to a Column of a Dataset",id:"add-terms-to-a-column-of-a-dataset",level:3},{value:"Expected Outcome of Adding Terms",id:"expected-outcome-of-adding-terms",level:3},{value:"Remove Terms",id:"remove-terms",level:2},{value:"Expected Outcome of Removing Terms",id:"expected-outcome-of-removing-terms",level:3}],p={toc:d},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terms"},"Terms"),(0,r.kt)("h2",{id:"why-would-you-use-terms-on-datasets"},"Why Would You Use Terms on Datasets?"),(0,r.kt)("p",null,"The Business Glossary(Term) feature in DataHub helps you use a shared vocabulary within the orgarnization, by providing a framework for defining a standardized set of data concepts and then associating them with the physical assets that exist within your data ecosystem."),(0,r.kt)("p",null,"For more information about terms, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary/business-glossary"},"About DataHub Business Glossary"),"."),(0,r.kt)("h3",{id:"goal-of-this-guide"},"Goal Of This Guide"),(0,r.kt)("p",null,"This guide will show you how to"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create: create a term."),(0,r.kt)("li",{parentName:"ul"},"Read : read terms attached to a dataset."),(0,r.kt)("li",{parentName:"ul"},"Add: add a term to a column of a dataset or a dataset itself."),(0,r.kt)("li",{parentName:"ul"},"Remove: remove a term from a dataset.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"For this tutorial, you need to deploy DataHub Quickstart and ingest sample data.\nFor detailed information, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/quickstart"},"Datahub Quickstart Guide"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before modifying terms, you need to ensure the target dataset is already present in your DataHub instance.\nIf you attempt to manipulate entities that do not exist, your operation will fail.\nIn this guide, we will be using data from sample ingestion.")),(0,r.kt)("p",null,"For more information on how to set up for GraphQL, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/graphql/how-to-set-up-graphql"},"How To Set Up GraphQL"),"."),(0,r.kt)("h2",{id:"create-terms"},"Create Terms"),(0,r.kt)("p",null,"The following code creates a term ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation createGlossaryTerm {\n  createGlossaryTerm(input: {\n    name: "Rate of Return",\n    id: "rateofreturn",\n    description: "A rate of return (RoR) is the net gain or loss of an investment over a specified time period."\n  },\n  )\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "createGlossaryTerm": "urn:li:glossaryTerm:rateofreturn"\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation createGlossaryTerm { createGlossaryTerm(input: { name: \\"Rate of Return\\", id:\\"rateofreturn\\", description: \\"A rate of return (RoR) is the net gain or loss of an investment over a specified time period.\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": { "createGlossaryTerm": "urn:li:glossaryTerm:rateofreturn" },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/create_term.py\nimport logging\n\nfrom datahub.emitter.mce_builder import make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\nfrom datahub.emitter.rest_emitter import DatahubRestEmitter\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlossaryTermInfoClass\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\nterm_urn = make_term_urn("rateofreturn")\nterm_properties_aspect = GlossaryTermInfoClass(\n    definition="A rate of return (RoR) is the net gain or loss of an investment over a specified time period.",\n    name="Rate of Return",\n    termSource="",\n)\n\nevent: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n    entityUrn=term_urn,\n    aspect=term_properties_aspect,\n)\n\n# Create rest emitter\nrest_emitter = DatahubRestEmitter(gms_server="http://localhost:8080")\nrest_emitter.emit(event)\nlog.info(f"Created term {term_urn}")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-creating-terms"},"Expected Outcome of Creating Terms"),(0,r.kt)("p",null,"You can now see the new term ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," has been created."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/term-created.png"})),(0,r.kt)("p",null,"We can also verify this operation by programmatically searching ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term after running this code using the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'datahub get --urn "urn:li:glossaryTerm:rateofreturn" --aspect glossaryTermInfo\n\n{\n  "glossaryTermInfo": {\n    "definition": "A rate of return (RoR) is the net gain or loss of an investment over a specified time period.",\n    "name": "Rate of Return",\n    "termSource": "INTERNAL"\n  }\n}\n')),(0,r.kt)("h2",{id:"read-terms"},"Read Terms"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'query {\n  dataset(urn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)") {\n    glossaryTerms {\n      terms {\n        term {\n          urn\n          glossaryTermInfo {\n            name\n            description\n          }\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "dataset": {\n      "glossaryTerms": {\n        "terms": [\n          {\n            "term": {\n              "urn": "urn:li:glossaryTerm:CustomerAccount",\n              "glossaryTermInfo": {\n                "name": "CustomerAccount",\n                "description": "account that represents an identified, named collection of balances and cumulative totals used to summarize customer transaction-related activity over a designated period of time"\n              }\n            }\n          }\n        ]\n      }\n    }\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location --request POST 'http://localhost:8080/api/graphql' \\\n--header 'Authorization: Bearer <my-access-token>' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{ \"query\": \"{dataset(urn: \\\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\\") {glossaryTerms {terms {term {urn glossaryTermInfo { name description } } } } } }\", \"variables\":{}}'\n")),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"data":{"dataset":{"glossaryTerms":{"terms":[{"term":{"urn":"urn:li:glossaryTerm:CustomerAccount","glossaryTermInfo":{"name":"CustomerAccount","description":"account that represents an identified, named collection of balances and cumulative totals used to summarize customer transaction-related activity over a designated period of time"}}}]}}},"extensions":{}}```\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_query_terms.py\nfrom datahub.emitter.mce_builder import make_dataset_urn\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import GlossaryTermsClass\n\ndataset_urn = make_dataset_urn(platform="hive", name="fct_users_created", env="PROD")\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nresult = graph.get_aspects_for_entity(\n    entity_urn=dataset_urn,\n    aspects=["glossaryTerms"],\n    aspect_types=[GlossaryTermsClass],\n)\n\nprint(result)\n\n')))),(0,r.kt)("h2",{id:"add-terms"},"Add Terms"),(0,r.kt)("h3",{id:"add-terms-to-a-dataset"},"Add Terms to a dataset"),(0,r.kt)("p",null,"The following code shows you how can add terms to a dataset.\nIn the following code, we add a term ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," to a dataset named ",(0,r.kt)("inlineCode",{parentName:"p"},"fct_users_created"),"."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTerms {\n    addTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      }\n  )\n}\n')),(0,r.kt)("p",null,"If you see the following response, the operation was successful:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'{\n  "data": {\n    "addTerms": true\n  },\n  "extensions": {}\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTerm { addTerms(input: { termUrns: [\\"urn:li:glossaryTerm:rateofreturn\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTerms": true }, "extensions": {} }\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_term.py\nimport logging\nfrom typing import Optional\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    GlossaryTermAssociationClass,\n    GlossaryTermsClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\n# First we get the current terms\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\n\ncurrent_terms: Optional[GlossaryTermsClass] = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=GlossaryTermsClass\n)\n\nterm_to_add = make_term_urn("Classification.HighlyConfidential")\nterm_association_to_add = GlossaryTermAssociationClass(urn=term_to_add)\n# an audit stamp that basically says we have no idea when these terms were added to this dataset\n# change the time value to (time.time() * 1000) if you want to specify the current time of running this code as the time\nunknown_audit_stamp = AuditStampClass(time=0, actor="urn:li:corpuser:ingestion")\nneed_write = False\nif current_terms:\n    if term_to_add not in [x.urn for x in current_terms.terms]:\n        # terms exist, but this term is not present in the current terms\n        current_terms.terms.append(term_association_to_add)\n        need_write = True\nelse:\n    # create a brand new terms aspect\n    current_terms = GlossaryTermsClass(\n        terms=[term_association_to_add],\n        auditStamp=unknown_audit_stamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_terms,\n    )\n    graph.emit(event)\nelse:\n    log.info(f"Term {term_to_add} already exists, omitting write")\n\n')))),(0,r.kt)("h3",{id:"add-terms-to-a-column-of-a-dataset"},"Add Terms to a Column of a Dataset"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation addTerms {\n    addTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation addTerms { addTerms(input: { termUrns: [\\"urn:li:glossaryTerm:rateofreturn\\"], resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)\\", subResourceType: DATASET_FIELD, subResource: \\"user_name\\" }) }", "variables":{}}\'\n')),(0,r.kt)("p",null,"Expected Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "data": { "addTerms": true }, "extensions": {} }\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_add_column_term.py\nimport logging\nimport time\n\nfrom datahub.emitter.mce_builder import make_dataset_urn, make_term_urn\nfrom datahub.emitter.mcp import MetadataChangeProposalWrapper\n\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\n# Imports for metadata model classes\nfrom datahub.metadata.schema_classes import (\n    AuditStampClass,\n    EditableSchemaFieldInfoClass,\n    EditableSchemaMetadataClass,\n    GlossaryTermAssociationClass,\n    GlossaryTermsClass,\n)\n\nlog = logging.getLogger(__name__)\nlogging.basicConfig(level=logging.INFO)\n\n\ndef get_simple_field_path_from_v2_field_path(field_path: str) -> str:\n    """A helper function to extract simple . path notation from the v2 field path"""\n    if not field_path.startswith("[version=2.0]"):\n        # not a v2, we assume this is a simple path\n        return field_path\n        # this is a v2 field path\n    tokens = [\n        t for t in field_path.split(".") if not (t.startswith("[") or t.endswith("]"))\n    ]\n\n    return ".".join(tokens)\n\n\n# Inputs -> the column, dataset and the term to set\ncolumn = "address.zipcode"\ndataset_urn = make_dataset_urn(platform="hive", name="realestate_db.sales", env="PROD")\nterm_to_add = make_term_urn("Classification.Location")\n\n\n# First we get the current editable schema metadata\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n\ncurrent_editable_schema_metadata = graph.get_aspect(\n    entity_urn=dataset_urn, aspect_type=EditableSchemaMetadataClass\n)\n\n\n# Some pre-built objects to help all the conditional pathways\nnow = int(time.time() * 1000)  # milliseconds since epoch\ncurrent_timestamp = AuditStampClass(time=now, actor="urn:li:corpuser:ingestion")\n\nterm_association_to_add = GlossaryTermAssociationClass(urn=term_to_add)\nterm_aspect_to_set = GlossaryTermsClass(\n    terms=[term_association_to_add], auditStamp=current_timestamp\n)\nfield_info_to_set = EditableSchemaFieldInfoClass(\n    fieldPath=column, glossaryTerms=term_aspect_to_set\n)\n\nneed_write = False\nfield_match = False\nif current_editable_schema_metadata:\n    for fieldInfo in current_editable_schema_metadata.editableSchemaFieldInfo:\n        if get_simple_field_path_from_v2_field_path(fieldInfo.fieldPath) == column:\n            # we have some editable schema metadata for this field\n            field_match = True\n            if fieldInfo.glossaryTerms:\n                if term_to_add not in [x.urn for x in fieldInfo.glossaryTerms.terms]:\n                    # this tag is not present\n                    fieldInfo.glossaryTerms.terms.append(term_association_to_add)\n                    need_write = True\n            else:\n                fieldInfo.glossaryTerms = term_aspect_to_set\n                need_write = True\n\n    if not field_match:\n        # this field isn\'t present in the editable schema metadata aspect, add it\n        field_info = field_info_to_set\n        current_editable_schema_metadata.editableSchemaFieldInfo.append(field_info)\n        need_write = True\n\nelse:\n    # create a brand new editable schema metadata aspect\n    current_editable_schema_metadata = EditableSchemaMetadataClass(\n        editableSchemaFieldInfo=[field_info_to_set],\n        created=current_timestamp,\n    )\n    need_write = True\n\nif need_write:\n    event: MetadataChangeProposalWrapper = MetadataChangeProposalWrapper(\n        entityUrn=dataset_urn,\n        aspect=current_editable_schema_metadata,\n    )\n    graph.emit(event)\n    log.info(f"Term {term_to_add} added to column {column} of dataset {dataset_urn}")\n\nelse:\n    log.info(f"Term {term_to_add} already attached to column {column}, omitting write")\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-adding-terms"},"Expected Outcome of Adding Terms"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term has been added to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/term-added.png"})),(0,r.kt)("h2",{id:"remove-terms"},"Remove Terms"),(0,r.kt)("p",null,"The following code remove a term from a dataset.\nAfter running this code, ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term will be removed from a ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"graphql",label:"GraphQL",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTerm {\n    removeTerm(\n      input: {\n        termUrn: "urn:li:glossaryTerm:rateofreturn",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n        subResourceType:DATASET_FIELD,\n        subResource:"user_name"})\n}\n')),(0,r.kt)("p",null,"Note that you can also remove a term from a dataset if you don't specify ",(0,r.kt)("inlineCode",{parentName:"p"},"subResourceType")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"subResource"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation removeTerm {\n    removeTerm(\n      input: {\n        termUrn: "urn:li:glossaryTerm:rateofreturn",\n        resourceUrn: "urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)",\n      })\n}\n')),(0,r.kt)("p",null,"Also note that you can remove terms from multiple entities or subresource using ",(0,r.kt)("inlineCode",{parentName:"p"},"batchRemoveTerms"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'mutation batchRemoveTerms {\n    batchRemoveTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n'))),(0,r.kt)(o.Z,{value:"curl",label:"Curl",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location --request POST \'http://localhost:8080/api/graphql\' \\\n--header \'Authorization: Bearer <my-access-token>\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{ "query": "mutation removeTerm { removeTerm(input: { termUrn: \\"urn:li:glossaryTerm:rateofreturn\\", resourceUrn: \\"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)\\" }) }", "variables":{}}\'\n'))),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Inlined from /metadata-ingestion/examples/library/dataset_remove_term_execute_graphql.py\n# read-modify-write requires access to the DataHubGraph (RestEmitter is not enough)\nfrom datahub.ingestion.graph.client import DatahubClientConfig, DataHubGraph\n\ngms_endpoint = "http://localhost:8080"\ngraph = DataHubGraph(DatahubClientConfig(server=gms_endpoint))\n\n# Query multiple aspects from entity\nquery = """\nmutation batchRemoveTerms {\n    batchRemoveTerms(\n      input: {\n        termUrns: ["urn:li:glossaryTerm:rateofreturn"],\n        resources: [\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hdfs,SampleHdfsDataset,PROD)"} ,\n          { resourceUrn:"urn:li:dataset:(urn:li:dataPlatform:hive,fct_users_created,PROD)"} ,]\n      }\n    )\n}\n"""\nresult = graph.execute_graphql(query=query)\n\nprint(result)\n\n')))),(0,r.kt)("h3",{id:"expected-outcome-of-removing-terms"},"Expected Outcome of Removing Terms"),(0,r.kt)("p",null,"You can now see ",(0,r.kt)("inlineCode",{parentName:"p"},"Rate of Return")," term has been removed to ",(0,r.kt)("inlineCode",{parentName:"p"},"user_name")," column."),(0,r.kt)("p",{align:"center"},(0,r.kt)("img",{width:"70%",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/apis/tutorials/term-removed.png"})))}h.isMDXComponent=!0}}]);