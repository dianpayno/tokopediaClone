
import CardProduct from '../../elements/Card/CardProduct'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div className='p-7 grid grid-cols-6 gap-5'>
      <Link to={"/details-product"}>
        <CardProduct/>
        </Link>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
        <CardProduct/>
    </div>
  )
}

export default ProductList