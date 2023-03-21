import React from 'react';

import classes from './homePage.module.css';
import logo from '../../assets/images/logo.png';
import greetingsImg from '../../assets/images/greetings.png';
import videoGuide from '../../assets/video/RickandMorty.mp4';
import code from '../../cats-code.zip';
import codeImg from '../../assets/images/zipimage.png';

import NavList from '../navList/NavList';

import Voting from '../votingPage/VotingPage';
import { useSelector } from 'react-redux';

const multiClass_1 = classes.decoration + ' ' + classes.decoration_1;
const multiClass_2 = classes.decoration + ' ' + classes.decoration_2;

const HomePage = () => {

    const primaryColor = useSelector(state => state.theme.themeColorPrimary);
    const imgBgColor = useSelector(state => state.theme.homeImgBg);
    const secondaryColor = useSelector(state => state.theme.themeColorSecondary);

    return (
        <div className={classes.home}>
            <div className={multiClass_1}></div>
            <div className={multiClass_2}></div>
            <div className='container'>
                <div className={classes.homeInner}>
                    <div className={classes.homePrimary}>
                        <div className="logo">
                            <img src={logo} alt="This project's logo" />
                        </div>
                        <h1 className="primaryTitle" style={ {color: primaryColor} }>
                            Hi guest!
                            <span className="primarySubtitle" style={ {color: secondaryColor} }> Welcome to my 2023 Front-end page </span>
                        </h1>
                        <h2 className="secondaryTitle" style={ {color: primaryColor} }>
                            Lets start using The Rick and Morty API
                        </h2>
                        <NavList></NavList>
                    </div>
                    <div className={classes.homeSecondary} style={ {backgroundColor: imgBgColor} }>
                        <img src={greetingsImg} alt="Красивая картинка 'приветствие' "></img>
                        <a className={classes.download} download href={ code } style = { { color: primaryColor } }>
                            <img src={codeImg} alt="zip arch" />
                            get this code
                        </a>
                    </div>
                </div>
                <h2 className={classes.homeVideoTitle} style={ {color: primaryColor} }> Tutorial:D </h2>
                <div className={classes.homeVideo}>
                    <video loop muted playsInline webkit-playsinline = "true" preload="auto" controls
                        className="procedures__video">
                        <source src={videoGuide} type="video/webm" />
                        {/* <source src="/video/procedures.mp4" type="video/mp4" /> */}
                    </video>
                </div>
            </div>
        </div>
    )
};

export default HomePage;