import "./WorkCard.css";

const WorkCard = ({ work: { title, img, info, link } }) => {
  return (
    <div className="card">
      <img src={img} alt="img" />
      <h3>{title}</h3>
      <p>{info}</p>
      <a href={link}>See Live</a>
    </div>
  );
};

export default WorkCard;
