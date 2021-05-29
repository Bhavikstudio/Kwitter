

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
  

//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot)
 {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
     row = "<div class ='room_name' id ="+ Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row 
       //Start code

      //End code
      });});}
getData();

function addroom(){
  Room_names = document.getElementById("room_name").value;
  firebase.database().ref("/").child(Room_names).update({purpose:"adding_room_name"});
  localStorage.setItem("room_name", Room_names);
  window.location = "kwitter_page.html";
}
function redirectToRoomName(name)
 {
    console.log(name);
     localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
     }
 
function logout(){
  alert("Its safe when you logout because the things you viewd are saved in the room names");
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
   
  window.location = "index.html";
}
