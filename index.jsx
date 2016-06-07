/**
 created by fly on 2016/6/7 0007
 */


import MainStage from './static/components/fly-main-stage.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/index.css';

import present from './static/images/present.png';

import IndexDo from './static/components/index-do.jsx';

let data = {
    startEvent : 'ontouchstart' in window ? 'touchstart' : 'mousedown',
    endEvent: 'ontouchend' in window ? 'touchend' : 'mouseup'
};
let utilMethods = {
    tap(obj, fn){
        obj.addEventListener(data.startEvent, e=> {
            this.startTime = +new Date();
            this.$Target = e.target;
            obj.addEventListener(data.endEvent,endHandler);
        });

        let endHandler = (e)=>{
            let endTime = +new Date();
            if (e.target === this.$Target && (endTime-this.startTime)<200) {
                fn &&fn();
            }
            obj.removeEventListener(data.endEvent,endHandler);
        }
    }
};

class FlyMainUI extends React.Component{
    constructor(args){
        super(...args);
    }
    render(){
        let openSubCom={
            subCircleCom:<div className="fly-center-box "><img src={'./static/js/'+present}/></div>,
            btns: <div className="fly-friend">
                <button>分享到朋友圈</button>
                <button>发送给好友</button>
                <div className="fly-reset"><a href="#">重做一个</a></div>
            </div>
        };
        return (
            <div className="fly-main-ui">
                <section className="fly-index-do fly-page">
                    <IndexDo></IndexDo>
                </section>
                <section className="fly-finish  fly-page container">
                </section>
                <section className="fly-received  fly-page container"></section>
                <section className="fly-received-open container  fly-page">
                    <MainStage {...openSubCom}></MainStage>
                </section>
            </div>
        )
    }
    componentDidMount(){

    }
}

ReactDOM.render(<FlyMainUI></FlyMainUI>,document.getElementById('fly-main'));


