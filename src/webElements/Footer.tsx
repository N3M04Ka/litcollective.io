import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaBasketball } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";
import { FaMediumM } from "react-icons/fa";
import beImg from "../assets/images/Be.png";
import ballImg from "../assets/images/ball.png";
import twitterImg from "../assets/images/twitter.png";
import instagramImg from "../assets/images/instagram.png";
import mediumImg from "../assets/images/M.png";
import topHand from "../assets/images/hand2.png";
import bottomHand from "../assets/images/hand1.png";
import type { IconType } from "react-icons";
interface FooterLink {
    label: string;
    photo: IconType;
}
const footerLinks: FooterLink[] = [
    {
        label: "Behance",
        photo: FaBehance,
    },
    {
        label: "Dribbble",
        photo: FaBasketball,
    },
    {
        label: "Twitter",
        photo: FaTwitter,
    },
    {
        label: "Instagram",
        photo: RiInstagramLine,
    },
    {
        label: "Medium",
        photo: FaMediumM,
    },
];
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <img
                    src={topHand}
                    alt=""
                    aria-hidden="true"
                    className="topHand"
                />
                <img
                    src={bottomHand}
                    alt=""
                    aria-hidden="true"
                    className="bottomHand"
                />
                <div className="center">
                    <p>
                        Your business will
                        <br />
                        never be the same
                    </p>
                    <div className="buttons">
                        <button className="specialButton">
                            Talk to a specialist{" "}
                            <MdArrowOutward className="arrow" />
                        </button>
                        <button className="specialButton">Get in touch</button>
                    </div>
                </div>
                <div className="bottom">
                    <span>LitCollective © 2022</span>
                    <div className="links">
                        {footerLinks.map((el, id) => (
                            <a href="#" key={id}>
                                <el.photo /> {el.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
