import { useEffect, useState } from "react";
import { getGits } from "../helpers/getGifts";

export const useFetchGits = ( category ) => {

    const [images, setImages ] = useState([]);

    const [isLoading, setIsLoading] = useState ( true );

    const getImages = async() => {
      const newImages = await getGits( category );
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
        getImages();
    }, []);

    return{
        images,
        isLoading
    }
}

