interface FilterBoxProps {
  onSelect: (e: string) => void;
  optionValues: string[];
}
export const FilterBox = ({
  onSelect,
  optionValues,
}: FilterBoxProps) => {
  return (
    <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
      <select
        className="py-2.5 pr-2 w-full text-sm bg-transparent border-b-2 border-blue-950 border-dotted outline-none"
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Nationality</option>
        {optionValues.map((e: string, index: number) => {
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
