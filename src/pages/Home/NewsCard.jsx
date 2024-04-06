import { Link } from "react-router-dom";



const NewsCard = ({news}) => {

    const {title, image_url, details, _id} = news

    return (
        <div className="card  bg-base-100 border">
            
            <div className="card-body">
                <h2 className="card-title"> {title} </h2>

                <figure><img src={image_url} alt="Shoes" /></figure>

                {
                    details.length > 200 ? <p> {details.slice(0, 200)} <Link className="text-blue-700  underline ml-4"  to={`/news/${_id}`}> Read More</Link> </p> : details
                }
        
            
            </div>
        </div>
    );
};

export default NewsCard;