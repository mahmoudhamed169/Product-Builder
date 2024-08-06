import productOne from "../assets/imges/photo-1505740420928-5e560c06d30e.jpg";
import { IProduct } from "../interfaces";
import { txtSlicer } from "../Utils/functions";
import Image from "./Image";
import Button from "./UI/Button";

interface IProps {
  product: IProduct;
}
export default function ProductCard({ product }: IProps) {
  const { title, description, imageURL, price } = product;
  return (
    <div className="border rounded-md p-2  flex  flex-col">
      <Image imgURL={imageURL} alt="produvt Name" className="rounded-md" />
      <h2>{title}</h2>
      <p>{txtSlicer(description)}</p>
      <div className="flex  items-center my-5 space-x-1">
        <span className="w-5 h-5 bg-emerald-600 rounded-full  "></span>
        <span className="w-5 h-5 bg-red-600 rounded-full "></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full "></span>
      </div>

      <div className="flex items-center justify-between">
        <span>{price}</span>
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
        <Button className="bg-red-700 " width="w-full">
          EDIT
        </Button>
      </div>
    </div>
  );
}
