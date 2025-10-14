import Terms from '../Components/Modals/Terms/Terms';
import Privacy from '../Components/Modals/Privacy/Privacy';
import Sent from '../Components/Modals/Sent/Sent';
import Contact from '../Components/Modals/Contact/Contact';
import Blockchain from '../Components/Modals/Coins/Blockchain';
import Standard from '../Components/Modals/Coins/Standard';
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
         <Standard />
         <Blockchain />
         <QRCode />
      </>
   )
}