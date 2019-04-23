import React, { Component } from 'react';

export default class products extends Component {
    render() {
        return (
            <>
                <div className="col-md-4">
                    <div className="card-content">
                        <div className="card-img">
                            <img src={ this.props.sanpham.img } style={{  }} alt="" />
                            <span><h4>{ this.props.sanpham.name }</h4></span>
                        </div>
                        <div className="card-desc">
                            <h3>Giá { this.props.sanpham.price }$</h3>
                            <p>{ this.props.sanpham.descript }</p>
                            <button onClick={ ()=> this.muahang(this.props.sanpham) } type="button" className="btn-card">Mua Hàng</button>
                        </div>
                    </div>

                </div>
            </>
        );
    }
    muahang=(sanpham)=>{
        this.props.muahang(sanpham);
    }
}