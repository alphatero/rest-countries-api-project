import { useParams } from "react-router-dom";

export function Detail() {
  const { countryName } = useParams();

  console.log(countryName);

  return (
    <div className="p-4 h-full flex flex-col justify-center">
      <div className="relative flex flex-col gap-8"></div>
    </div>
  );
}
