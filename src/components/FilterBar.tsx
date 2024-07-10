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
        onSelect={filterNationality}
        optionValues={actorNationalities}
      />
      <FilterBox
        onSelect={filterNationality}
        optionValues={actorNationalities}
      />
      <FilterBox
        onSelect={filterNationality}
        optionValues={actorNationalities}
      />
      <FilterBox
        onSelect={filterNationality}
        optionValues={actorNationalities}
      />
    </div>
  );
};
export default FilterBar;
