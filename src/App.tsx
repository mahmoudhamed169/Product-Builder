import "./App.css";
import ProductCard from "./components/ProductCard";
import { productList } from "./data";

function App() {
  const rederProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-3  m-5 gap-3 p-2 rounded-md text-sm">
        {rederProductList}
      </div>
    </>
  );
}

export default App;
