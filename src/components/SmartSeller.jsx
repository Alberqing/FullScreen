import React from 'react';
import '../style/index.less';
import ReactEcharts from 'echarts-for-react';

class SmartSeller extends React.Component {
	state = {
		data: '点击全屏',
		width: '220px',
		height: '150px',
	}
	// 全屏
	requestFullScreen = () => {
        const ele = document.documentElement;
        if (ele.requestFullscreen) {
            ele.requestFullscreen();
        } else if (ele.mozRequestFullScreen) {
            ele.mozRequestFullScreen();
        } else if (ele.webkitRequestFullScreen) {
            ele.webkitRequestFullScreen();
        }
    }
    //退出全屏
    exitFullscreen = () => {
	    if (document.exitFullscreen) {
	      document.exitFullscreen();
	    } else if (document.mozCancelFullScreen) {
	      document.mozCancelFullScreen();
	    } else if (document.webkitCancelFullScreen) {
	      document.webkitCancelFullScreen();
	    }
  	};
  	// button的点击事件，通过state数据判断全屏状态，调用不同的函数
	handleClick = () => {
		const {data, width, height} = this.state;
		let result = {};
		if (data === '点击全屏') { // 点击时进入全屏，改变data数据
			this.requestFullScreen();
			result.width = '100%';
			result.height = '500px';
			result.data = '退出全屏';
		} else if (data === '退出全屏') { // 点击时退出全屏，变化data数据
			this.exitFullscreen();
			result.width = '220px';
			result.height = '150px';
			result.data = '点击全屏';
		}
		this.setState({
			data: result.data,
			width: result.width,
			height: result.height,
		})
	}
    render(){
    	const {data, width, height} = this.state;
    	const option = {
            title: {text: 'Line Chart'},  // 图表标题
            tooltip: {},
            toolbox: {  // 图表工具
                feature: {
                    dataView: {},
                    saveAsImage: {
                        pixelRatio: 2
                    },
                    restore: {}
                }
            },
          //   myTool2: {
	         //   show: true,
	         //   title: '全屏显示',
	         //   icon: 'image://img/fullscreen.png',
	         //   onclick: function (){
	         //       $("#mask").css("display","block");
	         //       mychart_eight("mask-body",data1,data2,title,barName);
	         // }
            xAxis: {},
            yAxis: {},
            series: [{
                type: 'line', // 图表类型
                smooth: true,   // 圆滑曲线
                data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
            }]
        };
        const onEvents = {
            'click': this.handleClick
        };
        return(
        	<div>
        		<button onClick={this.handleClick}>{data}</button>
	            <ReactEcharts
	            	option={option}
	                style={{height: `${height}`, width: `${width}`}}
	                // onEvents={onEvents}
	            />
        	</div>       
        )
    }

}

export default SmartSeller;