import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
//store tổng của ứng dụng chứa tất cả cá state của ứng dụng
const rootReducer = combineReducers({
    stateBaiTapGioHang: BaiTapGioHangReducer
});
export default rootReducer;