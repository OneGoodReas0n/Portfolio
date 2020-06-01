import { useEffect, useState } from 'react';

const useAnimation = (numOfSection) => {
   const [offsetTop, setOffsetTop] = useState(window.pageYOffset);

   const listener = () => {
      setOffsetTop(window.pageYOffset);
   };

   const [animation, setAnimation] = useState(false);
   const windowHeight = window.outerHeight;
   const heightMultiplier = numOfSection - 1.7;
   if (
      offsetTop > heightMultiplier * windowHeight &&
      offsetTop < windowHeight < (heightMultiplier + 1) * windowHeight &&
      !animation
   ) {
      setAnimation(true);
   }

   useEffect(() => {
      window.addEventListener('scroll', listener);

      return () => {
         window.removeEventListener('scroll', listener);
      };
   });

   return animation;
};

export default useAnimation;
