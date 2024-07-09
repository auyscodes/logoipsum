import {  act, useEffect, useState } from "react";
import Search from "./Search";
import FilterBar from "./FilterBar";
import Card from "./Card";
const url = "https://freetestapi.com/api/v1/actors?limit=30"
interface iactor {
    id:    number,
    name:    string,
    birth_year:    number,
    death_year:    number,
    nationality:    string,
    known_for:    string[],
    awards:    string[],
    biography:    string,
    image:    string
}
const MainBody = () => {

    const [actors, setActors] = useState<iactor[]>([]);
    const [filteredActors, setFilteredActors] = useState<iactor[]>([]);
    const [actorNationalities, setActorNationalities] = useState<string[]>([]);
    useEffect(()=>{
        const getData = async () => {
            const result = await fetch(url);
            result.json().then(json=>{
                setActors(json);
                setFilteredActors(json);
                const nationalities = [];
                for (const actor of json){
                    if (nationalities.indexOf(actor.nationality)===-1){
                        nationalities.push(actor.nationality);
                    }
                    
                }
                setActorNationalities(nationalities);
            })
        }
        getData()
    }, [])

    const handleSearch = (term: string) =>{
        const filtered = actors.filter((actor: iactor)=>
            actor.name.toLowerCase().includes(term.toLowerCase())
        )
        setFilteredActors(filtered);
    }

    const filterNationality = ((nationality: string)=>{
        if (nationality==""){
            setFilteredActors(actors);
            return;
        }
        const filtered = actors.filter((actor: iactor)=>
            actor.nationality.includes(nationality)
        )
        setFilteredActors(filtered);
    })

    return(<div className="container px-4 mx-auto">
        <div className="flex justify-center items-center py-6">
            <Search onSearchChange={handleSearch} />
        </div>
        
        <FilterBar actorNationalities={actorNationalities} filterNationality={filterNationality} />
        <div className="flex flex-wrap m-8">
        {
            filteredActors.map((e: iactor)=>{
                return (
                    <Card imageSrc={e.image} actorName={e.name} actorNationality={e.nationality} />
                )
            })
        }
        </div>
        
    </div>)
}
export default MainBody;