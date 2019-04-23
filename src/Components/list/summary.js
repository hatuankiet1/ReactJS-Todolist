import React, { Component } from 'react';
import {connect} from 'react-redux';

class summary extends Component {
    render() {
        return (
            <>
                <section>
                    <div className="container">
                        <div className="row float-right">
                            <label className="label label-success" >Tổng Cộng :</label>
                            <label className="label label-info" style={{ backgroundColor: '#1ABC9C', color: 'white' }}>{ this.display_price(this.props.cart) } $</label>
                            
                        </div>
                    </div>
                </section>
            </>
        );
    }
    display_price=cart=>{
        let summary = 0;
        for(var i=0;i<cart.length;i++ ){
            summary += (parseFloat(cart[i].sanpham.price)*parseFloat(cart[i].amount) );
        }
        return summary;
    } 
}
const mapStateToProps = state =>{
    return{
        cart : state.cart,
    }
}

export default connect(mapStateToProps,null)(summary);