(window.webpackJsonp=window.webpackJsonp||[]).push([[272],{347:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(8),i=(n(0),n(522)),r={id:"modal",title:"Opening a full-screen modal",sidebar_label:"Opening a full-screen modal"},c={unversionedId:"modal",id:"version-6.x/modal",isDocsHomePage:!1,title:"Opening a full-screen modal",description:"Modal shown on screen",source:"@site/versioned_docs/version-6.x/modal.md",slug:"/modal",permalink:"/docs/6.x/modal",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/modal.md",version:"6.x",sidebar_label:"Opening a full-screen modal",sidebar:"version-6.x/docs",previous:{title:"Navigation lifecycle",permalink:"/docs/6.x/navigation-lifecycle"},next:{title:"Next steps",permalink:"/docs/6.x/next-steps"}},l=[{value:"Creating a modal stack",id:"creating-a-modal-stack",children:[]},{value:"Summary",id:"summary",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("img",{alt:"Modal shown on screen",src:n(585).default})),Object(i.b)("p",null,"A modal displays content that temporarily blocks interactions with the main view."),Object(i.b)("p",null,"A modal is like a popup ","\u2014"," it's not part of your primary navigation flow ","\u2014"," it usually has a different transition, a different way to dismiss it, and is intended to focus on one particular piece of content or interaction."),Object(i.b)("p",null,"The purpose of explaining this as part of the React Navigation fundamentals is not only because this is a common use case, but also because the implementation requires knowledge of ",Object(i.b)("a",{parentName:"p",href:"/docs/6.x/nesting-navigators"},"nesting navigators"),", which is an important part of React Navigation."),Object(i.b)("h2",{id:"creating-a-modal-stack"},"Creating a modal stack"),Object(i.b)("samp",{id:"full-screen-modal"}),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},'function HomeScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>\n      <Button\n        onPress={() => navigation.navigate(\'MyModal\')}\n        title="Open Modal"\n      />\n    </View>\n  );\n}\n\nfunction DetailsScreen() {\n  return (\n    <View>\n      <Text>Details</Text>\n    </View>\n  );\n}\n\nfunction ModalScreen({ navigation }) {\n  return (\n    <View style={{ flex: 1, alignItems: \'center\', justifyContent: \'center\' }}>\n      <Text style={{ fontSize: 30 }}>This is a modal!</Text>\n      <Button onPress={() => navigation.goBack()} title="Dismiss" />\n    </View>\n  );\n}\n\nconst MainStack = createStackNavigator();\nconst RootStack = createStackNavigator();\n\nfunction MainStackScreen() {\n  return (\n    <MainStack.Navigator>\n      <MainStack.Screen name="Home" component={HomeScreen} />\n      <MainStack.Screen name="Details" component={DetailsScreen} />\n    </MainStack.Navigator>\n  );\n}\n\nfunction RootStackScreen() {\n  return (\n    <RootStack.Navigator mode="modal">\n      <RootStack.Screen\n        name="Main"\n        component={MainStackScreen}\n        options={{ headerShown: false }}\n      />\n      <RootStack.Screen name="MyModal" component={ModalScreen} />\n    </RootStack.Navigator>\n  );\n}\n')),Object(i.b)("p",null,"There are some important things to notice here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"We are using our ",Object(i.b)("inlineCode",{parentName:"p"},"MainStackScreen")," component as a screen inside ",Object(i.b)("inlineCode",{parentName:"p"},"RootStackScreen"),"! By doing this, we are nesting a stack navigator inside of another stack navigator. In this case, this is useful for us because we want to use a different transition style for the modal. Since ",Object(i.b)("inlineCode",{parentName:"p"},"RootStackScreen")," renders a stack navigator and has its own header, we also want to hide the header for this screen. In the future this will be important because for tab navigation, for example, each tab will likely have its own stack! Intuitively, this is what you expect: when you are on tab A and switch to tab B, you would like tab A to maintain its navigation state as you continue to explore tab B. Look at this diagram to visualize the structure of navigation in this example:\n",Object(i.b)("img",{alt:"tree diagram",src:n(534).default}))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The ",Object(i.b)("inlineCode",{parentName:"p"},"mode")," prop for stack navigator can be either ",Object(i.b)("inlineCode",{parentName:"p"},"card")," (default) or ",Object(i.b)("inlineCode",{parentName:"p"},"modal"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"modal")," behavior slides the screen in from the bottom on iOS and allows the user to swipe down from the top to dismiss it. The ",Object(i.b)("inlineCode",{parentName:"p"},"modal")," prop has no effect on Android because full-screen modals don't have any different transition behavior on the platform.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When we call ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," we don't have to specify anything except the route that we'd like to navigate to. There is no need to qualify which stack it belongs to (the arbitrarily named 'root' or the 'main' stack) ","\u2014"," React Navigation attempts to find the route on the closest navigator and then performs the action there. To visualize this, look again at the above tree diagram and imagine the ",Object(i.b)("inlineCode",{parentName:"p"},"navigate")," action flowing up from ",Object(i.b)("inlineCode",{parentName:"p"},"HomeScreen")," to ",Object(i.b)("inlineCode",{parentName:"p"},"MainStack"),". We know that ",Object(i.b)("inlineCode",{parentName:"p"},"MainStack")," can't handle the route ",Object(i.b)("inlineCode",{parentName:"p"},"MyModal"),", so it then flows it up to ",Object(i.b)("inlineCode",{parentName:"p"},"RootStack"),", which can handle that route, and so it does."))),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To change the type of transition on a stack navigator you can use the ",Object(i.b)("inlineCode",{parentName:"li"},"mode")," prop. When set to ",Object(i.b)("inlineCode",{parentName:"li"},"modal"),", all screens animate-in from bottom to top rather than right to left. This applies to that entire stack navigator, so to use right to left transitions on other screens, we add another navigation stack with the default configuration."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"navigation.navigate")," traverses up the navigator tree to find a navigator that can handle the ",Object(i.b)("inlineCode",{parentName:"li"},"navigate")," action.")))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(r,".").concat(m)]||d[m]||u[m]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},534:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tree-c522585f78ec7e8aeaa7d09d3568012a.png"},585:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/modal-demo-c21e394139257ff16390d46aa6ba5bc2.gif"}}]);