import "./Card.css";

const Card = ({ icon, number, title }) => {
  return (
    <div className="card">
      <div className="iconContainer">
        <span className="number">{number}</span>
        <img src={icon} />
      </div>
      <div className="titleContainer">
        <b className="title">{title}</b>
      </div>
    </div>
  );
};

export default Card;
