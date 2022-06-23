import React from "react";
const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item) => {
        //   console.log(item);
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
                  {item.types.map((tipo,index) => {
                    return(
                      <p className="tipo">{tipo.type.name}</p>
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