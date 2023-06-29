import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div>
        <Link to={`/desciption/${product.id}`}>
            <div className="card">
                <img src={ product.image } alt={product.name}/>
                <h4>{ product.title }</h4>
                <h5>{ product.price }</h5>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard