import React, { Component } from 'react'

export default class Card extends Component {
    renderListCard = () => {
        console.log(this.props.cardList)
        return this.props.cardList.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.maSP}</td>
                    <td>
                        <img src={item.hinhAnh} alt="asda" style={{ width: 100 }} />
                    </td>
                    <td>{item.tenSP}</td>
                    <td>{item.giaBan}</td>
                    <td>
                        <button className="btn btn-info">-</button><span className="mx-2">{item.soLuong}</span><button className="btn btn-info">+</button>
                    </td>
                    <td>17100000$</td>
                    <td><button className="btn btn-danger" onClick={() => {
                        this.props.handleDelete(item);
                    }}>xóa</button></td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <div>
                    <h2>Card</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Hình Ảnh</th>
                                <th>Tên sảm phẩm</th>
                                <th>Giá bán</th>
                                <th>số lượng</th>
                                <th>thành giá</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <this.renderListCard /> */}
                            {this.renderListCard()}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td />
                                <td />
                                <td />
                                <td />
                                <td />
                                <td>32300000</td>
                                {/* <td /> */}
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}
// điều kiện lưu trữ state :
// 1. chứa giao diện được binding từ state (trực tiếp hoặc gián tiếp)
// 2.chứa nút xử lý làm thay đổi state (trực tiếp hoặc gián tiếp)