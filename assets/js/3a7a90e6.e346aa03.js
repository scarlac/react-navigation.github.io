(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),i=(n(0),n(522)),o={id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},c={unversionedId:"alternatives",id:"version-5.x/alternatives",isDocsHomePage:!1,title:"Alternative libraries",description:"React Navigation isn't your only option for routing and navigation in React Native. If the pitch & anti-pitch or the API design leave you wanting to explore other options, here are a couple to consider.",source:"@site/versioned_docs/version-5.x/alternatives.md",slug:"/alternatives",permalink:"/docs/alternatives",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/alternatives.md",version:"5.x",sidebar_label:"Alternative libraries",sidebar:"version-5.x/docs",previous:{title:"Pitch & anti-pitch",permalink:"/docs/pitch"},next:{title:"Apps using React Navigation",permalink:"/docs/used-by"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"React Navigation isn't your only option for routing and navigation in React Native. If the ",Object(i.b)("a",{parentName:"p",href:"/docs/pitch"},"pitch & anti-pitch")," or the API design leave you wanting to explore other options, here are a couple to consider."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/aksonov/react-native-router-flux"},"react-native-router-flux"),": this library is based on React Navigation but provides you with a different API to interact with it."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),": uses the underlying native APIs on iOS and Android, similar to ",Object(i.b)("a",{parentName:"li",href:"/docs/native-stack-navigator"},"createNativeStackNavigator"),". This is a popular alternative to React Navigation and may be a better fit for you if you are trying to integrate React Native into an existing large native app.")))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,f=u["".concat(o,".").concat(b)]||u[b]||v[b]||i;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);