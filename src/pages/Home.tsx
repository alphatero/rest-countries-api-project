import { Card } from "components";

export function Home() {
  return (
    <form className="flex flex-col">
      <div>
        <Card>
          <div className="min-h-[21rem]">
            <figure className="h-40">
              <img src="https://flagcdn.com/w320/gm.png" alt="" />
            </figure>
            <div className="p-6 space-y-4">
              <h2 className="font-bold text-lg">contry</h2>

              <ul className="text-sm space-y-1">
                <li></li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </form>
  );
}
