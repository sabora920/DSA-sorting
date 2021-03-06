let count = 0;

function swap(array, i, j){
    const tmp = array[i]
    array[i] = array[j]
    array[j] = tmp
}

function partition(array, start, end){
    const pivot = array[end-1]
    let j = start
    for(let i=start; i<end-1; i++){
        if(array[i]<= pivot){
            swap(array, i, j);
            j++
            count++
        }
    }
    swap(array, end-1, j)
    return j;
}

function quickSort(array, start=0, end=array.length){
    start = start
    end = end
    if(start >=end){
        return array
    }
    const middle = partition(array, start, end)
    array = quickSort(array, start, middle)
    array = quickSort(array, middle + 1, end)
    
    return array;
}

let arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]

let arr2 = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32]
console.log(quickSort(arr2))
console.log(count)

//where does the swap take place to figure out where to place the ticker

// this quickSort keeps the original
// array as is, while the other one
// sorts the array in place
​
// function quickSort(array) {
// ​
// 	if( array <= 1) {
// 		return array;
// 	}
// ​
// 	var len = array.length;
// ​
// 	var pivot = parseInt( len / 2);
// 	var value = array[pivot];
// ​
// 	var less = [],
// 	  more = [],
// 	  same = [];
// ​
// 	for (var i = 0; i < len; i++) {
	
// 		if (array[i] === value) {
// 			same.push(array[i]);
// 		} else if ( array[i] < value) {
// 			less.push(array[i]);
// 		} else {
// 			more.push(array[i]);
// 		}
// ​
// 	}
// ​
// 	return quickSort(less).concat(same, quickSort(more));
// ​
// }