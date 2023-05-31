import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';
import img5 from '../assets/img5.jpg';

const Gallery = () => {
    return(
        <div class="grid grid-cols-3 gap-4 mt-4">
            <img src={img1} alt="Image1"></img>
            <img src={img2} alt="Image2"></img>
            <img src={img3} alt="Image3"></img>
            <img src={img4} alt="Image4"></img>
            <img src={img5} alt="Image5"></img>
        </div>
    );
}

export default Gallery;