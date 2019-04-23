import React,{Component} from 'react';

class cart extends Component{
    render(){
        return(
            <>
                <tr>
                    <td>{this.props.stt + 1}</td>
                    <td>
                    <img style={{width:'266px',height:'166px' }} src={ this.props.cart.sanpham.img } alt="" />
                    </td>
                    <td>{this.props.cart.sanpham.name}</td>
                    <td>{this.props.cart.sanpham.descript}</td>
                    <td>{this.props.cart.sanpham.price}$ </td>
                    <td className="center-on-small-only">
                    <span className="qty">{ this.props.cart.amount }</span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                            <a  href="#top" onClick={ ()=>this.increse_amount(this.props.cart) } style={{color:'white',textDecoration:'none'}}>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                                            btn-rounded waves-effect waves-light">
                            <a href="#top" onClick={ ()=>this.decrease_amount(this.props.cart) } style={{color:'white',textDecoration:'none'}}>+</a>
                        </label>
                    </div>
                    </td>

                    <td>{this.props.cart.sanpham.price* this.props.cart.amount} $</td>

                    <td>
                    
                    <button style={{cursor:'pointer'}} type="button" onClick = { ()=> this.remove_item(this.props.cart) } className="btn btn-sm btn-primary waves-effect waves-light">Xóa</button>
                    
                    </td>
                </tr>
            </>
        );
    }
    remove_item=(cart)=>{
        this.props.remove_item(cart);
    }
    increse_amount=(cart)=>{
        this.props.increse_amount(cart);
    }
    decrease_amount=(cart)=>{
        this.props.decrease_amount(cart);
    }
}

export default cart;

