import Image from 'next/image';

function ProductItem({ title, image }) {
  return (
    <div className="flex flex-col bg-white p-6 rounded-md shadow-md mb-10">
      {/* <img src={image} alt={title} /> */}
      <Image
        src={image}
        alt={title}
        width={220}
        height={185}
        className="mx-auto"
      />
      <h4 className="text-3xl font-semibold mt-4 text-center">{title}</h4>
      {/* <p className="my-4">Chamander é um pokemon tipo fogo</p> */}
      <button
        type="button"
        className="bg-red-600 mt-4 p-3 text-white rounded-md"
      >
        Comprar
      </button>
    </div>
  );
}

export default ProductItem;
