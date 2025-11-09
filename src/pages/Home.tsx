import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
function Home() {
  const [keyword, setKeyword] = useState("");
  const debouncedKeyword = useDebounce(keyword, 500);

  useEffect(() => {
    if (debouncedKeyword) {
      console.log("Ready to call API : ", debouncedKeyword);
    }
  }, [debouncedKeyword]);

  //   const dummyMovies = [
  //     { id: 1, title: "Avenger" },
  //     { id: 2, title: "Bad Genius" },
  //     { id: 3, title: "Toko" },
  //   ];
  //   const filteredMovies = dummyMovies.filter((movie) =>
  //     movie.title.toLowerCase().includes(keyword.toLowerCase())
  //   );

  return (
    <>
      <div className="p-4">
        <h1>Pencarian Film</h1>
        <div className="flex border-2 bg-amber-800 border-blue-500 overflow-hidden max-w-md mx-auto mb-4">
          <input
            type="text"
            placeholder="Search Something..."
            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />

          {/* <div className="max-w-md mx-auto">
            <p className="mb-2">Keyword: {keyword}</p>
            <ul className="mt-4">
              {filteredMovies.map((movie) => (
                <li key={movie.id} className="p-2 border-b">
                  {movie.title}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
