import AcademyImg from '../assets/images/academy.png'
import { MdArrowOutward } from "react-icons/md";
export default function AboutUs() {
  return (
    <section className="aboutUs">
        <div className="container">
            <div className="left">
                <div className="content">
                    <p>It's also about creating the best work enviroment.</p>
                    <button className="specialButton">About us</button>
                </div>
            </div>
            <div className="right">
                <img src={AcademyImg} alt="" />
                <div className="content">
                <p>Sharing knowledge and growing as a community.</p>
                    <button className="specialButton">Careers <MdArrowOutward className='arrow'/></button>
                </div>
            </div>
        </div>
    </section>
  );
}
