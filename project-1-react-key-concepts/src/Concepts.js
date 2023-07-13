import Concept from "./Concept";

export default function Concepts(props) {
  return (
    <ul id="concepts">
      <Concept conceptData={props.concepts[0]} />
      <Concept conceptData={props.concepts[1]} />
      <Concept conceptData={props.concepts[2]} />
    </ul>
  );
}
