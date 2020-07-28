import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import GameBauCuaReducer from './GameBauCuaReducer'
//store tổng của ứng dụng chứa tất cả cá state của ứng dụng
const rootReducer = combineReducers({
    // stateBaiTapGioHang: BaiTapGioHangReducer
    // GameBauCuaReducer: GameBauCuaReducer
    GameBauCuaReducer,
});
export default rootReducer;