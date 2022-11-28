import React, { useEffect, useState }  from "react";
import { useSearchParams } from 'react-router-dom';

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI
  const [searchParams, setSearchParams] = useSearchParams();
  const urlcategory = searchParams.getAll('category');
  const [category, setCategory] = useState(urlcategory || []);

  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

  const handlecategory = (e) => {
    let option = e.target.value;
    let newcategory = [...category];

    if (category.includes(option)) {
      newcategory.splice(newcategory.indexOf(option), 1);
    } else {
      newcategory.push(option);
    }
    {
      setCategory(newcategory);
    }
  };

  console.log(category);
  
  useEffect(() => {
    if (category) {
      let params = {};
      category && (params.category = category);

      setSearchParams(params);
    }
  }, [category, setSearchParams]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Sneakers" 
           onChange={handlecategory}
           defaultChecked={category.includes('Sneakers')}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input type="checkbox" value="Loafers" 
          onChange={handlecategory}
          defaultChecked={category.includes('Loafers')}/>
          <label>Loafers</label>
        </div>
        <div>
          <input type="checkbox" value="Canvas" 
          onChange={handlecategory}
          defaultChecked={category.includes('Canvas')}/>
          <label>Canvas</label>
        </div>
        <div>
          <input type="checkbox" value="Boots" 
          onChange={handlecategory}
          defaultChecked={category.includes('Boots')}/>
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
