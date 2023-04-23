import { CardCursusItem } from "./CardCursusItem";


function CardCursus({cursusItems}) {
  return (
    <div className="row">
      <div className="timeline-box padd-15">
        <div className="timeline shadow-dark bg-dark text-white">
            {cursusItems.map( cursusItem => (
                <CardCursusItem cursusItem={cursusItem} />
            ))}
        </div>
      </div>
    </div>
  );
}


export default CardCursus;
