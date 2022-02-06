import React,{ useState,useEffect } from 'react'
import { GifGridItem } from './GifGridItem';
import {getGifs} from '../helpers/getGifs';
import {useFetchGifs} from '../hooks/useFetchGifs';
export const GifGrid = ({category}) =>{
    // const [images, setImages] = useState([]);
const {data:images,loading} = useFetchGifs(category);


    return(
        <>
          <div className='card-grid'>
        <h3>{category}</h3>
        {loading && <p>Loading...</p>}
        {
            images.map(img =>(
                <GifGridItem key={img.id} {...img} />
                ))
        }
        </div>
        </>

      
    )
}