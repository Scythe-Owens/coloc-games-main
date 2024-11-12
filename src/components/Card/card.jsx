import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card({ slug, title, media, description, details }) {
    return (
        <Link to={ slug } className="card">
            <h3 className="card-title">{ title }</h3>
            <div className="card-content">
                <div className="card-content-general">
                    <img className="card-content-general-media" src={ media } alt={ "Illustration de " + title }/>
                    { description && description !== "" ? 
                        <p className="card-content-general-content">{ description }</p>
                        : null
                    }
                </div>
                <ul className="card-content-detail">
                    { details.map((detail, index) => {
                        return (
                            <li className="card-content-detail-item" key={ "detail-" + index }>
                                <h4 className="card-content-detail-item-title">{ detail.name }</h4>
                                <p className="card-content-detail-item-content">{ detail.description }</p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </Link>
    )
}

Card.Prototypes = {
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
    description: PropTypes.string,
    details: PropTypes.array.isRequired,
}

export default Card;
