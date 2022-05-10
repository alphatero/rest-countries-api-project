import { Back } from "components/detail";
import clsx from "clsx";
import { useParams } from "react-router-dom";

export function Detail() {
  const { countryName } = useParams();

  console.log(countryName);

  return (
    <div className="p-4 h-full flex flex-col justify-center">
      <div className="relative flex flex-col gap-8">
        <div
          className={clsx(
            "w-24",
            "lg:absolute top-0 lg:-translate-y-full lg:-my-20"
          )}
        >
          <Back />
        </div>
      </div>
    </div>
  );
}
