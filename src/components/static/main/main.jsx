import React, {Component} from 'react';
import classes from "./main.module.css";
import cover from '../../../assets/cover.mp4'
import {Video} from "../../../Elements/VideoCover/video";

class Main extends Component {
    render() {
        return (
            <>
                <Video cover={cover}/>
                <div className={classes.square}>
                    <div className={classes.title_box}>
                        <p className={classes.title}>Full-stack web developer</p>
                    </div>
                    <div className={classes.description_box}>
                        <p className={classes.description}>Фуллстек разработчики, кто же они? Многие говорят, что быть
                            полноценным фуллстеком невозможно - пока освоишь новые технологии фронтенда, бекенд вырастет
                            с
                            ещё большей, чем фронтенд скоростью, но так ли это? Существует множество мнений и каждый
                            смотрит
                            на разные вещи при размышлении об этом. Чтобы сформировать своё нужно для начала понимать
                            чем
                            они всё-таки занимаются, какие сущетсвуют этапы и подразделения. В этом вам и поможет данный
                            сайт.</p>
                    </div>
                </div>
            </>

        );
    }
}

export default Main;