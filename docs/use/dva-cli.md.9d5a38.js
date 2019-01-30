(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{819:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/dvajs/dva"},"dva"]," 脚手架为 ant design 提供的基于 redux、redux-saga 和 react-router 比较完善的轻量级前端框架，具体教程",["a",{title:null,href:"https://github.com/sorrycc/blog/issues/18"},"请查看"],"。"],["p","如何使用 demo 地址请查看 ",["a",{title:null,href:"https://github.com/ant-motion/ant-motion-dva-cli-example"},"dva-cli-example"],";"],["p","基本配置请查看 ",["a",{title:null,href:"docs/use/getting-started"},"开始使用"],";"],["h2","文件路径"],["p",["a",{title:null,href:"https://github.com/dvajs/dva-cli"},"dva-cli"]," 脚手架的文件目录为 ",["code","src/routes"],", 首先我们需要将下载的 Home 文件包直接复制到 routes 文件夹下。"],["h2","修改路由"],["p","复制完成后，我们需要将主页入口修改成以上复制的文件目录。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> IndexPage <span class="token keyword">from</span> <span class="token string">\'./routes/Home\'</span><span class="token punctuation">;</span>'},["code","import IndexPage from './routes/Home';"]],["h2","CSS Modules"],["p","dva 默认使用了 ",["code","css-modules"],"，同样我们提供了两套解决方案。"],["h3","关闭 css-modules"],["p","如果你当前项目为新项目，且对 ",["code","css-modules"]," 并不是太了解，可以选择关闭 ",["code","css-modules"],"，只需要在 ",["code",".roadhogrc"]," 文件里加上 ",["code",'"disableCSSModules": true']," 即可。"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token string">"src/index.js"</span><span class="token punctuation">,</span>\n+  <span class="token property">"disableCSSModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> // 加在此处\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"development"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"dva-hmr"</span><span class="token punctuation">,</span>\n        <span class="token string">"transform-runtime"</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"production"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"transform-runtime"</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "entry": "src/index.js",\n+  "disableCSSModules": true, // 加在此处\n  "env": {\n    "development": {\n      "extraBabelPlugins": [\n        "dva-hmr",\n        "transform-runtime"\n      ]\n    },\n    "production": {\n      "extraBabelPlugins": [\n        "transform-runtime"\n      ]\n    }\n  },\n}']],["h3","使用 global"],["p","使用 ",["code","css-modules"]," 的 ",["code","global"],", 在 ",["code","index.less"]," 里添加 ",["code",":global"],", 将样式不作转换, ",["code","global"]," 具体使用",["a",{title:null,href:"/docs/use/getting-started#样式"},"请查看开始使用"],"。"],["h2","按需加载"],["p","dva 里使用 ",["code","babel-plugin-import"]," 我们只需要 ",["code",".roadhogrc"]," 文件里添加 ",["code",'["import", { "libraryName": "antd", "style": true }]']," 即可。"],["pre",{lang:"json",highlighted:'<span class="token punctuation">{</span>\n  <span class="token property">"entry"</span><span class="token operator">:</span> <span class="token string">"src/index.js"</span><span class="token punctuation">,</span>\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"development"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"dva-hmr"</span><span class="token punctuation">,</span>\n        <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"production"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"extraBabelPlugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token string">"transform-runtime"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token property">"libraryName"</span><span class="token operator">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token property">"style"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code",'{\n  "entry": "src/index.js",\n  "env": {\n    "development": {\n      "extraBabelPlugins": [\n        "dva-hmr",\n        "transform-runtime",\n        ["import", { "libraryName": "antd", "style": true }]\n      ]\n    },\n    "production": {\n      "extraBabelPlugins": [\n        "transform-runtime",\n        ["import", { "libraryName": "antd", "style": true }]\n      ]\n    }\n  },\n}']],["h2","完成"],["p","完成以上频骤之后，我们再启动 ",["code","npm start"]," 即可查看在 landing 上下载的模板。"]],meta:{order:2,category:{"zh-CN":"使用教程","en-US":"Tutorial"},title:{"zh-CN":"dva-cli 里使用","en-US":"Use in dva"},filename:"docs/use/dva-cli.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#文件路径",title:"文件路径"},"文件路径"]],["li",["a",{className:"bisheng-toc-h2",href:"#修改路由",title:"修改路由"},"修改路由"]],["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]],["li",["a",{className:"bisheng-toc-h2",href:"#按需加载",title:"按需加载"},"按需加载"]],["li",["a",{className:"bisheng-toc-h2",href:"#完成",title:"完成"},"完成"]]]}}}]);