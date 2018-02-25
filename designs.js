const pixelTable = document.getElementById('pixelCanvas');

//If submit button is clicked, makeGrid is called:
document.getElementById("submitButton").addEventListener('click', function makeGrid(ev) {
	ev.preventDefault();
	pixelTable.innerHTML="";  //clear any existing table
	const height = document.getElementById('inputHeight');
	const width = document.getElementById('inputWidth');

	//Add new row:
	for (i=1; i<=height.value; i++) {	
		const newRow = document.createElement('tr');
		pixelTable.appendChild(newRow);
		
		//Add new cell to row:
		for (j=1; j<=width.value; j++) {
			const newCell = document.createElement('td');
			newRow.appendChild(newCell);
		}
	}
});

//If the table is clicked, the background color of the target cell is changed to color 
//value of color picker:
pixelTable.addEventListener('click', function(ev) {
	ev.target.style.backgroundColor = document.getElementById("colorPicker").value;
});

