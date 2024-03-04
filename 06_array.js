/*
    Arrays-
        1.An array is a special variable, which can hold more than one value
        2.You can also create an array, and then provide the elements
        3.Array indexes start with 0.
        4.The JavaScript method toString() converts an array to a string of (comma separated) array values.
        5.The length property of an array returns the length of an array (the number of array elements)
        6.The easiest way to add a new element to an array is using the push() method
        ---------------------------------------------------------------------------------------------------
        Methods-
            Array length
            Array toString()
            Array pop()
            Array push()
            Array shift()
            Array unshift()
            Array join()
            Array delete()
            Array concat()
            Array flat()
            Array splice()
            Array slice()
*/

/*
const new_Arr = [1,2,5,6,8];
console.log(new_Arr);
console.log(new_Arr[2]); // indexing

// declaration of array

const newA=["haj","hbh","buf","hjg"];
const newB= new Array(1,2,3,4,5,6);

console.log(newB);

// methods
newA.push(5);
newA.pop("haj");
newA.unshift(5);
newA.shift();

console.log(newA);
console.log(newA.length);
console.log(newB.length);
*/
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));



// slice, splice
/*
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) // manipulate original array

/* ********************************************************************** */

console.log("C ", myArr);
console.log(myn2);

*/
/*
const newAr =newB.join()
console.log(newAr);
console.log(typeof newAr); // convert array in to string



*/
/* ********************************************************************** */


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const newHero =marvel_heros.concat(dc_heros)
// console.log(newHero);

const newHero1 = [...dc_heros,...marvel_heros] // concate using spreader 
console.log(newHero1);
