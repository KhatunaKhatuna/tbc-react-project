import Image from "next/image";

const fetchData = async (id) => {
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const ProductDetails = async ({ params }) => {
  const productId = params.productId;
  const productData = await fetchData(productId);

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20  max-w-[80%] mx-auto my-0 ">
        <div className="flex justify-center items-center flex-col gap-8 ">
          <h2 className="text-[25px] leading-[25px] lg:text-[40px] lg:leading-[45px] text-center text-[#6B72FE] ">
            {productData?.title}
          </h2>
          <div className="rounded-2xl w-[80%] h-[300px] overflow-hidden">
            <Image
              src={productData?.thumbnail}
              alt={productData?.title}
              width={500}
              height={500}
              className="max-w-full w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center *:text-[#fdf2e9]  *:text-[14px] lg:*:text-[16px] [&_span]:text-[#6B72FE]  [&_span]:text-[16px] [&_span]:lg:text-[22px]">
          <p>
            <span>Category: </span>
            {productData?.category}
          </p>
          <p>
            <span>Brand: </span>
            {productData?.brand}
          </p>
          <p>
            <span>Description: </span>
            {productData?.description}
          </p>
          <p>
            <span>Price: </span>
            {productData?.price} &euro;
          </p>
          <p>
            <span>In Stock: </span>
            {productData?.stock}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
