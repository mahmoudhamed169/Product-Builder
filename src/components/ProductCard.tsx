import productOne from "../assets/imges/photo-1505740420928-5e560c06d30e.jpg";
import Image from "./Image";
import Button from "./UI/Button";
export default function ProductCard() {
  return (
    <div className="border rounded-md p-2  flex  flex-col">
      <Image imgURL={productOne} alt="produvt Name" className="rounded-md" />
      <h2>HeadPhone</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam labore
        amet culpa sit aliquid eos.
      </p>
      <div className="flex  items-center my-5 space-x-1">
        <span className="w-5 h-5 bg-emerald-600 rounded-full  "></span>
        <span className="w-5 h-5 bg-red-600 rounded-full "></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full "></span>
      </div>

      <div className="flex items-center justify-between">
        <span>$500,000</span>
        <img
          src={productOne}
          className="w-10 h-10 rounded-full object-cover"
          alt=""
        />
      </div>

      <div className="flex items-cnter justify-between space-x-2 mt-5 ">
        <Button className="bg-indigo-700 " width="w-full">
          EDIT
        </Button>
        <Button className="bg-red-700 " width="w-fit">
          EDIT
        </Button>
      </div>
    </div>
  );
}
