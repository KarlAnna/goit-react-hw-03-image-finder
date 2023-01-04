import '../../styles.css'

const ImageGallaryItem = ({ img }) => {
    return (
        <img className="imageGalleryItem-image" src={img.webformatURL} alt="" />
    )
}

export default ImageGallaryItem