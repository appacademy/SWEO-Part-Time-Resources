export const NUM_LIKERT_OPTIONS = 5;
export const LIKERT_SCALE = {
  Satisfaction: [
    "Very satisfied",
    "Somewhat satisfied",
    "Neither satisfied nor dissatisfied",
    "Somewhat dissatisfied",
    "Very dissatisfied",
  ],
  Agreement: [
    "Strongly agree",
    "Agree",
    "Neither agree nor disagree",
    "Disagree",
    "Strongly disagree",
  ],
  Confidence: [
    "Completely confident",
    "Fairly confident",
    "Somewhat confident",
    "Slightly confident",
    "Not confident at all",
  ],
  Frequency: [
    "Very frequently",
    "Frequently",
    "Occasionally",
    "Rarely",
    "Never",
  ],
};

function Question({ question, id, onChange, value, error }) {
  if (question.type === 'section') {
    return (
      <div className="question section">
        <div className="question-header">{question.title}</div>
        <div>{question.instructions}</div>
      </div>
    )
  }

  let input;

  switch (question.type) {
    case 'mcq':
      input = (
        <>
          {question.options.map((option) => (
            <label key={option.value}>
              <input
                required={!question.optional}
                type="radio"
                name={id}
                value={option.value}
                checked={Number(value) === option.value}
                onChange={onChange(id)}
              />
              {option.text}
            </label>
          ))}
          {question.includeOther && (
            <label>
              <input
                required={!question.optional}
                type="radio"
                name={id}
                value="other"
                checked={value === "other"}
                onChange={onChange(id)}
              />
              Other
            </label>
          )}
        </>
      );
      break;
    case 'cr':
      if (question.lines === 1) {
        input = (
          <label>
            <input
              type={question.hidden ? "password" : "text"}
              className={question.size}
              required={!question.optional}
              onChange={onChange(id)}
              value={value || ""}
            />
          </label>
        );
      }
      else {
        input = (
          <label>
            <textarea
              className={question.size}
              required={!question.optional}
              maxLength={question.charLimit}
              onChange={onChange(id)}
              value={value || ""}
              rows={question.lines}
            />
          </label>
        );
      }
      break;
    case 'likert':
      const options = [];
      for (let optionValue = 1; optionValue <= NUM_LIKERT_OPTIONS; optionValue++) {
        options.push(
          <label key={optionValue}>
            <input
              required
              type="radio"
              name={id}
              value={optionValue}
              checked={Number(value) === optionValue}
              onChange={onChange(id)}
            />
            {LIKERT_SCALE[question.scale][NUM_LIKERT_OPTIONS-optionValue]}
          </label>
        );
      }
      if (question.includeNA) {
        options.push(
          <label key="na">
            <input
              required
              type="radio"
              name={id}
              value={"N/A"}
              checked={value === "N/A"}
              onChange={onChange(id)}
            />
            N/A
          </label>
        );
      }
      input = options;
      break;
    default:
      break;
  }

  return (
    <>
      <div className="question">
        <div className="question-header">
          {question.stimulus && (
            <div dangerouslySetInnerHTML={{ __html: question.stimulus.text }}>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: question.stem }} />
        </div>
        {question.optional && <div className="optional">Optional</div>}
        <div className="error">{error}</div>
        {input}
      </div>
      {question.pagebreak && <hr />}
    </>
  );
}

export default Question;