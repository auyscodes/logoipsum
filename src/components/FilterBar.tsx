import { FilterBox } from "./FilterBox";

interface FilterBarProps {
  filterNationality: (e: string) => void;
  actorNationalities: string[];
}
const FilterBar = ({
  filterNationality,
  actorNationalities,
}: FilterBarProps) => {
  return (
    <div className="mb-16 flex flex-wrap py-5 items-center justify-center">
      <FilterBox
        filterNationality={filterNationality}
        actorNationalities={actorNationalities}
      />
      <FilterBox
        filterNationality={filterNationality}
        actorNationalities={actorNationalities}
      />
      <FilterBox
        filterNationality={filterNationality}
        actorNationalities={actorNationalities}
      />
      <FilterBox
        filterNationality={filterNationality}
        actorNationalities={actorNationalities}
      />
    </div>
  );
};
export default FilterBar;
