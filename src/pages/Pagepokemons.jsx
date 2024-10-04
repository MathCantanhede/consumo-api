import { useEffect, useState } from "react";

function Pagepokemons(){
    const[pokemons,setPokemons]=useState([])
    const[loading,setLoading]=useState(true)
    const[erro,setErro]=useState(null)
    useEffect(()=>{
        const fetPokemnos= async()=>{
            setLoading(true)
            setErro(null)
            try{
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=100')
                if(!response){
                    throw new Error("Erro ao carregar dados")
                }
                const data = await response.json()

                const pokemonsDetails = await Promise.all(
                    data.results.map( async (pokemon)=>{
                        const res = await fetch(pokemon.url)
                        return res.json()
                    })
                )
                setPokemons(pokemonsDetails)
            }catch(erro){
                setErro(erro.messager)
            }finally{
                setLoading(false)
            }
        }
        fetPokemnos()
    },[])
    return(
        <div className="flex flex-wrap justify-evenly">
            <div className="m-auto">{loading && <p>carregando dados......</p>}</div>
            <div className="m-[10px] ">{erro && <p>{erro}</p>}</div>
            {pokemons.map((pokemon)=>(
                <div key={pokemon.id} className="border-[black] border-2 p-2">
                    <p>{pokemon.name}</p>
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
            ))}
        </div>   
    )
}
export default Pagepokemons;