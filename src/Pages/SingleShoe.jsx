import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { shoesData } from '../Redux/AppReducer/action';

const SingleShoe = () => {
  const shoes = useSelector((state) => state.AppReducer.shoes);
  // console.log('state1:', state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [currentshoe, setcurrentShoe] = useState({});

  useEffect(() => {
    if (shoes?.length === 0) {
      dispatch(shoesData());
    }
  }, [shoes?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const temp = shoes?.find((shoe) => shoe.id === Number(id));
      temp && setcurrentShoe(temp);
    }
  }, [shoes, id]);

  console.log(currentshoe);
  return (
    <div>
      <h1>Single Shoe Page</h1>
      <div>
        <img src={currentshoe?.image} alt='Cover Pic' />
      </div>
      <div>
        <div>{currentshoe?.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
