(window.webpackJsonp=window.webpackJsonp||[]).push([[250],{323:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(3),r=a(8),i=(a(0),a(522)),o={id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},c={unversionedId:"navigation-views",id:"version-4.x/navigation-views",isDocsHomePage:!1,title:"Navigation views",description:"Navigation views are presentation components that take a router and a navigation prop, and can display several screens, as specified by the navigation.state.",source:"@site/versioned_docs/version-4.x/navigation-views.md",slug:"/navigation-views",permalink:"/docs/4.x/navigation-views",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/navigation-views.md",version:"4.x",sidebar_label:"Navigation views",sidebar:"version-4.x-docs",previous:{title:"Custom routers",permalink:"/docs/4.x/custom-routers"},next:{title:"Supported React Native versions",permalink:"/docs/4.x/supported-react-native-versions"}},s=[{value:"Built in Views",id:"built-in-views",children:[]}],p={toc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Navigation views are presentation components that take a ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/routers"},Object(i.b)("inlineCode",{parentName:"a"},"router"))," and a ",Object(i.b)("a",{parentName:"p",href:"/docs/4.x/navigation-prop"},Object(i.b)("inlineCode",{parentName:"a"},"navigation"))," prop, and can display several screens, as specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.state"),"."),Object(i.b)("p",null,"Navigation views are controlled React components that can present the current navigation state. They manage switching of screens, animations and gestures. They also present persistent navigation views such as tab bars and headers."),Object(i.b)("h2",{id:"built-in-views"},"Built in Views"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/blob/4.x/packages/stack/src/views/StackView.tsx"},"StackView")," - Present a stack that looks suitable on any platform",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackViewCard.tsx"},"StackViewCard")," - Present one card from the card stack, with gestures"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-navigation/stack/blob/1.0/src/views/Header/Header.tsx"},"Header")," - The header view for the card stack"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/blob/4.x/packages/core/src/views/SwitchView/SwitchView.js"},"SwitchView")," - A navigator that only ever show one screen at a time, useful for authentication flows."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/tabs"},"Tabs")," - A configurable tab switcher / pager"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/react-navigation/react-navigation/tree/4.x/packages/drawer"},"Drawer")," - A view with a drawer that slides from the left")))}l.isMDXComponent=!0},522:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},v=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(a),v=n,d=b["".concat(o,".").concat(v)]||b[v]||u[v]||i;return a?r.a.createElement(d,c(c({ref:t},p),{},{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=a[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}v.displayName="MDXCreateElement"}}]);