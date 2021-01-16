// ex 1 -
//---------------------------------------------------- ex 2

arr = [-60, 2, 43, -18, 5, -19, 36, 7, 56 ];
max1 = -Infinity;
max2 = -Infinity;
indexMax = -Infinity;
index1 = -Infinity;

for(let i = 0; i < arr.length; i++) {
 if(max1 < arr[i]) {
  index1 = indexMax;
  indexMax = i;
  max2 = max1;
  max1 = arr[i];
 } else if (max2 < arr[i]) {
    index1 = i;
    max2 = arr[i];
    }
}

console.log(`${index1}`);

// ex 3 -


//-------------------------------------------------- ex 4

function argument(arr = [], el) {   
 let newArr = [];                          
 for(let i = 0; i < arr.length; i++) {
   if (arr[i] > el) {
   newArr.push(arr[i]);
    }
 }
  if  (newArr.length === 0) {
   return 'Such values do not exist';
 } else {
   return newArr;
 }
    }
   
argument([1, 1, 2, -3, 0, 8, 4, 0], 9);


//---------------------------------------------------- ex 5   
  
  // ??
  function events(start, end) {
   let numArray = new Array();
  if (start <= end) {
	 for (i = start + 1; i <= end; i++) {
  if (i % 2 === 0) {
	     numArray[numArray.length] = i;        
 }
	}
    return numArray;
  } else {
	  return 'Such numbers does not exist.'; // ?
  }
 }
	  events(99, 199); //  ?
      events(19, 42);