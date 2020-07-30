import { combineReducers } from 'redux';
import BaiTapGioHangReducer from './BaiTapGioHangReducer'
import GameBauCuaReducer from './GameBauCuaReducer'
import GameTaiXiuReducer from './GameTaiXiuReducer'
//store tổng của ứng dụng chứa tất cả cá state của ứng dụng
const rootReducer = combineReducers({
    // stateBaiTapGioHang: BaiTapGioHangReducer
    // GameBauCuaReducer: GameBauCuaReducer
    GameBauCuaReducer,
    GameTaiXiuReducer,
});
export default rootReducer;