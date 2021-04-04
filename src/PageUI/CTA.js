import "./CTA.css";
import left_arrow from "./../resources/icons8-right_arrow.png";

function CTA() {
  return (
    <div className={"cta-container"}>
      <div className={"sub-cta"}>
        <text>Nemo enim ipsam voluptatem quia voluptas.</text>
      </div>
      <div className={"sub-action"}>
        <text>Let's talk</text>
        <img src={left_arrow} className={"left-arrow"} alt="left-arrow" />
      </div>
    </div>
  );
}

export default CTA;
