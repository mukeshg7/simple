var logo = document.getElementById('sym'); //like logo
var text = document.getElementById('text'); //like button text
var close = document.getElementById("close"); //modal close button

// toggle Like button symbol and text
function toggleLike() {
	if(text.innerHTML === ' Like') {
		text.innerHTML = ' UnLike';
		logo.classList.remove('fa-thumbs-up');
		logo.classList.add('fa-thumbs-down');
	} else {
		text.innerHTML = ' Like';
		logo.classList.remove('fa-thumbs-down');
		logo.classList.add('fa-thumbs-up');
	}
}

// Adding new input field in modal
var num = 1;    
function add() {
	num += 1;
	console.log(num);
	input.insertAdjacentHTML('afterend', `<div class="row" id="row${num}">
		        			<div class="col-md-10">
		        				<input class="input-group-text" type="email" name="box${num}" id="box${num}">
		        			</div>
		        			<div class="col-md-2">
		        				<button type="button" onClick="tabClose(this)" class="close" id="close${num}">
						          &times;
						        </button>
		        			</div>
		        		</div><br id="break${num}">`);
}

// delete an input field in modal
function tabClose(e) {
	var id_num = e.id.slice(5);console.log(id_num);
	document.getElementById(`row${id_num}`).remove();
	document.getElementById(`break${id_num}`).remove();
}

// send button in modal
function send() {
	var data = [];

	// Getting all the data entered, deleting the input fiels, showing the alert, closing the modal
	for(let i = 1; i <= num; i++)
	{
		var el = document.getElementById(`box${i}`);
		if(el) {
			if(el.value) {
				// pushing entered email-id's
				data.push(el.value);       
			}
			//deleting the input fields after send is clicked
			document.getElementById(`row${i}`).remove();
			document.getElementById(`break${i}`).remove();
		}
	}
	console.log(data);

	//displaying the alert
	var alert = document.getElementById('alert');
	alert.style.display = 'block';

	//removing the alert and closing the modal after send
	setTimeout(() => {alert.style.display = 'none'; close.click()}, 1000); 

	
}