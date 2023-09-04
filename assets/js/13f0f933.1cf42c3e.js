"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var d=2;d<l;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},29194:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={title:"v0.2.5",slug:"/managed-datahub/release-notes/v_0_2_5",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_5.md"},o="v0.2.5",s={unversionedId:"docs/managed-datahub/release-notes/v_0_2_5",id:"docs/managed-datahub/release-notes/v_0_2_5",title:"v0.2.5",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_2_5.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_5",permalink:"/docs/next/managed-datahub/release-notes/v_0_2_5",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_5.md",tags:[],version:"current",frontMatter:{title:"v0.2.5",slug:"/managed-datahub/release-notes/v_0_2_5",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_5.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.6",permalink:"/docs/next/managed-datahub/release-notes/v_0_2_6"},next:{title:"v0.2.4",permalink:"/docs/next/managed-datahub/release-notes/v_0_2_4"}},i={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v025"},"v0.2.5"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"11-Apr-2023"),(0,n.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.2.4")," these changes from OSS DataHub ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/2764c44977583d8a34a3425454e81a730b120829...294c5ff50789564dc836ca0cbcd8f7020756eb0a"},"https://github.com/datahub-project/datahub/compare/2764c44977583d8a34a3425454e81a730b120829...294c5ff50789564dc836ca0cbcd8f7020756eb0a")," have been pulled in."),(0,n.kt)("li",{parentName:"ul"},"feat(graphql): Adding new offline features to dataset stats summary"),(0,n.kt)("li",{parentName:"ul"},"feat(metadata tests): Further Metadata Tests Improvements (Prep for Uplift)"),(0,n.kt)("li",{parentName:"ul"},"refactor(tests): Supporting soft-deleted Metadata Tests"),(0,n.kt)("li",{parentName:"ul"},"feat(tests): Adding a high-quality set of Default Metadata Tests"),(0,n.kt)("li",{parentName:"ul"},"refactor(tests): Uplift Metadata Tests UX"),(0,n.kt)("li",{parentName:"ul"},"refactor(Tests): Metadata Tests Uplift: Adding Empty Tests state"),(0,n.kt)("li",{parentName:"ul"},"refactor(Tests): Adding Test Results Modal "),(0,n.kt)("li",{parentName:"ul"},"refactor(tests): Adding more default tests and tags"),(0,n.kt)("li",{parentName:"ul"},"fix(graphQL): Add protection agaisnt optional null OwnershipTypes"),(0,n.kt)("li",{parentName:"ul"},"fix(ui): Fix tags display name + color in UI for autocomplete, search preview, entity profile"),(0,n.kt)("li",{parentName:"ul"},"fix(ui) Fix tags and terms columns on nested schema fields")))}p.isMDXComponent=!0}}]);