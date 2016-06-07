
import React from 'react';
import './fly-main-stage.css'
import shape1 from '../images/shape1.png';
import rice from '../images/rice.png';

import {utilMethods,_$,$$} from '../../utilMethod.es6';


export default class MainStage extends React.Component{
    constructor(args){
        super(...args);
    }

    render(){
        return (
            <div className="fly-pub-page">
                <div className="fly-shape-C fly-shape-1"><img src={'./static/js/'+shape1} alt=""/></div>
                <div className="fly-center-circle">
                    {this.props.subCircleCom}
                </div>
                <div className="fly-rice">
                    <img src={'./static/js/'+rice} alt=""/>
                </div>
                <div className="fly-btn-C">
                    {this.props.btns}

                </div>


            </div>
        )
    }
    componentDidMount(){

        document.ontouchmove  = e =>{
          //  e.preventDefault();
        }
       /* window.addEventListener('deviceorientation', e=>{
            document.title= e.alpha;

            let beta = e.beta/(utilMethods.r(8,9)),
                alpha = e.alpha/(utilMethods.r(8,9));
            beta < 0 &&(beta = 0);
            alpha < -10 &&(alpha = -10);

            shapes.forEach((shape,i)=>{
                shape.style.transform= 'translate3d('+(alpha)+'px,'+(beta)+'px,0)';
            });
        }, false);*/
    }
}

MainStage.PropType = {
    subCircleCom : '<div></div>'
}