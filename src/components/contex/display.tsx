import {createContext, useContext, useState, Dispatch, SetStateAction} from "react"

type PropsContext = {
    kategory:boolean,
    setKategory:Dispatch<SetStateAction<boolean>>
}


export const DisplayContext = createContext<PropsContext>({
    kategory:false,
    setKategory:()=>{}
})

export const useCategory = ()=>{
    return useContext(DisplayContext)
}

type Props = {
    children:React.ReactNode
}
export const DisplayProvider = ({children}:Props)=>{
    const [kategory, setKategory] = useState(false)
    return (
        <DisplayContext.Provider value={{kategory,setKategory}}>
            {children}
        </DisplayContext.Provider>
    )
}