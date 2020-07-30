import { getRandomInt } from '../../utils/randomInt'
const initialSate = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0 },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0 },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0 },
        { ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0 },
        { ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0 },
        { ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0 },

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
        case "CHOI_GAME":

            {
                let { tongTien } = state;
                // console.log(getRandomInt(6));
                let danhSachCuoc = [...state.danhSachCuoc];
                //tạo súc xắc ngẫu nhiên
                let xucXac = [
                    danhSachCuoc[getRandomInt(6)],
                    danhSachCuoc[getRandomInt(6)],
                    danhSachCuoc[getRandomInt(6)],
                ];
                danhSachCuoc = danhSachCuoc.filter((ele) => ele.giaCuoc > 0);
                for (let ele of danhSachCuoc) {
                    let traLaiTien = xucXac.find((item) => item.ma === ele.ma);
                    if (traLaiTien) {
                        tongTien += ele.giaCuoc;
                    }
                }
                //trúng thưởng
                for (let ele of xucXac) {
                    let trungThuong = danhSachCuoc.find((item) => item.ma === ele.ma);
                    if (trungThuong) {
                        tongTien += trungThuong.giaCuoc;
                    }
                }
                let updateDanhSachCuoc = [...state.danhSachCuoc];
                updateDanhSachCuoc = updateDanhSachCuoc.map((ele) => ({
                    ...ele,
                    giaCuoc: 0,

                }));
                //xử lý trả lại tiền
                return { ...state, xucXac, tongTien, danhSachCuoc: updateDanhSachCuoc };
            }
        default:
            break;
    }
    // state.danhSachCuoc = danhSachCuoc;
    // state.tongTien = tongTien;
    // return state;
    return { ...state };
};
export default GameBauCuaReducer;