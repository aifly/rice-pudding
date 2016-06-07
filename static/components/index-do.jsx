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
import checked from '../images/checked.png';

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
                        <div className="fly-rice-stage">
                            <div className="fly-rice">
                                <img src={'./static/js/'+z1} alt=""/>
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
}