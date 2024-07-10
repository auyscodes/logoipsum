interface FilterBoxProps {
  filterNationality: (e: string) => void;
  actorNationalities: string[];
}
export const FilterBox = ({
  filterNationality,
  actorNationalities,
}: FilterBoxProps) => {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
      <select
        className="flex items-center py-5 px-8 xl:px-8 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl w-full"
        onChange={(e) => filterNationality(e.target.value)}
      >
        <option value="">Nationality</option>
        {actorNationalities.map((e: string, index: number) => {
          return (
            <option key={index} value={e}>
              {e}
            </option>
          );
        })}
      </select>
    </div>
  );
};
