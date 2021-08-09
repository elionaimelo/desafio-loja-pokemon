function ProductItem({ title, image }) {
  return (
    <div className="flex flex-col bg-white p-6 rounded-md shadow-md mb-10">
      <img src={image} alt={title} />
      <h4 className="mt-4">{title}</h4>
      {/* <p className="my-4">Chamander é um pokemon tipo fogo</p>
      <button
        type="button"
        className="bg-red-600 mt-4 p-3 text-white rounded-md"
      >
        Comprar
      </button> */}
    </div>
  );
}

export default ProductItem;
