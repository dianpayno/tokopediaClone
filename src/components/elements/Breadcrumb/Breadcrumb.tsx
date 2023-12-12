import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom"

type Props = {
    category: string
    title: string
}
const Breadcrumb = (props: Props) => {
  return (
    <div className="flex items-center gap-1 pl-20 pt-3 pb-1 ">
        <Link to={"/"} className="text-sm text-green-600">Home</Link>
        <MdKeyboardArrowRight className="text-lg text-gray-500" />
        <Link to={"/"} className="text-sm text-green-600 capitalize">{props.category}</Link>
        <MdKeyboardArrowRight className="text-lg text-gray-500" />
        <p className="text-sm capitalize">{props.title}</p>
        
    </div>
  )
}

export default Breadcrumb