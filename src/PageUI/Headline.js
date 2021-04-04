import "./Headline.css";

function Headline(props) {
  const { headline, subhead } = props;

  return (
    <div className={"headline-container"}>
      <div className={"headline"}>
        <text>{headline}</text>
      </div>
      <div className={"subhead"}>
        <text>{subhead}</text>
      </div>
    </div>
  );
}

export default Headline;
