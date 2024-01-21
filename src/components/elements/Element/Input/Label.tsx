type textlabel ={
    text:string
    name?:string
}

const Label:React.FC<textlabel> = (props)=>{
    const {text, name} = props
    return (
        <div>
        <label htmlFor={name}
        className="font-semibold py-2  text-sm capitalize"
        >{text}</label>
        </div>
    )
}

export default Label