import { FaRegCircleCheck } from "react-icons/fa6";
import {motion} from "framer-motion"

type Props = {
    title: string
}
const Toast = (props: Props) => {
  return (
    <motion.div
    initial={{ y: 0, opacity: 0.3 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-32 left-[30%] right-[30%] bottom-[430px] rounded-lg  bg-black bg-opacity-70 z-[999] flex justify-center items-center">
    <FaRegCircleCheck className="text-white"/>
      <p  className="text-white font-bold text-sm capitalize ms-3 ">{props.title}</p>
    </motion.div>
  )
}

export default Toast