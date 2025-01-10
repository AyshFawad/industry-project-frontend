import ScoreMeter from '../../components/ScoreMeter/ScoreMeter';
import './ResultsPage.scss'

function ResultsPage() {
  const score = 85  
  return (
    <section className="results">
      <h1 className="results__heading">
        Your <span>Results</span> are in ...
      </h1>
      <ScoreMeter score={score}/>
    </section>
  );
}

export default ResultsPage;
