import Terms from '../Components/Modals/Terms/Terms.jsx';
import Privacy from '../Components/Modals/Privacy/Privacy.jsx';
import Sent from '../Components/Modals/Sent/Sent.jsx';
import Contact from '../Components/Modals/Contact/Contact.jsx';
import Coins from '../Components/Modals/Coins/Coins.jsx';
import QRCode from '../Components/Modals/QRCode/QRCode.jsx';
import Exchange from '../Components/Modals/Exchange/Exchange.jsx';


export default function Modals() {
   return (
      <>
         <Terms />
         <Privacy />
         <Sent />
         <Exchange />
         <Contact />
         <Coins />
         <QRCode />
      </>
   )
}