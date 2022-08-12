import { useState } from 'react';
import {AddCategory,GifGrid } from './components/AddCategory';


export function GifExpertApp () {

const [ categories, setCategories  ] = useState([]);

const onAddCategory = (newCategory) =>{
  if(categories.includes(newCategory)) return;
  setCategories(cat =>[newCategory,...cat]);
}

  return ( 
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory= { onAddCategory } />
        {
         categories.map(category => 
            <GifGrid key={ category } category= { category } 
         />)
        }
    </>
   );
}

export default GifExpertApp;



