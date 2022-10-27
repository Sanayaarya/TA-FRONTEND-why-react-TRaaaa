import data from "../data";
import card from "./card";

function Main (){
    return (
        <div className="main">
            {data.map((article) => {
                return <Card key={article.title} info={article} />
            })}
        </div>
    )
}

export default Main;