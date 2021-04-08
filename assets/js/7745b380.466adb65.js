(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{300:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),o=n(8),r=(n(0),n(522)),i={id:"header-buttons",title:"Header buttons",sidebar_label:"Header buttons"},c={unversionedId:"header-buttons",id:"version-6.x/header-buttons",isDocsHomePage:!1,title:"Header buttons",description:"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways.",source:"@site/versioned_docs/version-6.x/header-buttons.md",slug:"/header-buttons",permalink:"/docs/6.x/header-buttons",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-6.x/header-buttons.md",version:"6.x",sidebar_label:"Header buttons",sidebar:"version-6.x/docs",previous:{title:"Configuring the header bar",permalink:"/docs/6.x/headers"},next:{title:"Nesting navigators",permalink:"/docs/6.x/nesting-navigators"}},s=[{value:"Adding a button to the header",id:"adding-a-button-to-the-header",children:[]},{value:"Header interaction with its screen component",id:"header-interaction-with-its-screen-component",children:[]},{value:"Customizing the back button",id:"customizing-the-back-button",children:[]},{value:"Overriding the back button",id:"overriding-the-back-button",children:[]},{value:"Summary",id:"summary",children:[]}],b={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that we know how to customize the look of our headers, let's make them sentient! Actually perhaps that's ambitious, let's just make them able to respond to our touches in very well defined ways."),Object(r.b)("h2",{id:"adding-a-button-to-the-header"},"Adding a button to the header"),Object(r.b)("p",null,"The most common way to interact with a header is by tapping on a button either to the left or the right of the title. Let's add a button to the right side of the header (one of the most difficult places to touch on your entire screen, depending on finger and phone size, but also a normal place to put buttons)."),Object(r.b)("samp",{id:"simple-header-button"},"header button"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={{\n          headerTitle: props => <LogoTitle {...props} />,\n          headerRight: () => (\n            <Button\n              onPress={() => alert(\'This is a button!\')}\n              title="Info"\n              color="#fff"\n            />\n          ),\n        }}\n      />\n    </Stack.Navigator>\n  );\n}\n')),Object(r.b)("p",null,"When we define our button this way, the ",Object(r.b)("inlineCode",{parentName:"p"},"this")," variable in ",Object(r.b)("inlineCode",{parentName:"p"},"options")," is ",Object(r.b)("em",{parentName:"p"},"not")," the ",Object(r.b)("inlineCode",{parentName:"p"},"HomeScreen")," instance, so you can't call ",Object(r.b)("inlineCode",{parentName:"p"},"setState")," or any instance methods on it. This is pretty important because it's extremely common to want the buttons in your header to interact with the screen that the header belongs to. So, we will look how to do this next."),Object(r.b)("h2",{id:"header-interaction-with-its-screen-component"},"Header interaction with its screen component"),Object(r.b)("p",null,"To be able to interact with the screen component, we need to use ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.setOptions")," to define our button instead of the ",Object(r.b)("inlineCode",{parentName:"p"},"options")," prop. By using ",Object(r.b)("inlineCode",{parentName:"p"},"navigation.setOptions")," inside the screen component, we get access to screen's props, state, context etc."),Object(r.b)("samp",{id:"header-interaction"},"header interaction"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'function StackScreen() {\n  return (\n    <Stack.Navigator>\n      <Stack.Screen\n        name="Home"\n        component={HomeScreen}\n        options={({ navigation, route }) => ({\n          headerTitle: props => <LogoTitle {...props} />,\n        })}\n      />\n    </Stack.Navigator>\n  );\n}\n\nfunction HomeScreen({ navigation }) {\n  const [count, setCount] = React.useState(0);\n\n  React.useLayoutEffect(() => {\n    navigation.setOptions({\n      headerRight: () => (\n        <Button onPress={() => setCount(c => c + 1)} title="Update count" />\n      ),\n    });\n  }, [navigation]);\n\n  return <Text>Count: {count}</Text>;\n}\n')),Object(r.b)("h2",{id:"customizing-the-back-button"},"Customizing the back button"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"createStackNavigator"),' provides the platform-specific defaults for the back button. On iOS this includes a label next to the button, which shows the title of the previous screen when the title fits in the available space, otherwise it says "Back".'),Object(r.b)("p",null,"You can change the label behavior with ",Object(r.b)("inlineCode",{parentName:"p"},"headerBackTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"headerTruncatedBackTitle")," (",Object(r.b)("a",{parentName:"p",href:"/docs/6.x/stack-navigator#headerbacktitle"},"read more"),")."),Object(r.b)("p",null,"To customize the back button image, you can use ",Object(r.b)("a",{parentName:"p",href:"/docs/6.x/stack-navigator#headerbackimage"},"headerBackImage"),"."),Object(r.b)("h2",{id:"overriding-the-back-button"},"Overriding the back button"),Object(r.b)("p",null,"The back button will be rendered automatically in a stack navigator whenever it is possible for the user to go back from their current screen ","\u2014"," in other words, the back button will be rendered whenever there is more than one screen in the stack."),Object(r.b)("p",null,"Generally, this is what you want. But it's possible that in some circumstances that you want to customize the back button more than you can through the options mentioned above, in which case you can set the ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," option to a React Element that will be rendered, just as we did with ",Object(r.b)("inlineCode",{parentName:"p"},"headerRight"),". Alternatively, the ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," option also accepts a React Component, which can be used, for example, for overriding the onPress behavior of the back button. Read more about this in the ",Object(r.b)("a",{parentName:"p",href:"/docs/6.x/stack-navigator#headerleft"},"api reference"),"."),Object(r.b)("p",null,"If you would like to retain the view of back button and only override the ",Object(r.b)("inlineCode",{parentName:"p"},"onPress")," method, you can import ",Object(r.b)("a",{parentName:"p",href:"https://github.com/react-navigation/react-navigation/blob/main/packages/stack/src/views/Header/HeaderBackButton.tsx"},"HeaderBackButton")," from ",Object(r.b)("inlineCode",{parentName:"p"},"@react-navigation/stack")," and assign that component to the ",Object(r.b)("inlineCode",{parentName:"p"},"headerLeft")," option."),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"You can set buttons in the header through the ",Object(r.b)("inlineCode",{parentName:"li"},"headerLeft")," and ",Object(r.b)("inlineCode",{parentName:"li"},"headerRight")," properties in ",Object(r.b)("inlineCode",{parentName:"li"},"options"),"."),Object(r.b)("li",{parentName:"ul"},"The back button is fully customizable with ",Object(r.b)("inlineCode",{parentName:"li"},"headerLeft"),", but if you just want to change the title or image, there are other ",Object(r.b)("inlineCode",{parentName:"li"},"options")," for that ","\u2014"," ",Object(r.b)("inlineCode",{parentName:"li"},"headerBackTitle"),", ",Object(r.b)("inlineCode",{parentName:"li"},"headerTruncatedBackTitle"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"headerBackImage"),"."),Object(r.b)("li",{parentName:"ul"},"You can use a callback for the options prop to access ",Object(r.b)("inlineCode",{parentName:"li"},"navigation")," and ",Object(r.b)("inlineCode",{parentName:"li"},"route")," objects.")))}l.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),l=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,p=u["".concat(i,".").concat(d)]||u[d]||h[d]||r;return n?o.a.createElement(p,c(c({ref:t},b),{},{components:n})):o.a.createElement(p,c({ref:t},b))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);