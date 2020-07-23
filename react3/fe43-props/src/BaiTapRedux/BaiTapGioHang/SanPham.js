import React, { Component } from 'react'
import { connect } from 'react-redux'
class SanPham extends Component {
    render() {
        let { sanPham } = this.props
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">{sanPham.gia}</p>
                        <button onClick={() => {
                            this.props.xemChiTiet(sanPham)
                        }} className="btn btn-success">xem chi tiết</button>
                    </div>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        xemChiTiet: (sanPham) => {//định nghĩa 1  props cho component này là 1 hàm
            console.log('sanPham', sanPham);
            //dùng hàm dispatch từ redux trả ra => đưa sữ liệu lên reducer xử lý 
            const action = {
                type: 'XEM_CHI_TIET',
                sanPham
            }
            dispatch(action);//gửi lên reducer
        }
    }
}
export default connect(null, mapDispatchToProps)(SanPham)