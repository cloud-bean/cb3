#redux理解
这两天都在做redux相关的学习，主要参考了两篇文章[Redux 中文文档](http://camsong.github.io/redux-in-chinese/index.html) 和[Full-Stack Redux Tutorial](http://www.tuicool.com/articles/mqiyiq7)。经过几天的实践，基本的redux运作框架也已经搭建完毕。趁热打铁，把一写自己的理解分享出来。

##基本概念
redux本质上是前端的状态管理工具。前端界面上需要的数据，处于什么状态都可以利用redux来管理。 涉及了几个个核心概念，state，action， reducer，store。

###state
redux框架在整个前端维护了一颗状态（state）树，state是js对象，其中的节点是整个app目前状态的反应。包括了页面展现的数据，是不是loading的状态等等。react的数据就从state中直接获取。

###action
前端的任何状态改变，必须由action触发。action一般是普通的js对象，当需要异步操作时也可以是thunk函数，必须包含type属性。用来标明action的类型或者说动作，比如增加一个条目，搜索等等。除了type属性外，其他属性可以自己指定，用来传输一些数据。包括从后台获取的想关信息等。

###reducer
用来接收action，而后具体修改state。action只是声明要干嘛，reducer才是实际做动作的时候。

###store
用来存储state，可以存在中间件（触发异步操作，记录log等）。

总体的运作流程线：用户点击界面-》触发action-》reducer接收-》改变state-》传入react组件-》改变界面
其中触发的action可以是包括异步操作的thunk函数。

今天就写到这啦！随笔随便看
