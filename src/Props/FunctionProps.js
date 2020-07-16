import React from 'react'

export default function FunctionProps(props) {
    // const {srcImg, name,age} =this.this.props.meo;
    return (
        <div classname="text-center ">
            <p>stateless components</p>
            <div className="card ">
                <img className="card-img-top" src={props.meo.srcImg} style={{ width: "400px" }} alt />
                <div className="card-body">
                    <h4 className="card-title">{
                        props.meo.name
                    }</h4>
                    <p className="card-text">
                        {props.meo.age}
                    </p>
                </div>
            </div>
        </div>
    )
}
