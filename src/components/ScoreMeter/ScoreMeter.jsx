import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function ScoreMeter({ score }) {
  return (
    <article className="score">
      <div className="score__container">
        <CircularProgressbar
          className="score__bar"  
          value={score}
          maxValue={100}
          text={`${score}/100`}
          styles={buildStyles({
            textSize: "16px",
            pathColor: score >= 75 ? "green" : score >= 50 ? "orange" : "red",
            textColor: "#333",
            trailColor: "#ddd",
          })}
        />
      </div>
    </article>
  );
}

export default ScoreMeter;
