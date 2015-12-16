import React from 'react';

export default React.createClass({
	render: function () {
		return <div>
		    <h1>Dashboard</h1>
		    <hr/>
		    <h3>会员</h3>
		    <span>会员总数，本月新增数，会员的类别构成比例，会员整体的数目变迁表，会员的活跃度</span>
		    <h3>图书</h3>
            <span>图书总数，总借出多少，哪些书最受欢迎（top25）</span>

            <h3>收支</h3>
            <span>新开会员，收押金，退押金，购书，组织活动，联络业务，其他收支，这些数据一个总的展示做一个饼图</span>

            <h3>反馈</h3>
            <span>推荐购书，意见建议，其他</span>
            
            <h3>系统运行状态</h3>
            <span>主机状态，数据备份情况，异常错误日志</span>
		</div>
	}
});