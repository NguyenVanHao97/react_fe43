import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Bestseller extends Component {
    state = {
        spList: [
            {

                image: "./img/sp_iphoneX.png",

                name: "iPhone X",

            },

            {

                image: "./img/sp_note7.png",

                name: "Note 7",

            },

            {

                image: "./img/sp_blackberry.png",

                name: "Blackberry",

            },

            {

                image: "./img/sp_vivo850.png",

                name: "Vivo850",

            },
        ],
    };
    renderSPList = () => {
        return this.state.spList.map((sp, index) => {
            return (
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3" key={index}>
                    <ProductItem item={sp} />
                </div>
            );
        });
    };
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        {this.renderSPList()}
                    </div>
                </section>

            </div>
        );
    }
}
