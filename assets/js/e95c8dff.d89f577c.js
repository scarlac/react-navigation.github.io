(window.webpackJsonp=window.webpackJsonp||[]).push([[407],{480:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return l}));var a=t(3),o=t(8),i=(t(0),t(522)),r={id:"navigation-options",title:"navigation-options",sidebar_label:"Configuring Navigation Options"},c={unversionedId:"navigation-options",id:"version-1.x/navigation-options",isDocsHomePage:!1,title:"navigation-options",description:"Each screen can configure various aspects about how it gets presented in parent navigators. You can configure",source:"@site/versioned_docs/version-1.x/navigation-options.md",slug:"/navigation-options",permalink:"/docs/1.x/navigation-options",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-1.x/navigation-options.md",version:"1.x",sidebar_label:"Configuring Navigation Options"},p=[{value:"Navigation Option Reference",id:"navigation-option-reference",children:[]}],s={toc:p};function l(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Each screen can configure various aspects about how it gets presented in parent navigators. You can configure"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Static configuration:")," Each navigation option can either be directly assigned:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"class MyScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Great',\n  };\n  ...\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Dynamic Configuration")),Object(i.b)("p",null,"Or, the options can be a function that takes the following arguments, and returns an object of navigation options that will override the route-defined and navigator-defined navigationOptions."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"props")," - The same props that are available to the screen component",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation")," - The ",Object(i.b)("a",{parentName:"li",href:"/docs/1.x/navigation-prop"},"navigation prop")," for the screen, with the screen's route at ",Object(i.b)("inlineCode",{parentName:"li"},"navigation.state")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screenProps")," - The props passing from above the navigator component"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigationOptions")," - The default or previous options that would be used if new values are not provided")))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'class ProfileScreen extends React.Component {\n  static navigationOptions = ({ navigation, screenProps }) => ({\n    title: navigation.state.params.name + "\'s Profile!",\n    headerRight: <Button color={screenProps.tintColor} {...} />,\n  });\n  ...\n')),Object(i.b)("p",null,"The screenProps are passed in at render-time. If this screen was hosted in a SimpleApp navigator:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"<SimpleApp\n  screenProps={{tintColor: 'blue'}}\n  // navigation={{state, dispatch}} // optionally control the app\n/>\n")),Object(i.b)("h4",{id:"generic-navigation-options"},"Generic Navigation Options"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"title")," navigation option is generic between every navigator. It is used to set the title string for a given screen."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"class MyScreen extends React.Component {\n  static navigationOptions = {\n    title: 'Great',\n  };\n  ...\n")),Object(i.b)("p",null,"Unlike the other nav options which are only utilized by the navigator view, the title option can be used by the environment to update the title in the browser window or app switcher."),Object(i.b)("h4",{id:"default-navigation-options"},"Default Navigation Options"),Object(i.b)("p",null,"It's very common to define ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on a screen, but sometimes it is useful to define ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on a navigator too."),Object(i.b)("p",null,"Imagine the following scenario:\nYour ",Object(i.b)("inlineCode",{parentName:"p"},"TabNavigator")," represents one of the screens in the app, and is nested within a top-level ",Object(i.b)("inlineCode",{parentName:"p"},"StackNavigator"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"StackNavigator({\n  route1: { screen: RouteOne },\n  route2: { screen: MyTabNavigator },\n});\n")),Object(i.b)("p",null,"Now, when ",Object(i.b)("inlineCode",{parentName:"p"},"route2")," is active, you would like to change the tint color of a header. It's easy to do it for ",Object(i.b)("inlineCode",{parentName:"p"},"route1"),", and it should also be easy to do it for ",Object(i.b)("inlineCode",{parentName:"p"},"route2"),". This is what Default Navigation Options are for - they are simply ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," set on a navigator:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const MyTabNavigator = TabNavigator({\n  profile: ProfileScreen,\n  ...\n}, {\n  navigationOptions: {\n    headerTintColor: 'blue',\n  },\n});\n")),Object(i.b)("p",null,"Note that you can still decide to ",Object(i.b)("strong",{parentName:"p"},"also")," specify the ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," on the screens at the leaf level - e.g.  the ",Object(i.b)("inlineCode",{parentName:"p"},"ProfileScreen")," above. The ",Object(i.b)("inlineCode",{parentName:"p"},"navigationOptions")," from the screen will be merged key-by-key with the default options coming from the navigator. Whenever both the navigator and screen define the same option (e.g. ",Object(i.b)("inlineCode",{parentName:"p"},"headerTintColor"),"), the screen wins. Therefore, you could change the tint color when ",Object(i.b)("inlineCode",{parentName:"p"},"ProfileScreen")," is active by doing the following:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"class ProfileScreen extends React.Component {\n  static navigationOptions = {\n    headerTintColor: 'black',\n  };\n  ...\n}\n")),Object(i.b)("h2",{id:"navigation-option-reference"},"Navigation Option Reference"),Object(i.b)("p",null,"List of available navigation options depends on the ",Object(i.b)("inlineCode",{parentName:"p"},"navigator")," the screen is added to."),Object(i.b)("p",null,"Check available options for:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.x/drawer-navigator#screen-navigation-options"},Object(i.b)("inlineCode",{parentName:"a"},"drawer navigator"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.x/stack-navigator#screen-navigation-options"},Object(i.b)("inlineCode",{parentName:"a"},"stack navigator"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/1.x/tab-navigator#screen-navigation-options"},Object(i.b)("inlineCode",{parentName:"a"},"tab navigator")))))}l.isMDXComponent=!0},522:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),o=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),l=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},b=function(e){var n=l(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},d=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(t),d=a,g=b["".concat(r,".").concat(d)]||b[d]||u[d]||i;return t?o.a.createElement(g,c(c({ref:n},s),{},{components:t})):o.a.createElement(g,c({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);