import ImageGallaryItem from '../ImageGalleryItem/ImageGalleryItem'
import '../../styles.css'

const ImageGallary = ({ imgs }) => {
    return (
        <ul className="imageGallery">
            {imgs.map((img) => 
                <li key={img.id} className="imageGalleryItem">
                    <ImageGallaryItem img={img} />
                </li>
            )}
        </ul>
    )
}

export default ImageGallary