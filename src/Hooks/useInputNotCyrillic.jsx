export default function useInputNotCyrillic() {
   function valueInput(event) {
      let value = event.target.value;
      value = value.replace(/[^1-9A-HJ-NP-Za-km-z!@#$%^&:';"?|{}(),.]+$/, '');
      event.target.value = value;
   }
   return valueInput;
}