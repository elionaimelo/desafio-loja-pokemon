import ProductItem from '../ProductItem';

export default function Products({ pokemons }) {
  return (
    <div className="container">
      <div className="grid md:grid-cols-4 gap-4">
        {pokemons.map((poke) => (
          <ProductItem key={poke.name} title={poke.name} image={poke.imgUrl} />
        ))}
      </div>
    </div>
  );
}
