(window.webpackJsonp=window.webpackJsonp||[]).push([[394],{467:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(522)),o=t(526),c=t(527),s={id:"drawer-based-navigation",title:"Drawer navigation",sidebar_label:"Drawer navigation"},l={unversionedId:"drawer-based-navigation",id:"version-6.x/drawer-based-navigation",isDocsHomePage:!1,title:"Drawer navigation",description:"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens.",source:"@site/versioned_docs/version-6.x/drawer-based-navigation.md",slug:"/drawer-based-navigation",permalink:"/docs/6.x/drawer-based-navigation",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/drawer-based-navigation.md",version:"6.x",sidebar_label:"Drawer navigation",sidebar:"version-6.x/docs",previous:{title:"Tab navigation",permalink:"/docs/6.x/tab-based-navigation"},next:{title:"Authentication flows",permalink:"/docs/6.x/auth-flow"}},u=[{value:"Minimal example of drawer-based navigation",id:"minimal-example-of-drawer-based-navigation",children:[]},{value:"Opening and closing drawer",id:"opening-and-closing-drawer",children:[]}],d={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Common pattern in navigation is to use drawer from left (sometimes right) side for navigating between screens."),Object(i.b)("div",{style:{display:"flex",margin:"16px 0"}},Object(i.b)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0},Object(i.b)("source",{src:"/assets/navigators/drawer/drawer.mov"}))),Object(i.b)("p",null,"Before continuing, first install ",Object(i.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/drawer"},Object(i.b)("inlineCode",{parentName:"a"},"@react-navigation/drawer")),":"),Object(i.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/drawer@next\n"))),Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/drawer@next\n")))),Object(i.b)("h2",{id:"minimal-example-of-drawer-based-navigation"},"Minimal example of drawer-based navigation"),Object(i.b)("p",null,"To use this drawer navigator, import it from ",Object(i.b)("inlineCode",{parentName:"p"},"@react-navigation/drawer"),":\n(swipe right to open)"),Object(i.b)("samp",{id:"drawer-based-navigation"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { Button, View } from 'react-native';\nimport { createDrawerNavigator } from '@react-navigation/drawer';\nimport { NavigationContainer } from '@react-navigation/native';\n\nfunction HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button\n        onPress={() => navigation.navigate('Notifications')}\n        title=\"Go to notifications\"\n      />\n    </View>\n  );\n}\n\nfunction NotificationsScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n      <Button onPress={() => navigation.goBack()} title=\"Go back home\" />\n    </View>\n  );\n}\n\nconst Drawer = createDrawerNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Drawer.Navigator initialRouteName=\"Home\">\n        <Drawer.Screen name=\"Home\" component={HomeScreen} />\n        <Drawer.Screen name=\"Notifications\" component={NotificationsScreen} />\n      </Drawer.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(i.b)("h2",{id:"opening-and-closing-drawer"},"Opening and closing drawer"),Object(i.b)("p",null,"To open and close drawer, use the following helpers:"),Object(i.b)("samp",{id:"drawer-open-close-toggle"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"navigation.openDrawer();\nnavigation.closeDrawer();\n")),Object(i.b)("p",null,"If you would like to toggle the drawer you call the following:"),Object(i.b)("samp",{id:"drawer-open-close-toggle"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"navigation.toggleDrawer();\n")),Object(i.b)("p",null,"Each of these functions, behind the scenes, are simply dispatching actions:"),Object(i.b)("samp",{id:"drawer-dispatch"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"navigation.dispatch(DrawerActions.openDrawer());\nnavigation.dispatch(DrawerActions.closeDrawer());\nnavigation.dispatch(DrawerActions.toggleDrawer());\n")),Object(i.b)("p",null,"If you would like to determine if drawer is open or closed, you can do the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"import { useIsDrawerOpen } from '@react-navigation/drawer';\n\n// ...\n\nconst isDrawerOpen = useIsDrawerOpen();\n")))}p.isMDXComponent=!0},522:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),u=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=a,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||i;return t?r.a.createElement(m,c(c({ref:n},l),{},{components:t})):r.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},523:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},524:function(e,n,t){"use strict";var a=t(0),r=t(525);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},525:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},526:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(524),o=t(523),c=t(59),s=t.n(c);var l=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,b=e.className,m=Object(i.a)(),g=m.tabGroupChoices,f=m.setTabGroupChoices,v=Object(a.useState)(c),w=v[0],O=v[1],j=a.Children.toArray(e.children),y=[];if(null!=p){var h=g[p];null!=h&&h!==w&&d.some((function(e){return e.value===h}))&&O(h)}var N=function(e){var n=e.target,t=y.indexOf(n),a=j[t].props.value;O(a),null!=p&&(f(p,a),setTimeout((function(){var e,t,a,r,i,o,c,l;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,c=o.innerHeight,l=o.innerWidth,t>=0&&i<=l&&r<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s.a.tabItemActive),setTimeout((function(){return n.classList.remove(s.a.tabItemActive)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case u:var a=y.indexOf(e.target)+1;t=y[a]||y[0];break;case l:var r=y.indexOf(e.target)-1;t=y[r]||y[y.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},d.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:Object(o.a)("tabs__item",s.a.tabItem,{"tabs__item--active":w===n}),key:n,ref:function(e){return y.push(e)},onKeyDown:x,onFocus:N,onClick:N},t)}))),n?Object(a.cloneElement)(j.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}},527:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);