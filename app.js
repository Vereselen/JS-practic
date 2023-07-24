'use strict';
/* 
//Первое задание
let str1 = "text education part 2";
let str2 = "text education";

let s1 = str1.length;
let s2 = str2.length;
console.log(s1);
console.log(s2);
let res = s2 - s1;

console.log(str1.slice(res));
*/
/*
//Второе задание
let c1 = [3, 6, 1, 8, 3, 6, 3, 6, 3, 6];
let c2 = [1, 4, 2, 4];
let c3 = [6, 3, 2, 8, 1];

let intersection1 = c1.filter(x1 => c2.includes(x1));
let intersection2 = c1.filter(x2 => c3.includes(x2));

let res = intersection1.filter(x3 => intersection2.includes(x3));
console.log(res);
*/
/*
//Третье задание
let arr = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
const removeDuplicates = (arr) => 
{
    for( let i = 0; i < arr.length; i++) {
    if((i != arr.lastIndexOf(arr[i]))) {
    arr.splice(arr.indexOf(arr[i]), 1);
    }
    }
    return arr;
}
console.log(removeDuplicates(arr));
*/
/*
//Четвертое задание
function range(start, end, step) {
    if (step == null) step = 1;
    let array = [];
  
    if (step > 0) {
      for (let i = start; i <= end; i += step)
        array.push(i);
    } else {
      for (let i = start; i >= end; i += step)
        array.push(i);
    }
    return array;
  }

console.log(range(5, 2, -1));
console.log(range(4, 16, 2));
*/
//Пятое задание
/*
let str = 'test education part 2';
function splitAndReplace(str) 
{
  let newStr = '';
  for (let i = 0; i < str.length; i += 3) {
    const frag = str.slice(i, i + 3);
    const middleChar = frag[1];
    let newChar = '';
    do {
      newChar = String.fromCharCode(Math.floor(Math.random() * 256));
    } while (newChar === frag[0] || newChar === middleChar || newChar === frag[2]);
    newStr += frag[0] + newChar + frag[2];
  }
  return newStr;
}
let m = splitAndReplace(str);
function funkyStringSplit(m)
{
  splitAndReplace(str) 
    let i = m.length % 3;
    let parts = i ? [ m.substr( 0, i ) ] : [];
    for( ; i < m.length ; i += 3 )
    {
        parts.push( m.substr( i, 3 ) );
    }
    return parts;
}
let res = funkyStringSplit(m).sort();
console.log(res);
*/
//Шестое задание
const any = [17,6,2];
function func(any){
    let newAny = [];
  for (let i = 0; i < any.length; i++){
    if(any[i]%2 != 1){
  newAny = Math.pow(any[i],3);
    }
    else 
    newAny = Math.pow(any[i],2);
}
return newAny;
}
function result(){
  let res;
  let cal = func(any);
  res = Math.sqrt(cal[1] * cal[2] + cal[3])
  return Math.round(parseFloat(res) * 100) / 100;
}
console.log(result());