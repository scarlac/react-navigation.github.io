(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var o=n(3),a=n(8),i=(n(0),n(522)),r={id:"navigation-context",title:"NavigationContext",sidebar_label:"NavigationContext"},c={unversionedId:"navigation-context",id:"version-4.x/navigation-context",isDocsHomePage:!1,title:"NavigationContext",description:"NavigationContext provides the navigation object (similar to the navigation prop). In fact, withNavigation uses this context to inject the navigation prop to your wrapped component. The hook counterpart is essentially an useContext with this context as well.",source:"@site/versioned_docs/version-4.x/navigation-context.md",slug:"/navigation-context",permalink:"/docs/4.x/navigation-context",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-context.md",version:"4.x",sidebar_label:"NavigationContext",sidebar:"version-4.x-docs",previous:{title:"Navigation prop reference",permalink:"/docs/4.x/navigation-prop"},next:{title:"NavigationEvents reference",permalink:"/docs/4.x/navigation-events"}},s=[{value:"Example with hooks",id:"example-with-hooks",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"NavigationContext")," provides the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," object (similar to the ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/navigation-prop"},"navigation")," prop). In fact, ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/with-navigation"},"withNavigation")," uses this context to inject the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation")," prop to your wrapped component. The ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation-hooks#usenavigation"},"hook counterpart")," is essentially an ",Object(i.b)("inlineCode",{parentName:"p"},"useContext")," with this context as well."),Object(i.b)("p",null,"Most of the time, you won't use ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationContext")," directly, as the provided ",Object(i.b)("inlineCode",{parentName:"p"},"withNavigation")," and ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation-hooks"},"hooks")," already cover most use cases. But just in case you have something else in mind, ",Object(i.b)("inlineCode",{parentName:"p"},"NavigationContext")," is available for you to use."),Object(i.b)("h2",{id:"example-with-hooks"},"Example with hooks"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { useState, useContext, useEffect } from 'react';\nimport { NavigationContext } from 'react-navigation';\n\nexport function useFocusState() {\n  const navigation = useContext(NavigationContext);\n  const isFocused = navigation.isFocused();\n  const [focusState, setFocusState] = useState(getInitialFocusState(isFocused));\n  function handleEvt(e) {\n    const newState = focusStateOfEvent(e.type);\n    newState && setFocusState(newState);\n  }\n  useEffect(() => {\n    const subsA = navigation.addListener('action', handleEvt);\n    const subsWF = navigation.addListener('willFocus', handleEvt);\n    const subsDF = navigation.addListener('didFocus', handleEvt);\n    const subsWB = navigation.addListener('willBlur', handleEvt);\n    const subsDB = navigation.addListener('didBlur', handleEvt);\n    return () => {\n      subsA.remove();\n      subsWF.remove();\n      subsDF.remove();\n      subsWB.remove();\n      subsDB.remove();\n    };\n  });\n  return focusState;\n}\n")))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=o,b=l["".concat(r,".").concat(d)]||l[d]||v[d]||i;return n?a.a.createElement(b,c(c({ref:t},u),{},{components:n})):a.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var u=2;u<i;u++)r[u]=n[u];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);