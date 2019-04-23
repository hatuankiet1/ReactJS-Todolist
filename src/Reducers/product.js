import * as Type from '../Constants/type';

const list_product =[
    {
        id:1,
        name:"Pizza Thập Cẩm",
        price: 10,
        img: "http://thegioiphunu.net/wp-content/uploads/2013/11/cach-lam-banh-pizza-ngon-tuyet-cho-cuoi-tuan-them-vui-1.png",
        descript:"Pizza– loại bánh đã nổi tiếng toàn thế giới,và đang thâm nhập vào thị trường Việt Nam. Tuy nhiên, pizza hay mỳ Ý vẫn còn là một món ăn khá xa xỉ với thực khách Việt, kể cả cả ở các thành phố lớn.",
    },
    {
        id:2,
        name:"Chè Bốn Mùa",
        price: 5,
        img : "https://momkitty.com/wp-content/uploads/2017/04/cac-mon-che-ngon.jpg",
        descript:"Các món chè ngon ngọt thanh, tươi mát dưới đây chính là một trong các món ăn vặt được nhiều anh chị em, gia đình, người thân lựa chọn để thưởng thức trong những ngày hè nắng nóng oi ả như thế này đó nha các bạn à.",
    },
    {
        id:3,
        name:"Bánh Tráng Cuốn Thịt Heo",
        price: 40,
        img : "https://static.hotdeal.vn/images/1475/1475370/500x500/335968-co-quyen-xu-quang-gia-hap-dan-mon-ngon-dac-san-mien-trung.jpg",
        descript:"Cô Quyên Xứ Quảng còn phục vụ những món cơm gia đình dân dã. Thực đơn cơm gồm có: cơm thịt heo kho, thịt kho tiêu, thịt rim tôm; cơm cá nục kho, cá kèo, cá cơm.",
    },
];

const sanpham = (state = list_product,action)=>{
    switch(action.type){
        default:
            return [...state];
    }  
};

export default sanpham;



