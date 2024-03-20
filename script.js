const btn = document.querySelector('.calculate');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
  
  function calculator(){
    
  const arr = input.value.split(',').map(Number);
  
  if(arr.length > 1){
  input.classList.remove('validateError');
  document.querySelector('.warning').innerHTML = '';
  } else {
  input.classList.add('validateError');
  document.querySelector('.warning').innerHTML = 'Enter at least two statistic data';
  return;
}
  



 /* ====== showing Count of the input ====*/
  
 let countvalue = arr.length;
 
 document.querySelector('.countvalue').innerText =  countvalue;

  /* ======== Adding up the value ========== */
 
let sumUp = 0;
 
arr.forEach( (item => sumUp += item) );
 
document.querySelector('.sumUp').innerText = sumUp;
 

  /* ======== meanValue of the input ======== */

let FindMean = sumUp/countvalue;
document.querySelector('.mean').innerText = FindMean.toFixed(2);

/* === The largest Number from the array. === */

  let largestNum = Math.max(...arr);
  document.querySelector('.Largest').innerText = largestNum;
  

/* === The smallest Number from the array. === */

 let smallestNum = Math.min(...arr);
 
  document.querySelector('.smallest').innerText = smallestNum;

 
/* ======= To find range of the array ======== */
const range = (largestNum - smallestNum);

document.querySelector('.rangeNum').innerText = range.toFixed(2);
 
 /* ======= To find mode of the array ======== */
 
function findMode(arr){
  let freq = {};
  let maxFreq = 0;
  let modes = [];
  
  arr.forEach( num => {
    freq[num] = (freq[num] || 0) + 1;
    
    if (freq[num] > maxFreq) {
      maxFreq = freq[num];
      modes = [num];
    }
    else if (freq[num] === maxFreq) {
      modes = [0];
    }
  });
  
  return modes;
}

document.querySelector(".mode").innerText = findMode(arr);
 
 
/* ======= To find Median of the array ======= */
 
function findMedian(arr){
  const sortedArr = arr.sort( (num1, num2) => {
    return num1 - num2;
  });
  const middle = Math.floor( sortedArr.length / 2);
  
  if (sortedArr.length % 2 === 0) {
    return (sortedArr[ middle - 1] + sortedArr[middle]) / 2;
  }
  else {
    return sortedArr[middle];
  }
}

document.querySelector(".median").innerText = findMedian(arr).toFixed(2);


/* ======= To find mode of the array ======== */

function geometricMean(arr){
  let n = arr.length;
      prod = arr[0];
      geometricMean;
      
  for(let i = 0; i < n; i++) {
    
    if(arr[i] <= 1){
      return (geometricMean = 0);
    }
    prod *= arr[i];
    
    geometricMean = Math.pow(prod, 1/n);
    return geometricMean;
  }
}

document.querySelector(".geometricMean").innerText = geometricMean(arr).toFixed(2);

 
 /* ==== To find Variance of the array ==== */
const findvariance = function (arr){
  
  const mean = arr.reduce( (acc,val) => acc + val)/arr.length;
  
  const sqrDiff = arr.map( (acc =>  Math.pow( (acc - mean), 2 )));
  
  
  const meanSqrDiff = sqrDiff.reduce( (acc, val) => acc + val )/ arr.length;

  return meanSqrDiff;
}

const variance = findvariance(arr);

document.querySelector(".variance").innerText = findvariance(arr).toFixed(2);


/* = To find standard Deviation of the array = */

let standardDeviation = Math.sqrt(variance).toFixed(2);
document.querySelector(".SD").innerText = standardDeviation;

  }
  
  calculator();
});

