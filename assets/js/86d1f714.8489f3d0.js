(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{327:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),i=n(8),a=(n(0),n(522)),o={id:"alternatives",title:"Alternative libraries",sidebar_label:"Alternative libraries"},c={unversionedId:"alternatives",id:"version-3.x/alternatives",isDocsHomePage:!1,title:"Alternative libraries",description:"React Navigation isn't your only option for routing and navigation in React Native. If the pitch & anti-pitch or the API design leave you wanting to explore other options, here are a few to consider.",source:"@site/versioned_docs/version-3.x/alternatives.md",slug:"/alternatives",permalink:"/docs/3.x/alternatives",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/alternatives.md",version:"3.x",sidebar_label:"Alternative libraries",sidebar:"version-3.x-docs",previous:{title:"Pitch & anti-pitch",permalink:"/docs/3.x/pitch"},next:{title:"React Navigation contributor guide",permalink:"/docs/3.x/contributing"}},l=[],u={toc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"React Navigation isn't your only option for routing and navigation in React Native. If the ",Object(a.b)("a",{parentName:"p",href:"/docs/3.x/pitch"},"pitch & anti-pitch")," or the API design leave you wanting to explore other options, here are a few to consider."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/aksonov/react-native-router-flux"},"react-native-router-flux"),": this library is based on React Navigation but provides you with a different API to interact with it."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://github.com/wix/react-native-navigation"},"react-native-navigation"),": uses the underlying native APIs on iOS and Android, this is a popular alternative to React Navigation and worth considering if you value adhering to the platform conventions exactly and do not care as much about customization.")))}s.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(o,".").concat(d)]||p[d]||v[d]||a;return n?i.a.createElement(f,c(c({ref:t},u),{},{components:n})):i.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);