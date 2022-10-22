import data from "../data";

function Main() {
    return (
        <div className="main">
            {data.map((article) => {
                return <Card key={article.title} {...article} />
            })}
        </div>
    );
}

function Card(props) {
    return (
        <div className="wrapper">
            <img src={props.urlToImage} alt="" width="100%" height="200px" />
            <h2>Author: {props.author.toUpperCase()}</h2>
            <p>Title: {props.title}</p>
            <p>Description: {props.description}</p>
            <p>Published At: {props.publishedAt}</p>
            <p>Content: {props.content}</p>
        </div>
    );
}

export default Main;