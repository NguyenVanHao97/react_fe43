import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state={
        srcImg:'./img/black-car.jpg'
    }
    changeColor=(color)=>{
        let imgColor =`./img/${color}-car.jpg`;
        this.setState({
            srcImg:imgColor
        })
    }
    render() {
        return (
            <div>
                <div class="container-fluid">
                    <div className="row mt-5">
                        <div class="col-6">
                            <img className="w-100" src={this.state.srcImg} alt="123"/>
                        </div>
                    <div class="col-6">
                        <h2 className="mt-5" >chọn màu xe</h2>
                            <div className="row mt-5">
                                <div className="col-3">
                                    <button onClick={()=>{
                                        this.setState({
                                            srcImg:'./img/black-car.jpg'
                                        })
                                    }} className="btn btn-dark"> black-car</button>
                                </div>
                                <div className="col-3">
                                <button onClick={()=>{
                                        this.setState({
                                            srcImg:'./img/red-car.jpg'
                                        })
                                    }} className="btn btn-danger">red-car</button>
                                </div>
                                <div className="col-3">
                                <button onClick={()=>{
                                        this.setState({
                                            srcImg:'./img/silver-car.jpg'
                                        })
                                    }} className="btn btn-secondary">silver-car</button>
                                </div>
                                <div className="col-3">
                                <button onClick={()=>{
                                        this.setState({
                                            srcImg:'./img/steel-car.jpg'
                                        })
                                    }} className=" btn btn-secondary text-white" style={
                                    {
                                        backgroundColor:'gray'
                                    }
                                }>steel-car</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}
