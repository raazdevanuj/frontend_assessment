function openForm() {
	
  document.getElementById("myForm").style.display = "block";
  res();
}
function res()
{
document.form.reset();	
}	
function closeForm() {
	
  document.getElementById("myForm").style.display = "none";
}
function validateemail(email)  
{  
var x=email;  
var atposition=x.indexOf("@");  
var dotposition=x.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){     
  return true;  
  }  
}  
function addRow() {
         
    var name = document.getElementById("name");
    var ID= document.getElementById("ID");
	var dep = document.getElementById("dep");
    var email = document.getElementById("E_ID");
	var doj = document.getElementById("doj");
    var table = document.getElementById("myTableData");
    var strUser = dep.options[dep.selectedIndex].value;
	
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
	if(name.value=="")
	{
		alert("Please enter name");
	}
	else if(ID.value=="")
	{
		alert("Please enter Employee ID");
	}
	else if(strUser==-1)
	{
	alert("Please select a Department");
	}
	else if(validateemail(email.value))
	{
	alert("Please enter a valid e-mail address");
	}
	else if(doj.value==""){
	alert("Please enter date");
	}
	else
	{
    row.insertCell(0).innerHTML= '<button class="clear" onClick="deleteRow(this)"><img src="icon.png" width=100 height=40/></button>';
    row.insertCell(1).innerHTML= name.value;
    row.insertCell(2).innerHTML= ID.value;
	row.insertCell(3).innerHTML= dep.value;
    row.insertCell(4).innerHTML= email.value;
	row.insertCell(5).innerHTML= doj.value;

	closeForm();
	}
}

function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTableData");
    table.deleteRow(index);
   
}

