function getFormvalue(event) {
  //Write your code here
  event.preventDefault();

  let fnmae = document.getElementsByTagName("input")[0].value;
  let lname = document.getElementsByTagName("input")[1].value;

  alert(fnmae + "   " + lname);

  document.getElementById("form1").reset();
}
