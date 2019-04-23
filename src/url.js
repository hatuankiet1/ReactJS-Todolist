
import Home from './pages/home/home';
import NotFound from './pages/404/404';
import List from './pages/list/list';
import Contact from './pages/contact/contact';

const url = [
    {
        path:'/',
        exact:true,
        component: Home
    },
    {
        path:'/list',
        exact:false,
        component: List
    },
    {
        path:'/contact',
        exact:false,
        component: Contact
    },
    {
        path:'',
        exact:false,
        component: NotFound 
    },
];

export default url;