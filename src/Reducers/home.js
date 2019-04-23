import {combineReducers} from 'redux';
import sanpham from './product';
import cart from './cart';

const home = combineReducers({
    sanpham,
    cart
});

export default home;