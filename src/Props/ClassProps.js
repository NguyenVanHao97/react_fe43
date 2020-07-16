import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        const {image,name,age} = this.props.cho;
        return (
            <div>
                <div classname="card text-left">
                    <img classname="card-img-top" src={image} alt />
                    <div classname="card-body">
                        <h4 classname="card-title">
                            {name}
                        </h4>
                        <p classname="card-text">
                            {
                                age
                            }
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
