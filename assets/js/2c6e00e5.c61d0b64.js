(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),r=(n(0),n(522)),i={id:"glossary-of-terms",title:"Glossary of terms",sidebar_label:"Glossary of terms"},s={unversionedId:"glossary-of-terms",id:"version-4.x/glossary-of-terms",isDocsHomePage:!1,title:"Glossary of terms",description:"This is a new section of the documentation and it's missing a lot of terms! Please submit a pull request or an issue with a term that you think should be explained here.",source:"@site/versioned_docs/version-4.x/glossary-of-terms.md",slug:"/glossary-of-terms",permalink:"/docs/4.x/glossary-of-terms",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/glossary-of-terms.md",version:"4.x",sidebar_label:"Glossary of terms",sidebar:"version-4.x-docs",previous:{title:"Next steps",permalink:"/docs/4.x/next-steps"},next:{title:"Common mistakes",permalink:"/docs/4.x/common-mistakes"}},c=[{value:"Header",id:"header",children:[]},{value:"Screen component",id:"screen-component",children:[]},{value:"Navigation Prop",id:"navigation-prop",children:[]},{value:"Navigation State",id:"navigation-state",children:[]},{value:"Route",id:"route",children:[]},{value:"Child Navigation State",id:"child-navigation-state",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is a new section of the documentation and it's missing a lot of terms! Please ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-navigation/website"},"submit a pull request or an issue")," with a term that you think should be explained here.")),Object(r.b)("h2",{id:"header"},"Header"),Object(r.b)("p",null,"Also known as navigation header, navigation bar, navbar, and probably many other things. This is the rectangle at the top of your screen that contains the back button and the title for your screen. The entire rectangle is often referred to as the header in React Navigation."),Object(r.b)("h2",{id:"screen-component"},"Screen component"),Object(r.b)("p",null,"A screen component is a component that we use in our route configuration."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const AppNavigator = createStackNavigator(\n  {\n    Home: {\n      screen: HomeScreen, // <----\n    },\n    Details: {\n      screen: DetailsScreen, // <----\n    },\n  },\n  {\n    initialRouteName: 'Home',\n  }\n);\n")),Object(r.b)("p",null,"The suffix ",Object(r.b)("inlineCode",{parentName:"p"},"Screen")," in the component name is entirely optional, but a frequently used convention; we could call it ",Object(r.b)("inlineCode",{parentName:"p"},"CasaPantalla")," and this would work just the same."),Object(r.b)("p",null,"We saw earlier that our screen components are provided with the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation")," prop. It's important to note that ",Object(r.b)("em",{parentName:"p"},"this only happens if the screen is rendered as a route by React Navigation")," (for example, in response to ",Object(r.b)("inlineCode",{parentName:"p"},"this.props.navigation.navigate"),"). For example, if we render ",Object(r.b)("inlineCode",{parentName:"p"},"DetailsScreen")," as a child of ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"DetailsScreen")," won't be provided with the ",Object(r.b)("inlineCode",{parentName:"p"},"navigation"),' prop, and when you press the "Go to Details... again" button on the Home screen, the app will throw one of the quintessential JavaScript exceptions "undefined is not an object".'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"class HomeScreen extends React.Component {\n  render() {\n    return (\n      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>\n        <Text>Home Screen</Text>\n        <Button\n          title=\"Go to Details\"\n          onPress={() => this.props.navigation.navigate('Details')}\n        />\n        <DetailsScreen />\n      </View>\n    );\n  }\n}\n")),Object(r.b)("a",{href:"https://snack.expo.io/@react-navigation/screen-components-v3",target:"blank",class:"run-code-button"},"\u2192 Run this code"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"/docs/4.x/navigation-prop"},'"Navigation prop reference"')," section goes into more detail on this, describes workarounds, and provides more information on other properties available on ",Object(r.b)("inlineCode",{parentName:"p"},"this.props.navigation"),"."),Object(r.b)("h2",{id:"navigation-prop"},"Navigation Prop"),Object(r.b)("p",null,"This prop will be passed into all screens, and it can be used for the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dispatch")," will send an action up to the router"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"state")," is the current route for the screen"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"getParam")," is a helper to access a param that may be on the route"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigate"),", ",Object(r.b)("inlineCode",{parentName:"li"},"goBack"),", etc are available to dispatch actions in a convenient way")),Object(r.b)("p",null,"Navigators can also accept a navigation prop, which they should get from the parent navigator, if there is one."),Object(r.b)("p",null,"For more details, see the ",Object(r.b)("a",{parentName:"p",href:"/docs/4.x/navigation-prop"},'"Navigation prop document"'),"."),Object(r.b)("h2",{id:"navigation-state"},"Navigation State"),Object(r.b)("p",null,"The state of a navigator generally looks something like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "StackRouterRoot",\n  "index": 1,\n  "routes": [\n    { "key": "A", "routeName": "Home" },\n    { "key": "B", "routeName": "Profile" }\n  ]\n}\n')),Object(r.b)("p",null,'For this navigation state, there are two routes (which may be tabs, or cards in a stack). The index indicates the active route, which is "B".'),Object(r.b)("h2",{id:"route"},"Route"),Object(r.b)("p",null,'Each route is a piece of navigation state which contains a key to identify it, and a "routeName" to designate the type of route. It can also contain arbitrary params:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "B",\n  "routeName": "Profile",\n  "params": { "id": "123" }\n}\n')),Object(r.b)("h2",{id:"child-navigation-state"},"Child Navigation State"),Object(r.b)("p",null,"When composing navigators, it is possible for a route to be a navigation state. It would look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},"{\n  key: 'B',\n  routeName: 'Profile',\n  params: { id: '123' },\n  index: 1,\n  routes: [ {...}, {...} ]\n}\n")))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?o.a.createElement(m,s(s({ref:t},l),{},{components:n})):o.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);