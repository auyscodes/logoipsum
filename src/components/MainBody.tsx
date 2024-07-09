
import Search from "./Search";
import FilterBar from "./FilterBar";
import Card from "./Card";
import { iactor } from "./Home";

const MainBody = (props) => {
 
  

  
  return (
    <div className="container px-4 mx-auto">
      <div className="flex justify-center items-center py-6">
        <Search onSearchChange={props.handleSearch} />
      </div>

      <FilterBar
        actorNationalities={props.actorNationalities}
        filterNationality={props.filterNationality}
      />
      <div className="flex flex-wrap m-8">
        {props.filteredActors.map((e: iactor) => {
          return (
            <Card
              imageSrc={e.image}
              actorName={e.name}
              actorNationality={e.nationality}
              actorId={e.id}
              setSelectedActor={props.setSelectedActor}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MainBody;
