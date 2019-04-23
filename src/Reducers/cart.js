import * as Type from '../Constants/type';

const list_cart = JSON.parse(localStorage.getItem('giohang')) !== null ? JSON.parse(localStorage.getItem('giohang')) : [];

const cart = (state = list_cart, action) => {
    var { sanpham, cart } = action;
    var vitri = -1;
    switch (action.type) {
        case Type.muahang:
            vitri = search_product(state, sanpham);
            if (vitri !== -1) {
                state[vitri].amount += 1;
            } else {
                state.push({ sanpham, amount: 1 });
            }
            localStorage.setItem('giohang', JSON.stringify(state));
            return [...state];
        case Type.xoahang:
            vitri = search_product_cart(state, cart);
            state.splice(vitri, 1);
            localStorage.setItem('giohang', JSON.stringify(state));
            return [...state];
        case Type.tangsoluong:
            vitri = search_product_cart(state, cart);
            if (state[vitri].amount > 1) {
                if (vitri !== -1) {
                    state[vitri].amount -= 1;
                }
            }
            localStorage.setItem('giohang', JSON.stringify(state));
            return [...state];
        case Type.giamsoluong:
            vitri = search_product_cart(state, cart);
            if (vitri !== -1) {
                state[vitri].amount += 1;
            }
            localStorage.setItem('giohang', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
}

const search_product = (state, sanpham) => {
    var vitri = -1;
    if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
            if (state[i].sanpham.id === sanpham.id) {
                vitri = i;
                break;
            }
        }
    }
    return vitri;
}

const search_product_cart = (state, cart) => {
    var vitri = -1;
    if (state.length > 0) {
        for (var i = 0; i < state.length; i++) {
            if (state[i].sanpham.id === cart.sanpham.id) {
                vitri = i;
                break;
            }
        }
    }
    return vitri;
}
export default cart;