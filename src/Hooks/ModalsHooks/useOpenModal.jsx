import { useDispatch } from "react-redux";
import { openModal } from "../../StoreRedux/modalsSlice";


export default function useOpenModal(type) {
   const dispath = useDispatch();
   return () => {
      dispath(openModal({
         type: type
      }))
   }

}