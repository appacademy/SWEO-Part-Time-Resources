import { Redirect } from 'react-router-dom';
import { useResults } from "../../context/ResultsContext";
import ReportContent from "./ReportContent";
import "./ReportPage.css";

function ReportPage() {
  const { results } = useResults();
  if (!results) {
    return (
      <Redirect to="/" />
    );
  }

  const { survey, values } = results;

  return (
    <>
      <h2>{survey.thankyou}</h2>
      <div className="report-content">
        <h3>Here are your results</h3>
        <ReportContent survey={survey} values={values} />
      </div>
    </>
  );
}

export default ReportPage;
