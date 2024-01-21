import BannerEmpty from "../AutentikasiElement/BannerEmpty"
import Label from "./Label"

type inputProps = {
  name: string,
  id:string,
  placeholder?: string,
  textLabel:string,
  type:"text"|"email"|"number"|"password"
  textTransform?:"capitalize"|"lowecase" |"none"
  value:string
  getValue:(event: React.ChangeEvent<HTMLInputElement>) => void
  getEmptyLabel?:string
  getRef?: React.RefObject<HTMLInputElement>
  
}

const Input:React.FC<inputProps> = (props) => {
  const { name, id, placeholder, textLabel, type, textTransform, getValue, value, getEmptyLabel,getRef} = props
  return (
    <div>
        <Label text={textLabel} name={name}/>
        
        <input ref={getRef} type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={getValue}
        className={`outline text-sm outline-gray-200  focus:outline-green-600 w-full px-2 py-1 
        ${textTransform} rounded placeholder:font-thin placeholder:text-xs placeholder:opacity-80 placeholder:${textTransform} placeholder:text-sm mb-1`}/>
        <BannerEmpty label={getEmptyLabel}/>
          
        
       
    
    </div>
  )
}

export default Input