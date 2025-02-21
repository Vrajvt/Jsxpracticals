const QuestionsList = ({ question, options, onAnswerSelected }) => {
    return (
      <div>
        <h2>{question}</h2>
        <div>
          {options.map((option, index) => (
            <button key={index} onClick={() => onAnswerSelected(option)}>
              {option}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  export default QuestionsList;