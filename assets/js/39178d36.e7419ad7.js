"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4429:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,metadata:()=>p,toc:()=>l,default:()=>d});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],s={id:"online-ides",title:"Online IDEs"},p={unversionedId:"editors/online-ides",id:"editors/online-ides",isDocsHomePage:!1,title:"Online IDEs",description:"Metals can also be installed in some online environments, which enable users to",source:"@site/target/docs/editors/online-ides.md",sourceDirName:"editors",slug:"/editors/online-ides",permalink:"/metals/docs/editors/online-ides",editUrl:"https://github.com/scalameta/metals/edit/main/docs/target/docs/editors/online-ides.md",version:"current",frontMatter:{id:"online-ides",title:"Online IDEs"},sidebar:"docs",previous:{title:"Eclipse",permalink:"/metals/docs/editors/eclipse"},next:{title:"Metals User Configuration",permalink:"/metals/docs/editors/user-configuration"}},l=[{value:"Example Gitpod repository for Metals",id:"example-gitpod-repository-for-metals",children:[]},{value:"Open VSX",id:"open-vsx",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Metals can also be installed in some online environments, which enable users to\nwork on their code inside of a browser. This can be a good option when users need\nto set up their workspace quickly or are lacking appropriate resources on their\nlocal machine."),(0,i.kt)("h1",{id:"gitpod"},"Gitpod"),(0,i.kt)("p",null,"One of such online environments is Gitpod, which can be used directly in your\nbrowser as well as shared with others without the need to explicitly set up the\ntools and settings needed to run Scala project with Metals. You can read more\nabout Gitpod ",(0,i.kt)("a",{parentName:"p",href:"https://www.gitpod.io/docs/"},"here"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://imgur.com/2AiIN43.gif",alt:"example"})),(0,i.kt)("h2",{id:"example-gitpod-repository-for-metals"},"Example Gitpod repository for Metals"),(0,i.kt)("p",null,"An example repository, which is already set up and integrated with Gitpod, can\nbe found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals-gitpod-sample"},"here"),". The project\ncontains, out of the box, everything that you need to start experimenting with\nMetals in an online environment similar to Visual Studio Code. The only thing\nthat you need to do to set up the environment by yourself is to open the\n",(0,i.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/scalameta/gitpod-sample"},"link")," provided\nin the README of the project. The import prompt for Metals will show up,\nhowever, in this case, ",(0,i.kt)("em",{parentName:"p"},".bloop")," files normally generated during import were\ncreated in the gitpod init script, so import will not be needed."),(0,i.kt)("p",null,"The moment that the import is completed, you will be able to run the code in\n",(0,i.kt)("em",{parentName:"p"},"Main.scala")," and tests in ",(0,i.kt)("em",{parentName:"p"},"SampleTest.scala")," (using code lenses). You can also\nexecute code using ",(0,i.kt)("em",{parentName:"p"},"Worksheet.worksheet.sc"),"."),(0,i.kt)("p",null,"If you want to set up your own Gitpod project that already comes with all the\nnecessary tools to run the Scala project with Metals, you can fork and customize\nthis repository."),(0,i.kt)("p",null,"Gitpod environment can be set up from scratch with the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.gitpod.io/docs/configuration/"},"setup assistant"),". It helps you to\ncreate scripts that are then used by Gitpod to make fresh instances of the\nenvironment. These scripts are for example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"prebuild")," that can be used to set up the environment on commit push even\nbefore opening it"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"init")," invoked when the workspace is opened for the first time"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"command")," run every time when the workspace is run again after being stopped")),(0,i.kt)("p",null,"The Gitpod configuration is located under ",(0,i.kt)("em",{parentName:"p"},".gitpod.yml"),". The minimal Gitpod\nsetup requires in our case Scala and Metals extensions to be provided which is\nalready done in the example project."),(0,i.kt)("p",null,"Gitpod itself is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://theia-ide.org/"},"Eclipse Theia project"),",\nan editor which can be easily customized according to your needs and is backed\nby the ",(0,i.kt)("a",{parentName:"p",href:"https://www.eclipse.org/org/foundation/"},"Eclipse Foundation"),". The Metals\nplugin will also work in an environment created within\n",(0,i.kt)("a",{parentName:"p",href:"https://www.eclipse.org/che/"},"Eclipse Che"),", which is a complementary project to\nTheia that helps companies and users create their own online workspace\ninfrastructure. These topics should be especially interesting for larger\ncompanies that might want to increase their productivity by improving their\ndevelopers' experience. With some additional setup it's possible using those\ntools to have a zero startup environments."),(0,i.kt)("h2",{id:"open-vsx"},"Open VSX"),(0,i.kt)("p",null,"Metals extension is available in the ",(0,i.kt)("a",{parentName:"p",href:"https://open-vsx.org/"},"Open VSX Registry"),"\nwhich is used to provide extensions in Gitpod.",(0,i.kt)("br",{parentName:"p"}),"\n","You can find the newest version of Metals in there."))}d.isMDXComponent=!0}}]);