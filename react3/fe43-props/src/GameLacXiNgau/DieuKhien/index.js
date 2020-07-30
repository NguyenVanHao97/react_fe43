import React, { Component } from 'react'
import { connect } from 'react-redux'
class DieuKhien extends Component {
    renderDanhXucXac = () => {
        return this.props.xucXac.map((ele, index) => {
            return (
                <span key={index}>
                    <i
                        className={ele.classes}
                        style={{ color: "white", fontSize: 150 }}
                    ></i>
                </span>
            );
        });

    };
    render() {
        return (
            <div>
                <div className="xi-ngau__control row text-center mt-4">
                    <div className="col-4">
                        <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }} onClick={() => {
                            this.props.chonTaiXiu(true);
                        }}>
                            <img src="./img/tai.PNG" alt="tai" />
                        </button>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-around">
                        <span><i className="fa fa-dice-one" style={{ color: 'white', fontSize: 150 }} /></span>
                        <span><i className="fa fa-dice-two" style={{ color: 'white', fontSize: 150 }} /></span>
                        <span><i className="fa fa-dice-six" style={{ color: 'white', fontSize: 150 }} /></span>
                    </div>
                    <div className="col-4">
                        <button className="btn btn-lg rounded-circle" style={{ overflow: 'hidden' }} onClick={() => {
                            this.props.chonTaiXiu(false);
                        }}>
                            <img src="./img/xiu.PNG" alt="xiu" />
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        xucXac: state.GameTaiXiuReducer.xucXac,

    };
};
const mapDisPatchToProps = (dispatch) => {
    return {
        chonTaiXiu: (taiXiu) => {
            dispatch({ type: "CHON_TAI_XIU", taiXiu });
        },
    };
};

export default connect(mapStateToProps, mapDisPatchToProps)(DieuKhien);