import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../home/products';
import { action_muahang } from './../../Actions/action';


class product extends Component {
    render() {
        return (
            <>
                <section className="details-card">
                    <div className="container">
                        <h1 class="text-center" style={{ color:'white',marginBottom:'2%'}}>Danh Sách Sản Phẩm</h1>
                        <div className="row">
                            {this.display(this.props.sanpham)}
                        </div>
                    </div>
                </section>
            </>
        );
    }

    display = sanpham => {
        let list = '';
        var { muahang } = this.props;
        list = sanpham.map((value, index) => {
            return <Products key={index} sanpham={value} muahang={muahang} />
        });
        return list;
    }

}

const getStateToProps = state => {
    return {
        sanpham: state.sanpham,
    }
}

const getPropsToDipsatch = dispatch => {
    return {
        muahang: (sanpham) => {
            dispatch(action_muahang(sanpham));
        }
    }
}

export default connect(getStateToProps, getPropsToDipsatch)(product);


