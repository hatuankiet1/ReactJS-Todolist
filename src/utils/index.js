import axios from 'axios';

export default function callApi(method,endpoint,data){
    axios({
        method:method,
        url : `http://5c6131281325a20014976388.mockapi.io/api/products/${endpoint}`,
        body : data
    }).catch(err=>{
        console.log(err);
    });
}