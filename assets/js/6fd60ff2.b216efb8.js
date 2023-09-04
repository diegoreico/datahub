"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[33382],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),l=a(86010),i=a(72957),o=a(16550),s=a(75238),p=a(33609),d=a(92560);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??u(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function c(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,p]=k({queryString:a,groupId:n}),[u,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),g=(()=>{const e=s??u;return c({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),p(e),f(e)}),[p,f,l]),tabValues:l}}var g=a(51048);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),m=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==o&&(u(t),s(n))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},i,{className:(0,l.Z)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(b,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,g.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},62367:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(73992),i=a(18679);const o={sidebar_position:29,title:"Mode",slug:"/generated/ingestion/sources/mode",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md"},s="Mode",p={unversionedId:"docs/generated/ingestion/sources/mode",id:"docs/generated/ingestion/sources/mode",title:"Mode",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/mode.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/mode",permalink:"/docs/next/generated/ingestion/sources/mode",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"Mode",slug:"/generated/ingestion/sources/mode",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/mode.md"},sidebar:"overviewSidebar",previous:{title:"Microsoft SQL Server",permalink:"/docs/next/generated/ingestion/sources/mssql"},next:{title:"MongoDB",permalink:"/docs/next/generated/ingestion/sources/mongodb"}},d={},u=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Report",id:"report",level:3},{value:"Chart",id:"chart",level:3},{value:"Chart Information",id:"chart-information",level:4},{value:"Table Information",id:"table-information",level:4},{value:"Pivot Table Information",id:"pivot-table-information",level:4},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:u},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mode"},"Mode"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,r.kt)("p",null,"This plugin extracts Charts, Reports, and associated metadata from a given Mode workspace. This plugin is in beta and has only been tested\non PostgreSQL database."),(0,r.kt)("h3",{id:"report"},"Report"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/analytics/reports/"},"/api/{account}/reports/{report}")," endpoint is used to\nretrieve the following report information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title and description"),(0,r.kt)("li",{parentName:"ul"},"Last edited by"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Link to the Report in Mode for exploration"),(0,r.kt)("li",{parentName:"ul"},"Associated charts within the report")),(0,r.kt)("h3",{id:"chart"},"Chart"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/analytics/charts/#getChart"},"/api/{workspace}/reports/{report}/queries/{query}/charts'")," endpoint is used to\nretrieve the following information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title and description"),(0,r.kt)("li",{parentName:"ul"},"Last edited by"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,r.kt)("li",{parentName:"ul"},"Datasource and lineage information from Report queries.")),(0,r.kt)("p",null,"The following properties for a chart are ingested in DataHub."),(0,r.kt)("h4",{id:"chart-information"},"Chart Information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters applied to the chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields or columns used for aggregation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"X")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in X-axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"X2")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in second X-axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Y")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in Y-axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Y2")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields used in second Y-axis")))),(0,r.kt)("h4",{id:"table-information"},"Table Information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Columns")),(0,r.kt)("td",{parentName:"tr",align:null},"Column names in a table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters applied to the table")))),(0,r.kt)("h4",{id:"pivot-table-information"},"Pivot Table Information"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Columns")),(0,r.kt)("td",{parentName:"tr",align:null},"Column names in a table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Filters applied to the table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"Fields or columns used for aggregation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Rows")),(0,r.kt)("td",{parentName:"tr",align:null},"Row names in a table")))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[mode]'\n")),(0,r.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,r.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,r.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,r.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: mode\n  config:\n    # Coordinates\n    connect_uri: http://app.mode.com\n\n    # Credentials\n    token: token\n    password: pass\n\n    # Options\n    workspace: "datahub"\n    default_schema: "public"\n    owner_username_instead_of_email: False\n    api_options:\n      retry_backoff_multiplier: 2\n      max_retry_interval: 10\n      max_attempts: 5\n\nsink:\n  # sink configs\n')),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("div",{className:"config-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"password"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string(password)"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mode password for authentication.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"token"),"\xa0",(0,r.kt)("abbr",{title:"Required"},"\u2705"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mode user token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Mode host URL. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},(0,r.kt)("a",{parentName:"td",href:"https://app.mode.com"},"https://app.mode.com"))))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"default_schema"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default schema to use when schema is not provided in an SQL query ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"public")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"owner_username_instead_of_email"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"boolean"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Use username for owner URN instead of Email ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"True")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"platform_instance_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"map(str,string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"workspace"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"env"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"PROD")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"api_options"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"ModeAPIConfig"))),(0,r.kt)("td",{parentName:"tr",align:"left"},'Retry/Wait settings for Mode API to avoid "Too many Requests" error. See Mode API Options below ',(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"{","'","retry","_","backoff","_","multiplier","'",": 2, ","'","max","_","retry","_","interva...")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"api_options."),(0,r.kt)("span",{className:"path-main"},"max_attempts"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"integer"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum number of attempts to retry before failing ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"5")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"api_options."),(0,r.kt)("span",{className:"path-main"},"max_retry_interval"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"One of integer, number"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum interval to wait when retrying ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"10")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-prefix"},"api_options."),(0,r.kt)("span",{className:"path-main"},"retry_backoff_multiplier"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"One of integer, number"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Multiplier for exponential backoff when waiting to retry ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"2")))))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "ModeConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Mode host URL.",\n      "default": "https://app.mode.com",\n      "type": "string"\n    },\n    "token": {\n      "title": "Token",\n      "description": "Mode user token.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Mode password for authentication.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "workspace": {\n      "title": "Workspace",\n      "type": "string"\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    },\n    "owner_username_instead_of_email": {\n      "title": "Owner Username Instead Of Email",\n      "description": "Use username for owner URN instead of Email",\n      "default": true,\n      "type": "boolean"\n    },\n    "api_options": {\n      "title": "Api Options",\n      "description": "Retry/Wait settings for Mode API to avoid \\"Too many Requests\\" error. See Mode API Options below",\n      "default": {\n        "retry_backoff_multiplier": 2,\n        "max_retry_interval": 10,\n        "max_attempts": 5\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/ModeAPIConfig"\n        }\n      ]\n    }\n  },\n  "required": [\n    "token",\n    "password"\n  ],\n  "additionalProperties": false,\n  "definitions": {\n    "ModeAPIConfig": {\n      "title": "ModeAPIConfig",\n      "type": "object",\n      "properties": {\n        "retry_backoff_multiplier": {\n          "title": "Retry Backoff Multiplier",\n          "description": "Multiplier for exponential backoff when waiting to retry",\n          "default": 2,\n          "anyOf": [\n            {\n              "type": "integer"\n            },\n            {\n              "type": "number"\n            }\n          ]\n        },\n        "max_retry_interval": {\n          "title": "Max Retry Interval",\n          "description": "Maximum interval to wait when retrying",\n          "default": 10,\n          "anyOf": [\n            {\n              "type": "integer"\n            },\n            {\n              "type": "number"\n            }\n          ]\n        },\n        "max_attempts": {\n          "title": "Max Attempts",\n          "description": "Maximum number of attempts to retry before failing",\n          "default": 5,\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,r.kt)("p",null,"See Mode's ",(0,r.kt)("a",{parentName:"p",href:"https://mode.com/developer/api-reference/authentication/"},"Authentication documentation")," on how to generate ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),"."),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.mode.ModeSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/mode.py"},"GitHub"))),(0,r.kt)("h2",null,"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Mode, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}k.isMDXComponent=!0}}]);