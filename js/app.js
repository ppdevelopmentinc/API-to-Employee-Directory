$(document).ready(function(){

		fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
			.then(response => response.json())
			.then(data => display(data.results));

		function display (data) {

			data.forEach(user => {
			let $card = $('<div class="user__card">');
	    $card.appendTo($directory);
	    $card.append(`<img class="user__image" src="${user.picture.large}"/>`);

	    $card.append(`<h1 class='user__name'>${user.name.first} ${user.name.last}</h1>`);
	    $card.append(`<a class='user__email' href="mailto:${user.email}"> ${user.email} </a>`);
	    $card.append(`<p class='user__city'>${user.location.city}</p>`);

			$card.append(`</div>`);

			// $card.append(`<div class="more_info">`);
		  // $card.append(`<li class="cell">${data.cell}</li>`);
			// $card.append(`<li class="address">${data.location}</li>`);
		 	// $card.append(`<li class="birthday">Birthday: ${data.dob}</li>`);
			// $card.append(`</div>`);
	  	});
			console.log($(".user__card"));


			$(".user__card").rebox();

		}//function ends

		const $cards = $('.user__card');
		const $directory = $('.list');
		const $overlay = $('#overlay');
		const $search = $('#search');

		$search.on('keyup', function(e){
			let $input = $search.val().toLowerCase();
			console.log($input)

		});//end of search




		$search.hideseek({
			ignore_accents: true,
			min_chars: 3
		});







});// document ready
