import { MdArrowOutward } from "react-icons/md";
import Wimg from '../assets/images/sideMark.png'
export default function Introdaction() {
  return (
    <section className="introdaction">
        <div className="container">
            <img src={Wimg} alt="" className="sideMark"/>
            <div className="mainContent">
                <h1>We design experiences that move businesses to the future.</h1>
                <div className="buttons">
                    <button className="specialButton">Play showree| <MdArrowOutward className="arrow"/></button>
                    <button className="specialButton">About us</button>
                </div>
            </div>
        </div>
    </section>
  );
}
