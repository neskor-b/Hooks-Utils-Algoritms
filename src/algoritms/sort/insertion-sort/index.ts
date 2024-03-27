/* eslint-disable block-scoped-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */

function insertionSort<T>(arr: T[], comparator: (a: T, b: T) => number) {
	for (let i = 1; i < arr.length; i++) {
		const cur = arr[i];
		for (var j = i - 1; j >= 0 && comparator(arr[j], cur) > 0; j--) {
			arr[j + 1] = arr[j];
		}
		arr[j + 1] = cur;
	}
	return arr;
}

export default insertionSort;
