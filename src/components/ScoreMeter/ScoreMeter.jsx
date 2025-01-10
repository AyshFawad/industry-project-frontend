import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./ScoreMeter.scss";
import { useState, useEffect } from "react";

function ScoreMeter({ score }) {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const duration = 2000; 
    const interval = 10; 
    const increment = score / (duration / interval);

    const timer = setInterval(() => {
      setAnimatedScore((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= score) {
          clearInterval(timer);
          return score; 
        }
        return nextValue;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [score]);
  
  const adjustedScore = animatedScore / 2;
  return (
    <article className="score">
      <div className="score__container">
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="red" />
              <stop offset="100%" stopColor="green" />
            </linearGradient>
          </defs>
        </svg>

        <CircularProgressbar
          className="score__progress"
          value={adjustedScore}
          maxValue={100}
          styles={buildStyles({
            rotation: 0.75,
            strokeLinecap: "round",
            textSize: "16px",
            pathColor: "url(#gradient)",
            textColor: "#333",
            trailColor: "#ddd",
          })}
        />
        <div className="score__text">{`${score}/100`}</div>
      </div>
    </article>
  );
}

export default ScoreMeter;
