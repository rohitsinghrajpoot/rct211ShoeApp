import React, { useEffect } from "react";
import Filter from "../Components/Filter";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { shoesData } from '../Redux/AppReducer/action';
import ShoeCard from '../Components/ShoeCard';
import { Link } from 'react-router-dom';
import { useSearchParams, useLocation } from 'react-router-dom';
import './Shoes.css';

const Shoes = () => {
  const [searchParams] = useSearchParams();

  const shoes = useSelector((state) => state.AppReducer.shoes);
  console.log('shoes:', shoes);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (shoes.length === 0 || location.search) {
      const shoescat = {
        params: {
          category: searchParams.getAll('category'),
        },
      };
      dispatch(shoesData(shoescat));
    }
  }, [location.search]);

  return (
    <div>
      <Filter />
      <div className='shoe'>
      {shoes.map((Singleshoes) => {
          return (
            <div key={Singleshoes.id}>
              <Link to={`/shoes/${Singleshoes.id}`}>
                <ShoeCard data={Singleshoes} />
              </Link>
            </div>
          );
        })}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
