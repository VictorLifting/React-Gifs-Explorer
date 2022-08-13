import React from 'react'
import { useState } from 'react'
import { Addcategory, GiftGrid } from './components';
// import { GiftGrid } from './components/GiftGrid';

export const GitfExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (onNewCategory) =>{
        //console.log(onNewCategory);
        const onNewCategoryLC =  onNewCategory.toLowerCase();
        if(categories.includes(onNewCategoryLC))return;
        setCategories([ onNewCategoryLC, ...categories]);

    }

  return (
    <>
    {/* */}
    <h1>GifExpertApp</h1>

    {/*Input*/}

    <Addcategory 
   // setCategories ={setCategories}
    onNewCategory={onAddCategory}
    />

    {/*Listado de Gifs */}
    {categories.map( category=>
        <GiftGrid key={category} category={category}/>
        // <div key ={category}>
        //     <h3> {category} </h3>
        //     <li > {category} </li>
        // </div> 
  
    )}

    {/* <li>ABC</li> */}

   
        {/*Gif items*/}
    </>
  )
}
