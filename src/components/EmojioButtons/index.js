import "./index.css";

const EmojiButtons = (props) => {
  const { each, onClickFeedback } = props;
  const { id, imageUrl, name } = each;
  const onclickEmoji = () => {
    onClickFeedback(name);
  };
  return (
    <li>
      <button type="button" onClick={onclickEmoji}>
        <img src={imageUrl} alt={name} />
      </button>
      <h1>{name}</h1>
    </li>
  );
};
export default EmojiButtons;
