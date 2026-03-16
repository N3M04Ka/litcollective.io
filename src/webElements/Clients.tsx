import { MdArrowOutward } from "react-icons/md";
import client1 from '../assets/images/tripleWhale.png'
import client2 from '../assets/images/handcash.png'
import client3 from '../assets/images/ascendEx.png'
import client4 from '../assets/images/mojoHeads.png'
import client5 from '../assets/images/vera.png'
import client6 from '../assets/images/finnet.png'
import client7 from '../assets/images/troveMate.png'
import client8 from '../assets/images/foundrydao.png'
import client9 from '../assets/images/nycrypto.png'
import client10 from '../assets/images/soclly.png'
import client11 from '../assets/images/flywallet.png'
import client12 from '../assets/images/dolphin.png'
const clients:string[]=[client1,client2,client3,client4,client5,client6,client7,client8,client9,client10,client11,client12];
export default function Clients() {
    return (
        <section className="clients">
            <div className="container">
                <div className="clientsLayout">
                    {clients.map((el,id)=>(
                        <img alt="" src={el} className="client" key={id}></img>
                    ))}
                </div>
                <div className="buttons">
                    <button className="specialButton">
                        What we do <MdArrowOutward className="arrow" />
                    </button>
                    <button className="specialButton">Testmonials</button>
                </div>
            </div>
        </section>
    );
}
