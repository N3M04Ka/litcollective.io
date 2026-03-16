import img1 from "../assets/images/hand3.png";
import img2 from "../assets/images/couple.png";
import img3 from "../assets/images/hand4.png";
export default function Player() {
    return (
        <section className="player">
            <div className="container">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <button>PLAY</button>
            </div>
        </section>
    );
}
