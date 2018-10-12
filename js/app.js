$(document).ready(function(){

		fetch('https://randomuser.me/api/?results=12&nat=ca&inc=name,email,location,picture,cell,dob')
			.then(response => response.json())
			.then(data => display(data.results));

		function display (userData) {

			userData.forEach(user => {
			let $card = $('<ul class="user__card">');
	    $card.appendTo($directory);
	    $card.append(`<li><img class='user__image' src=${user.picture.large} /><li>`);
	    $card.append(`<li><h1 class='user__name'>${user.name.first} ${user.name.last}</h1></li>`);
	    $card.append(`<li><a class='user__email' href="mailto:${user.email}"> ${user.email} </a></li>`);
	    $card.append(`<li><p class='user__city'>${user.location.city}</p></li>`);
			$card.append(`</ul>`);
	  	});
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
