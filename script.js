$(document).ready(function(){

	var yourTurn = 'x';
	var compTurn = 'o';
	var turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#'];
	gameOn = false;
	count = 0;
	//setting  players choice between x and o
	$('#x-button').click(function(){

		yourTurn = 'x';
		compTurn = 'o';
		$('#x-button').addClass('btn-danger');
		$('#o-button').removeClass('btn-danger');
		reset();
	});

	$('#o-button').click(function(){

		yourTurn = 'o';
		compTurn = 'x';
		$('#o-button').addClass('btn-danger');
		$('#x-button').removeClass('btn-danger');
		reset();
	});

	// computer random turns
	function computerTurn(){

		var taken = false;
		while(taken === false && count !==5){

			var computersMove = (Math.random()*10).toFixed();
			var move = $('#'+computersMove).text();
			if(move === '#'){

				$('#'+computersMove).text(compTurn);
				$('#'+computersMove).addClass('btn-info');
				taken = true;
				turns[computersMove] = compTurn;
			}
		}
	}
	//player's turn
	function playerTurn(yourTurn, id){

		var spotTaken = $('#'+id).text();
		if(spotTaken === '#'){
			turns[id]=yourTurn;
			$('#'+id).text(yourTurn);
			$('#'+id).addClass('btn-danger'); 	
			winCondition(turns,yourTurn);
			if(gameOn === false){
				computerTurn();
				winCondition(turns, compTurn);
			}
		}
	}
	//game reset
	function reset(){

		turns = ['#', '#', '#', '#', '#', '#', '#', '#', '#']
		$('.tic').removeClass('btn-danger');
		$('.tic').removeClass('btn-info');
		$('.tic').addClass('btn-primary');
		setTimeout(function(){
			$('h1').css('visibility', 'hidden');
		}, 1000);

		$('.tic').text('#');
		gameOn = false;
	}
	//winning pattern
	function winCondition(turnArray, currentTurn){

		  if(turnArray[0] === currentTurn && turnArray[1] === currentTurn && turnArray[2] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(turnArray[0] === currentTurn && turnArray[4] === currentTurn && turnArray[8] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(turnArray[0] === currentTurn && turnArray[3] === currentTurn && turnArray[6] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		   else if(turnArray[3] === currentTurn && turnArray[4] === currentTurn && turnArray[5] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(turnArray[6] === currentTurn && turnArray[7] === currentTurn && turnArray[8] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(turnArray[2] === currentTurn && turnArray[4] === currentTurn && turnArray[6] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(turnArray[2] === currentTurn && turnArray[5] === currentTurn && turnArray[8] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(turnArray[1] === currentTurn && turnArray[4] === currentTurn && turnArray[7] === currentTurn ){
		  	gameOn = true;
		  	$('h1').text('player '+ currentTurn+' Win!').css('visibility','visible');
		  	reset();
		  }
		  else if(!(turnArray.includes('#'))){
		      gameOn = true;
		       $('h1').text('Match Draw!').css('visibility','visible');
		      reset();
		     
    	  }﻿
		  else{	
		  	gameOn = false;
		  }
	}
	//click event
	$('.tic').click(function(e){

		var slot = $(this).attr('id');
		playerTurn(yourTurn,slot);
	})
});