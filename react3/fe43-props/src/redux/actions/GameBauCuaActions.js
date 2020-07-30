import { TANG_GIAM } from "../constants/GameBauCuaConst"
export function tangGiamActions(ma, tangGiam) {

    return {
        type: "TANG_GIAM",
        ma: ma,
        tangGiam: tangGiam,
    }
};