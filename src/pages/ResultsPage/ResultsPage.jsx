import PieChart from "../../components/PieChart/PieChart";
import ScoreMeter from "../../components/ScoreMeter/ScoreMeter";
import axios from "axios";
import { useState, useEffect } from "react";
import "./ResultsPage.scss";

function ResultsPage({ id }) {
  const [calculatedData, setCalculatedData] = useState([]);
  console.log(id)  
  useEffect(() => {
    const url = `http://localhost:8080/financial/${id}`;
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data)
        setCalculatedData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  },[]);

  if (calculatedData.length === 0) {
    return <>Loading...</>;
  }

  return (
    <section className="results">
      <div className="results__charts">
        <h1 className="results__heading">
          Your <span>Results</span> are in ...
        </h1>
        <ScoreMeter score={calculatedData.totalScore} />
        <p className="results__text">
          Here is an in-depth breakdown of your score:
        </p>
        <PieChart data={calculatedData} />
      </div>
      <div className="results__insights">
        <h1 className="results__recommendation">Recommendations</h1>
        <p className="results__message">
          {calculatedData.recommendations[0].message}
        </p>
      </div>
    </section>
  );
}

export default ResultsPage;
