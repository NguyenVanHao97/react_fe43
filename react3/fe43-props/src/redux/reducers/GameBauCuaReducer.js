const initialSate = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 10 },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 20 },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 15 },
        { ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 10 },
        { ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 5 },
        { ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 2 },

    ],
    xucXac: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
    ],
};
const GameBauCuaReducer = (state = initialSate, actions) => {
    switch (actions.type) {
        case "TANG_GIAM":
            let { tongTien } = state;
            let danhSachCuoc = [...state.danhSachCuoc]
            let index = danhSachCuoc.findIndex((ele) => ele.ma === actions.ma);
            if (index !== -1) {
                if (actions.tangGiam) {
                    if (tongTien > 0) {
                        danhSachCuoc[index].giaCuoc += 10;
                        tongTien -= 10;
                    }

                } else {
                    if (danhSachCuoc[index].giaCuoc > 0)
                        danhSachCuoc[index].giaCuoc -= 10;
                    tongTien += 10;
                }
            }

            // console.log(actions);
            return { ...state, danhSachCuoc, tongTien };
        default:
            break;
    }
    // state.danhSachCuoc = danhSachCuoc;
    // state.tongTien = tongTien;
    // return state;
    return { ...state };
};
export default GameBauCuaReducer;