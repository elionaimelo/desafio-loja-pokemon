import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Sidebar() {
  const [types, setTypes] = useState();
  useEffect(() => {
    async function getPokemons() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/type/');
        console.log(response.data.results);
        setTypes(response.data.results);
      } catch (error) {
        console.log('deu erro');
      }
    }

    getPokemons();
  }, []);

  return (
    <form>
      <div className="flex flex-col space-y-3">
        <h4 className="font-medium text-red-600">Tipo de pokemon</h4>
        <hr className="border-gray-400" />
        {console.log(types)}
        {types
          ? types.map((type) => (
              <div className="mt-3" key={type.name}>
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">{type.name}</span>
              </div>
              // eslint-disable-next-line indent
            ))
          : null}

        {/* <div className="mt-3">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Planta</span>
        </div>
        <div>
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">Elétrico</span>
        </div> */}
      </div>
    </form>
  );
}

export default Sidebar;
