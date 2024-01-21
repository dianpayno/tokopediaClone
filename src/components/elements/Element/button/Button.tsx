type buttonProps={
    text:string
    getClick?:() => void
    type:"button"|"submit"
}

const Button:React.FC<buttonProps> = (props)=> {
    const{text, getClick, type}=props
  return (
    <div>
        <button type={type} onClick={getClick} className='w-full text-white bg-green-600 text-sm rounded border-none px-3 py-2 capitalize mt-4 mb-2 font-semibold hover:opacity-70'>
            {text}
        </button>
    </div>
  )
}

export default Button