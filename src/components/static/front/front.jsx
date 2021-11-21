import React, {Component} from 'react';
import classes from "./front.module.css";

class Front extends Component {
    render() {
        return (
            <div className={classes.square}>
                <div className={classes.title}><p>Front</p></div>
                <div className={classes.block1}/>
                <div className={classes.block2}/>
                <div className={classes.desc}>На этапе разработки вёрстки интерфейса сайта и связи визуальной части с
                    API бекенда вашего проекта в разрабокту вступают фротенд-инженеры. Основные задачи таких
                    разработчиков можно разделить на 2 этапа: -непосредственно вёрстка UI.
                    -”оживление” этого интерфейса.
                    И, если с первой части вопросов в основном не бывает, то во время оживления сайта появляются
                    некоторые подводные камни, которые и требуют большую часть времени разработчика.
                </div>
            </div>
        );
    }
}

export default Front;