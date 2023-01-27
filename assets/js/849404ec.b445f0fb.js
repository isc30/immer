"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[226],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(3117),a=r(102),i=(r(7294),r(3905)),o=["components"],s={id:"original",title:"Extracting the original state from a draft",sidebar_label:"Original"},l=void 0,c={unversionedId:"original",id:"original",title:"Extracting the original state from a draft",description:"Immer exposes a named export original that will get the original object from the proxied instance inside produce (or return undefined for unproxied values). A good example of when this can be useful is when searching for nodes in a tree-like state using strict equality.",source:"@site/docs/original.md",sourceDirName:".",slug:"/original",permalink:"/immer/original",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/original.md",tags:[],version:"current",frontMatter:{id:"original",title:"Extracting the original state from a draft",sidebar_label:"Original"},sidebar:"Immer",previous:{title:"Current",permalink:"/immer/current"},next:{title:"Patches",permalink:"/immer/patches"}},p={},u=[],m={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("center",null,(0,i.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",class:"horizontal bordered"})),(0,i.kt)("p",null,"Immer exposes a named export ",(0,i.kt)("inlineCode",{parentName:"p"},"original")," that will get the original object from the proxied instance inside ",(0,i.kt)("inlineCode",{parentName:"p"},"produce")," (or return ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," for unproxied values). A good example of when this can be useful is when searching for nodes in a tree-like state using strict equality."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import {original, produce} from "immer"\n\nconst baseState = {users: [{name: "Richie"}]}\nconst nextState = produce(baseState, draftState => {\n    original(draftState.users) // is === baseState.users\n})\n')),(0,i.kt)("p",null,"Just want to know if a value is a proxied instance? Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"isDraft")," function! Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"original")," cannot be invoked on objects that aren't drafts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'import {isDraft, produce} from "immer"\n\nconst baseState = {users: [{name: "Bobby"}]}\nconst nextState = produce(baseState, draft => {\n    isDraft(draft) // => true\n    isDraft(draft.users) // => true\n    isDraft(draft.users[0]) // => true\n})\nisDraft(nextState) // => false\n')))}d.isMDXComponent=!0}}]);