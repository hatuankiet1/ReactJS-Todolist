import * as Type from '../Constants/type';

export const action_muahang = sanpham=>{
    return{
        type: Type.muahang,
        sanpham
    }
}

export const action_xoahang = cart =>{
    return{
        type: Type.xoahang,
        cart
    }
}

export const action_tangsoluong = cart =>{
    return{
        type: Type.tangsoluong,
        cart
    }
}

export const action_giamsoluong = cart=>{
    return{
        type: Type.giamsoluong,
        cart
    }
}
