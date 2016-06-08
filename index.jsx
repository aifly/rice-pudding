/**
 created by fly on 2016/6/7 0007
 */


import MainStage from './static/components/fly-main-stage.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

import './static/css/index.css';

import present from './static/images/present.png';

import IndexDo from './static/components/index-do.jsx';

import {utilMethods, _$, $$} from './utilMethod.es6';

import title from './static/images/title.png';

import lBg from './static/images/l.png';

import arron from './static/images/arron.png';
import arron1 from './static/images/arron1.png';

import xfzz from './static/images/xfzz.png';
import cszz from './static/images/cszz.png';
import jkzz from './static/images/jkzz.png';
import klzz from './static/images/klzz.png';

/*let data = {
 startEvent : 'ontouchstart' in window ? 'touchstart' : 'mousedown',
 endEvent: 'ontouchend' in window ? 'touchend' : 'mouseup'
 };
 let utilMethod = {
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
 };*/

class FlyMainUI extends React.Component {
    constructor(args) {
        super(...args);
        this.state = {
            text: "",
            rice: [],
            showMask:false,
            showMask1:false
        }
    }

    classSet(json) {
        let classList = '';
        for (let j in json) {
            if (json[j]) {
                classList += ' ' + j;
            }
        }

        return classList;
    }

    sendToFriend(){

        this.setState({
            showMask:true
        });

        setTimeout(()=>{
            this.setState({
                showMask:false
            });
        },5000)
    }
    sendToFriendLine(){

       /* let prams = utilMethods.getQueryString('data');

        if(!prams){
            prams = window.location.hash.substr(1);
        }

        window.location.href=window.location.href.split('#')[0]+"?data="+prams;*/


    }
    sendTo(){

        let sign = '?';
        if(window.location.href.split('#').length>1){
            sign = '#';
        }
        window.location.href=window.location.href.split(sign)[0];
    }
    render() {

        let finishSubCom = {
                subCircleCom: <div className="fly-center-box">
                    <img src={'./static/js/'+present} className=" "/>
                </div>,
                btns: <div className="fly-friend">
                    <button onTouchTap={this.sendToFriend.bind(this)}>发送给好友</button>
                    <button hidden onTouchTap={this.sendToFriendLine.bind(this)}>分享到朋友圈</button>
                    <div className="fly-reset"><a href={window.location.href} onTouchTap={this.reset.bind(this)}>重做一个</a>
                    </div>
                </div>
            },
            finishClassList = this.classSet({
                "fly-finish": true,
                "fly-page": true,
                "container": true
            }),
            receivedSubCom = {
                subCircleCom: <div className="fly-center-box">
                    <img src={'./static/js/'+present} className="shake-constant"/>
                    <button onTouchTap={this.open.bind(this)}>打开看看</button>
                    <img className="title" src={'./static/js/'+title} alt=""/>
                </div>,
                btns: <div className="fly-friend">
                    <button onTouchTap={this.sendTo.bind(this)}>我也要送祝福</button>
                </div>
            },
            receivedOpenSubCom = {
                subCircleCom: <div className="fly-center-box">
                    <img className="title" src={'./static/js/'+title} alt=""/>
                    {this.state.rice}
                    <div className="fly-text-C"
                         style={{background:'#ccc url(./static/js/'+lBg+') no-repeat right top',backgroundSize:'50%'}}>
                        <h2></h2>
                        <p>{this.state.text}</p>
                    </div>
                </div>,
                btns: <div className="fly-friend">
                    <button onTouchTap={this.sendTo.bind(this)}>我也要送祝福</button>
                </div>
            };

        return (
            <div className="fly-main-ui">
                <section className="fly-index-do fly-page container">
                    <IndexDo></IndexDo>
                </section>
                <section className={finishClassList}>
                    <MainStage {...finishSubCom}></MainStage>
                    <div className="fly-mask" style={{display:this.state.showMask?'block':'none'}}>
                        <img src={'./static/js/'+arron} alt=""/>
                    </div>
                    <div className="fly-mask1" style={{display:this.state.showMask1?'block':'none'}}>
                        <img src={'./static/js/'+arron1} alt=""/>
                    </div>
                </section>
                <section className="fly-received fly-page container">
                    <MainStage {...receivedSubCom}></MainStage>
                </section>
                <section className="fly-received-open container  fly-page">
                    <MainStage {...receivedOpenSubCom}></MainStage>
                </section>
            </div>
        )
    }

    componentDidMount() {

        let prams = utilMethods.getQueryString('data');

        if(!prams){
            prams = window.location.hash.substr(1);
        }




        this.prams = prams;

        if (prams) {//有参数。
            classie.removeClass(_$('.fly-received'),'container');
            //this.open();
        }
        else {
            classie.removeClass(_$('.fly-index-do'), 'container');
        }


    }

    reset(e) {
        e.preventDefault();
        window.location.href = window.location.href;
        return !1;
    }

    open() {

        /*let riceData = {
         "rice":[0,1,2,3],
         "text":this.decToHex('中华人民共和国')
         };
         console.log(JSON.stringify(riceData))*/




        let dd = JSON.parse(decodeURI(this.prams));



       this.setState({
            text: (dd.text)
        });

        let riceArr = dd.race;

        let zzArr = [xfzz, cszz, jkzz, klzz].map(src=> {
            return './static/js/' + src;
        });

        riceArr= riceArr.map((r, i)=> {
            return <img key={i} src={zzArr[i]} className={'zz-'+i}/>
        });

        this.setState({
            rice:riceArr
        });

        let loader = new SVGLoader(document.getElementById('loader1'), {speedIn: 300, easingIn: mina.easeinout});
        loader.show();
        setTimeout(()=> {
            loader.hide();
            classie.removeClass(_$(".fly-received-open"), 'container');
            classie.addClass(_$(".fly-received"), 'container');
        }, 500);
    }



}

ReactDOM.render(<FlyMainUI></FlyMainUI>, document.getElementById('fly-main'));


