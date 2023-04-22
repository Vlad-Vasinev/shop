import React from 'react';

import classes from './buttonBy.module.css';
import { Link } from "react-router-dom";

import { addToBinCreator } from '../../store/binReducer';
import { plusProductCreator } from '../../store/binReducer';
import { plusCountOfProductCreator } from '../../store/binReducer';
import { useDispatch } from 'react-redux';

function ButtonBuy(props) {

  const dispatch = useDispatch();

  function buyThisOne(e) {
    e.preventDefault();

    let object = {
      id: props.idEl,
      name: props.productName,
      equipment: props.equipment,
      images: props.images,
      specifications: props.specifications,
      price: props.price,
      count: props.count,
      countOfProduct: 0
    };

    dispatch(addToBinCreator(object));
    dispatch(plusProductCreator(props.price));
    // dispatch(plusCountOfProductCreator(object.id))
  }

  return (
    <Link
      onClick={buyThisOne}
      className={classes.buttonBuy} to="/productPage" >Купить</Link>
  );
}

export default ButtonBuy;
 
// basketPage  /basketPage