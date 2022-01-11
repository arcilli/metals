"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4602:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,metadata:()=>s,toc:()=>c,default:()=>m});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"remote-language-server",title:"Remote Language Servers"},s={unversionedId:"integrations/remote-language-server",id:"integrations/remote-language-server",isDocsHomePage:!1,title:"Remote Language Servers",description:"Metals has experimental support to offload certain requests to a remote language",source:"@site/target/docs/integrations/remote-language-server.md",sourceDirName:"integrations",slug:"/integrations/remote-language-server",permalink:"/metals/docs/integrations/remote-language-server",editUrl:"https://github.com/scalameta/metals/edit/main/docs/integrations/remote-language-server.md",version:"current",frontMatter:{id:"remote-language-server",title:"Remote Language Servers"},sidebar:"docs",previous:{title:"Making a release",permalink:"/metals/docs/contributors/releasing"},next:{title:"Integrating a new build tool",permalink:"/metals/docs/integrations/new-build-tool"}},c=[{value:"Difference from local language servers",id:"difference-from-local-language-servers",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>textDocument/definition</code>",id:"textdocumentdefinition",children:[]},{value:"<code>textDocument/references</code>",id:"textdocumentreferences",children:[]}]},{value:"Open questions",id:"open-questions",children:[]}],u={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Metals has experimental support to offload certain requests to a remote language\nserver. This feature can be used to navigate large codebases when it's not\npossible to index all the code on a local computer."),(0,o.kt)("h2",{id:"difference-from-local-language-servers"},"Difference from local language servers"),(0,o.kt)("p",null,"There are some important differences between local and remote language servers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instead of JSON-RPC, a remote language server responds to HTTP POST requests\nwith an ",(0,o.kt)("inlineCode",{parentName:"li"},"application/json")," header and a JSON-formatted body. The reason HTTP\nis chosen over JSON-RPC is because it makes the remote language server\naccesible from more clients, for example via ",(0,o.kt)("inlineCode",{parentName:"li"},"curl"),". A caveat with using HTTP\ninstead of JSON-RPC is that it's not possible for the remote language server\nto push notification down to the client. In the future, we could consider\nusing JSON-RPC via websockets instead."),(0,o.kt)("li",{parentName:"ul"},"Instead of using absolute ",(0,o.kt)("inlineCode",{parentName:"li"},"file://")," URIs, a remote language server uses\nrelative ",(0,o.kt)("inlineCode",{parentName:"li"},"source://")," URIs. For example, the absolute URI\n",(0,o.kt)("inlineCode",{parentName:"li"},"file://path/to/workspace/src/main/scala/Address.scala")," becomes the relative\nURI ",(0,o.kt)("inlineCode",{parentName:"li"},"source://src/main/scala/Address.scala")," when communicating with a remote\nlanguage server.")),(0,o.kt)("h2",{id:"methods"},"Methods"),(0,o.kt)("p",null,"Each remote language server method expects a JSON-formatted body of type\n",(0,o.kt)("inlineCode",{parentName:"p"},"JsonRpcRequest<T>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface JsonRpcRequest<T> {\n  /** The JSON-RPC method name, for example textDocument/definition */\n  method: string;\n\n  /** The parameter for the JSON-RPC method, for example `TextDocumentPositionParams` */\n  params: T;\n\n  /** The ID of this request, can be any integer number. */\n  id: number;\n}\n")),(0,o.kt)("h3",{id:"textdocumentdefinition"},(0,o.kt)("inlineCode",{parentName:"h3"},"textDocument/definition")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"textDocument/definition")," request is sent from the client to the server to\nget the list of definitions for a given position."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Request"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"method: ",(0,o.kt)("inlineCode",{parentName:"li"},"textDocument/definition")),(0,o.kt)("li",{parentName:"ul"},"params: ",(0,o.kt)("inlineCode",{parentName:"li"},"JsonRpcRequest<TextDocumentPositionParams>"),", where\n",(0,o.kt)("inlineCode",{parentName:"li"},"TextDocumentPositionParams")," is defined in LSP.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result: ",(0,o.kt)("inlineCode",{parentName:"li"},"Location[]"),", as defined in LSP.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl --location --request POST \'http://remote-language-server.com\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "method": "textDocument/definition",\n  "params": {\n    "textDocument": {\n      "uri": "source://src/main/scala/Address.scala"\n    },\n    "position": {\n      "line": 5,\n      "character": 10\n    }\n  },\n  "id": 10\n}\'\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "uri": "source://src/main/scala/User.scala",\n    "range": {\n      "start": { "line": 61, "character": 15 },\n      "end": { "line": 61, "character": 31 }\n    }\n  }\n]\n')),(0,o.kt)("h3",{id:"textdocumentreferences"},(0,o.kt)("inlineCode",{parentName:"h3"},"textDocument/references")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"textDocument/references")," request is sent from the client to the server to\nget the list of all references to a symbol at a given position."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Request"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"method: ",(0,o.kt)("inlineCode",{parentName:"li"},"textDocument/references")),(0,o.kt)("li",{parentName:"ul"},"params: ",(0,o.kt)("inlineCode",{parentName:"li"},"JsonRpcRequest<ReferenceParams>"),", where ",(0,o.kt)("inlineCode",{parentName:"li"},"ReferenceParams")," is defined\nin LSP.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Response"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"result: ",(0,o.kt)("inlineCode",{parentName:"li"},"Location[]"),", as defined in LSP.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl --location --request POST \'http://remote-language-server.com\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "method": "textDocument/references",\n  "params": {\n    "textDocument": {\n      "uri": "source://src/main/scala/Address.scala"\n    },\n    "position": {\n      "line": 5,\n      "character": 10\n    },\n    "context": {\n      "includeDeclaration": true\n    }\n  },\n  "id": 10\n}\'\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Example response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "uri": "source://src/main/scala/User.scala",\n    "range": {\n      "start": { "line": 61, "character": 15 },\n      "end": { "line": 61, "character": 31 }\n    }\n  },\n  {\n    "uri": "source://src/main/scala/Country.scala",\n    "range": {\n      "start": { "line": 62, "character": 16 },\n      "end": { "line": 62, "character": 32 }\n    }\n  }\n]\n')),(0,o.kt)("h2",{id:"open-questions"},"Open questions"),(0,o.kt)("p",null,"The protocol for remote language servers is new and likely to have breaking\nchanges in upcoming releases. The protocol in this document should be considered\nas a proof-of-concept that demonstrates the feasibility of this approach. There\nremain a few open questions in order to extend remote language servers to\nsupport richer functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"how do we ensure that results from the remote server are synchronized with the\nfile changes to the local disk?"),(0,o.kt)("li",{parentName:"ul"},"how do we combine local and remote ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace/symbol")," results?"),(0,o.kt)("li",{parentName:"ul"},"how should ",(0,o.kt)("inlineCode",{parentName:"li"},"textDocument/definition")," return results to library dependency\nsources that are not present on local disk?")),(0,o.kt)("p",null,"Given these open questions and the experimental status of remote language\nservers, this functionality may be removed from Metals in future releases\nwithout notice."))}m.isMDXComponent=!0}}]);