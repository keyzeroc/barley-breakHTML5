window.onload = function(){
	shuffle();
	drawAll();
	// find 0 in array to init @freeInd var;
	for (let i = 0; i < array.length; i++) {
		if(array[i].indexOf(0)!=-1){
			freeInd=[i,array[i].indexOf(0)];
			break;
		}
	}
	console.log(array);
	console.log(freeInd);
}
var array = [
[1,2,3,4],
[5,6,7,8],
[9,10,11,12],
[13,14,15,0]
];
var freeInd;
function move(index){
	if(index[0]===freeInd[0]&&index[1]===freeInd[1]) return;

	if(index[0]==freeInd[0]){// check rows
		if(Math.abs(index[1]-freeInd[1])===1){
			swap(index);
		}
	}else if(index[1]==freeInd[1]){// then check cols
		if(Math.abs(index[0]-freeInd[0])===1){
			swap(index);
		}
	}else{
		return;
	}
}
function swap(index) {
	array[freeInd[0]][freeInd[1]] = array[index[0]][index[1]];
	array[index[0]][index[1]] = 0;
	freeInd = index;
	console.log(array);
	drawAll();
	if(isWin()) alert("YOU WON!");
}
function drawAll() {
	for(let i = 0; i < array.length; i++){
		for (let j = 0; j < array.length; j++) {
			// rainbow || black
			document.getElementById("c"+i+"_"+j).style.backgroundImage="url(img/num/black/"+array[i][j]+".png)";
		}
	}
}
function rand(num){
    return Math.floor(Math.random()*num);
}
function shuffle() {
	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < array.length; j++){
			let temp = array[i][j];
			let r = [rand(4),rand(4)]
			array[i][j] = array[r[0]][r[1]];
			array[r[0]][r[1]] = temp;
		}
	}
}
function isWin(){
	if(array[3][3]!==0) return false;
	var count=0;
	for(let i = 0; i < array.length; i++){
		for (let j = 0; j < array.length; j++) {
			if(i===3&&j===3&&array[i][j]===0) break;
			if(++count!==array[i][j]){
				return false;
			}
		}
	}
	return true;
}