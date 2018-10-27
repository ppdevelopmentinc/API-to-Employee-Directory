$(document).ready(function(){

		fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
			.then(response => response.json())
			.then(data => display(data.results));


		let $card = [];
		let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

		function display (data) {

			data.forEach((user, index) => {
			let $card = $(`<div class="user__card" id="${index}" href="#">`);
	    $card.appendTo($directory);
	    $card.append(`<img class="user__image" src="${user.picture.large}"/>`);
	    $card.append(`<h1 class='user__name'>${user.name.first} ${user.name.last}</h1>`);
	    $card.append(`<a class='user__email' href="mailto:${user.email}"> ${user.email} </a>`);
	    $card.append(`<p class='user__city'>${user.location.city}</p>`);



		  $card.append(`<li class="cell hide">${user.cell}</li>`);
			$card.append(`<li class="address hide">${user.location.street}, ${user.location.city}, ${user.location.state} </li>`);
		 	$card.append(`<li class="dob hide">Birthday: ${createBirthDay(user.dob.date)}</li>`);
			$card.append(`</div>`);

			console.log($card);




			});

			//Modal
			show();




		}//function ends




		const $cards = $('.user__card');

		const $directory = $('.list');
		const $search = $('#search');
		let $overlay = $('.overlay');

//Search function

		$search.on('keyup', function(e){

			let $input = $search.val().toLowerCase();
			console.log($input)

		});//end of search


		$search.hideseek({
			ignore_accents: true,
			min_chars: 3
		});

//Modal

		function show () {
			$("div .user__card").on("click", function(e){
				let currentID = e.target.id;
				console.log(currentID);

				$overlay.removeClass("hide");
				$('.cell').removeClass("hide");
				$('.address').removeClass("hide");
				$('.dob').removeClass("hide");

				let div = $(this).closest('.user__card').clone(true);
				div.addClass("active");

				$overlay.append(div);

			});//listener ends
				left();
				right();

				close();

		};//function ends


		function left() {

			$('.left').on("click", function(e){
				$(".overlay .user__card").hide();

				let attached = $(".active").attr("id");
				let prevID = parseFloat(attached) -1;


				if (parseFloat(prevID) === -1) {
					prevID = 11;
					parseFloat(prevID);
				};//if statement ends

				let prevDiv = document.getElementById(prevID);
				console.log(attached);
				console.log(prevDiv);

				$overlay.append(prevDiv);

			});//listener ends

		};//function ends

		function right() {

		$('.right').on("click", function(e){

			let attached = $(".active").attr("id");
			let attachedDiv = $(".active");
			let nextID = parseFloat(attached) + 1;


			if (parseFloat(nextID) === 12) {
				nextID = 0;
				parseFloat(nextID);

			};//if statement ends

			let nextDiv = document.getElementById(nextID);
			console.log(attached);
			console.log(nextDiv);

			$overlay.append(nextDiv);
			attachedDiv.hide();
			attachedDiv.removeClass("active");
			// nextDiv.addClass("active");

	  	});//listener ends
		};//function ends

		function close() {
			$('.cross').on('click', function(e){

					$(".overlay .user__card").remove();
					$overlay.addClass('hide');
					$('.cell').addClass("hide");
					$('.address').addClass("hide");
					$('.dob').addClass("hide");

				});//listener ends
		};//function ends

		function reset() {

		};//function ends



//Birthday

		function createBirthDay(data){
				const date = data.slice(2, 10);
				return date.split('-').reverse().join('/');

			}//function ends



});// document ready


//
//
//
// 			$('.right').on('click', function(e){
//
// 							clickedOn.remove();
// 							$overlay.not('div:last').remove()
// 							let nextUser = $card.next('.user__card').clone();
// 							console.log(nextUser);
// 							$overlay.append(nextUser);
// 				});//listener ends
//
// 			$('.left').on('click', function(e){
//
// 							clickedOn.remove();
// 							let prevUser = $card.prev('.user__card').clone();
// 							console.log(prevUser);
// 							$overlay.append(prevUser);
//
// 			 });//listener ends
//
// 		 });//function ends
//
// 	}//function ends
//
// showOverlay();
