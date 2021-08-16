import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sidebar(props) {
  const [types, setTypes] = useState();

  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type/');
        setTypes(response.data.results);
      } catch (error) {
        <p>{error}</p>;
      }
    }

    getPokemons();
  }, []);

  const handleCheckd = (event) => {
    if (event.target.checked === true) {
      return props.handleFilter(event.target.value);
    }
    return null;

    // props.handleFilter(event.target.value)
  };

  return (
    <form>
      <div className="flex flex-col space-y-3">
        <h4 className="font-medium text-red-600">Tipo de pokemon</h4>
        <hr className="border-gray-400" />

        {types
          ? types.map((type) => (
              <div className="mt-3" key={type.name}>
                <input
                  type="checkbox"
                  className="form-checkbox"
                  value={type.name}
                  onChange={(event) => handleCheckd(event)}
                />
                <span className="ml-2">{type.name}</span>
              </div>
              // eslint-disable-next-line indent
            ))
          : null}
      </div>
    </form>
  );
}

export default Sidebar;
