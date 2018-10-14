$(document).ready(function(){

		fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
			.then(response => response.json())
			.then(data => display(data.results));

		let $card = [];

		function display (data) {

			data.forEach(user => {
			let $card = $('<div class="user__card " href="#">');
	    $card.appendTo($directory);
	    $card.append(`<img class="user__image" src="${user.picture.large}"/>`);
	    $card.append(`<h1 class='user__name'>${user.name.first} ${user.name.last}</h1>`);
	    $card.append(`<a class='user__email' href="mailto:${user.email}"> ${user.email} </a>`);
	    $card.append(`<p class='user__city'>${user.location.city}</p>`);



		  $card.append(`<li class="cell hide">${user.cell}</li>`);
			$card.append(`<li class="address hide">${user.location.street}, ${user.location.city}, ${user.location.state} </li>`);
		 	$card.append(`<li class="dob hide">Birthday: ${createBirthDay(user.dob.date)}</li>`);

			$card.append(`</div>`);

			function showOverlay() {
				//run all cards through array



				$card.on('click', function(e){

					let current = e.currentTarget;
					console.log(current);


					$overlay.append($card.clone());
					$overlay.removeClass("hide");
					$('.cell').removeClass("hide");
					$('.address').removeClass("hide");
					$('.dob').removeClass("hide");


					$('.right').on('click', function(e){
						// show next user
						$(".overlay .user__card").remove();
						let next = next().appendTo($overlay);

					});//listener ends

					$('.left').on('click', function(e){
						// show previous user
						$(".overlay .user__card").remove();
						let next = next().appendTo($overlay);

					});//listener ends

				});//listener ends



				$('.cross').on('click', function(e){

					$(".overlay .user__card").remove();
					$overlay.addClass('hide');
					$('.cell').addClass("hide");
					$('.address').addClass("hide");
					$('.dob').addClass("hide");

				});//listener ends



			}; //function ends


			showOverlay($card);

	  	});


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

//Birthday

		function createBirthDay(data){
				const date = data.slice(2, 10);
				return date.split('-').reverse().join('/');

			}//function ends



});// document ready
