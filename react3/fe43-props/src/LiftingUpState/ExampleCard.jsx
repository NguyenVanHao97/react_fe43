import React, { Component } from 'react'
import data from "./Data.json";
import ProductList from './ProductList';
// import ProductList from "./ProductList";
import Card from "./Card";
export default class ExampleCard extends Component {
    state = {
        proList: data,
        ProSelected: null,
        cardList: [],
    };
    handleBuy = (card) => {
        // let 
        // let cardUpdate = this.state.cardList.push(card);

        let cardListUpdate = [...this.state.cardList];

        let index = cardListUpdate.findIndex((item) => item.maSP === card.maSP);
        console.log(index);
        if (index >= 0) {
            cardListUpdate[index].soLuong += 1;

        } else {
            card.soLuong = 1;
            console.log(card);
            cardListUpdate = [...cardListUpdate, card];
        }
        this.setState({
            cardList: cardListUpdate,
        });

    }
    handleDelete = (card) => {
        let cardListUpdate = [...this.state.cardList];
        let index = cardListUpdate.findIndex((item) => item.maSP == card.maSP);
        console.log(index);
        if (index >= 0) {
            cardListUpdate.splice(index, 1);

        }
        this.setState({
            cardList: cardListUpdate,
        });

    }
    handleSelectPro = (pro) => {
        this.setState({
            ProSelected: pro,
        });
    };
    // renderProList = () => {
    //     return this.state.proList.map((item, index) => {
    //         return <div className="col-sm-4" key={index}>
    //             <Product handleSelectPro={this.handleSelectPro} item={item} />
    //         </div>
    //     })
    // }
    render() {
        return (
            <div>
                <div className="container">
                    <Card cardList={this.state.cardList} handleDelete={this.handleDelete} />
                    <ProductList handleSelectPro={this.handleSelectPro} proList={this.state.proList}
                        handleBuy={this.handleBuy} />
                    {
                        this.state.ProSelected ? <div className="row">
                            <div className="col-sm-5">
                                <img className="img-fluid" src={this.state.ProSelected.hinhAnh} />
                            </div>
                            <div className="col-sm-7">
                                <h3>Thông số kỹ thuật</h3>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>Màn hình</td>
                                            <td>{this.state.ProSelected.manHinh}</td>
                                        </tr>
                                        <tr>
                                            <td>Hệ điều hành</td>
                                            <td>{this.state.ProSelected.heDieuHanh}</td>
                                        </tr>
                                        <tr>
                                            <td>Camera trước</td>
                                            <td>{this.state.ProSelected.cameraTruoc}</td>
                                        </tr>
                                        <tr>
                                            <td>Camera sau</td>
                                            <td>{this.state.ProSelected.cameraSau}</td>
                                        </tr>
                                        <tr>
                                            <td>RAM</td>
                                            <td>{this.state.ProSelected.ram}</td>
                                        </tr>
                                        <tr>
                                            <td>ROM</td>
                                            <td>{this.state.ProSelected.rom}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> : null}
                </div>
            </div>
        )
    }
}
