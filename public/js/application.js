$(document).ready(function () {
	// Tu código va aquí
	console.log('hola');
	keyZ = false;
	keyM = false;
	scores = []
	$("button").click(function(event) {
		// 	event.preventDefault();
		// 	console.log('dentro de boton');
		// 	var count = 3;
		// 	var start = setInterval(function() {
		// 		count = count - 1;
		// 	  if (count === 0){
		// 	    clearInterval(start); // Stopping the counter when reaching 0.
		// 	  }
		// 	}, 1000);
		// 	var show = $(".counter").html(start);
		var player_one = $("#jugador1").val();
		var player_two = $("#jugador2").val();
		console.log(player_one);
		console.log(player_two);
		$("#player1 strong").html(player_one);
		$("#player2 strong").html(player_two);

	  moveCoin('Player1');
	  $(document).bind('keydown', stopCoin);
	  moveCoin('Player2');
	  $(document).bind('keydown', stopCoin);

		
	});
});


function moveCoin(player) {
	// encuentra la clase activa actual
	var attribute = $("tr").attr("id");
	var current = $("#" + player + "> .active");
	// encuentra la clase activa siguiente
	var currentNext = $(current).next();
	// obtencion de index
	var index = $(current).attr("id");
	// mover la moneda
	var move = $(currentNext).addClass("active").siblings().removeClass("active");
	// si el index es igual a 99 se para la moneda de manera automática
	if (index == 99 || player == "Player1" && keyZ == true) {
		var score1 = index
		scores[0] = score1;
		$(".score1").html(score1);
	} else if (index == 99 || player == "Player2" && keyM == true) {
		var score2 = index
		scores[1] = score2;
		$(".score2").html(score2);
	} else {
		// si el index es menor a 99 se sigue moviendo
		var start = setTimeout(function() {
	  	moveCoin(player);
		}, 50);
	}
	compareCoin(scores);
}



function stopCoin() {
	$(document).keyup(function(e) {
		if (e.keyCode === 90){
		  keyZ = true;
		  console.log(keyZ);
		};   // z
		 if (e.keyCode === 77){
		 	keyM = true;
		 	console.log(keyM);
		};   // m
	});
}

function compareCoin(scores) {
	console.log(scores[0], scores[1]);
	if (scores[0] == scores[1]) {
		$(".winner").html("Player1 and Player2 Tied!");
		$(".table").css("background-color", "green");
	} else if (scores[0] < scores[1]) {
		$(".winner").html("Player1 Winner!!!");
		$("#player1").css("background-color", "green");
	} else if (scores[0] > scores[1]) {
		$(".winner").html("Player2 Winner!!!");
		$("#player2").css("background-color", "green");

		var player_one = $("#jugador1").val();
		var player_two = $("#jugador2").val();

		var score_one = scores[0];
		var score_two = scores[1];
		console.log(score_one, score_two);

	  $.post("/receive_info", {"jugador1": player_one, "jugador2": player_two, "score1": score_one, "score2": score_two}, function(data){
		});
	}
}

//funcion para mover moneda
////localizar la clase activa actual
////localizar la clase activa siguiente '.next'
////remover la clase activa actual
////agregar la clase activa al siguiente
////localiza el index/posicion del 'id'

////comparar si el index es igual a 99
//////
////otro
//////mover moneda - llamar a funcion mooneda / usar settimeout



//funcion para detener moneda
////tomar valores del teclado 
//////investiga el uso de keycode, .bind (para enlazar un keyup o keydown con la funcion determoneda)
