"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(f,r(r({ref:t},c),{},{components:n})):o.createElement(f,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3895:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,metadata:()=>s,toc:()=>u,default:()=>p});var o=n(2122),l=n(9756),i=(n(7294),n(3905)),r=["components"],a={id:"mill",title:"Mill"},s={unversionedId:"build-tools/mill",id:"build-tools/mill",isDocsHomePage:!1,title:"Mill",description:"Mill is a build tool developed by Li Haoyi in order to create something simpler",source:"@site/target/docs/build-tools/mill.md",sourceDirName:"build-tools",slug:"/build-tools/mill",permalink:"/metals/docs/build-tools/mill",editUrl:"https://github.com/scalameta/metals/edit/main/docs/target/docs/build-tools/mill.md",version:"current",frontMatter:{id:"mill",title:"Mill"},sidebar:"docs",previous:{title:"Maven",permalink:"/metals/docs/build-tools/maven"},next:{title:"sbt",permalink:"/metals/docs/build-tools/sbt"}},u=[{value:"Automatic installation",id:"automatic-installation",children:[]},{value:"Manual installation",id:"manual-installation",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Mill is a build tool developed by Li Haoyi in order to create something simpler\nand more intuitive than most of the other build tools today.  There is extensive\ndocumentation on the ",(0,i.kt)("a",{parentName:"p",href:"https://com-lihaoyi.github.io/mill/"},"Mill website"),"."),(0,i.kt)("h2",{id:"automatic-installation"},"Automatic installation"),(0,i.kt)("p",null,'The first time you open Metals in a new Mill workspace you will be\nprompted to import the build. Select "Import Build" to start the\nautomatic installation. This will create all the needed Bloop config\nfiles. You should then be able to edit and compile your code utilizing\nall of the features.'),(0,i.kt)("p",null,"To force a Mill version you can write it to a file named ",(0,i.kt)("inlineCode",{parentName:"p"},".mill-version"),"\nin the workspace directory."),(0,i.kt)("h2",{id:"manual-installation"},"Manual installation"),(0,i.kt)("p",null,"Manual installation is not recommended, but it's pretty easy to do. There are\nonly two steps involved."),(0,i.kt)("p",null,"First add one import line to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sc")," file or in any other file it\ndepends on:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"import $ivy.`com.lihaoyi::mill-contrib-bloop:VERSION`")),(0,i.kt)("p",null,"Remember to replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"VERSION")," with your Mill version."),(0,i.kt)("p",null,"After adding the line you should be able to generate the Bloop config files needed\nto work with Metals using the below command:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mill mill.contrib.Bloop/install")),(0,i.kt)("p",null,"Afterwards, you can just open Metals and start working on your code."))}p.isMDXComponent=!0}}]);