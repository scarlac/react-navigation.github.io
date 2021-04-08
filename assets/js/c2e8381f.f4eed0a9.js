(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{423:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),o=t(8),r=(t(0),t(522)),i={id:"navigation-events",title:"NavigationEvents reference",sidebar_label:"NavigationEvents"},c={unversionedId:"navigation-events",id:"version-3.x/navigation-events",isDocsHomePage:!1,title:"NavigationEvents reference",description:"NavigationEvents is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount.",source:"@site/versioned_docs/version-3.x/navigation-events.md",slug:"/navigation-events",permalink:"/docs/3.x/navigation-events",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/navigation-events.md",version:"3.x",sidebar_label:"NavigationEvents",sidebar:"version-3.x-docs",previous:{title:"NavigationContext",permalink:"/docs/3.x/navigation-context"},next:{title:"createStackNavigator",permalink:"/docs/3.x/stack-navigator"}},l=[{value:"Component props",id:"component-props",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function p(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"NavigationEvents")," is a React component providing a declarative API to subscribe to navigation events. It will subscribe to navigation events on mount, and unsubscribe on unmount."),Object(r.b)("h3",{id:"component-props"},"Component props"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation")," - navigation props (optional, defaults to reading from React context)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onWillFocus")," - event listener"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDidFocus")," - event listener"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onWillBlur")," - event listener"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"onDidBlur")," - event listener")),Object(r.b)("p",null,"The event listener is the same as the imperative ",Object(r.b)("a",{parentName:"p",href:"/docs/3.x/navigation-prop#addlistener-subscribe-to-updates-to-navigation-lifecycle"},Object(r.b)("inlineCode",{parentName:"a"},"navigation.addListener(...)"))," API."),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:"harmony",harmony:!0},"import React from 'react';\nimport { View } from 'react-native';\nimport { NavigationEvents } from 'react-navigation';\n\nconst MyScreen = () => (\n  <View>\n    <NavigationEvents\n      onWillFocus={payload => console.log('will focus',payload)}\n      onDidFocus={payload => console.log('did focus',payload)}\n      onWillBlur={payload => console.log('will blur',payload)}\n      onDidBlur={payload => console.log('did blur',payload)}\n    />\n    {/*\n      Your view code\n    */}\n  </View>\n);\n\nexport default MyScreen;\n")))}p.isMDXComponent=!0},522:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),p=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},v={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,d=u["".concat(i,".").concat(b)]||u[b]||v[b]||r;return t?o.a.createElement(d,c(c({ref:n},s),{},{components:t})):o.a.createElement(d,c({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);