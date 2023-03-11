import {AdminLoyout} from "../layouts"
import {HomeAdmin,UsersAdmin } from "../pages";

const routesAdmin = [
    {
        path:"/admin",
        layout: AdminLoyout,
        component:HomeAdmin,
        exact:true
    },
    {
        path:"/admin/users",
        layout: AdminLoyout,
        component:UsersAdmin,
        exact:true
    }
];


export default routesAdmin;