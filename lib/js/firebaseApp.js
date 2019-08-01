var myAppDB = firebase.database();
myAppDB.ref("users/").once("value", function (snapshot) {
  console.log(snapshot.val());
}, function (error) {
  console.log("Error: " + error.code);
});