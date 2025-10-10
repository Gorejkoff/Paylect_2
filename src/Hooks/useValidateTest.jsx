export default function useValidateTest(value, regex) {
   return (value, regex) => regex.test(value);
}