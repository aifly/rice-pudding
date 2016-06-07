import React from 'react';
import './index-do.css';
import {utilMethods,_$,$$} from '../../utilMethod.es6';
import bg from '../images/bg.jpg';
import text from '../images/text.png';
import leaf from '../images/leaf.png';
import logo from '../images/logo.png';
import tInfo from '../images/t-info.png';
import z1 from '../images/zz-1.png';
import z2 from '../images/zz-2.png';
import z3 from '../images/zz-3.png';
import z4 from '../images/zz-4.png';

import $ from 'jquery';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let Tween = {
    //t : 当前时间   b : 初始值  c : 变化值   d : 总时间  //return : 当前的位置
    linear: function (t, b, c, d) {  //匀速
        return c * t / d + b;
    },
    easeIn: function (t, b, c, d) {  //加速曲线
        return c * (t /= d) * t + b;
    },
    easeOut: function (t, b, c, d) {  //减速曲线
        return -c * (t /= d) * (t - 2) + b;
    },
    easeBoth: function (t, b, c, d) {  //加速减速曲线
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b;
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInStrong: function (t, b, c, d) {  //加加速曲线
        return c * (t /= d) * t * t * t + b;
    },
    easeOutStrong: function (t, b, c, d) {  //减减速曲线
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeBothStrong: function (t, b, c, d) {  //加加速减减速曲线
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b;
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    elasticIn: function (t, b, c, d, a, p) {  //正弦衰减曲线（弹动渐入）
        if (t === 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    elasticOut: function (t, b, c, d, a, p) {    //正弦增强曲线（弹动渐出）
        if (t === 0) {
            return b;
        }
        if ((t /= d) == 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    elasticBoth: function (t, b, c, d, a, p) {
        if (t === 0) {
            return b;
        }
        if ((t /= d / 2) == 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        }
        else {
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) *
                Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        }
        return a * Math.pow(2, -10 * (t -= 1)) *
            Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    },
    backIn: function (t, b, c, d, s) {     //回退加速（回退渐入）
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    backOut: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 3.70158;  //回缩的距离
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    backBoth: function (t, b, c, d, s) {
        if (typeof s == 'undefined') {
            s = 1.70158;
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    bounceIn: function (t, b, c, d) {    //弹球减振（弹球渐出）
        return c - Tween['bounceOut'](d - t, 0, c, d) + b;
    },
    bounceOut: function (t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b;
        }
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b;
    },
    bounceBoth: function (t, b, c, d) {
        if (t < d / 2) {
            return Tween['bounceIn'](t * 2, 0, c, d) * 0.5 + b;
        }
        return Tween['bounceOut'](t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
}


export default class IndexDo extends React.Component {
    constructor(args) {
        super(...args);


    }

    render() {
        let style = {
            background: '#dfffd0 url(./static/js/' + (bg) + ') no-repeat',
            backgroundSize: 'contain'
        }
        return (
            <div className="fly-index-C">
                <div className="fly-index-content" style={style}>
                    <div className="fly-text-img">
                        <img src={'./static/js/'+text} alt=""/>
                    </div>

                    <div className="fly-leaf">
                        <div className="fly-logo">
                            <img src={'./static/js/'+logo} alt=""/>
                        </div>
                        <div className="fly-t-info">
                            <img src={tInfo} alt=""/>
                        </div>
                        <div className="fly-rice-stage" onTouchTap={this.onChecked.bind(this)} ref="fly-rice-stage">
                            <div className="fly-rice">
                                <img src={'./static/js/'+z1} alt=""/>
                                <img className="fly-checked-rice" src={'./static/js/'+z1} alt=""/>
                                <span></span>
                            </div>
                            <div className="fly-rice">
                                <img src={'./static/js/'+z2} alt=""/>
                                <span></span>
                            </div>
                            <div className="fly-rice">
                                <img src={'./static/js/'+z3} alt=""/>
                                <span></span>
                            </div>
                            <div className="fly-rice">
                                <img src={'./static/js/'+z4} alt=""/>
                                <span></span>
                            </div>
                        </div>
                        <img src={'./static/js/'+leaf} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let ang = [-55, -18, 18, 55],
            r = 130;

        $$(".fly-rice-stage .fly-rice").forEach((rice, i)=> {
            let x = -r * Math.sin(ang[i] * Math.PI / 180),
                y = -r * Math.cos(ang[i] * Math.PI / 180);
            rice.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';

        });


    }
    onChecked(e){

       /// $('html,body').animate({scrollTop:40},1000);



        //this.startMove(document.body,{scrollTop:300},1000,'linear');

        this.riceDown(_$(".fly-checked-rice"));
        e.target.parentNode.lastChild.innerHTML = '✔';
    }

    riceDown(obj){
        /*let startY= - 10,
            speedX = 1,
            x = 0,
            y = 0;

        setInterval(()=>{
            x+=-speedX;
            y+=startY+speedX;
            obj.style.transform = 'translate3d('+x+'px,'+y+'px,0)';
        },20);*/


    }
    startMove(obj, json, times, fx, fn){
        var iCur = {};
        var startTime = now();
        for (var attr in json) {
            iCur[attr] = 0;
            if (attr == 'opacity') {
                iCur[attr] = Math.round(this.getStyle(obj, attr) * 100);
            }
            else if(attr === "scrollTop"){
                iCur[attr] = document.body.scrollTop || document.documentElement.scrollTop;
            }
            else {
                iCur[attr] = parseInt(this.getStyle(obj, attr));
            }
        }
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var changeTime = now();
            var scale = 1 - Math.max(0, startTime - changeTime + times) / times;
            for (var attr in json) {
                var value = Tween[fx](scale * times, iCur[attr], json[attr] - iCur[attr], times);


                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(oapcity=' + value + ')';
                    obj.style.opacity = value / 100;
                }
                else if (attr.toLowerCase() == "scrolltop") {
                    document.body.scrollTop = value;
                    document.documentElement.scrollTop = value;

                }
                else {
                    obj.style[attr] = value + 'px';
                }
            }
            if (scale == 1) {
                clearInterval(obj.timer);
                if (fn) {
                    fn.call(obj);
                }
            }
        }, 13);
        function now() {
            return (new Date()).getTime();
        }

    }
     getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        }
        else {
            return window.getComputedStyle(obj, false)[attr];
        }
    }
}