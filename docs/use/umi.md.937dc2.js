(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{823:function(n,s){n.exports={content:["article",["p",["a",{title:null,href:"https://umijs.org/"},"umi"]," 脚手架为 ",["a",{title:null,href:"https://ant.design"},"ant design"]," 提供的可插拔的企业级 react 应用框架，具体教程",["a",{title:null,href:"https://www.youtube.com/watch?v=vkAUGUlYm24&feature=youtu.be"},"请查看"],"。"],["p","使用 demo 地址请查看 ",["a",{title:null,href:"https://github.com/ant-motion/landing-umi-example"},"umi-example"],";"],["h2","文件路径"],["p","创建文件我们分三步来完成："],["ul",["li",["p","首先我们创建一个文件目录，在文件夹里创建一个 ",["code","src"]," 文件夹；"]],["li",["p","使用 umi 的 ",["code","umi generate page index"]," 创建一个 ",["code","index"]," 页；"]],["li",["p","我们将从 ",["code","landing"]," 上下载的 ",["code","Home"]," 文件包和 ",["code","pages"]," 放至 ",["code","src"]," 文件包里；"]]],["pre",{lang:null,highlighted:'|── src\n| |── Home \n|    |── less\n|    |── index<span class="token punctuation">.</span>js\n|    └── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n| └── pages     \n|    |── index<span class="token punctuation">.</span>js\n|    |── index<span class="token punctuation">.</span>less'},["code","|── src\n| |── Home \n|    |── less\n|    |── index.js\n|    └── ...\n| └── pages     \n|    |── index.js\n|    |── index.less"]],["h2","安装依赖"],["p","安装 ",["code","react"]," 和 ",["code","react-dom"],", ",["code","npm install react react-dom --save"],";"],["p","详细参考",["a",{title:null,href:"docs/use/getting-started-cn#安装依赖"},"开始使用里的安装依赖"],";"],["p","这里我们还需要安装 ",["code","npm install umi-plugin-react --save-dev"],", 再创建 ",["code",".umirc.js"]," 在根目录里, 现在目录结构为："],["pre",{lang:null,highlighted:'|── node_modules\n|  └── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n|── src\n|  └── <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n└── <span class="token punctuation">.</span>umirc<span class="token punctuation">.</span>js'},["code","|── node_modules\n|  └── ...\n|── src\n|  └── ...\n└── .umirc.js"]],["h3","添加 ",["code","umi-plugin-react"],";"],["p","在 ",["code",".umirc.js"]," 里添加 ",["code","plugins"]," 即可："],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">\'umi-plugin-react\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        antd<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code","export default {\n  plugins: [\n    [\n      'umi-plugin-react', {\n        antd: true,\n      }\n    ],\n  ]\n}"]],["h2","修改入口文件"],["p","更新刚才创建的 ",["code","index"]," 页面，打开 ",["code","index.js"],"，引入 ",["code","Home"]," 文件包并渲染。"],["pre",{lang:"jsx",highlighted:'<span class="token operator">-</span> <span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./index.css\'</span><span class="token punctuation">;</span>\n<span class="token operator">+</span> <span class="token keyword">import</span> Home <span class="token keyword">from</span> <span class="token string">\'../Home\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n<span class="token operator">-</span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>normal<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n<span class="token operator">-</span>     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Page index<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n<span class="token operator">-</span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token operator">+</span>   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Home</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","- import styles from './index.css';\n+ import Home from '../Home';\n\nexport default function() {\n  return (\n-   <div className={styles.normal}>\n-     <h1>Page index</h1>\n-   </div>\n+   <Home />\n  );\n}"]],["h2","CSS Modules"],["p","umi 同样使用了 ",["code","css-modules"],", 同样我们提供了以下几种解决方案。"],["h3","在全局样式里引用"],["p","在 ",["code","src"]," 里新建一个 ",["code","global.less"],"; 在 ",["code","global.less"]," 里引入 ",["code","Home"]," 样式: "],["pre",{lang:"less",highlighted:'<span class="token variable">@import</span> <span class="token string">\'./Home/less/antMotionStyle.less\'</span><span class="token punctuation">;</span>'},["code","@import './Home/less/antMotionStyle.less';"]],["p","如果选择这个方案，我们需要删除 ",["code","Home"]," 的 ",["code","index.jsx"]," 里的 ",["code","import './less/antMotionStyle.less';"]],["h3","使用 css-module 的 global"],["p","使用 ",["code","css-modules"]," 的 ",["code","global"],", 在 ",["code","index.less"]," 里添加 ",["code",":global"],", 将样式不作转换, ",["code","global"]," 具体使用",["a",{title:null,href:"/docs/use/getting-started#样式"},"请查看开始使用"],"。"],["h3","关闭 css-modules"],["p","如果你当前项目为新项目，且对 ",["code","css-modules"]," 并不是太了解，可以选择关闭 ",["code","css-modules"],"，只需要在 ",["code",".umirc.js"]," 文件里增加 ",["code","disableCSSModules: true"],"。"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n<span class="token operator">+</span> disableCSSModules<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span>\n      <span class="token string">\'umi-plugin-react\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        antd<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code","export default {\n+ disableCSSModules: true,\n  plugins: [\n    [\n      'umi-plugin-react', {\n        antd: true,\n      }\n    ],\n  ]\n}"]],["h2","完成"],["p","完成以上步骤之后，我们再启动 ",["code","umi dev"]," 即可查看在 landing 上下载的模板。"]],meta:{order:1,category:{"zh-CN":"使用教程","en-US":"Tutorial"},title:{"zh-CN":"umi 里使用","en-US":"Use in umi"},filename:"docs/use/umi.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#文件路径",title:"文件路径"},"文件路径"]],["li",["a",{className:"bisheng-toc-h2",href:"#安装依赖",title:"安装依赖"},"安装依赖"]],["li",["a",{className:"bisheng-toc-h2",href:"#修改入口文件",title:"修改入口文件"},"修改入口文件"]],["li",["a",{className:"bisheng-toc-h2",href:"#CSS-Modules",title:"CSS Modules"},"CSS Modules"]],["li",["a",{className:"bisheng-toc-h2",href:"#完成",title:"完成"},"完成"]]]}}}]);