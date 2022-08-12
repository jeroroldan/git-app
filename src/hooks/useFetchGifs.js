import { useEffect,useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async() =>{

      const imagesResult =  await getGifs(category);
      setimages(imagesResult);
      setIsLoading( false );
  }


  useEffect(() => {
    getImages();
  },[]);


  return { images, 
    isLoading }
}


export default useFetchGifs;


 
