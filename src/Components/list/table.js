import React,{Component} from 'react';
import Cart from './../home/cart';
import {connect} from 'react-redux';
import {action_xoahang,action_tangsoluong,action_giamsoluong} from './../../Actions/action';

class table extends Component{
    render(){
        return(
            <>
            <section>
                <div className="container">
                    <div className="row">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Mô Tả</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng Cộng</th>
                            <th>Công Cụ</th>
                        </tr>
                        </thead>
                        <tbody>
                            { this.display(this.props.cart) }
                        </tbody>
                    </table>
                    
                    </div>
                </div>
            </section>
            </>
        );
    }
    
    display = cart =>{
        let cart_item = '';
        var {remove_item,increse_amount,decrease_amount} = this.props;
        cart_item = cart.map((value,index)=>{
            return <Cart key={index} stt={index} cart = {value} remove_item={remove_item} decrease_amount={decrease_amount} increse_amount={increse_amount} />
        });
        return cart_item;
    }

}

const getStateToProps = state =>{
    return{
        cart : state.cart,
    }
}

const getPropsToDispatch = dispatch=>{
    return{
        remove_item: (cart)=>{
            dispatch( action_xoahang(cart) );
        },
        increse_amount:(cart)=>{
            dispatch( action_tangsoluong(cart)  );
        },
        decrease_amount:(cart)=>{
            dispatch( action_giamsoluong(cart)  );
        }
    }
}

export default connect(getStateToProps,getPropsToDispatch)(table);