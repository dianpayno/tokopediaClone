import Input from "../../elements/Element/Input/Input"
import Button from "../../elements/Element/button/Button"
import FooterAutentikasi from "../../elements/Element/button/Button"

import {BsFillBagCheckFill} from "react-icons/bs"
import {TiShoppingCart} from "react-icons/ti"
import {useEffect, useState, useRef} from "react"
import { Link } from "react-router-dom"




const LoginLayout = () => {


const [email, setEmail] = useState<string>("")
const [password, setPassword] = useState<string>("")
const [emptyEmail, setemptyEmail] = useState<string>("")
const [emptyPassword, setemptyPassword] = useState<string>("")
const emailInputRef = useRef<HTMLInputElement>(null)
const passwordInputRef = useRef<HTMLInputElement>(null)

 
  useEffect(()=>{
    document.title = "Belibeli | Masuk"
  },[])
   
    const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value)
      
    }
  
    const getPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value)

    }
  const handleSubmit = ()=>{
    if (email === "" ) {
      setemptyEmail("Email tidak boleh kosong")
      emailInputRef.current?.focus()
    }else if (password === "") {
      setemptyPassword("Password tidak boleh kosong")
      passwordInputRef.current?.focus()
    }
  }
  return (
    <div>
        <div className="mt-2 text-green-500 justify-center flex items-center">
            
            <BannerDaftarlayout text="Tokopedia"/>
        </div>
        <div className="flex flex-row justify-center gap-10 w-full items-center min-h-screen relative">
        <div className=" flex flex-col justify-center items-center">
            <img src="https://images.tokopedia.net/img/content/register_new.png" alt=""
            className="w-[300px]" />
            <p className="font-bold text-xl mt-7">Jual Beli Mudah Hanya di Tokopedoa</p>
            <p className="font-base text-gray-700 text-sm flex items-center ">
              Gabung yuk dan rasakan kemudahan bertransaksinya
              <BsFillBagCheckFill className="ml-1"/>
            </p>
        </div>


        <div className="flex flex-col w-[380px] py-5 px-6  bg-white rounded-xl shadow z-10">
        <form method="" action={"/register"} >
       
            <BannerDaftarlayout text="masuk"/>
            <Link to={"/register"}>
            <p className="text-xs font-thin text-green-600 text-end capitalize">butuh bantuan?</p>
            </Link>
            
             <Input name="email" id="emailuser" placeholder="contoh@mail.com" textLabel="email" type="email" textTransform="lowecase"
             getValue={getEmail} value={email} getEmptyLabel={emptyEmail} getRef={emailInputRef}/>

             <Input name="password" id="passworduser" placeholder="" textLabel="pasword" type="password"
             getValue={getPassword} value={password} getEmptyLabel={emptyPassword} getRef={passwordInputRef}/>

             <Button type="submit" text="masuk" getClick={handleSubmit} /> 
            <MasukLayoutTyphography text1="Belum punya akun Tokopedia?" text2="daftar"/>

        </form>
        </div>
        </div>
        <div>
         
        </div>
    </div>
      
    
  )
  }

export default LoginLayout




const MasukLayoutTyphography = (props:{text1:string, text2:string}) => {
  return (
    <div className="text-center px-10">
    <span className="text-xs font-thin text-gray-700 text-center">{props.text1}
    <span className="ms-1 font-base text-green-600 capitalize">
       <Link to={"/register"}> {props.text2}</Link>
        </span></span>
    </div>
  )
}

const BannerDaftarlayout = (props:{text:string}) => {
  return (
    <div>
      <p className="font-bold text-xl text-center capitalize">{props.text}</p>
    </div>
  )
}


// const BannerEmpty = (props:{text:string}) => {
//   return (
//     <div>
//       <p className="font-base text-xs capitalize text-red-700 text-start">{props.text}</p>
//     </div>
//   )
// }