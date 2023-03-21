import React from "react";

import classes from './favouritePage.module.css';

import NavList from "../navList/NavList";
import SearchBar from "../searchBar/SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

import { favourStorageDelete } from "../../store/favouriteReducer";

const FavouritePage = () => {

    const dispatch = useDispatch();

    const stateFavour = useSelector(state => state.favour.favouriteState);
    const favourLikes = useSelector(state => state.favour.favouriteLikes);

    
    function delItemFunc (elId) {
        dispatch( favourStorageDelete(elId) );
    }

    return (
        <div className={classes.reactionInner}>
            <div className={classes.reactionPrimary}>
                <h1 className="primaryTitle">
                    Hi guest!
                    <span className="primarySubtitle"> Welcome to my 2023 Front-end page </span>
                </h1>
                <h2 className="secondaryTitle">
                    Lets start using The Rick and Morty API
                </h2>
                <NavList></NavList>
            </div>
            <div className={classes.reactionSecondary}>
                <div className={classes.favouriteBlock}>
                    <SearchBar></SearchBar>
                    <div className={classes.blockFavourite}>
                        {
                            stateFavour ?
                                favourLikes.map(el =>
                                    <div
                                        className={classes.likesItem}
                                        key={uuidv4()}>
                                        <button
                                            onClick={() => delItemFunc(el.id)}
                                            className={classes.delItem}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.05691 8.99997L0.52832 1.47137L1.47113 0.528564L8.99972 8.05716L16.5283 0.528564L17.4711 1.47137L9.94253 8.99997L17.4711 16.5286L16.5283 17.4714L8.99972 9.94278L1.47113 17.4714L0.52832 16.5286L8.05691 8.99997Z" fill="white" />
                                            </svg>
                                        </button>
                                        <img src={el.image} alt={el.name}></img>
                                        <div> {el.name} </div>
                                    </div>
                                )
                                :
                                <div> you have nothing in favour section </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FavouritePage;