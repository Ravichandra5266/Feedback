import { Component } from "react";
import "./index.css";
import EmojiButtons from "../EmojioButtons";
import FeedbackValue from "../FeedbackValue";
const resources = {
  emojis: [
    {
      id: 0,
      name: "Sad",
      imageUrl: "https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png",
    },
    {
      id: 1,
      name: "None",
      imageUrl: "https://assets.ccbp.in/frontend/react-js/none-emoji-img.png",
    },
    {
      id: 2,
      name: "Happy",
      imageUrl: "https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png",
    },
  ],
  loveEmojiUrl: "https://assets.ccbp.in/frontend/react-js/love-emoji-img.png",
};
class Feedback extends Component {
  state = {
    FeedbackText: "",
  };
  onClickFeedback = (name) => {
    this.setState({
      FeedbackText: name,
    });
  };
  render() {
    const { FeedbackText } = this.state;
    return (
      <div className="container">
        {FeedbackText === "" && (
          <div className="emoji-card">
            <h1>
              How Satisfied Are You With Our Customer Service Performance?
            </h1>
            <ul>
              {resources.emojis.map((each) => {
                return (
                  <EmojiButtons
                    each={each}
                    key={each.id}
                    onClickFeedback={this.onClickFeedback}
                  />
                );
              })}
            </ul>
          </div>
        )}
        {FeedbackText !== "" && (
          <FeedbackValue
            FeedbackText={FeedbackText}
            loveImage={resources.loveEmojiUrl}
          />
        )}
      </div>
    );
  }
}
export default Feedback;
