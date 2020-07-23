import React, { Component } from 'react'
import SanPham from './SanPham'
// import DanhSachGioHang from './BaiTapGioHang'
import { connect } from 'react-redux';
class DanhSachGioHang extends Component {
    renderSanPham = () => {
        return this.props.mangSanPham.map((sanPham, index) => {
            return <div className="col-4" key={index}>
                <SanPham sanPham={sanPham} />
            </div>
        })
    }
    render() {
        return (
            <div>
                <h3>danh sach san pham</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
                <div className="row">
                    <div className="col-4">
                        <h3 className="text-center">hinh anh</h3>
                        <img height={350} src={this.props.spChiTiet.hinhAnh} alt="123" />

                    </div>
                    <div className="col-8">
                        <table className="table">
                            <tr>
                                <td>ten sp</td>
                                <td>{this.props.spChiTiet.tenSP}</td>
                            </tr>
                            <tr>
                                <td>man hinh</td>
                                <td>{this.props.spChiTiet.manHinh}</td>
                            </tr>
                            <tr>
                                <td>heDieuHanh</td>
                                <td>{this.props.spChiTiet.heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>cameraTruoc</td>
                                <td>{this.props.spChiTiet.cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>cameraSau</td>
                                <td>{this.props.spChiTiet.cameraSau}</td>
                            </tr>
                            <tr>
                                <td>ram</td>
                                <td>{this.props.spChiTiet.ram}</td>
                            </tr>
                            <tr>
                                <td>rom</td>
                                <td>{this.props.spChiTiet.rom}</td>
                            </tr>
                            <tr>
                                <td>giaBan</td>
                                <td>{this.props.spChiTiet.giaBan}</td>
                            </tr>
                            {/* <tr>
                                <td>ten sp</td>
                                <td>hinhAnh</td>
                            </tr>
                            <tr>
                                <td>ten sp</td>
                                <td>iphone</td>
                            </tr> */}
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        spChiTiet: state.stateBaiTapGioHang.spChiTiet
    }
}
export default connect(mapStateToProps)(DanhSachGioHang)