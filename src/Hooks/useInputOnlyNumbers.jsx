export default function useInputOnlyNumbers() {
   function valueInput(event) {
      let value = event.target.value;
      value = value.replace(/[^\d]/g, '');
      event.target.value = value;
   }
   return valueInput;
}