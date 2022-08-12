import { useState } from "react";




export const AddCategory = ({ onNewCategory }) => {

 const [inputValue, setInputValue] = useState(''); 

const onChangeValue = ({ target }) =>{
  setInputValue(target.value)
}

 const handleSubmitForm = event =>{
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;
    onNewCategory(inputValue.trim())

    // setCategories(categorie =>[inputValue,...categorie]);
    setInputValue('');
 }

 

  return (
    <form onSubmit={handleSubmitForm }>
      <input 
        type="text"
        placeholder="Buscar gifs..." 
        className="" 
        name="" 
        value= {inputValue}
        onChange = { onChangeValue }
      />
      <button className="margin" type="submit">Enviar</button>
    </form>
  );
}
 
export default AddCategory;
  
