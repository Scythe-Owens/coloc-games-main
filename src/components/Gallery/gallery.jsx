import PropTypes from "prop-types";

function Gallery({ items }) {
    return (
        <ul className="gallery">
            { items.map((item, index) =>
                <li className="gallery-item" key={ "gallery-item-" + index }>{ item }</li>
            )}
        </ul>
    )
}

Gallery.Prototypes = {
    items: PropTypes.array.isRequired,
}

export default Gallery;
