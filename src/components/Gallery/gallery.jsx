import PropTypes from "prop-types";

function Gallery({ items }) {
    return (
        Array.isArray(items) ? 
            <ul className="gallery">
                { items.map((item, index) =>
                    <li className="gallery-item" key={ "gallery-item-" + index }>{ item }</li>
                )}
            </ul>
        : <p>{ items }</p>
    )
}

Gallery.Prototypes = {
    items: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]).isRequired,
}

export default Gallery;
