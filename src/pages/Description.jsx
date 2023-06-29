import { Suspense } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ProductDetails = ({ productId }) => {
  const { data, error } = useFetch(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (error) {
    return <h3>{error}</h3>;
  }

  if (!data) {
    return <h3>Loading...</h3>;
  }
  

  return (
    <div className="product-page">
      <div className="left-column">
        <img src={data.image} alt="Product" />
      </div>
      <div className="right-column">
        <h2 className="product-title">{data.title}</h2>
        <p className="product-description">{data.description}</p>
        <p className="product-price">Price: ${data.price}</p>
        <div className="product-features">
          <h4>Product Features</h4>
          <ul>
            <li>Category: {data.category}</li>
            <li>
              Rating: {data.rating.rate} ({data.rating.count})
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Description = () => {
  const { id: productId } = useParams();
  const navigate = useNavigate();
  const goBack = ()=>{
    navigate(-1);
  }
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
        <button onClick={goBack} className="btn">Go Back</button>
      <ProductDetails productId={productId} />
    </Suspense>
  );
};

export default Description;