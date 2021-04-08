(window.webpackJsonp=window.webpackJsonp||[]).push([[127],{197:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(8),o=(n(0),n(522)),r={id:"handling-iphonex",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},c={unversionedId:"handling-iphonex",id:"version-3.x/handling-iphonex",isDocsHomePage:!1,title:"Supporting safe areas",description:'By default, React Navigation aids in ensuring your application displays correctly on the iPhone X and other devices with notches and "safe areas". It does so by using SafeAreaView inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.',source:"@site/versioned_docs/version-3.x/handling-iphonex.md",slug:"/handling-iphonex",permalink:"/docs/3.x/handling-iphonex",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/handling-iphonex.md",version:"3.x",sidebar_label:"Supporting safe areas",sidebar:"version-3.x-docs",previous:{title:"Authentication flows",permalink:"/docs/3.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/3.x/status-bar"}},s=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]},{value:"Use <code>forceInset</code> to get more control",id:"use-forceinset-to-get-more-control",children:[]},{value:"Android notches",id:"android-notches",children:[]}],l={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,'By default, React Navigation aids in ensuring your application displays correctly on the iPhone X and other devices with notches and "safe areas". It does so by using ',Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView"),' inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.'),Object(o.b)("p",null,"The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),Object(o.b)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right. We can use ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," for this. The rest of this guide gives more information on how to support safe areas in React Navigation."),Object(o.b)("p",null,Object(o.b)("img",{src:n(551).default})),Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/boring-safe-area",target:"blank",class:"run-code-button"},"\u2192 Run the example pictured on the left")," or, preferably, ",Object(o.b)("a",{href:"https://snack.expo.io/@react-navigation/nice-safe-area",target:"blank",class:"run-code-button"},"run the example pictured on the right."),Object(o.b)("h2",{id:"hiddencustom-navigation-bar-or-tab-bar"},"Hidden/Custom Navigation Bar or Tab Bar"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Default React Navigation Behavior",src:n(545).default})),Object(o.b)("p",null,"However, if you're overriding the default navigation bar, it's important to ensure your UI doesn't interfere with either of those hardware elements."),Object(o.b)("p",null,"For example, if I render nothing for the ",Object(o.b)("inlineCode",{parentName:"p"},"header")," or ",Object(o.b)("inlineCode",{parentName:"p"},"tabBarComponent"),", nothing renders"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"const Tabs = createBottomTabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default createStackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Text hidden by iPhoneX UI elements",src:n(546).default})),Object(o.b)("p",null,"To fix this issue you can wrap your content in a ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView"),", which can be imported from ",Object(o.b)("inlineCode",{parentName:"p"},"react-navigation"),". Recall that ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," should not wrap entire navigators, just the screen components or any content in them."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"import { SafeAreaView } from 'react-navigation'\n\nclass MyHomeScreen extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>This is top text.</Text>\n        <Text style={styles.paragraph}>This is bottom text.</Text>\n      </SafeAreaView>\n    )\n  }\n}\n")),Object(o.b)("p",null,Object(o.b)("img",{alt:"Content spaced correctly with SafeAreaView",src:n(547).default})),Object(o.b)("p",null,"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."),Object(o.b)("h2",{id:"landscape-mode"},"Landscape Mode"),Object(o.b)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),Object(o.b)("p",null,Object(o.b)("img",{alt:"App in landscape mode with text hidden",src:n(548).default})),Object(o.b)("p",null,"To fix this you can, once again, wrap your content in a ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView"),". This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),Object(o.b)("p",null,Object(o.b)("img",{alt:"App in landscape mode with text visible",src:n(549).default})),Object(o.b)("p",null,"In conclusion, use the ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component on the screens you register with a React Navigation navigator."),Object(o.b)("p",null,"A ",Object(o.b)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-iphonex-demo-v3"},"Snack")," is available with the code used in this overview."),Object(o.b)("h2",{id:"use-forceinset-to-get-more-control"},"Use ",Object(o.b)("inlineCode",{parentName:"h2"},"forceInset")," to get more control"),Object(o.b)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can remove bottom padding by passing ",Object(o.b)("inlineCode",{parentName:"p"},"forceInset")," prop to ",Object(o.b)("inlineCode",{parentName:"p"},"SafeAreaView"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-jsx"},"<SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>\n  <Text style={styles.paragraph}>This is top text.</Text>\n  <Text style={styles.paragraph}>This is bottom text.</Text>\n</SafeAreaView>\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"forceInset")," takes an object with the keys ",Object(o.b)("inlineCode",{parentName:"p"},"top | bottom | left | right | vertical | horizontal")," and the values ",Object(o.b)("inlineCode",{parentName:"p"},"'always' | 'never'"),". Or you can override the padding altogether by passing an integer."),Object(o.b)("p",null,"There is also a ",Object(o.b)("a",{parentName:"p",href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-safeareaview-demo-v3"},"Snack")," available to demonstrate how ",Object(o.b)("inlineCode",{parentName:"p"},"forceInset")," behaves."),Object(o.b)("h2",{id:"android-notches"},"Android notches"),Object(o.b)("p",null,"React Native does not currently expose an API to access information about device cutouts on Android devices. If your app has an opaque status bar (the default in React Native), that may handle the area where the device has its cutout without any further work required. If not, to workaround this you may want to use the following temporary workaround:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Install ",Object(o.b)("a",{parentName:"li",href:"https://github.com/react-native-community/react-native-device-info"},"react-native-device-info"),"."),Object(o.b)("li",{parentName:"ul"},"Check if the device has a notch with ",Object(o.b)("inlineCode",{parentName:"li"},"DeviceInfo.hasNotch()")," - this compares the device brand and model to a list of devices with notches - a crude but effective workaround."),Object(o.b)("li",{parentName:"ul"},"If the device has a notch, you may want to increase the status bar height known to the SafeAreaView by doing something like this:")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import { Platform } from 'react-native'\nimport { SafeAreaView } from 'react-navigation'\nimport DeviceInfo from 'react-native-device-info'\n\nif (Platform.OS === 'android' && DeviceInfo.hasNotch()) {\n  SafeAreaView\n    .setStatusBarHeight\n    /* Some value for status bar height + notch height */\n    ()\n}\n")),Object(o.b)("p",null,"Work is in progress on a longer term solution, see ",Object(o.b)("a",{parentName:"p",href:"https://github.com/facebook/react-native/pull/20999"},"this pull request")," for more information."))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},545:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/01-iphonex-default-2588bf4cb73433282b14319e54ea4815.png"},546:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/02-iphonex-content-hidden-2a5db62e9fa6340cfb3e8f5a4250b7d4.png"},547:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/03-iphonex-content-fixed-cb656e6a268a30af3f9aae2b6f3d4c64.png"},548:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/04-iphonex-landscape-hidden-113cbaf522b57ff8fbfdf4b1b39411d3.png"},549:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/05-iphonex-landscape-fixed-0d90c3fe5813cdd8664946c5873d7f57.png"},551:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/00-intro-4709ed78711b21c7bd54d2a1385262bb.png"}}]);