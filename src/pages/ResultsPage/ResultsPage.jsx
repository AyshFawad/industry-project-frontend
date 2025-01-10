import PieChart from "../../components/PieChart/PieChart";
import ScoreMeter from "../../components/ScoreMeter/ScoreMeter";
import "./ResultsPage.scss";

function ResultsPage() {
  const score = 85;
  const data = {
    Savings: 30,
    Spending: 25,
    Investments: 20,
    DebtManagement: 15,
    RetirementPlanning: 10,
  };
  return (
    <section className="results">
      <div className="results__charts">
        <h1 className="results__heading">
          Your <span>Results</span> are in ...
        </h1>
        <ScoreMeter score={score} />
        <p className="results__text">
          Here is an in-depth breakdown of your score:
        </p>
        <PieChart data={data} />
      </div>
      <div className="results__insights">
        <p className="results__message">
          {score >= 75
            ? "Excellent! You're financially healthy."
            : score >= 50
            ? "Good progress, but there’s room for improvement."
            : "Consider improving your financial habits for better health."}
        </p>
      </div>
    </section>
  );
}

export default ResultsPage;
