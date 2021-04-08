(window.webpackJsonp=window.webpackJsonp||[]).push([[362],{436:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(8),o=(a(0),a(522)),r=a(526),b=a(527),l={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},c={unversionedId:"material-bottom-tab-navigator",id:"version-5.x/material-bottom-tab-navigator",isDocsHomePage:!1,title:"createMaterialBottomTabNavigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-5.x/material-bottom-tab-navigator.md",slug:"/material-bottom-tab-navigator",permalink:"/docs/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/material-bottom-tab-navigator.md",version:"5.x",sidebar_label:"createMaterialBottomTabNavigator",sidebar:"version-5.x/docs",previous:{title:"createBottomTabNavigator",permalink:"/docs/bottom-tab-navigator"},next:{title:"createMaterialTopTabNavigator",permalink:"/docs/material-top-tab-navigator"}},s=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[{value:"Props",id:"props",children:[]},{value:"Options",id:"options",children:[]},{value:"Events",id:"events",children:[]},{value:"Helpers",id:"helpers",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[]}],p={toc:s};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes with animation. Routes are lazily initialized - their screen components are not mounted until they are first focused."),Object(o.b)("p",null,"This wraps the ",Object(o.b)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"},Object(o.b)("inlineCode",{parentName:"a"},"BottomNavigation"))," component from ",Object(o.b)("a",{parentName:"p",href:"https://reactnativepaper.com"},Object(o.b)("inlineCode",{parentName:"a"},"react-native-paper")),". If you ",Object(o.b)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},"configure the Babel plugin"),", it won't include the whole ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle."),Object(o.b)("img",{src:"/assets/navigators/tabs/material-bottom-tabs.gif",style:{width:"420px",maxWidth:"100%",margin:"16px 0"}}),Object(o.b)("p",null,"To use this navigator, ensure that you have ",Object(o.b)("a",{parentName:"p",href:"/docs/getting-started"},Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/native")," and its dependencies (follow this guide)"),", then install ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/tree/main/packages/material-bottom-tabs"},Object(o.b)("inlineCode",{parentName:"a"},"@react-navigation/material-bottom-tabs")),":"),Object(o.b)(r.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(b.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install @react-navigation/material-bottom-tabs react-native-paper\n"))),Object(o.b)(b.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"yarn add @react-navigation/material-bottom-tabs react-native-paper\n")))),Object(o.b)("p",null,"This API also requires that you install ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo, it will just work out of the box. Otherwise, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/oblador/react-native-vector-icons#installation"},"follow these installation instructions"),"."),Object(o.b)("p",null,"To use this tab navigator, import it from ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs")),Object(o.b)("h2",{id:"api-definition"},"API Definition"),Object(o.b)("p",null,"To use this tab navigator, import it from ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/material-bottom-tabs"),":"),Object(o.b)("samp",{id:"material-tab-based-navigation-minimal"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator>\n      <Tab.Screen name="Home" component={HomeScreen} />\n      <Tab.Screen name="Settings" component={SettingsScreen} />\n    </Tab.Navigator>\n  );\n}\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For a complete usage guide please visit ",Object(o.b)("a",{parentName:"p",href:"/docs/tab-based-navigation"},"Tab Navigation"))),Object(o.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(o.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(o.b)("h3",{id:"props"},"Props"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"Tab.Navigator")," component accepts following props:"),Object(o.b)("h4",{id:"initialroutename"},Object(o.b)("inlineCode",{parentName:"h4"},"initialRouteName")),Object(o.b)("p",null,"The name of the route to render on first load of the navigator."),Object(o.b)("h4",{id:"screenoptions"},Object(o.b)("inlineCode",{parentName:"h4"},"screenOptions")),Object(o.b)("p",null,"Default options to use for the screens in the navigator."),Object(o.b)("h4",{id:"backbehavior"},Object(o.b)("inlineCode",{parentName:"h4"},"backBehavior")),Object(o.b)("p",null,"Behavior of back button handling."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab (in the order they are shown in the tab bar)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"none")," to not handle back button")),Object(o.b)("h4",{id:"shifting"},Object(o.b)("inlineCode",{parentName:"h4"},"shifting")),Object(o.b)("p",null,"Whether the shifting style is used, the active tab icon shifts up to show the label and the inactive tabs won't have a label."),Object(o.b)("p",null,"By default, this is ",Object(o.b)("inlineCode",{parentName:"p"},"true")," when you have more than 3 tabs. Pass ",Object(o.b)("inlineCode",{parentName:"p"},"shifting={false}")," to explicitly disable this animation, or ",Object(o.b)("inlineCode",{parentName:"p"},"shifting={true}")," to always use this animation."),Object(o.b)("h4",{id:"labeled"},Object(o.b)("inlineCode",{parentName:"h4"},"labeled")),Object(o.b)("p",null,"Whether to show labels in tabs. When ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", only icons will be displayed."),Object(o.b)("h4",{id:"activecolor"},Object(o.b)("inlineCode",{parentName:"h4"},"activeColor")),Object(o.b)("p",null,"Custom color for icon and label in the active tab."),Object(o.b)("h4",{id:"inactivecolor"},Object(o.b)("inlineCode",{parentName:"h4"},"inactiveColor")),Object(o.b)("p",null,"Custom color for icon and label in the inactive tab."),Object(o.b)("h4",{id:"barstyle"},Object(o.b)("inlineCode",{parentName:"h4"},"barStyle")),Object(o.b)("p",null,"Style for the bottom navigation bar. You can pass custom background color here:"),Object(o.b)("samp",{id:"material-bottom-tab-styled"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ backgroundColor: \'#694fad\' }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),Object(o.b)("p",null,"If you have a translucent navigation bar on Android, you can also set a bottom padding here:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'<Tab.Navigator\n  initialRouteName="Home"\n  activeColor="#f0edf6"\n  inactiveColor="#3e2465"\n  barStyle={{ paddingBottom: 48 }}\n>\n  {/* ... */}\n</Tab.Navigator>\n')),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"The following ",Object(o.b)("a",{parentName:"p",href:"/docs/screen-options"},"options")," can be used to configure the screens in the navigator:"),Object(o.b)("h4",{id:"title"},Object(o.b)("inlineCode",{parentName:"h4"},"title")),Object(o.b)("p",null,"Generic title that can be used as a fallback for ",Object(o.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(o.b)("h4",{id:"tabbaricon"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(o.b)("p",null,"Function that given ",Object(o.b)("inlineCode",{parentName:"p"},"{ focused: boolean, color: string }")," returns a React.Node, to display in the tab bar."),Object(o.b)("h4",{id:"tabbarcolor"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarColor")),Object(o.b)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",Object(o.b)("inlineCode",{parentName:"p"},"shifting")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h4",{id:"tabbarlabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(o.b)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",Object(o.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(o.b)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),Object(o.b)("h4",{id:"tabbarbadge"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarBadge")),Object(o.b)("p",null,"Badge to show on the tab icon, can be ",Object(o.b)("inlineCode",{parentName:"p"},"true")," to show a dot, ",Object(o.b)("inlineCode",{parentName:"p"},"string")," or ",Object(o.b)("inlineCode",{parentName:"p"},"number")," to show text."),Object(o.b)("h4",{id:"tabbaraccessibilitylabel"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(o.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(o.b)("h4",{id:"tabbartestid"},Object(o.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(o.b)("p",null,"ID to locate this tab button in tests."),Object(o.b)("h3",{id:"events"},"Events"),Object(o.b)("p",null,"The navigator can ",Object(o.b)("a",{parentName:"p",href:"/docs/navigation-events"},"emit events")," on certain actions. Supported events are:"),Object(o.b)("h4",{id:"tabpress"},Object(o.b)("inlineCode",{parentName:"h4"},"tabPress")),Object(o.b)("p",null,"This event is fired when the user presses the tab button for the current screen in the tab bar. By default a tab press does several things:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If the tab is not focused, tab press will focus that tab"),Object(o.b)("li",{parentName:"ul"},"If the tab is already focused:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"If the screen for the tab renders a scroll view, you can use ",Object(o.b)("a",{parentName:"li",href:"/docs/use-scroll-to-top"},Object(o.b)("inlineCode",{parentName:"a"},"useScrollToTop"))," to scroll it to top"),Object(o.b)("li",{parentName:"ul"},"If the screen for the tab renders a stack navigator, a ",Object(o.b)("inlineCode",{parentName:"li"},"popToTop")," action is performed on the stack")))),Object(o.b)("p",null,"To prevent the default behavior, you can call ",Object(o.b)("inlineCode",{parentName:"p"},"event.preventDefault"),":"),Object(o.b)("samp",{id:"material-bottom-tab-prevent-default"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"React.useEffect(() => {\n  const unsubscribe = navigation.addListener('tabPress', (e) => {\n    // Prevent default behavior\n\n    e.preventDefault();\n    // Do something manually\n    // ...\n  });\n\n  return unsubscribe;\n}, [navigation]);\n")),Object(o.b)("h3",{id:"helpers"},"Helpers"),Object(o.b)("p",null,"The tab navigator adds the following methods to the navigation prop:"),Object(o.b)("h4",{id:"jumpto"},Object(o.b)("inlineCode",{parentName:"h4"},"jumpTo")),Object(o.b)("p",null,"Navigates to an existing screen in the tab navigator. The method accepts following arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name")," - ",Object(o.b)("em",{parentName:"li"},"string")," - Name of the route to jump to."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"params")," - ",Object(o.b)("em",{parentName:"li"},"object")," - Screen params to merge into the destination route (found in the pushed screen through ",Object(o.b)("inlineCode",{parentName:"li"},"route.params"),").")),Object(o.b)("samp",{id:"material-tab-jump-to"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"navigation.jumpTo('Profile', { name: 'Micha\u015b' });\n")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("samp",{id:"material-bottom-tab-example"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { createMaterialBottomTabNavigator } from \'@react-navigation/material-bottom-tabs\';\nimport MaterialCommunityIcons from \'react-native-vector-icons/MaterialCommunityIcons\';\n\nconst Tab = createMaterialBottomTabNavigator();\n\nfunction MyTabs() {\n  return (\n    <Tab.Navigator\n      initialRouteName="Feed"\n      activeColor="#e91e63"\n      barStyle={{ backgroundColor: \'tomato\' }}\n    >\n      <Tab.Screen\n        name="Feed"\n        component={Feed}\n        options={{\n          tabBarLabel: \'Home\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="home" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Notifications"\n        component={Notifications}\n        options={{\n          tabBarLabel: \'Updates\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="bell" color={color} size={26} />\n          ),\n        }}\n      />\n      <Tab.Screen\n        name="Profile"\n        component={Profile}\n        options={{\n          tabBarLabel: \'Profile\',\n          tabBarIcon: ({ color }) => (\n            <MaterialCommunityIcons name="account" color={color} size={26} />\n          ),\n        }}\n      />\n    </Tab.Navigator>\n  );\n}\n')),Object(o.b)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",Object(o.b)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),Object(o.b)("p",null,"You can use the theming support in ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",Object(o.b)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/getting-started.html"},Object(o.b)("inlineCode",{parentName:"a"},"Provider")," from ",Object(o.b)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",Object(o.b)("a",{parentName:"p",href:"https://callstack.github.io/react-native-paper/theming.html"},"instructions on ",Object(o.b)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}u.isMDXComponent=!0},522:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||o;return a?i.a.createElement(d,b(b({ref:t},c),{},{components:a})):i.a.createElement(d,b({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,r[1]=b;for(var c=2;c<o;c++)r[c]=a[c];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},523:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},524:function(e,t,a){"use strict";var n=a(0),i=a(525);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},525:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},526:function(e,t,a){"use strict";var n=a(0),i=a.n(n),o=a(524),r=a(523),b=a(59),l=a.n(b);var c=37,s=39;t.a=function(e){var t=e.lazy,a=e.block,b=e.defaultValue,p=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),h=d.tabGroupChoices,v=d.setTabGroupChoices,f=Object(n.useState)(b),O=f[0],j=f[1],g=n.Children.toArray(e.children),N=[];if(null!=u){var y=h[u];null!=y&&y!==O&&p.some((function(e){return e.value===y}))&&j(y)}var C=function(e){var t=e.target,a=N.indexOf(t),n=g[a].props.value;j(n),null!=u&&(v(u,n),setTimeout((function(){var e,a,n,i,o,r,b,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,i=e.bottom,o=e.right,r=window,b=r.innerHeight,c=r.innerWidth,a>=0&&o<=c&&i<=b&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l.a.tabItemActive),setTimeout((function(){return t.classList.remove(l.a.tabItemActive)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case s:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case c:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null===(t=a)||void 0===t||t.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:C,onClick:C},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},527:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){var t=e.children,a=e.hidden,n=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}}}]);