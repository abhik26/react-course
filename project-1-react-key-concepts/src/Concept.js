export default function Concept(props) {
    return (
      <li className="concept">
        <img src={props.conceptData.image} alt={props.conceptData.title} />
        <h2>{props.conceptData.title}</h2>
        <p>{props.conceptData.description}</p>
      </li>
    );
  }
  