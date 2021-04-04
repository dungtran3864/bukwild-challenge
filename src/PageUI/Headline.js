import "./Headline.css";

function Headline() {
  return (
    <div className={"headline-container"}>
      <div className={"headline"}>
        <text>
          Maecenas sed diam eget risus varius blandit sit amet non magna
        </text>
      </div>
      <div className={"subhead"}>
        <text>
          Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis
          consectetur purus sit amet fermentum. Vestibulum id ligula porta felis
          euismod semper.
        </text>
      </div>
    </div>
  );
}

export default Headline;
