const FilterBar = (props) => {
  return (
    <div className="mb-16 flex flex-wrap py-5 place-content-center">
      <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
        <select
          className="flex items-center py-5 px-8 xl:px-8 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl w-full"
          onChange={(e) => props.filterNationality(e.target.value)}
        >
          <option value="">Nationality</option>
          {props.actorNationalities.map((e: string) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
        <select
          className="flex items-center py-5 px-8 xl:px-8 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl w-full"
          onChange={(e) => props.filterNationality(e.target.value)}
        >
          <option value="">Nationality</option>
          {props.actorNationalities.map((e: string) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
        <select
          className="flex items-center py-5 px-8 xl:px-8 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl w-full"
          onChange={(e) => props.filterNationality(e.target.value)}
        >
          <option value="">Nationality</option>
          {props.actorNationalities.map((e: string) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
      <div className="w-full sm:w-1/3 lg:w-1/5 py-2 sm:px-3">
        <select
          className="flex items-center py-5 px-8 xl:px-8 font-heading font-medium border border-gray-200 hover:border-gray-300 rounded-4xl w-full"
          onChange={(e) => props.filterNationality(e.target.value)}
        >
          <option value="">Nationality</option>
          {props.actorNationalities.map((e: string) => {
            return <option value={e}>{e}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
export default FilterBar;
