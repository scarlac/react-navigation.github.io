(window.webpackJsonp=window.webpackJsonp||[]).push([[426],{499:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(8),o=(n(0),n(522)),s={id:"status-bar",title:"Different status bar configuration based on route",sidebar_label:"Different status bar configuration based on route"},c={unversionedId:"status-bar",id:"version-4.x/status-bar",isDocsHomePage:!1,title:"Different status bar configuration based on route",description:"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content.",source:"@site/versioned_docs/version-4.x/status-bar.md",slug:"/status-bar",permalink:"/docs/4.x/status-bar",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/status-bar.md",version:"4.x",sidebar_label:"Different status bar configuration based on route",sidebar:"version-4.x-docs",previous:{title:"Supporting safe areas",permalink:"/docs/4.x/handling-iphonex"},next:{title:"Navigation options resolution",permalink:"/docs/4.x/navigation-options-resolution"}},i=[{value:"Stack and drawer navigators",id:"stack-and-drawer-navigators",children:[]},{value:"Tabs and Drawer",id:"tabs-and-drawer",children:[]}],u={toc:i};function l(e){var t=e.components,s=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you don't have a navigation header, or your navigation header changes color based on the route, you'll want to ensure that the correct color is used for the content."),Object(o.b)("h2",{id:"stack-and-drawer-navigators"},"Stack and drawer navigators"),Object(o.b)("p",null,"This is a simple task when using a stack or drawer. You can simply render the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," component, which is exposed by React Native, and set your config."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>\n        <StatusBar barStyle=\"light-content\" backgroundColor=\"#6a51ae\" />\n        <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen2')}\n          color={isAndroid ? 'blue' : '#fff'}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <StatusBar barStyle=\"dark-content\" backgroundColor=\"#ecf0f1\" />\n        <Text style={styles.paragraph}>Dark Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"export default createStackNavigator(\n  {\n    Screen1: {\n      screen: Screen1,\n    },\n    Screen2: {\n      screen: Screen2,\n    },\n  },\n  {\n    headerMode: 'none',\n  }\n);\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"StackNavigator with different StatusBar configs",src:n(542).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"export default createDrawerNavigator({\n  Screen1: {\n    screen: Screen1,\n  },\n  Screen2: {\n    screen: Screen2,\n  },\n});\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"DrawerNavigator with different StatusBar configs",src:n(543).default})),Object(o.b)("h2",{id:"tabs-and-drawer"},"Tabs and Drawer"),Object(o.b)("p",null,"If you're using a tab or drawer navigator, it's a bit more complex because all of the screens in the navigator might be rendered at once and kept rendered - that means that the last ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," config you set will be used (likely on the final tab of your tab navigator, not what the user is seeing)."),Object(o.b)("p",null,"To fix this, we'll have to do make the status bar component aware of screen focus and render it only when the screen is focused. We can achieve this by using the ",Object(o.b)("a",{parentName:"p",href:"/docs/4.x/with-navigation-focus"},Object(o.b)("inlineCode",{parentName:"a"},"withNavigationFocus")," HOC")," and creating a wrapper component:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { StatusBar } from 'react-native';\nimport { withNavigationFocus } from 'react-navigation';\n\nconst FocusAwareStatusBar = withNavigationFocus(({ isFocused, ...rest }) =>\n  isFocused ? <StatusBar {...rest} /> : null\n);\n")),Object(o.b)("p",null,"Now, our screens (both ",Object(o.b)("inlineCode",{parentName:"p"},"Screen1.js")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Screen2.js"),") will use the ",Object(o.b)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component instead of the ",Object(o.b)("inlineCode",{parentName:"p"},"StatusBar")," component from React Native:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"class Screen1 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>\n        <FocusAwareStatusBar\n          barStyle=\"light-content\"\n          backgroundColor=\"#6a51ae\"\n        />\n        <Text style={[styles.paragraph, { color: '#fff' }]}>Light Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen2')}\n          color={isAndroid ? 'blue' : '#fff'}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n\nclass Screen2 extends React.Component {\n  render() {\n    return (\n      <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>\n        <FocusAwareStatusBar\n          barStyle=\"dark-content\"\n          backgroundColor=\"#ecf0f1\"\n        />\n        <Text style={styles.paragraph}>Dark Screen</Text>\n        <Button\n          title=\"Next screen\"\n          onPress={() => this.props.navigation.navigate('Screen1')}\n        />\n      </SafeAreaView>\n    );\n  }\n}\n")),Object(o.b)("p",null,"Although not necessary, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"FocusAwareStatusBar")," component in the screens of the stack navigator as well."),Object(o.b)("p",null,Object(o.b)("img",{alt:"TabNavigator with different StatusBar configs",src:n(544).default})))}l.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=l(n),p=a,f=b["".concat(s,".").concat(p)]||b[p]||d[p]||o;return n?r.a.createElement(f,c(c({ref:t},u),{},{components:n})):r.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var u=2;u<o;u++)s[u]=n[u];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},542:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/statusbar-stack-demo-695c18cfc1489cd5c4c18827bc66befb.gif"},543:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/statusbar-drawer-demo-3f6ce5c56a2086d8aba8ab2f1f3f513e.gif"},544:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/statusbar-tab-demo-c5f932fea901d54665ed07f921ad8322.gif"}}]);