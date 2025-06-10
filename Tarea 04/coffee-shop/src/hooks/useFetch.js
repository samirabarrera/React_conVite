import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) throw new Error("Error en la solicitud")
                return res.json()
            })
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })
    }, [url])

    function mensaje() {
        console.log("Datos obtenidos desde useFetch.")
    }

    return { data, loading, error, mensaje }
}