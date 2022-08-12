import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid'


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



