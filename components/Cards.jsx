import { Card } from "./Card";

export function Cards({ cardItems }) {
  return (
    <div className="cards">
      {cardItems?.map((card) => ( 
        <Card card={card} />
      ))}
    </div>
  );
}
