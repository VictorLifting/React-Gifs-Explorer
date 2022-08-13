import { useState } from "react"

export const Addcategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange =()=>{
        setInputValue(event.target.value);
        }

    const onSumit =() =>{
        event.preventDefault()
        if(inputValue.trim().length<=1)return
        // setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim())
        setInputValue(" ");
    }


  return (

    <form action="" onSubmit={ onSumit }>

        <input 
        type="text"
        placeholder="Buscar gifs"   
        value={ inputValue }
        onChange={ onInputChange }/>


    </form>
  )
}
