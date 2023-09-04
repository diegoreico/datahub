"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[18038],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={title:"Contributing",slug:"/contributing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md"},i="Contributing",s={unversionedId:"docs/CONTRIBUTING",id:"version-0.10.5/docs/CONTRIBUTING",title:"Contributing",description:"We always welcome contributions to help make DataHub better. Take a moment to read this document if you would like to contribute.",source:"@site/versioned_docs/version-0.10.5/docs/CONTRIBUTING.md",sourceDirName:"docs",slug:"/contributing",permalink:"/docs/contributing",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md",tags:[],version:"0.10.5",frontMatter:{title:"Contributing",slug:"/contributing",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/CONTRIBUTING.md"},sidebar:"overviewSidebar",previous:{title:"Contributor Covenant Code of Conduct",permalink:"/docs/code_of_conduct"},next:{title:"Articles & Talks",permalink:"/docs/links"}},l={},u=[{value:"Provide Feedback",id:"provide-feedback",level:2},{value:"Reporting Issues",id:"reporting-issues",level:2},{value:"Submitting a Request For Comment (RFC)",id:"submitting-a-request-for-comment-rfc",level:2},{value:"Submitting a Pull Request (PR)",id:"submitting-a-pull-request-pr",level:2},{value:"Commit Message Format",id:"commit-message-format",level:2},{value:"Type",id:"type",level:3},{value:"Description",id:"description",level:3},{value:"Body",id:"body",level:3},{value:"Footer",id:"footer",level:3},{value:"Revert",id:"revert",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"We always welcome contributions to help make DataHub better. Take a moment to read this document if you would like to contribute."),(0,r.kt)("h2",{id:"provide-feedback"},"Provide Feedback"),(0,r.kt)("p",null,"Have ideas about how to make DataHub better? Head over to ",(0,r.kt)("a",{parentName:"p",href:"https://feature-requests.datahubproject.io/"},"DataHub Feature Requests")," and tell us all about it!"),(0,r.kt)("p",null,"Show your support for other requests by upvoting; stay up to date on progess by subscribing for updates via email."),(0,r.kt)("h2",{id:"reporting-issues"},"Reporting Issues"),(0,r.kt)("p",null,"We use GitHub issues to track bug reports and submitting pull requests."),(0,r.kt)("p",null,"If you find a bug:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Use the GitHub issue search to check whether the bug has already been reported.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the issue has been fixed, try to reproduce the issue using the latest master branch of the repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the issue still reproduces or has not yet been reported, try to isolate the problem before opening an issue."))),(0,r.kt)("h2",{id:"submitting-a-request-for-comment-rfc"},"Submitting a Request For Comment (RFC)"),(0,r.kt)("p",null,"If you have a substantial feature or a design discussion that you'd like to have with the community follow the RFC process outlined ",(0,r.kt)("a",{parentName:"p",href:"/docs/rfc"},"here")),(0,r.kt)("h2",{id:"submitting-a-pull-request-pr"},"Submitting a Pull Request (PR)"),(0,r.kt)("p",null,"Before you submit your Pull Request (PR), consider the following guidelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Search GitHub for an open or closed PR that relates to your submission. You don't want to duplicate effort."),(0,r.kt)("li",{parentName:"ul"},"Follow the ",(0,r.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork"},"standard GitHub approach")," to create the PR. Please also follow our ",(0,r.kt)("a",{parentName:"li",href:"#commit-message-format"},"commit message format"),"."),(0,r.kt)("li",{parentName:"ul"},"If there are any breaking changes, potential downtime, deprecations, or big feature please add an update in ",(0,r.kt)("a",{parentName:"li",href:"/docs/how/updating-datahub"},"Updating DataHub under Next"),"."),(0,r.kt)("li",{parentName:"ul"},"That's it! Thank you for your contribution!")),(0,r.kt)("h2",{id:"commit-message-format"},"Commit Message Format"),(0,r.kt)("p",null,"Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/"},"Conventional Commits")," specification for the commit message format. In summary, each commit message consists of a ",(0,r.kt)("em",{parentName:"p"},"header"),", a ",(0,r.kt)("em",{parentName:"p"},"body")," and a ",(0,r.kt)("em",{parentName:"p"},"footer"),", separated by a single blank line."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,r.kt)("p",null,"Any line of the commit message cannot be longer than 88 characters! This allows the message to be easier to read on GitHub as well as in various Git tools."),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("p",null,"Must be one of the following (based on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines"},"Angular convention"),"):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"feat"),": A new feature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"fix"),": A bug fix"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"refactor"),": A code change that neither fixes a bug nor adds a feature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"docs"),": Documentation only changes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"test"),": Adding missing tests or correcting existing tests"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"perf"),": A code change that improves performance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"style"),": Changes that do not affect the meaning of the code (whitespace, formatting, missing semicolons, etc.)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"build"),": Changes that affect the build system or external dependencies"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"ci"),": Changes to our CI configuration files and scripts")),(0,r.kt)("p",null,"A scope may be provided to a commit\u2019s type, to provide additional contextual information and is contained within parenthesis, e.g., "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feat(parser): add ability to parse arrays\n")),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"Each commit must contain a succinct description of the change:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'use the imperative, present tense: "change" not "changed" nor "changes"'),(0,r.kt)("li",{parentName:"ul"},"don't capitalize the first letter"),(0,r.kt)("li",{parentName:"ul"},"no dot(.) at the end")),(0,r.kt)("h3",{id:"body"},"Body"),(0,r.kt)("p",null,'Just as in the description, use the imperative, present tense: "change" not "changed" nor "changes". The body should include the motivation for the change and contrast this with previous behavior.'),(0,r.kt)("h3",{id:"footer"},"Footer"),(0,r.kt)("p",null,"The footer should contain any information about ",(0,r.kt)("em",{parentName:"p"},"Breaking Changes"),", and is also the place to reference GitHub issues that this commit ",(0,r.kt)("em",{parentName:"p"},"Closes"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Breaking Changes")," should start with the words ",(0,r.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," with a space or two new lines. The rest of the commit message is then used for this."),(0,r.kt)("h3",{id:"revert"},"Revert"),(0,r.kt)("p",null,"If the commit reverts a previous commit, it should begin with ",(0,r.kt)("inlineCode",{parentName:"p"},"revert:"),", followed by the description. In the body it should say: ",(0,r.kt)("inlineCode",{parentName:"p"},"Refs: <hash1> <hash2> ..."),", where the hashs are the SHA of the commits being reverted, e.g. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"revert: let us never again speak of the noodle incident\n\nRefs: 676104e, a215868\n")))}m.isMDXComponent=!0}}]);