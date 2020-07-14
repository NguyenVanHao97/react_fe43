import React, { Component } from 'react'

export default class RenDerWithMap extends Component {
    productList = [
        { id: 1, name: 'Iphone 2G', price: 1000 },
        { id: 2, name: 'Iphone 3G', price: 2000 },
        { id: 3, name: 'Iphone 4G', price: 3000 },
    ]
    renderProductList = () => {
        let arrProductJSX =[];

        arrProductJSX = this.productList.map((productItem,index)=>{
            return <tr key={index}>
                    <td>{productItem.id}</td>
                     <td>{productItem.name}</td>
                     <td>{productItem.price}</td>
                    <td> <button className="btn btn-danger">Xóa</button></td>
                    </tr>
        })
        return arrProductJSX;
    }

        // for (let i=0; i< this.productList.length;i++){
        //     let product = this.productList[i];
        //     let trProduct =<tr key={i}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td> <button className="btn btn-danger">Xóa</button></td>
        //         {/* <td> <button className="btn btn-success">Sửa</button></td> */}
        //     </tr>;
        //     //push vào mảng kết quả
        //     arrProductJSX.push(trProduct);
        // }
        
    

    render() {
        return (
            <div>
                <div className="container text-center">
                    <h3>product list</h3>
                    <table className="table ">

                        <thead>
                            <tr>
                                <th>id</th>
                                <th>name</th>
                                <th>price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderProductList()}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

