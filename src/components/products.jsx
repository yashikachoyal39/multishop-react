import ProductCard from "./productCard";

export default function Products({productData}) {
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          {productData && productData.map((item,index)=>(
            <ProductCard Data={item} key={index} />
           ))}
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
