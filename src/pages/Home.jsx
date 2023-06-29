import { Suspense, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(null);

  const { data, error } = useFetch("https://fakestoreapi.com/products/");
  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <div className="productsWrapper">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {error && (
            <h3>
                { error }
            </h3>
          )}
      </div>
    </Suspense>
  );
};

export default Home;
