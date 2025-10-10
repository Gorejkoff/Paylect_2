const animation = {
   visible: {
      top: 0,
      transition: "top 1s 0.1s cubic-bezier(.77,0,.175,1)"
   },
   hidden: {
      top: "-120vh",
      transition: "top 1s cubic-bezier(.77,0,.175,1)"
   }
}

function StateOpen(isOpen) {
   if (isOpen) {
      return animation.visible
   }
   else {
      return animation.hidden
   }
};

export default StateOpen;
