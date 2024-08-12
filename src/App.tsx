import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Model";
import { productList } from "./data";
import Button from "./components/UI/Button";

function App() {
  /*._______ State _________..*/
  const [isOpen, setIsOpen] = useState(false);

  /*________Handler______ */

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const rederProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <main className="container mx-auto">
      <Button className="bg-indigo-700 " width="w-fit" onClick={open}>
        App New Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xlg:grid-cols-3  m-5 gap-3 p-2 rounded-md text-sm">
        {rederProductList}
      </div>
      <Modal isOpen={isOpen} title="Add Product" closeModel={close}>
        <div className="flex items-center space-x-2">
          <Button className="bg-indigo-700 " width="w-full">
            Submit
          </Button>
          <Button className="bg-red-700 " width="w-full">
            Cancel
          </Button>
        </div>
      </Modal>
    </main>
  );
}

export default App;
