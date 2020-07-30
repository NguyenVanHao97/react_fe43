import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQua extends Component {
    render() {
        const { taiXiu, soBanChoi, soBanThang } = this.props;
        return (
            <div>
                <div className="xi-ngau__ket-qua text-center mt-4" style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
                    <p>
                        Bạn Chọn : <span style={{ color: '#f5cc74', fontSize: 35 }}>{taiXiu ? "tài" : "xỉu"}</span>
                    </p>
                    <p>
                        Số Bàn Thắng : <span style={{ color: '#f5cc74', fontSize: 35 }}>{soBanThang}</span>
                    </p>
                    <p>
                        Tổng Số Bàn Chơi :
        <span style={{ color: '#f5cc74', fontSize: 35 }}>{soBanChoi}</span>
                    </p>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        taiXiu: state.GameTaiXiuReducer.taiXiu,
        soBanChoi: state.GameTaiXiuReducer.soBanChoi,
        soBanThang: state.GameTaiXiuReducer.soBanThang,
    }
}
export default connect(mapStateToProps)(KetQua)