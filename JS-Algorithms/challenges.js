/* eslint-disable */
/* *****
Challenge 1

"Readable Time"

The function "readableTime" accepts a positive number as argument,
you should be able to modify the function to return the time from seconds
into a human readable format.

Example:

Invoking "readableTime(3690)" should return "01:01:30" (HH:MM:SS)
***** */

const readableTime = (seconds) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const second = Math.floor((seconds % 3600) % 60);
	const strHours = hours > 9 ? hours : '0'+hours;
	const strMinutes = minutes > 9 ? minutes : '0'+minutes;
	const strSecond = second > 9 ? second : '0'+second;
	const display = `${strHours}:${strMinutes}:${strSecond}`;
	return display;
};

readableTime(458);
readableTime(3690);
readableTime(7293);
readableTime(32420);

/* *****
Challenge 2

"Circular Array"

Given the following array "COUNTRY_NAMES", modify the function "circularArray"
to return an array that meets the following criteria:

- The index number passed to the function should be the first element in the resulting array
- The resulting array must have the same length as the initial array
- The value of the argument "index" will always be a positive number

Example:

Invoking "circularArray(2)" should return "["Island", "Japan", "Israel", "Germany", "Norway"]"
***** */

const COUNTRY_NAMES = ['Germany', 'Norway', 'Island', 'Japan', 'Israel'];

const circularArray = (index) => {
	const len = COUNTRY_NAMES.length;
	const ind = index%len;
	const array = [];
	for(let i = 0 ; i < len ; i += 1){
		array.push(COUNTRY_NAMES[(ind+i)%len]);
	}
	return array;
};

circularArray(2);
circularArray(3);
circularArray(5);
circularArray(9);

/* *****
Challenge 3

"Own Powers"

The function "ownPower" accepts two arguments. "number" and "lastDigits".

The "number" indicates how long is the series of numbers you are going to work with, your
job is to multiply each of those numbers by their own powers and after that sum all the results.

"lastDigits" is the length of the number that your function should return, as a string!.
See example below.

Example:

Invoking "ownPower(10, 3)" should return "317"
because 1^1 + 2^2 + 3^3 + 4^4 + 5^5 + 6^6 + 7^7 + 8^8 + 9^9 + 10^10 = 10405071317
The last 3 digits for the sum of powers from 1 to 10 is "317"
***** */



const ownPower = (number, lastDigits) => {
	const mod = Math.pow(10,lastDigits);
	let sum = 0;
	for(let i = 1 ; i <= number ; i+=1){
		let power = 1;
		for(let j = 0; j < i ; j += 1){
			power = ((power % mod) * (i % mod)) % mod;
		}
		sum = ((sum % mod) + (power % mod)) % mod;
	}
	const result = sum.toString()
	return result.length <lastDigits ? '0'.repeat(lastDigits-result.length)+result : result;
};

ownPower(10, 3);
ownPower(12, 7);
ownPower(21, 12);

/* *****
Challenge 4

"Sum of factorial digits"

A factorial (x!) means x! * (x - 1)... * 3 * 2 * 1.
For example: 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800

Modify the function "digitSum" to return a number that
equals to the sum of the digits in the result of 10!

Example:

Invoking "digitSum(10)" should return "27".
Since 10! === 3628800 and you sum 3 + 6 + 2 + 8 + 8 + 0 + 0
***** */
function multiply(array,num){
	let carry = 0;
	let len = array.length;
	for(let i = 0 ; i < len ; i += 1){
		let res = (num*array[i] + carry);
		array[i] = res % 10;
		carry = Math.floor(res/10);
	}
	while(carry !== 0){
		array.push(carry % 10);
		carry = Math.floor(carry/10);
	}
	return array;
}
const digitSum = (n) => {
	let res = [1];
	for(let i = 1; i <= n ; i +=1){
		multiply(res,i);
	}
	const sum = res.reduce((a,b) => a+b);
	return sum;
};

digitSum(10);
digitSum(42);
digitSum(71);
digitSum(89);

/* *****
Challenge 5

"N-Digit Fibonacci Number"

Modify the function "fibIndex" to return the index of the first Fibonacci
number whose digits-length equals the number passed in to the function.

Example:

Invoking "fibIndex(3)" should return "12".
Because the 12th index in the Fibonacci sequence is 144, and 144 has three digits
***** */
function mAdd(arr,array2){
	array1 = Array.from(arr);
	let carry = 0;
	for(let i = 0; i<array2.length;i += 1){
		let res = array1[i] + array2[i] + carry;
		array1[i] = res % 10;
		carry = Math.floor(res/10);
	}
	let cursor = array2.length;
	while(carry !== 0){
		if(array1.length == cursor ){
			array1.push(carry)
			carry = Math.floor(carry/10);
		}else{
			let res = array1[cursor] + carry;
			array1[cursor] = res % 10;
			carry = Math.floor(res/10);
			cursor +=1;
		}
	}
	return array1;
}
// console.log(mAdd([3,1], [1,2]));
const fibIndex = (n) => {
	let prevPrevN = [];
	let prevN = [0];
	let actual = [1];
	let index = 1;
	while(actual.length < n){
		prevPrevN = prevN;
		prevN = actual;
		actual = mAdd(prevN, prevPrevN);
		index += 1;
	}
	return index;
};

fibIndex(3);
fibIndex(5);
fibIndex(12);
fibIndex(15);

exports.readableTime = readableTime;
exports.circularArray = circularArray;
exports.ownPower = ownPower;
exports.digitSum = digitSum;
exports.fibIndex = fibIndex;
