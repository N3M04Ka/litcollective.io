import Logo from "../assets/images/lightning.png";
import USflag from "../assets/images/americanFlag.png";
import UKflag from "../assets/images/britishFlag.png";
import { MdMenu } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useEffect } from "react";
import BurgerMenu from "./BurgerMenu";
export interface Language {
    id: number;
    label: string;
    icon: string;
}
const languages: Language[] = [
    {
        id: 0,
        label: "EN-US",
        icon: USflag,
    },
    {
        id: 1,
        label: "EN-UK",
        icon: UKflag,
    },
];
export default function Header() {
    const [dropDownMenuIsOpen, setDropDownMenuIsOpen] =
        useState<boolean>(false);
    const [languageId, setLanguageId] = useState<number>(0);
    const [isBurgerMenuIsOpen, setIsBurgerMenuIsOpen] =
        useState<boolean>(false);
    function handleLanguageChange(id: number): void {
        setLanguageId(id);
        setDropDownMenuIsOpen((p) => !p);
    }
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width > 43 * 16)
                setIsBurgerMenuIsOpen(p=>p?false:p);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <header className="header">
            <div className="container">
                <a href="#">
                    <img src={Logo} alt="" />
                </a>
                <button
                    className="burgerMenuButton"
                    onClick={() => setIsBurgerMenuIsOpen((p) => !p)}
                >
                    <MdMenu className="icon" />
                </button>
                <div className="headerPanel">
                    <div className="linksList">
                        <a href="#">
                            <BsLightningChargeFill className="lightning" />
                            home
                        </a>
                        <a href="#">cases studies</a>
                        <a href="#">about us</a>
                        <a href="#">careers</a>
                        <a href="#">what we do</a>
                        <a href="#">
                            {languageId == 0 ? "contact" : "enquiries"}
                        </a>
                    </div>
                    <div className="changeLanguage">
                        <button
                            className="firstB"
                            onClick={() => setDropDownMenuIsOpen((p) => !p)}
                        >
                            <img src={languages[languageId].icon} alt="" />
                            <span>{languages[languageId].label}</span>
                            <MdKeyboardArrowDown
                                className="arrowD"
                                style={{
                                    transform: dropDownMenuIsOpen
                                        ? "rotate(180deg)"
                                        : "rotate(0deg)",
                                }}
                            />
                        </button>
                        <div
                            className="otherLanguages"
                            style={{
                                display: dropDownMenuIsOpen ? "block" : "none",
                            }}
                        >
                            {languages
                                .filter((val) => val.id != languageId)
                                .map((el) => (
                                    <button
                                        className=""
                                        onClick={() =>
                                            handleLanguageChange(el.id)
                                        }
                                        key={el.id}
                                    >
                                        <img src={el.icon} alt="" />
                                        <span>{el.label}</span>
                                    </button>
                                ))}
                        </div>
                    </div>
                </div>
                <BurgerMenu
                    languageId={languageId}
                    languages={languages}
                    dropDownMenuIsOpen={dropDownMenuIsOpen}
                    setDropDownMenuIsOpen={setDropDownMenuIsOpen}
                    handleLanguageChange={handleLanguageChange}
                    setIsBurgerMenuIsOpen={setIsBurgerMenuIsOpen}
                    isBurgerMenuIsOpen={isBurgerMenuIsOpen}
                />
            </div>
        </header>
    );
}
