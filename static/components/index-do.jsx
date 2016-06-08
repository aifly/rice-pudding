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

import input from '../images/input.png';
import ship1 from '../images/ship1.png';
import ship2 from '../images/ship2.png';
import ship3 from '../images/ship3.png';
import ship4 from '../images/ship4.png';
import ship5 from '../images/ship5.png';

import step1 from '../images/step1.png';


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
    }
}


export default class IndexDo extends React.Component {
    constructor(args) {
        super(...args);

        this.state = {
            shipSrc : './static/js/'+ship1
        }

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
                                <img className="fly-checked-rice" src={'./static/js/'+z2} alt=""/>
                                <span></span>
                            </div>
                            <div className="fly-rice">
                                <img src={'./static/js/'+z3} alt=""/>
                                <img className="fly-checked-rice" src={'./static/js/'+z3} alt=""/>
                                <span></span>
                            </div>
                            <div className="fly-rice">
                                <img src={'./static/js/'+z4} alt=""/>
                                <img className="fly-checked-rice" src={'./static/js/'+z4} alt=""/>
                                <span></span>
                            </div>
                        </div>
                        <p className="fly-info">为你的朋友选个祝福的粽子吧！可以多选哦！</p>

                        <div className="fly-input">
                            <img src={'./static/js/'+input} alt=""/>
                            <textarea placeholder="限50字以内" onInput={this.onInput.bind(this)} ref="text" name="" id="" cols="30" rows="10"></textarea>
                        </div>

                        <div className="ship">
                            <img src={this.state.shipSrc} alt=""/>
                        </div>
                        <div className="fly-send-btn">
                            <button onTouchTap={this.send.bind(this)}>送祝福</button>
                        </div>
                        <img src={'./static/js/'+leaf} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

    onInput(e){
        if(e.target.value.length >= 50){
            e.target.value=e.target.value.substr(0,50);
        }
    }

    componentDidMount() {

        this.start = true;

        let ang = [-55, -18, 18, 55],
            r = document.documentElement.clientWidth / 2.3;
        this.iNow = this.iNow || 0;
        $$(".fly-rice-stage .fly-rice").forEach((rice, i)=> {
            let x = -r * Math.sin(ang[i] * Math.PI / 180),
                y = -r * Math.cos(ang[i] * Math.PI / 180);
            rice.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
            rice.style.WebkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0)';
        });

        this.ships = [ship1, ship2, ship3, ship4, ship5].map(ship=> {
            return './static/js/' + ship;
        });
        this.ships.forEach(src=> {
            let img = new Image();
            img.onload = ()=> {
                img = null;
            };
            img.src = src;
        });

        this.raceArr = [] ;

    }

    send(){
       ///
       let loader = new SVGLoader( document.getElementById( 'loader1' ), { speedIn : 300, easingIn : mina.easeinout } );

        let raceArr =  this.raceArr;
        let text = this.refs['text'].value;


        let obj = {
            race : raceArr,
            text:text
        }


        window.location.hash = escape(JSON.stringify(obj));


        loader.show();
        setTimeout(()=>{
            loader.hide();
            classie.removeClass(_$(".fly-finish"),'container');
            classie.addClass(_$(".fly-index-do"),'container');
        },1000);
    }

    onChecked(e) {

        if (e.target.parentNode.lastChild.innerHTML === '✔') {
            return;
        }
        let target =e.target;

        this.startMove(_$('.fly-index-C'),{scrollTop:400},500,'easeIn',()=>{
            this.riceDown(target.parentNode.childNodes[1], speedX[index], index);
        });



        let index = -1,
            speedX = [3, 1, -1, -3];
        $$('.fly-rice').forEach((rice, i)=> {
            if (rice === e.target.parentNode) {
                index = i;
                rice.classList.add('maxZindex');
            }
            else{
                rice.classList.remove('maxZindex')
            }
        });


        this.iNow++;

        e.target.parentNode.lastChild.innerHTML = '✔';
    }

    riceDown(obj, speedX = 3, index) {

        if(this.start ){

            let startY = -10,
                x = 0,
                y = 0;

            obj.classList.add('active');



            let ship = _$('.ship'),
                shipTop = ship.offsetTop,
                currentTop = obj.parentNode.offsetTop,
                objH = obj.offsetHeight / 1.5;

            let dis = [0, objH, objH, 0];
            let maxH = shipTop - currentTop + objH + dis[index],


                half = false;

            this.raceArr.push(index);

            obj.timer = setInterval(()=> {
                x += -speedX;
                startY += .7;
                y += startY;

                if (y >= maxH / 8 && !half) {
                    half = true;
                    obj.src = './static/js/' + step1;
                }
                if (y > maxH) {
                    y = maxH;

                    this.setState({
                        shipSrc:this.ships[this.iNow]
                    });
                    obj.classList.remove('active');
                    clearInterval(obj.timer);
                    this.start = true;
                }
                //console.log(y )
                obj.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)';
                obj.style.WebkitTransform = 'translate3d(' + x + 'px,' + y + 'px,0)';
            }, 20);
        }


    }

    startMove(obj, json, times, fx, fn) {
        var iCur = {};
        var startTime = now();
        for (var attr in json) {
            iCur[attr] = 0;
            if (attr == 'opacity') {
                iCur[attr] = Math.round(this.getStyle(obj, attr) * 100);
            }
            else if (attr === "scrollTop") {
                iCur[attr] = obj.scrollTop ;

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
                    obj.scrollTop = value;
                    obj.scrollTop = value;

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