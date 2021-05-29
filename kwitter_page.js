 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCUaQymT5DAOxmX8OIc8qb7SnmdraGRS14",
    authDomain: "kwitter-7fbc0.firebaseapp.com",
    databaseURL: "https://kwitter-7fbc0-default-rtdb.firebaseio.com",
    projectId: "kwitter-7fbc0",
    storageBucket: "kwitter-7fbc0.appspot.com",
    messagingSenderId: "55449208952",
    appId: "1:55449208952:web:fa3e9fd509d340f95bc58d",
    measurementId: "G-0W9HQRXGFT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username"); room_name = localStorage.getItem("room_name");
  function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
         message : msg,
          like:0 });
          document.getElementById("msg").value = "";
        }


//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
uname = message_data['name'];
like = message_data['like'];
mssg = message_data['message'];

name_with_tag = "<h4>"+uname+"<img class ='user_tick' src ='tick.png'></h4>";
message_with_tag = "<h4 class ='message_h4'>"+mssg+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'>Like:"+like+"</span> </button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row; 
//End code
      } });  }); }
getData();
function logout(){
    alert("Its safe when you logout because the things you viewd are saved in the room names");
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
     
    window.location = "index.html";
  }

  function updateLike(message_id)
  {
    console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
   
   updated_likes = Number(likes) + 1;
    console.log(updated_likes);
  
     firebase.database().ref(room_name).child(message_id).update({ like : updated_likes
  });}
