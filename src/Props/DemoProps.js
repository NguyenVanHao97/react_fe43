import React, { Component } from 'react'
import ClassProps from"./ClassProps";
import FunctionProps from './FunctionProps';
export default class DemoProps extends Component {
    render() {
        const dog ={
            image : "https:/picsum.photos/400/400/", 
            name:"husky",
            age:3
        }
        const cat ={
            srcImg:"https:/picsum.photos/400/400/",
            name:"mini",
            age:5,
        }
        return (
            <div className=" text-center">
                <p>demo</p>
                {/* truyền props image cho components classprops */}
                <ClassProps cho={dog}/>
                <FunctionProps meo={cat}/>
            </div>
        )
        
    }
}
