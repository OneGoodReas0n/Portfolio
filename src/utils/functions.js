const divideArray = (arr) => {
   const copy = Object.create(arr);
   const arr1 = [];
   const arr2 = [];
   const firstHalf = Math.round(arr.length / 2);
   const secondHalf = arr.length - firstHalf;
   for (let i = 0; i < firstHalf; i++) {
      arr1.push(copy.shift());
   }

   for (let i = 0; i < secondHalf; i++) {
      arr2.push(copy.shift());
   }
   return [arr1, arr2];
};

export { divideArray };
