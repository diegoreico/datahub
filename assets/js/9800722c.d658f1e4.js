"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[28648],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),p=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,s=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,o(o({ref:e},l),{},{components:a})):n.createElement(h,o({ref:e},l))}));function h(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=a.length,o=new Array(s);o[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<s;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49206:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const s={title:"Get ElasticSearch Task Status Endpoint",slug:"/api/restli/get-elastic-task-status",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md"},o="Get ElasticSearch Task Status Endpoint",i={unversionedId:"docs/api/restli/get-elastic-task-status",id:"version-0.10.5/docs/api/restli/get-elastic-task-status",title:"Get ElasticSearch Task Status Endpoint",description:"You can do a HTTP POST request to /gms/operations?action=getEsTaskStatus endpoint to see the status of the input task running in ElasticSearch. For example, the task ID given by the truncateTimeseriesAspect endpoint. The task ID can be passed in as a string with node name and task ID separated by a colon (as is output by the previous API), or the node name and task ID parameters separately.",source:"@site/versioned_docs/version-0.10.5/docs/api/restli/get-elastic-task-status.md",sourceDirName:"docs/api/restli",slug:"/api/restli/get-elastic-task-status",permalink:"/docs/api/restli/get-elastic-task-status",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md",tags:[],version:"0.10.5",frontMatter:{title:"Get ElasticSearch Task Status Endpoint",slug:"/api/restli/get-elastic-task-status",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/api/restli/get-elastic-task-status.md"},sidebar:"overviewSidebar",previous:{title:"Truncate Timeseries Index Endpoint",permalink:"/docs/api/restli/truncate-time-series-aspect"},next:{title:"Evaluate Tests Endpoint",permalink:"/docs/api/restli/evaluate-tests"}},c={},p=[],l={toc:p},u="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(u,(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-elasticsearch-task-status-endpoint"},"Get ElasticSearch Task Status Endpoint"),(0,r.kt)("p",null,"You can do a HTTP POST request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/gms/operations?action=getEsTaskStatus")," endpoint to see the status of the input task running in ElasticSearch. For example, the task ID given by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/restli/truncate-time-series-aspect"},(0,r.kt)("inlineCode",{parentName:"a"},"truncateTimeseriesAspect")," endpoint"),". The task ID can be passed in as a string with node name and task ID separated by a colon (as is output by the previous API), or the node name and task ID parameters separately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://demo.datahubproject.io/api/gms/operations?action=getEsTaskStatus' \\\n--header 'Authorization: Bearer TOKEN'\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"task\": \"aB1cdEf2GHIJKLMnoPQr3S:123456\"\n}'\n\ncurl --location --request POST  http://localhost:8080/operations\\?action\\=getEsTaskStatus \\         \n--header 'Authorization: Bearer TOKEN'\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"nodeId\": \"aB1cdEf2GHIJKLMnoPQr3S\",\n    taskId: 12345\n}' \n")),(0,r.kt)("p",null,"The output will be a string representing a JSON object with the task status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "value": "{\\"error\\":\\"Could not get task status for XIAMx5WySACgg9XxBgaKmw:12587\\"}"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"{\n  "completed": true,\n  "taskId": "qhxGdzytQS-pQek8CwBCZg:54654",\n  "runTimeNanos": 1179458,\n  "status": "{\n    "total": 0,\n    "updated": 0,\n    "created": 0,\n    "deleted": 0,\n    "batches": 0,\n    "version_conflicts": 0,\n    "noops": 0,\n    "retries": {\n      "bulk": 0,\n      "search": 0\n    },\n    "throttled_millis": 0,\n    "requests_per_second": -1.0,\n    "throttled_until_millis": 0\n  }\n}\n')))}d.isMDXComponent=!0}}]);