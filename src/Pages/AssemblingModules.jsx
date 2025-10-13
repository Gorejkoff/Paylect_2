import Terms from '../Components/Modals/Terms/Terms';
import Privacy from '../Components/Modals/Privacy/Privacy';
import Sent from '../Components/Modals/Sent/Sent';
import Contact from '../Components/Modals/Contact/Contact';
import CoinNetwork from '../Components/Modals/Coins/CoinNetwork';
import CoinList from '../Components/Modals/Coins/CoinList';
import QRCode from '../Components/Modals/QRCode/QRCode';
import Exchange from '../Components/Modals/Exchange/Exchange';


export default function Modals() {
   return (
      <>
         <Terms />
         <Privacy />
         <Sent />
         <Exchange />
         <Contact />
         <CoinNetwork />
         <CoinList />
         <QRCode />
      </>
   )
}