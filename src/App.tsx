import { useState } from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import Modal from "./components/UI/Model";
import { formInputsList, productList } from "./data";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";

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

  const renderFormList = formInputsList.map((input) => (
    <div className="flex flex-col ">
      <label htmlFor="" className="mb-[2px] text-sm font-medium text-gray-700">
        {input.label}
      </label>
      <Input />
    </div>
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
        <form className="space-y-3">
          {renderFormList}
          <div className="flex items-center space-x-2">
            <Button className="bg-indigo-700 " width="w-full">
              Submit
            </Button>
            <Button className="bg-red-700 " width="w-full" onClick={close}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
}

export default App;
