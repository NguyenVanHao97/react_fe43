import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangGiamActions } from '../../redux/actions/GameBauCuaActions'
import GameBauCua from '..';

class DanhSachCuoc extends Component {
    renderDSC = (list) => {
        return list.map((ele, index) => {
            return <div className="card col-4" key={index}>
                <img className="card-img-top" src={ele.hinhAnh} alt="Card cap" style={{ height: 200 }} />
                <div className="card-body">
                    <h5 className="card-title" />
                    <div className="d-flex justify-content-around align-items-center">
                        <button className="btn btn-info" onClick={() => {
                            this.props.tangGiamMucCuoc(ele.ma, false);
                        }}>-</button><span>{ele.giaCuoc}$</span><button className="btn btn-info" onClick={() => {
                            this.props.tangGiamMucCuoc(ele.ma, true);
                        }}>+</button>
                    </div>
                </div>
            </div>
        })
    }
    render() {
        const { danhSachCuoc } = this.props;
        return (
            <div>
                <div className="bau-cua__chon">
                    <div className="bau-cua__bang row">
                        {this.renderDSC(danhSachCuoc)}
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {

        danhSachCuoc: state.GameBauCuaReducer.danhSachCuoc,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        tangGiamMucCuoc: (ma, tangGiam) => {
            dispatch(tangGiamActions(ma, tangGiam));
        },
        // dispatch(actions)
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc)