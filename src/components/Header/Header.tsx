import React from 'react';
import classes from './Header.module.css';
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean,
    login: string | null
}

const Header = (props: PropsType) => {
    return <header className={classes.header}>
        Whats uP!
        <div className={classes.login}>
            {props.isAuth ? props.login :
                <NavLink to={'/login'} className={classes.login}> 
                    Login
                </NavLink>}
        </div>
    </header>
}
export default Header;