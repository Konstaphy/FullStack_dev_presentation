import React, {Component} from 'react';
import classes from './navigation.module.css'

class Navigation extends Component {
    render() {
        return (
            <div className={classes.nav_box}>
                <ul className={classes.list}>
                    <li>front</li>
                    <li>back</li>
                    <li>data</li>
                </ul>
            </div>

        );
    }
}

export default Navigation;