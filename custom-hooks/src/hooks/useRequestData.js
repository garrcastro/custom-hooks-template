import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestData = (url, initialState)=> {
    const [data,setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(() =>{
        setIsLoading(true)
        axios.get(url)
        .then((response) =>{
            setIsLoading(false)
            setData(response.data)
        })
        .catch((error)=>{
            setIsLoading(false)
            setIsError(true)
            console.log(error)
        })

    }, [url])
return [data, isLoading, isError]
    
}

export const useRequestDataHP = (url, initialState) =>{
    const [data, setData] = useState(initialState)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url)
        .then((response)=>{
            setIsLoading(false)
            setData(response.data)
        })
        .catch((error)=>{
            setIsLoading(false)
            setIsError(true)
            console.log(error.response)
        })
    }, [url])
    return [data, isLoading, isError]
}