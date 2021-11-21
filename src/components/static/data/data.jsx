import React, {Component} from 'react';
import classes from "./data.module.css";

class Data extends Component {
    render() {
        return (
            <div className={classes.square}>
                <div className={classes.title}><p>Data</p></div>
                <div className={classes.block1}/>
                <div className={classes.block2}/>
                <div className={classes.desc}>Data-science инжинер, data аналитик, разработчик баз данных - эти и многие
                    другие направления появились в IT сфере довольно недавно, одно из самых молодых и
                    быстро-развивающихся направлений. Задачи и необходимость группы data-программистов напрямую связана
                    с направлением и продуктом сайта. Большинство сайтов статичны и не требуют совсем или требуют
                    малогабаритную базу данных. Но существуюи проекты, базы данных которых достигают веса в тысячи
                    терабайт данных и data-разработчики и аналитики просто необходимы.
                </div>
            </div>
        );
    }
}

export default Data;