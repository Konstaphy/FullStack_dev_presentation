import React, {Component} from 'react';
import classes from './section.module.css'

class Section extends Component {
    render() {
        return (
            <section className={classes.fullscreen}>
                <div className={classes.child}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Section;