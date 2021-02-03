import {useEffect, useState} from 'react'

//Setting prefix allows to easily identify keys
const PREFIX='codedit-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey= PREFIX+key

    //getting the value from local storage
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if(jsonValue !=null) return JSON.parse(jsonValue)

        if (typeof initialValue ==='function'){
            return initialValue()
        } else {
            return initialValue
        }
    })

    //saving the value in local storage
    useEffect(()=> {
        localStorage.setItem(prefixedKey, JSON.stringify(value))
    }, [prefixedKey, value])

    return [value, setValue]
}
