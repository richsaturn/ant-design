webpackJsonp([84,197],{1010:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var l=n(1),s=(a(l),n(2));a(s);t.exports={content:["article",{},["h2","\u7279\u6027"],["ul",["li",["p","Designed as Ant Design\uff0c\u63d0\u70bc\u548c\u670d\u52a1\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002"]],["li",["p",["a",{title:null,href:"http://react-component.github.io/badgeboard/"},"React Component"]," \u57fa\u7840\u4e0a\u7cbe\u5fc3\u5c01\u88c5\u7684\u9ad8\u8d28\u91cf UI \u7ec4\u4ef6\u3002"]],["li",["p","\u57fa\u4e8e npm + webpack + babel \u7684\u5de5\u4f5c\u6d41\uff0c\u652f\u6301 ES2015 \u548c TypeScript\u3002"]]],["h2","\u5b89\u88c5"],["pre",{lang:"bash",highlighted:'$ npm <span class="token function" >install</span> antd'},["code","$ npm install antd"]],["h2","\u793a\u4f8b"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'},["code","import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"]],["p","\u5f15\u5165\u6837\u5f0f\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token string" >\'antd/dist/antd.css\'</span><span class="token punctuation" >;</span>  <span class="token comment" spellcheck="true">// or \'antd/dist/antd.less\'</span>'},["code","import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"]],["p","\u4ee5\u4e0b\u4e24\u79cd\u65b9\u6cd5\u90fd\u53ef\u4ee5\u8fbe\u5230\u6309\u9700\u52a0\u8f7d\u7684\u76ee\u7684\uff1a"],["ul",["li",["p",["code","import DatePicker from 'antd/lib/date-picker'"]]],["li",["p","\u914d\u5408\u63d2\u4ef6 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"]," \u4f7f\u7528 ",["code","import { DatePicker } from 'antd';"]]]],["blockquote",["p","babel-plugin-import \u652f\u6301 js \u548c css \u540c\u65f6\u6309\u9700\u52a0\u8f7d\u3002"]],["h2","\u7248\u672c"],["ul",["li",["p","\u7a33\u5b9a\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://img.shields.io/npm/v/antd.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","\u5f00\u53d1\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm",alt:null}]]]]],["h2","\u6d4f\u89c8\u5668\u652f\u6301"],["p","\u73b0\u4ee3\u6d4f\u89c8\u5668\u548c IE9 \u53ca\u4ee5\u4e0a\u3002"],["blockquote",["p",["a",{title:null,href:"https://github.com/xcatliu/react-ie8"},"IE8 issues"]]],["h2","\u94fe\u63a5"],["ul",["li",["p",["a",{title:null,href:"http://ant.design/"},"\u9996\u9875"]]],["li",["p",["a",{title:null,href:"/changelog"},"\u66f4\u65b0\u65e5\u5fd7"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/antd-init/"},"\u5f00\u53d1\u811a\u624b\u67b6"]]],["li",["p",["a",{title:null,href:"http://ant-tool.github.io/"},"\u5f00\u53d1\u5de5\u5177\u6587\u6863"]]],["li",["p",["a",{title:null,href:"http://react-component.github.io/"},"React \u57fa\u7840\u7ec4\u4ef6"]]],["li",["p",["a",{title:null,href:"http://mobile.ant.design"},"\u79fb\u52a8\u7aef\u7ec4\u4ef6"]]],["li",["p",["a",{title:null,href:"https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md"},"React \u4ee3\u7801\u89c4\u8303"]]],["li",["p",["a",{title:null,href:"https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md"},"\u7ec4\u4ef6\u8bbe\u8ba1\u539f\u5219"]]],["li",["p",["a",{title:null,href:"https://os.alipayobjects.com/rmsportal/HTXUgPGkyyxEivE.png"},"\u8bbe\u8ba1\u89c4\u8303\u901f\u67e5\u624b\u518c"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/129"},"\u793e\u533a\u8d21\u732e\u811a\u624b\u67b6\u548c\u8303\u4f8b"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/FAQ"},"\u5e38\u89c1\u95ee\u9898"]]],["li",["p",["a",{title:null,href:"http://codepen.io/benjycui/pen/KgPZrE?editors=001"},"CodePen \u6a21\u677f"]]],["li",["p",["a",{title:null,href:"https://github.com/websemantics/awesome-ant-design"},"Awesome Ant Design"]]]],["h2","\u8c01\u5728\u4f7f\u7528"],["ul",["li",["p",["a",{title:null,href:"http://www.antgroup.com/"},"\u8682\u8681\u91d1\u670d"]]],["li",["p",["a",{title:null,href:"http://www.alibaba.com/"},"\u963f\u91cc\u5df4\u5df4"]]],["li",["p",["a",{title:null,href:"http://www.koubei.com/"},"\u53e3\u7891"]]],["li",["p",["a",{title:null,href:"http://www.meituan.com"},"\u7f8e\u56e2"]]],["li",["p",["a",{title:null,href:"http://www.xiaojukeji.com/"},"\u6ef4\u6ef4"]]]],["blockquote",["p","\u5982\u679c\u4f60\u7684\u516c\u53f8\u548c\u4ea7\u54c1\u4f7f\u7528\u4e86 Ant Design\uff0c\u6b22\u8fce\u5230 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/477"},"\u8fd9\u91cc"]," \u7559\u8a00\u3002"]],["h2","\u5982\u4f55\u8d21\u732e"],["p","\u5728\u4efb\u4f55\u5f62\u5f0f\u7684\u53c2\u4e0e\u524d\uff0c\u8bf7\u5148\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"},"\u8d21\u732e\u8005\u6587\u6863"],"\u3002\u6709\u4efb\u4f55\u5efa\u8bae\u6216\u610f\u89c1\u60a8\u53ef\u4ee5 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pulls"},"Pull Request"],"\uff0c\u7ed9\u6211\u4eec ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/new"},"\u62a5\u544a Bug"],"\u3002"],["blockquote",["p","\u5f3a\u70c8\u63a8\u8350\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"},"\u300a\u63d0\u95ee\u7684\u667a\u6167\u300b"],"\u3001",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"\u300a\u5982\u4f55\u5411\u5f00\u6e90\u793e\u533a\u63d0\u95ee\u9898\u300b"]," \u548c ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"},"\u300a\u5982\u4f55\u6709\u6548\u5730\u62a5\u544a Bug\u300b"],"\uff0c\u66f4\u597d\u7684\u95ee\u9898\u66f4\u5bb9\u6613\u83b7\u5f97\u5e2e\u52a9\u3002"]],["h2","\u793e\u533a\u4e92\u52a9"],["p","\u5982\u679c\u60a8\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u78b0\u5230\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u51e0\u4e2a\u9014\u5f84\u5bfb\u6c42\u5e2e\u52a9\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u9f13\u52b1\u8d44\u6df1\u7528\u6237\u901a\u8fc7\u4e0b\u9762\u7684\u9014\u5f84\u7ed9\u65b0\u4eba\u63d0\u4f9b\u5e2e\u52a9\u3002"],["p","\u901a\u8fc7 Stack Overflow \u6216\u8005 Segment Fault \u63d0\u95ee\u65f6\uff0c\u5efa\u8bae\u52a0\u4e0a ",["code","antd"]," \u6807\u7b7e\u3002"],["ol",["li",["p",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},"Stack Overflow"],"\uff08\u63a8\u8350\uff09"]],["li",["p",["a",{title:null,href:"https://segmentfault.com/t/antd"},"Segment Fault"]]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"},["img",{title:null,src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/ant-design/ant-design"}]]]]]],meta:{order:0,title:"Ant Design of React",filename:"docs/react/introduce.zh-CN.md"},description:["section",["p","\u8fd9\u91cc\u662f Ant Design \u7684 React \u5b9e\u73b0\uff0c\u5f00\u53d1\u548c\u670d\u52a1\u4e8e\u4f01\u4e1a\u7ea7\u540e\u53f0\u4ea7\u54c1\u3002"],["div",{"class":"pic-plus"},["img",{width:"150",src:"https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block!important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"]],toc:["ul",["li",["a",{href:"#\u7279\u6027"},"\u7279\u6027"]],["li",["a",{href:"#\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{href:"#\u793a\u4f8b"},"\u793a\u4f8b"]],["li",["a",{href:"#\u7248\u672c"},"\u7248\u672c"]],["li",["a",{href:"#\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"]],["li",["a",{href:"#\u94fe\u63a5"},"\u94fe\u63a5"]],["li",["a",{href:"#\u8c01\u5728\u4f7f\u7528"},"\u8c01\u5728\u4f7f\u7528"]],["li",["a",{href:"#\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e"]],["li",["a",{href:"#\u793e\u533a\u4e92\u52a9"},"\u793e\u533a\u4e92\u52a9"]]]}}});