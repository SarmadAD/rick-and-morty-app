import { Card } from "./Card";
import './cards.css';

export function Cards({ cardItems }) {
  return (
    <div className="cards">
      {cardItems?.map((card) => ( 
        <Card card={card} />
      ))}
    </div>
  );
}
