function SearchBar() {
  return (
    <>
      <div className="flex border-2 border-blue-500 overflow-hidden max-w-md mx-auto">
        <input
          type="email"
          placeholder="Search Something..."
          className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
        />
        {/* <button
          type="button"
          className="flex items-center justify-center bg-[#007bff] px-5 text-sm text-white"
        >
          Search
        </button> */}
      </div>
    </>
  );
}
export default SearchBar;
