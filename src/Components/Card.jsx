import React from "react";

const tiposEle = {
  steel: "Acero",
  water: "Agua",
  bug: "Bicho",
  dragon: "Dragón",
  electric: "Eléctrico",
  ghost: "Fantasma",
  fire: "Fuego",
  fairy: "Hada",
  ice: "Hielo",
  fighting: "Lucha",
  normal: "Normal",
  grass: "Planta",
  psychic: "Psíquico",
  rock: "Roca",
  dark: "Siniestro",
  ground: "Tierra",
  poison: "Veneno",
  flying: "Volador",
}


const Card = ({ pokemon, loading, infoPokemon}) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
      //  console.log(item.moves);
          return (
            <>
              <div
                className={`card tipos tipo ${item.types[0].type.name}`}
                key={item.id}
                onClick={() => infoPokemon(item)}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <div className="tipos">
                <h2>{item.name}</h2>
                  {item.types.map((tipo) => {
                    return(
                      <p className="tipo">Tipo: {tiposEle[tipo.type.name]}</p>
                      )
                  })}
                </div>
              </div>
            </>
          );
        })
      )}
    </>
  );
};
export default Card;