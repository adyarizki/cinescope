import { useParams } from "react-router-dom";

function DetailMovie() {
  const { id } = useParams();

  return (
    <div>
      <h1>Detail Film {id}</h1>
    </div>
  );
}

export default DetailMovie;
