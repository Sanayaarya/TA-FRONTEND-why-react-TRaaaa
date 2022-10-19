
import PropTypes from "prop-types";
function Card (props){
  return (
      <div className="wrapper">
          <img src={props.info.urlToImage} alt="" width="100%" height="200px" />
          <h2>Author: {props.info.author.toUpperCase()}</h2>
          <p>Title: {props.info.title}</p>
          <p>Description: {props.info.description}</p>
          <p>Published At: {props.info.publishedAt}</p>
          <p>Content: {props.info.content}</p>
      </div>
  );
}

Card.protoTypes = {
  urlToImage: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  publishedAt: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
}

export default Card;