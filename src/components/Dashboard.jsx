import React from 'react';
import {PieChart, BarChart} from 'react-d3';

const pieData = [
  {label: '铁杆会员', value: 10.0},
  {label: '年卡会员', value: 55.0},
  {label: '季卡体验会员', value: 20.0 },
  {label: '月卡活动会员', value: 10.0 },
  {label: '合伙人会员', value: 5.0 }
];

const barData = [
  {
    name: "会员数量",
    values: [ { x: 2014.10, y: 20 }, { x: 2014.11, y: 40 }, { x: 2014.12, y: 50 }, 
    { x: 2015.01, y: 50 }, { x: 2015.02, y: 50 },  { x: 2015.02, y: 60 },
    { x: 2015.12, y: 80 } ],
    strokeWidth: 3,
    strokeDashArray: "5,5"
  }]
  ;

export default React.createClass({
	render: function () {
		return <div>
		    <h1>Dashboard</h1>
		    <hr/>
		    <h3>会员</h3>
		    <span>会员总数，本月新增数，</span>
        <BarChart
          data={barData}
          width={600}
          height={200}
          fill={'#3182bd'}
          title='会员总数'
          yAxisLabel='人数'
          xAxisLabel='月份' />

        <span>会员的类别构成比例</span>
        <PieChart
          data={pieData}
          width={600}
          height={400}
          radius={100}
          innerRadius={20}
          sectorBorderColor="white"
          title="会员分类结构" />

        <span>会员整体的数目变迁表，会员的活跃度</span>
        <span>会员整体的数目变迁表，会员的活跃度</span>

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