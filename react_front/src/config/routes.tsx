import IRoute from "../interfaces/route";
import LoginPage from "../pages/Auth/Login";
import RegisterPage from "../pages/Auth/Register";

const routes: IRoute[] = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage,
        exact: true,
        props: ''
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage,
        exact: true,
        props: ''
    }
]

export default routes