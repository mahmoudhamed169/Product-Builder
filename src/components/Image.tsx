interface IProps {
  imgURL: any;
  alt: string;
  className: string;
}

export default function Image({ imgURL, alt, className }: IProps) {
  return <img src={imgURL} alt={alt} className={className} />;
}
