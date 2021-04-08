(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{479:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),o=(n(0),n(522)),i={id:"web-support",title:"React Navigation on the Web",sidebar_label:"Web support"},c={unversionedId:"web-support",id:"version-4.x/web-support",isDocsHomePage:!1,title:"React Navigation on the Web",description:"Note: starting in v3, React Navigation has built-in support for use in web sites, including server rendering. This has not yet been widely used in production and we consider this feature to be experimental.",source:"@site/versioned_docs/version-4.x/web-support.md",slug:"/web-support",permalink:"/docs/4.x/web-support",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-4.x/web-support.md",version:"4.x",sidebar_label:"Web support",sidebar:"version-4.x-docs",previous:{title:"Localization",permalink:"/docs/4.x/localization"},next:{title:"Call a function when focused screen changes",permalink:"/docs/4.x/function-after-focusing-screen"}},s=[{value:"Web Links",id:"web-links",children:[]},{value:"Server rendering",id:"server-rendering",children:[]},{value:"Custom navigators for the web",id:"custom-navigators-for-the-web",children:[]}],p={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: starting in v3, React Navigation has built-in support for use in web sites, including server rendering. This has not yet been widely used in production and we consider this feature to be experimental.")),Object(o.b)("h1",{id:"with-react-native-web"},"With react-native-web"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},'"',Object(o.b)("a",{parentName:"p",href:"https://github.com/necolas/react-native-web"},"React Native for Web"),'" makes it possible to run React Native components and APIs on the web using React DOM.')),Object(o.b)("p",null,"This approach allows you to reuse most of React Navigation on the web because React Native for Web maps React Native primitives like ",Object(o.b)("inlineCode",{parentName:"p"},"View"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Text"),", and others to their equivalents on the web."),Object(o.b)("p",null,"The easiest way to get started with this approach is to use to use the ",Object(o.b)("a",{parentName:"p",href:"https://blog.expo.io/expo-cli-and-sdk-web-support-beta-d0c588221375"},"Expo CLI web support beta"),". More information on how to set this up in other projects will follow in the future, help on documenting it is also welcome!"),Object(o.b)("h1",{id:"with-standard-web-tools"},"With standard web tools"),Object(o.b)("p",null,"This approach requires that you rebuild the navigation views for your app (at least until the community builds out an alternative), but allows you to leverage routers and simple navigators that don't require views, like the switch navigator."),Object(o.b)("p",null,"To set up a navigator in a React app, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-navigation/example-web"},"(such as one created with create-react-app)"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { createSwitchNavigator } from "@react-navigation/core";\nimport { createBrowserApp } from "@react-navigation/web";\n\nconst MyNavigator = createSwitchNavigator(routes);\n\nconst App = createBrowserApp(MyNavigator);\n\n// now you can render "App" normally\n')),Object(o.b)("h2",{id:"web-links"},"Web Links"),Object(o.b)("p",null,"We ship a utility out of the box which automatically sets up an ",Object(o.b)("inlineCode",{parentName:"p"},"<a>")," tag for you with the correct ",Object(o.b)("inlineCode",{parentName:"p"},"href"),"."),Object(o.b)("p",null,"This is necessary to properly support server rendering, critical for accessibility, and nice to provide a good user experience when the browser displays what URL the link will go to."),Object(o.b)("p",null,"When the app is running, the default browser behavior will be blocked and a navigation action will be dispatched instead."),Object(o.b)("p",null,'To render a link to the "Profile" route:'),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'<Link toRoute="Profile" params={{ name: "jamie" }}>\n  Jamie\'s Profile\n</Link>\n')),Object(o.b)("p",null,"Depending on the ",Object(o.b)("inlineCode",{parentName:"p"},"path")," that is set up for the ",Object(o.b)("inlineCode",{parentName:"p"},"Profile")," route, the above link may render to html as ",Object(o.b)("inlineCode",{parentName:"p"},'<a href="/people/jamie">Jamie\'s Profile</a>')),Object(o.b)("p",null,"You can alternatively provide an ",Object(o.b)("inlineCode",{parentName:"p"},"action")," prop to the ",Object(o.b)("inlineCode",{parentName:"p"},"Link"),", to specify the exact navigation action that will be used to handle this link."),Object(o.b)("h2",{id:"server-rendering"},"Server rendering"),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"handleServerRequest")," function to get the top-level navigation prop for your app, as well as the current title for this route."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'expressApp.get("/*", (req, res) => {\n\n  const { path, query } = req;\n\n  const { navigation, title, options } = handleServerRequest(\n    AppNavigator.router,\n    path,\n    query\n  );\n\n  const markup = renderToString(<AppNavigator navigation={navigation} />);\n\n  res.send(\n    `<!doctype html>\n  <html lang="">\n  <head>\n    <title>${title}</title>\n    <script src="main.js"><\/script>\n  </head>\n  <body>\n    <div id="root">${markup}</div>\n  </body>\n</html>`\n  );\n});\n')),Object(o.b)("p",null,"For a full example, ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-navigation/web-server-example"},"see a full server+client React web app here")),Object(o.b)("h2",{id:"custom-navigators-for-the-web"},"Custom navigators for the web"),Object(o.b)("p",null,"The built-in navigator components such as Stack are often not well suited for web sites, so you may want to create custom navigators yourself."),Object(o.b)("p",null,"Your view can use ",Object(o.b)("inlineCode",{parentName:"p"},"props.descriptors")," to see the current set of screens, get their navigation object, and see the current navigation options. You should use ",Object(o.b)("inlineCode",{parentName:"p"},"SceneView")," to present your child screen components."),Object(o.b)("p",null,"See ",Object(o.b)("a",{parentName:"p",href:"/docs/4.x/custom-navigators"},'"Custom Navigators"')," for more details."),Object(o.b)("p",null,"For an example of this, see how the custom ",Object(o.b)("inlineCode",{parentName:"p"},"SidebarView")," and ",Object(o.b)("inlineCode",{parentName:"p"},"AppView")," are used from ",Object(o.b)("a",{parentName:"p",href:"https://github.com/react-navigation/web-server-example/blob/master/src/App.js"},Object(o.b)("inlineCode",{parentName:"a"},"App.js")," in the web server example"),"."))}l.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(h,c(c({ref:t},p),{},{components:n})):a.a.createElement(h,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);