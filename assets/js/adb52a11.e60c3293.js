"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,h=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8149:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],s={id:"releasing",title:"Making a release"},o=void 0,p={unversionedId:"contributors/releasing",id:"contributors/releasing",title:"Making a release",description:"Metals",source:"@site/target/docs/contributors/releasing.md",sourceDirName:"contributors",slug:"/contributors/releasing",permalink:"/metals/docs/contributors/releasing",editUrl:"https://github.com/scalameta/metals/edit/main/docs/contributors/releasing.md",tags:[],version:"current",frontMatter:{id:"releasing",title:"Making a release"},sidebar:"docs",previous:{title:"Contributing to the website",permalink:"/metals/docs/contributors/updating-website"},next:{title:"Remote Language Servers",permalink:"/metals/docs/integrations/remote-language-server"}},m=[{value:"Metals",id:"metals",children:[],level:2},{value:"Add new Scala version support to the existing release",id:"add-new-scala-version-support-to-the-existing-release",children:[],level:2}],u={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"metals"},"Metals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Choose the right version number:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.0.0")," is reserved for incompatible changes and require a milestone cycle."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.y.0")," is reserved for compatible changes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"x.y.z")," is reserved for bugfixes that don't change the public API,")),(0,i.kt)("p",{parentName:"li"},"For most releases bumping ",(0,i.kt)("inlineCode",{parentName:"p"},"z")," is enough especially that Metals not being used\nas a library anywhere and do not have a public API.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Tag the release:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The tag must be called ",(0,i.kt)("inlineCode",{parentName:"li"},"vx.y.z"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"v3.0.0"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'git tag -a vx.y.z -m "vx.y.z"'))),(0,i.kt)("p",{parentName:"li"},"You will need the tag to fill in some information in the release notes. It can\nalways be deleted and tagged again if you want to include more commits."),(0,i.kt)("p",{parentName:"li"},"Please wait with pushing the tag until the release notes are accepted.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Draft the release notes:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You might use ",(0,i.kt)("inlineCode",{parentName:"li"},"./bin/merged_prs.sc")," script to generate merged PRs list\nbetween two last release tags. It can be run using ammonite:")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'cs install ammonite\namm ./bin/merged_prs.sc <tag1> <tag2> "<github_api_token>"\n')),(0,i.kt)("p",{parentName:"li"},"It will need a basic github API token to run, which may be specified via\nenvironment variable ",(0,i.kt)("inlineCode",{parentName:"p"},"GITHUB_TOKEN")," or via the last argument."),(0,i.kt)("p",{parentName:"li"},"The script will generate a new markdown file in ",(0,i.kt)("inlineCode",{parentName:"p"},"website/blog")," filled with a\nbasic release template."),(0,i.kt)("p",{parentName:"li"},"Alternatively, you can copy ",(0,i.kt)("inlineCode",{parentName:"p"},"website/blog/2020-11-10-lithium.md")," as a\ntemplate."),(0,i.kt)("p",{parentName:"li"},"You can fill in the number of closed issues from the last milestone, though\nyou will need to make sure everything is included there."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Update Metals SNAPSHOT version in ",(0,i.kt)("inlineCode",{parentName:"li"},"build.sbt")," and the default version in\nGithub issue templates."),(0,i.kt)("li",{parentName:"ul"},"Update ",(0,i.kt)("inlineCode",{parentName:"li"},"./bin/test-release.sh")," - remove any unsupported Scala versions and\nadd newly supported ones. This will be needed later to test the new release."),(0,i.kt)("li",{parentName:"ul"},"Open a PR to the repo."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/releases/new"},"https://github.com/scalameta/metals/releases/new"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Start the release process:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git push upstream --tags")),(0,i.kt)("li",{parentName:"ul"},"Do not create a release on GitHub just yet. Creating a release on GitHub\nsends out a notification to repository watchers, and the release isn't ready\nfor that yet."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wait for\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/actions?query=workflow%3ARelease"},"the Github Actions job"),"\nto build the binaries and stage them to Sonatype.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"While waiting for Github Actions, update the milestones:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/milestones"},"https://github.com/scalameta/metals/milestones")),(0,i.kt)("li",{parentName:"ul"},"Close the milestone or milestones corresponding to the release. For example,\nfor a v3.3.0 release, we close both 3.3.0 and 3.2.1 (because we never\nreleased 3.2.1, so all its tickets went straight to 3.3.0)."),(0,i.kt)("li",{parentName:"ul"},"Create the milestone or milestones corresponding to future releases. For\nexample, for a v3.3.0 release, we create both v3.3.1 and v3.4.0."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify the Sonatype release:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Make sure that the release shows up at\n",(0,i.kt)("a",{parentName:"li",href:"https://oss.sonatype.org/content/repositories/releases/org/scalameta/"},"https://oss.sonatype.org/content/repositories/releases/org/scalameta/"),"."),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"./bin/test-release.sh $VERSION")," to ensure that all artifacts have\nsuccessfully been released. It's important to ensure that this script passes\nbefore announcing the release since it takes a while for all published\nartifacts to sync with Maven Central. You might need to update the script if\nthe list of supported versions changed in the meantime."),(0,i.kt)("li",{parentName:"ul"},"To check that the release to Sonatype succeed even if the artifacts are not\nyet available on Maven Central run:\n",(0,i.kt)("inlineCode",{parentName:"li"},"./bin/test-release.sh $VERSION -r sonatype:public")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure all docs are up to date.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Upgrade downstream projects:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals-vscode"},"https://github.com/scalameta/metals-vscode"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"generate metals website with ",(0,i.kt)("inlineCode",{parentName:"li"},"sbt docs/run")),(0,i.kt)("li",{parentName:"ul"},"open ",(0,i.kt)("inlineCode",{parentName:"li"},"website/target/docs/editors/vscode.md"),' and copy everything from\n"Requirements" over to the scalameta/metals-vscode README',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'remove "Using latest SNAPSHOT" section, this table is only up-to-date on\nthe website'))),(0,i.kt)("li",{parentName:"ul"},"check or update ",(0,i.kt)("inlineCode",{parentName:"li"},"enum")," values of ",(0,i.kt)("inlineCode",{parentName:"li"},"fallbackScalaVersion")," property in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),".\nThey should be the same as ",(0,i.kt)("inlineCode",{parentName:"li"},"V.supportedScalaVersions")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"build.sbt")),(0,i.kt)("li",{parentName:"ul"},"open a PR, feel free to merge after CI is green"),(0,i.kt)("li",{parentName:"ul"},"open the last generated release draft, tag with a new version and publish\nthe release. This will start github actions job and publish the extension\nto both the Visual Studio Code Code Marketplace and openvsx."))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Publish the release on GitHub:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/releases"},"https://github.com/scalameta/metals/releases")),(0,i.kt)("li",{parentName:"ul"},"Copy-paste the release from the website blog"),(0,i.kt)("li",{parentName:"ul"},"In the dropdown, pick the recently pushed tag."),(0,i.kt)("li",{parentName:"ul"},"In the release title, say ",(0,i.kt)("inlineCode",{parentName:"li"},"Metals vX.Y.Z"),"."),(0,i.kt)("li",{parentName:"ul"},'Once the VS Code extension has been updated on the Marketplace, click\n"Publish release".'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update version numbers in:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build.sbt")," - update ",(0,i.kt)("inlineCode",{parentName:"li"},"localSnapshotVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".github/ISSUE_TEMPLATE/bug_report.yml")," - update ",(0,i.kt)("inlineCode",{parentName:"li"},"Version of Metals")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},".github/workflows/mtags-auto-release.yml")," - update ",(0,i.kt)("inlineCode",{parentName:"li"},"metals_version")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"metals_ref")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Announce the new release with the link to the release notes:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"on ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/invite/RFpSVth"},"Discord"))))),(0,i.kt)("h2",{id:"add-new-scala-version-support-to-the-existing-release"},"Add new Scala version support to the existing release"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"If it's a Scala2 you need to release semanticdb plugin for it first."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Find out which scalameta version the existing release uses"),(0,i.kt)("li",{parentName:"ul"},"In scalameta project:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"checkout on the tag for this version"),(0,i.kt)("li",{parentName:"ul"},"apply required changes for supporting new Scala2 compiler"),(0,i.kt)("li",{parentName:"ul"},"create and push tag with the following name: ",(0,i.kt)("inlineCode",{parentName:"li"},"semanticdb_v${existing-scalameta-version}_${scala-version}"),"\nNotice this tag should include ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/scalameta/pull/2562/commits/1dfc99677659f5a9919c0dc9166547a0b332d35c"},"these changes in ",(0,i.kt)("inlineCode",{parentName:"a"},"release.yml"))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Release mtags artifact.\nOpen ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/actions/workflows/mtags-auto-release.yml"},(0,i.kt)("inlineCode",{parentName:"a"},"Mtags auto release")," action page"),",\nclick ",(0,i.kt)("inlineCode",{parentName:"p"},"Run Workflow"),", specify Scala version and confirm."))))}c.isMDXComponent=!0}}]);