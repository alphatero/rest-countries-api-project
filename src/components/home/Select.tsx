import { Card } from "components";

function FakeSelect() {
  return (
    <div>
      <Card></Card>
    </div>
  );
}

export function Select() {
  return (
    <select name="filter" aria-label="Filter" className="sr-only"></select>
  );
}
