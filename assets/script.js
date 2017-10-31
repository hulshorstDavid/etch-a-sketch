var timer = 0;

$(document).ready(function(){
	initGrid(3);
	newGrid();
	rainbow();
	dance();

})

function initGrid(numberOfSquares){
	var gridSquare = $('.gridSquare');
	var container = $('.container');
	var gridSquareSize = 500 / numberOfSquares;
	var area = numberOfSquares * numberOfSquares;
	
	gridSquare.height(gridSquareSize);
	gridSquare.width(gridSquareSize);

	for (var i = 1; i < area; i++){
		gridSquare.clone().appendTo(container);
	}
	hover();
}

function newGrid(){
	$("#reset").click(function(){
		var input = prompt("Enter number of Squares");
		$('.container').empty();
		$('.container').append("<div class = gridSquare> </div>");		
		initGrid(input);
		hover();

		if (timer != 0){
			stopDance();
		}
	})
}

function rainbow(){
	$('#rainbow').click(function(){
		$('.gridSquare').hover(function(){ 
			$(this).css("background-color", '#' + Math.floor(Math.random()*16777215).toString(16));
		})
	})
}

function startDance(){
	timer = setInterval(function(){
		$('.gridSquare').each(function(){
			$(this).css("background-color", '#' + Math.floor(Math.random()*16777215).toString(16));
			});
	}, 150)
}

function stopDance(){
	clearInterval(timer);
	timer = 0;
}

function dance(){
	$('#dance').click(function(){
		if (timer == 0){
			startDance();
		} else {
			stopDance();
		} 
	})
}

function hover(){
	$('.gridSquare').hover(function(){
		$(this).css("background-color", "#1abc9c");
	})
}



