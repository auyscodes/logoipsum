import Search from "./Search";
import FilterBar from "./FilterBar";
import Card from "./Card";
import { iactor } from "../types/actor";

interface MainBodyProps {
  handleSearch: (searchTerm: string) => void;
  actorNationalities: string[];
  filterNationality: (term: string) => void;
  filteredActors: iactor[];
  setSelectedActor: (term: number) => void;
}
const MainBody = ({
  handleSearch,
  actorNationalities,
  filterNationality,
  filteredActors,
  setSelectedActor,
}: MainBodyProps) => {
  return (
    <div className="container px-4 mx-auto">
      <div className="flex justify-center items-center py-6">
        <Search onSearchChange={handleSearch} />
      </div>

      <FilterBar
        actorNationalities={actorNationalities}
        filterNationality={filterNationality}
      />
      <div className="flex flex-wrap m-8">
        {filteredActors.map((e: iactor) => {
          return (
            <Card
              key={e.id}
              imageSrc={e.image}
              actorName={e.name}
              actorNationality={e.nationality}
              actorId={e.id}
              setSelectedActor={setSelectedActor}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MainBody;
