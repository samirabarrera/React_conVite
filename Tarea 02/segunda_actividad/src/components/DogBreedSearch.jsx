import { useEffect, useState } from "react";

export default function DogBreedSearch () {

  const [dogList, setDogList] = useState([]);


  const getData = async () => {
    try {
      // Se puede utilizar un Promise.all para obtener a partir de un array de 10 elemenos hacer un
      // fetch por cada elmento obteniendo la respuesta de cada uno
      const imgUrls = await Promise.all(Array.from({length:10})
                        .map(()=> fetch('https://dog.ceo/api/breeds/image/random')
                                .then(res => res.json())
                                .then(data => data.message)))
      setDogList(imgUrls); // Se guarda la respuesa de cada uno en un arreglo
    }catch(errMsg) {
      console.error("Error al obtener listado de perros: ", errMsg);
    }
  }

  // Colocar el useEffect para que se ejecute una vez al crear el componente
  useEffect(()=>{
    getData()
  },[])

    return (
        <div>
          
        </div>
    )
};