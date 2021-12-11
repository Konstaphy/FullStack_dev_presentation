import React, {Component} from 'react';
import classes from "./back.module.css";
import TechsBtn from "../../../Elements/techsBTN/techsBTN";
import cover from "../../../assets/front.mp4";
import {Video} from "../../../Elements/VideoCover/video";
import {BackData} from "../../../assets/dataRepository/backData";

class Back extends Component {
    render() {
        return (
            <>
                <Video cover={cover}/>
                <div className="content">
                    <div className={classes.square}>
                        <div className={classes.block1}/>
                        <div className={classes.title}><p>Back</p></div>
                        <div className={classes.desc}>Бэкенд разработчики на данный момент одни из самых восстребованных во всей
                            IT сфере. Направлений в этой структуре также немало, множество специалистов должны понимать работу
                            фронтенда, чтобы корректно отправлять данные на клиентскую часть приложения. Основные задачи
                            работника в этой сфере заключаются в написании API приложения и работы алгоритмов на стороне
                            “сервера” - алгоритмов, работа которых не видна обычному пользователю. Также немаловажной и довольно
                            непростой задачей является связь написанного API с базами данных.
                        </div>
                        <div className={classes.block2}/>
                    </div>
                    <TechsBtn color="white" data={BackData}/>
                </div>
            </>


        );
    }
}

export default Back;