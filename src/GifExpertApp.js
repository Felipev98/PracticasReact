import React,{ useState,useEffect } from 'react'
import { AddCategory } from './components/AddCategory'
import {GifGrid} from './components/GifGrid'
export const GifExpertApp = () =>{
    const [categories,setCategories] = useState(['Euphoria']);
    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories ={setCategories} />
        <hr/>
        <ol>
            {
                categories.map(category =>(
                    <GifGrid key={category} category={category}/>
                ))
            }
        </ol>
        </>
    )
}

