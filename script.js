const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let res = [];
	let currentChunk = [];
	let currentSum = 0;
	for(let i = 0; i < arr.length; i++) {
			if(currentSum + arr[i] <= n){
				currentChunk.push(arr[i]);
				currentSum += arr[i];
			}
		else{
			res.push(currentChunk);
			currentSum = arr[i];
			currentChunk =[arr[i]];
		}
		
	}
	res.push(currentChunk);
	return res;
	
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
