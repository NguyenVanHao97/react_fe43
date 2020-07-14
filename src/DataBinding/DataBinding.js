import React, { Component } from 'react'
import styleDataBinding from './DataBinding.module.css'
// import './DataBinding.css'
export default class DataBinding extends Component {
    sanPham = {
        ma: 1,
        tensp: 'IphoneX',
        gia: 1000,
        hinhAnh: 'http://picsum.photos/300/300'
    }
    renderThongTin= ()=>{
        return(
            <div classname="card text-white bg-primary">
            <img classname="card-img-top" src={this.sanPham.hinhAnh} alt={this.sanPham.hinhAnh} />
            <div classname="card-body">
                {/* <h4 classname="card-title">{this.sanPham.ma}</h4> */}
                <p classname={`${styleDataBinding.header}}card-title`}>{this.sanPham.tensp}</p>
                <p classname="card-text">{this.sanPham.gia}</p>
                {/* <p classname="card-text"></p> */}
            </div>
        </div>
        )
    }
    render() {
        let title = "CYBERSOFT";
        let srcImg = `http://picsum.photos/300/200`
        let hocVien = {
            ma: 1,
            ten: `nguyen van e`,
            tuoi: `23`

        }
        const renderImg = () => {
            return (<div>
                <img src="http://picsum.photos/300/300" />
            </div>)



        }
        return (
            <div classname="container">
               
                <div>
                    <h1 id="title">{title}</h1>
                    {/* <h1 id="title">{'{'}'{'{'}'{'}'}title{'{'}'{'}'}'{'}'}</h1> */}
                    <img src={srcImg} alt={srcImg} />
                    <div classname="card text-left">
                        {/* <img classname="card-img-top" src="holder.js/100px180/" alt /> */}
                        <div classname="card-body">
                            <h4 classname="card-title">{hocVien.ma}</h4>
                            <p classname="card-text">{hocVien.ten}</p>
                        </div>
                    </div>
                    <div class="container">
                        {renderImg()}
                    </div>
                </div>
            </div>



        )
    }
}
