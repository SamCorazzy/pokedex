import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();

    const pokeFun = async () => {
        setLoading(true);
        const res = await axios.get(url);
        console.log(res);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false);
    };
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url);
            setPokeData((state) => {
                state = [...state, result.data];
                state.sort((a, b) => (a.id > b.id ? 1 : -1));
                return state;
            });
        });
    };
    useEffect(() => {
        pokeFun();
    }, [url]);
    return (
        <>
            <div className="total">
                <img src="pokedex.jpg" alt="" />
            </div>
            <div className="container">
                <div className="left-content">
                    <Card
                        pokemon={pokeData}
                        loading={loading}
                        infoPokemon={(poke) => setPokeDex(poke)}
                    />

                    <div className="btn-group">
                        {prevUrl && (
                            <button
                                onClick={() => {
                                    setPokeData([]);
                                    setUrl("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
                                }}
                            >
                                Inicio
                            </button>
                        )}

                        {prevUrl && (
                            <button
                                onClick={() => {
                                    setPokeData([]);
                                    setUrl(prevUrl);
                                }}
                            >
                                Anterior
                            </button>
                        )}

                        {nextUrl && (
                            <button
                                onClick={() => {
                                    setPokeData([]);
                                    setUrl(nextUrl);
                                }}
                            >
                                Siguiente
                            </button>
                        )}
                        {nextUrl && (
                            <button
                                onClick={() => {
                                    setPokeData([]);
                                    setUrl("https://pokeapi.co/api/v2/pokemon?offset=1106&limit=20");
                                }}
                            >
                                Fin
                            </button>
                        )}
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo data={pokeDex} />
                </div>
            </div>
        </>
    );
};
export default Main;