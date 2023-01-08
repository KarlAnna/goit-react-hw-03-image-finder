import PropTypes from 'prop-types';
import '../../styles.css'

const ImageGallaryItem = ({ img, onClick }) => {
    console.log(img);
    return (
        // <li className="imageGalleryItem" onClick={toggleModal}>
            <img className="imageGalleryItem-image" src={img.webformatURL} alt={img.tags} onClick={() => onClick(img.largeImageURL)} />
        // </li>
    )
}

ImageGallaryItem.propTypes = {
    img: PropTypes.objectOf(PropTypes.exact({
        webformatURL: PropTypes.string,
        largeImageURL: PropTypes.string
    })),
    onClick: PropTypes.func
}

export default ImageGallaryItem