(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),o=(n(0),n(522)),i={id:"server-rendering",title:"Server rendering",sidebar_label:"Server rendering"},c={unversionedId:"server-rendering",id:"version-5.x/server-rendering",isDocsHomePage:!1,title:"Server rendering",description:"Note: This API is experimental and might change in a minor version.",source:"@site/versioned_docs/version-5.x/server-rendering.md",slug:"/server-rendering",permalink:"/docs/server-rendering",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-5.x/server-rendering.md",version:"5.x",sidebar_label:"Server rendering",sidebar:"version-5.x/docs",previous:{title:"React Navigation on the Web",permalink:"/docs/web-support"},next:{title:"Screen tracking for analytics",permalink:"/docs/screen-tracking"}},l=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Rendering the app",id:"rendering-the-app",children:[]},{value:"Handling 404 or other status codes",id:"handling-404-or-other-status-codes",children:[]},{value:"Summary",id:"summary",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: This API is experimental and might change in a minor version.")),Object(o.b)("p",null,"This guide will cover how to server render your React Native app using React Native for Web and React Navigation. We'll cover the following cases:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Rendering the correct layout depending on the request URL"),Object(o.b)("li",{parentName:"ol"},"Setting appropriate page metadata based on the focused screen")),Object(o.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(o.b)("p",null,"Before you follow the guide, make sure that your app already renders fine on server. To do that, you will need to ensure the following:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"All of the dependencies that you use are ",Object(o.b)("a",{parentName:"li",href:"https://github.com/react-native-community/bob"},"compiled before publishing")," to npm, so that you don't get syntax errors on Node."),Object(o.b)("li",{parentName:"ul"},"Node is configured to be able to ",Object(o.b)("inlineCode",{parentName:"li"},"require")," asset files such as images and fonts. You can try ",Object(o.b)("a",{parentName:"li",href:"https://github.com/catamphetamine/webpack-isomorphic-tools"},"webpack-isomorphic-tools")," to do that."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"react-native")," is aliased to ",Object(o.b)("inlineCode",{parentName:"li"},"react-native-web"),". You can do it with ",Object(o.b)("a",{parentName:"li",href:"https://github.com/tleunen/babel-plugin-module-resolver"},"babel-plugin-module-resolver"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Some of the libraries in React Navigation don't work well on Web, such as ",Object(o.b)("inlineCode",{parentName:"p"},"@react-navigation/material-top-tabs"),". SSR also doesn't work if you're using Expo libraries.")),Object(o.b)("h2",{id:"rendering-the-app"},"Rendering the app"),Object(o.b)("p",null,"First, let's take a look at an example of how you'd do ",Object(o.b)("a",{parentName:"p",href:"http://necolas.github.io/react-native-web/docs/?path=/docs/guides-server-side--page"},"server rendering with React Native Web")," without involving React Navigation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'import { AppRegistry } from \'react-native-web\';\nimport ReactDOMServer from \'react-dom/server\';\nimport App from \'./src/App\';\n\nconst { element, getStyleElement } = AppRegistry.getApplication(\'App\');\n\nconst html = ReactDOMServer.renderToString(element);\nconst css = ReactDOMServer.renderToStaticMarkup(getStyleElement());\n\nconst document = `\n  <!DOCTYPE html>\n  <html style="height: 100%">\n  <meta charset="utf-8">\n  <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n  <meta\n    name="viewport"\n    content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"\n  >\n  ${css}\n  <body style="min-height: 100%">\n  <div id="root" style="display: flex; min-height: 100vh">\n  ${html}\n  </div>\n`;\n')),Object(o.b)("p",null,"Here, ",Object(o.b)("inlineCode",{parentName:"p"},"./src/App")," is the file where you have ",Object(o.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent('App', () => App)"),"."),Object(o.b)("p",null,"If you're using React Navigation in your app, this will render the screens rendered by your home page. However, if you have ",Object(o.b)("a",{parentName:"p",href:"/docs/configuring-links"},"configured links")," in your app, you'd want to render the correct screens for the request URL on server so that it matches what'll be rendered on the client."),Object(o.b)("p",null,"We can use the ",Object(o.b)("a",{parentName:"p",href:"/docs/server-container"},Object(o.b)("inlineCode",{parentName:"a"},"ServerContainer"))," to do that by passing this info in the ",Object(o.b)("inlineCode",{parentName:"p"},"location")," prop. For example, with Koa, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"path")," and ",Object(o.b)("inlineCode",{parentName:"p"},"search")," properties from the context argument:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'app.use(async (ctx) => {\n  const location = new URL(ctx.url, \'https://example.org/\');\n\n  const { element, getStyleElement } = AppRegistry.getApplication(\'App\');\n\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer location={location}>{element}</ServerContainer>\n  );\n\n  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());\n\n  const document = `\n    <!DOCTYPE html>\n    <html style="height: 100%">\n    <meta charset="utf-8">\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"\n    >\n    ${css}\n    <body style="min-height: 100%">\n    <div id="root" style="display: flex; min-height: 100vh">\n    ${html}\n    </div>\n`;\n\n  ctx.body = document;\n});\n')),Object(o.b)("p",null,"You may also want to set the correct document title and descriptions for search engines, open graph etc. To do that, you can pass a ",Object(o.b)("inlineCode",{parentName:"p"},"ref")," to the container which will give you the current screen's options."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'app.use(async (ctx) => {\n  const location = new URL(ctx.url, \'https://example.org/\');\n\n  const { element, getStyleElement } = AppRegistry.getApplication(\'App\');\n\n  const ref = React.createRef<ServerContainerRef>();\n\n  const html = ReactDOMServer.renderToString(\n    <ServerContainer\n      ref={ref}\n      location={location}\n    >\n      {element}\n    </ServerContainer>\n  );\n\n  const css = ReactDOMServer.renderToStaticMarkup(getStyleElement());\n\n  const options = ref.current?.getCurrentOptions();\n\n  const document = `\n    <!DOCTYPE html>\n    <html style="height: 100%">\n    <meta charset="utf-8">\n    <meta httpEquiv="X-UA-Compatible" content="IE=edge">\n    <meta\n      name="viewport"\n      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"\n    >\n    ${css}\n    <title>${options.title}</title>\n    <body style="min-height: 100%">\n    <div id="root" style="display: flex; min-height: 100vh">\n    ${html}\n    </div>\n`;\n\n  ctx.body = document;\n});\n')),Object(o.b)("p",null,"Make sure that you have specified a ",Object(o.b)("inlineCode",{parentName:"p"},"title")," option in your screens:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"<Stack.Screen\n  name=\"Profile\"\n  component={ProfileScreen}\n  options={{ title: 'My profile' }}\n/>\n")),Object(o.b)("h2",{id:"handling-404-or-other-status-codes"},"Handling 404 or other status codes"),Object(o.b)("p",null,"When ",Object(o.b)("a",{parentName:"p",href:"/docs/configuring-links#handling-unmatched-routes-or-404"},"rendering a screen for an invalid URL"),", we should also return a ",Object(o.b)("inlineCode",{parentName:"p"},"404")," status code from the server."),Object(o.b)("p",null,"First, we need to create a context where we'll attach the status code. To do this, place the following code in a separate file that we will be importing on both the server and client:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\n\nconst StatusCodeContext = React.createContext();\n\nexport default StatusCodeContext;\n")),Object(o.b)("p",null,"Then, we need to use the context in our ",Object(o.b)("inlineCode",{parentName:"p"},"NotFound")," screen. Here, we add a ",Object(o.b)("inlineCode",{parentName:"p"},"code")," property with the value of ",Object(o.b)("inlineCode",{parentName:"p"},"404")," to signal that the screen was not found:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"function NotFound() {\n  const status = React.useContext(StatusCodeContext);\n\n  if (status) {\n    staus.code = 404;\n  }\n\n  return (\n    <View>\n      <Text>Oops! This URL doesn't exist.</Text>\n    </View>\n  );\n}\n")),Object(o.b)("p",null,"You could also attach additional information in this object if you need to."),Object(o.b)("p",null,"Next, we need to create a status object to pass in the context on our server. By default, we'll set the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," to ",Object(o.b)("inlineCode",{parentName:"p"},"200"),". Then pass the object in ",Object(o.b)("inlineCode",{parentName:"p"},"StatusCodeContext.Provider")," which should wrap the element with ",Object(o.b)("inlineCode",{parentName:"p"},"ServerContainer"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// Create a status object\nconst status = { code: 200 };\n\nconst html = ReactDOMServer.renderToString(\n  // Pass the status object via context\n  <StatusCodeContext.Provider value={status}>\n    <ServerContainer ref={ref} location={location}>\n      {element}\n    </ServerContainer>\n  </StatusCodeContext.Provider>\n);\n\n// After rendering, get the status code and use it for server's response\nctx.status = status.code;\n")),Object(o.b)("p",null,"After we render the app with ",Object(o.b)("inlineCode",{parentName:"p"},"ReactDOMServer.renderToString"),", the ",Object(o.b)("inlineCode",{parentName:"p"},"code")," property of the ",Object(o.b)("inlineCode",{parentName:"p"},"status")," object will be updated to be ",Object(o.b)("inlineCode",{parentName:"p"},"404")," if the ",Object(o.b)("inlineCode",{parentName:"p"},"NotFound")," screen was rendered."),Object(o.b)("p",null,"You can follow a similar approach for other status codes too, for example, ",Object(o.b)("inlineCode",{parentName:"p"},"401")," for unauthorized etc."),Object(o.b)("h2",{id:"summary"},"Summary"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Use the ",Object(o.b)("inlineCode",{parentName:"li"},"location")," prop on ",Object(o.b)("inlineCode",{parentName:"li"},"ServerContainer")," to render correct screens based on the incoming request."),Object(o.b)("li",{parentName:"ul"},"Attach a ",Object(o.b)("inlineCode",{parentName:"li"},"ref")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"ServerContainer")," get options for the current screen."),Object(o.b)("li",{parentName:"ul"},"Use context to attach more information such as status code.")))}p.isMDXComponent=!0},522:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);