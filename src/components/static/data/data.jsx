import React, {Component} from 'react';
import classes from "./data.module.css";
import TechsBtn from "../../../Elements/techsBTN/techsBTN";
import cover from "../../../assets/data.mp4";
import {Video} from "../../../Elements/VideoCover/video";
import {DatabaseData} from "../../../assets/dataRepository/databasesData";

class Data extends Component {
    render() {
        return (
            <>
                <Video cover={cover}/>
                <div className="content">
                    <div className={classes.square}>
                        <div className={classes.title}><p>Data</p></div>
                        <div className={classes.block1}/>
                        <div className={classes.block2}/>
                        <div className={classes.desc}>Data-science инженер, data аналитик, разработчик баз данных - эти и многие
                            другие направления появились в IT сфере довольно недавно, одно из самых молодых и
                            быстро-развивающихся направлений. Задачи и необходимость группы data-программистов напрямую связана
                            с направлением и продуктом сайта. Большинство сайтов статичны и не требуют совсем или требуют
                            малогабаритную базу данных. Но существуюи проекты, базы данных которых достигают веса в тысячи
                            терабайт данных и data-разработчики и аналитики просто необходимы.
                        </div>
                    </div>
                    <TechsBtn color="white" data={DatabaseData}/>
                </div>
            </>
        );
    }
}

export default Data;