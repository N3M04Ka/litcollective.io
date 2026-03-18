import { BsLightningChargeFill } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { type Language } from "./Header";
interface Props {
    languages: Language[];
    languageId: number;
    setDropDownMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    dropDownMenuIsOpen: boolean;
    handleLanguageChange: (a: number) => void;
    setIsBurgerMenuIsOpen:React.Dispatch<React.SetStateAction<boolean>>;
    isBurgerMenuIsOpen:boolean;
}
export default function BurgerMenu({
    languages,
    setDropDownMenuIsOpen,
    dropDownMenuIsOpen,
    languageId,
    handleLanguageChange,
    setIsBurgerMenuIsOpen,
    isBurgerMenuIsOpen,
}: Props) {
    return (
        <div className="burgerMenu" style={{ right:isBurgerMenuIsOpen?"0":"-30rem"}}>
            <button
                className="burgerMenuButton"
                onClick={() => {console.log('closed'); setIsBurgerMenuIsOpen(false)}}
                style={{'zIndex':10}}
            >
                <MdClose className="icon" />
            </button>
            <div className="linksList">
                <a href="#">
                    <BsLightningChargeFill className="lightning" />
                    home
                </a>
                <a href="#">cases studies</a>
                <a href="#">about us</a>
                <a href="#">careers</a>
                <a href="#">what we do</a>
                <a href="#">{languageId == 0 ? "contact" : "enquiries"}</a>
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
                                onClick={() => handleLanguageChange(el.id)}
                                key={el.id}
                            >
                                <img src={el.icon} alt="" />
                                <span>{el.label}</span>
                            </button>
                        ))}
                </div>
            </div>
        </div>
    );
}
