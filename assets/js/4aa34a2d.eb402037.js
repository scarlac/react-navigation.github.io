(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{218:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),r=(n(0),n(522)),o={id:"custom-navigator-overview",title:"Overview",sidebar_label:"Overview"},c={unversionedId:"custom-navigator-overview",id:"version-2.x/custom-navigator-overview",isDocsHomePage:!1,title:"Overview",description:"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure.",source:"@site/versioned_docs/version-2.x/custom-navigator-overview.md",slug:"/custom-navigator-overview",permalink:"/docs/2.x/custom-navigator-overview",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-2.x/custom-navigator-overview.md",version:"2.x",sidebar_label:"Overview",sidebar:"version-2.x-docs",previous:{title:"Redux integration",permalink:"/docs/2.x/redux-integration"},next:{title:"Routers",permalink:"/docs/2.x/routers"}},s=[{value:"Built-in Navigators",id:"built-in-navigators",children:[]},{value:"Rendering screens with Navigators",id:"rendering-screens-with-navigators",children:[{value:"Calling Navigate on Top Level Component",id:"calling-navigate-on-top-level-component",children:[]}]},{value:"Navigation Containers",id:"navigation-containers",children:[{value:"<code>onNavigationStateChange(prevState, newState, action)</code>",id:"onnavigationstatechangeprevstate-newstate-action",children:[]},{value:"<code>uriPrefix</code>",id:"uriprefix",children:[]}]}],l={toc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Navigators allow you to define your application's navigation structure. Navigators also render common elements such as headers and tab bars which you can configure."),Object(r.b)("p",null,"Under the hood, navigators are plain React components."),Object(r.b)("h2",{id:"built-in-navigators"},"Built-in Navigators"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"react-navigation")," includes some commonly needed navigators such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/2.x/stack-navigator"},"createStackNavigator")," - Renders one screen at a time and provides transitions between screens. When a new screen is opened it is placed on top of the stack."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/2.x/bottom-tab-navigator"},Object(r.b)("inlineCode",{parentName:"a"},"createBottomTabNavigator"))," - Renders a tab bar that lets the user switch between several screens."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/2.x/switch-navigator"},"createSwitchNavigator")," - Switch between one screen and another with no UI on top of it, unmount screens when they become inactive."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/2.x/drawer-navigator"},"createDrawerNavigator")," - Provides a drawer that slides in from the left of the screen.")),Object(r.b)("h2",{id:"rendering-screens-with-navigators"},"Rendering screens with Navigators"),Object(r.b)("p",null,"The navigators render application screens which are just React components."),Object(r.b)("p",null,"To learn how to create screens, read about:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/2.x/navigation-prop"},"Screen ",Object(r.b)("inlineCode",{parentName:"a"},"navigation")," prop")," to allow the screen to dispatch navigation actions, such as opening another screen"),Object(r.b)("li",{parentName:"ul"},"Screen ",Object(r.b)("inlineCode",{parentName:"li"},"navigationOptions")," to customize how the screen gets presented by the navigator (e.g. ",Object(r.b)("a",{parentName:"li",href:"/docs/2.x/stack-navigator#navigationoptions-used-by-stacknavigator"},"header title"),", tab label)")),Object(r.b)("h3",{id:"calling-navigate-on-top-level-component"},"Calling Navigate on Top Level Component"),Object(r.b)("p",null,"In case you want to use Navigator from the same level you declare it you can use react's ",Object(r.b)("a",{parentName:"p",href:"https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute"},Object(r.b)("inlineCode",{parentName:"a"},"ref"))," option:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { NavigationActions } from 'react-navigation';\n\nconst AppNavigator = createStackNavigator(SomeAppRouteConfigs);\n\nclass App extends React.Component {\n  someEvent() {\n    // call navigate for AppNavigator here:\n    this.navigator && this.navigator.dispatch(\n      NavigationActions.navigate({ routeName: someRouteName })\n    );\n  }\n  render() {\n    return (\n      <AppNavigator ref={nav => { this.navigator = nav; }} />\n    );\n  }\n}\n")),Object(r.b)("p",null,"Please notice that this solution should only be used on the top level navigator."),Object(r.b)("h2",{id:"navigation-containers"},"Navigation Containers"),Object(r.b)("p",null,"The built in navigators can automatically behave like top-level navigators when the navigation prop is missing. This functionality provides a transparent navigation container, which is where the top-level navigation prop comes from."),Object(r.b)("p",null,"When rendering one of the included navigators, the navigation prop is optional. When it is missing, the container steps in and manages its own navigation state. It also handles URLs, external linking, and Android back button integration."),Object(r.b)("p",null,"For the purpose of convenience, the built-in navigators have this ability because behind the scenes they use ",Object(r.b)("inlineCode",{parentName:"p"},"createNavigationContainer"),". Usually, navigators require a navigation prop in order to function."),Object(r.b)("p",null,"Top-level navigators accept the following props:"),Object(r.b)("h3",{id:"onnavigationstatechangeprevstate-newstate-action"},Object(r.b)("inlineCode",{parentName:"h3"},"onNavigationStateChange(prevState, newState, action)")),Object(r.b)("p",null,"Function that gets called every time navigation state managed by the navigator changes. It receives the previous state, the new state of the navigation and the action that issued state change. By default it prints state changes to the console."),Object(r.b)("h3",{id:"uriprefix"},Object(r.b)("inlineCode",{parentName:"h3"},"uriPrefix")),Object(r.b)("p",null,"The prefix of the URIs that the app might handle. This will be used when handling a ",Object(r.b)("a",{parentName:"p",href:"/docs/2.x/deep-linking"},"deep link")," to extract the path passed to the router."))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},v={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,d=u["".concat(o,".").concat(b)]||u[b]||v[b]||r;return n?i.a.createElement(d,c(c({ref:t},l),{},{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);