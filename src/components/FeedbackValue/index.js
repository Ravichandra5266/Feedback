import "./index.css";

const FeedbackValue = (props) => {
  const { FeedbackText, loveImage } = props;
  return (
    <div className="feedback-card">
      <img className="love" src={loveImage} alt={FeedbackText} />
      <h1>Thank You!</h1>
      <p>
        Your Are <span> {FeedbackText}</span>{" "}
      </p>
      <p>
        We Will Use Your Feedback To Improve Our Customer Service Performance
      </p>
    </div>
  );
};
export default FeedbackValue;
