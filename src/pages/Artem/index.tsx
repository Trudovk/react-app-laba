import { useParams } from "react-router-dom";

export default function Artem() {
  const { params } = useParams();
  return (
    <div>
      <h1>Artem {params}</h1>
    </div>
  );
}
