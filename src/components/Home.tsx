import MainBody from "./MainBody";
import Modal from "./Modal";
import { useEffect, useState } from "react";
import { iactor } from "../types/actor";

const url = "https://freetestapi.com/api/v1/actors?limit=30";

const Home = () => {
  const [actors, setActors] = useState<iactor[]>([]);
  const [filteredActors, setFilteredActors] = useState<iactor[]>([]);
  const [actorNationalities, setActorNationalities] = useState<string[]>([]);
  useEffect(() => {
    const getData = async () => {
      const result = await fetch(url);
      result.json().then((json) => {
        setActors(json);
        setFilteredActors(json);
        const nationalities = [];
        for (const actor of json) {
          if (nationalities.indexOf(actor.nationality) === -1) {
            nationalities.push(actor.nationality);
          }
        }
        setActorNationalities(nationalities);
      });
    };
    getData();
  }, []);
  const handleSearch = (term: string) => {
    const filtered = actors.filter((actor: iactor) =>
      actor.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredActors(filtered);
  };

  const filterNationality = (nationality: string) => {
    if (nationality == "") {
      setFilteredActors(actors);
      return;
    }
    const filtered = actors.filter((actor: iactor) =>
      actor.nationality.includes(nationality)
    );
    setFilteredActors(filtered);
  };

  const [selectedActor, setSelectedActor] = useState<iactor | null>(null);
  const setActor = (id: number) => {
    const indx = actors.findIndex((x) => x.id == id);
    indx == -1 ? setSelectedActor(null) : setSelectedActor(actors[indx]);
  };
  return (
    <>
      <div
        onClick={() => {
          setSelectedActor(null);
        }}
      >
        <Modal selectedActor={selectedActor} />
      </div>

      <div>
        <div className="pt-8 flex flex-col justify-center items-center">
          <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-blue-800">
            Team Directory
          </h2>
          <p className="max-w-2xl text-lg text-center">
            Browse our directory to find staff contact details by name,
            department, section or other details.
          </p>
        </div>
        <div></div>
        <MainBody
          setSelectedActor={setActor}
          filterNationality={filterNationality}
          actorNationalities={actorNationalities}
          filteredActors={filteredActors}
          handleSearch={handleSearch}
        />
      </div>
    </>
  );
};
export default Home;
