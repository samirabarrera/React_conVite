import { useEffect, useState } from "react";

export default function DogBreedSearch () {
    const [dogList, setDogList] = useState([]);
    const getData = async () => {
        try {
            const imgURL = await Promise.all(Array.from({length:10})
            .map(() => fetch('https://dog.ceo/api/breeds/image/random')
                .then(res = res.json())
                .then(data => data.message)))
            setDogList(imgURL);
        } catch (errMsg) {
            console.error("ERror al obtener listado de perros: ", errMsg);
        }
    }
    useEffect(() => {
        getData()
    },[])

    return(
        <div>

        </div>
    )
};