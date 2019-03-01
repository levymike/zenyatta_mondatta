var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// LOGIN PAGE ///////////////////////////////////////////////////////////////

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



function registerPsw(){

    var psw = document.getElementById("RegPassword");
    var psw2 = document.getElementById("RepPassword");
	var mail = document.getElementById("email");

	// If Password are identical AND are not empty AND mail not empty
     if(psw.value == psw2.value && psw.value.length != 0 && psw2.value.length != 0 && mail.value.length != 0){
		 window.location="page1.html";
	}
	else if(psw.value != psw2.value){
		alert('passwords dont match');
	}
    else if (mail.value.length == 0){
		alert('Type in an email address');
	}
else if(psw.value.length == 0 && psw2.value.length == 0){
	alert('Choose a password');
	}
}



/* use admin and login, all lowercase */
function checkLogin(){

var confirmedUsername = "admin";
var confirmedPassword = "login";

	var username = document.getElementById("username").value;
	var psw = document.getElementById("psw").value;
	if(username == confirmedUsername && psw == confirmedPassword){
		window.location="page2.html";

	}
	else{
		alert('error');
	}
}




// THIS MIGHT BE USEFULL LATER ON FOR STORAGE

/*
function clearData() {
  $("#name").val("");
  $("#email").val("");
}

function storeData() {
  name = $("#name").val();
  email = $("#email").val();
  console.log("name " + name + " email : " + email);
  localStorage.setItem("ClientName", name);
  localStorage.setItem("ClientEmail", email);

  clearData();
}

function getData() {
  var stored_name = localStorage.getItem("ClientName");
  var stored_email = localStorage.getItem("ClientEmail");
  var stored_age = localStorage.getItem("ClientAge");
//  var stored_date = localStorage.getItem("TimeStamp");
  $("#stored_email").text(stored_email);
  $("#stored_name").text(stored_name);
  $("#stored_age").text(stored_age);

}

$(document).on("pagecreate", "#page1", function(event) {

  $("#btnAdd").click(storeData);
  $("#btnClear").click(clearData);
  console.log("Main page loaded");
});


$(document).on("pageshow", function() {
  getData();

});
//   $(document).on('pageinit',function(){console.log('pageinit');});

*/
