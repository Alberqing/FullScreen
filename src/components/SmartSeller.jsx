import React from 'react';
import '../style/index.less';

class SmartSeller extends React.Component {
	state = {
		data: '点击全屏'
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
		const {data} = this.state;
		let result = '';
		if (data === '点击全屏') { // 点击时进入全屏，改变data数据
			this.requestFullScreen();
			result = '退出全屏';
		} else if (data === '退出全屏') { // 点击时退出全屏，变化data数据
			this.exitFullscreen();
			result = '全屏';
		}
		this.setState({
			data: result
		})
	}

    render(){
    	const {data} = this.state;
        return(
            <button onClick={this.handleClick}>{data}</button>
        )
    }

}

export default SmartSeller;