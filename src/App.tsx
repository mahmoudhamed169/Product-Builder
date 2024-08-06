import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-3  m-5 gap-3 p-2 rounded-md text-sm">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
}

export default App;
