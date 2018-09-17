function nextPage(currentPage, secondPage) {
   document.getElementById(currentPage).style.display = "none";
   document.getElementById(secondPage).style.display = "block";
}


function assignValue(event,objectiveValue, objectiveName){
        var callingButtonID = event.target.id;
        var x=document.getElementById(objectiveName).innerHTML;
        console.log(x+"Ajay");
        if(x == ""){
            document.getElementById(objectiveName).innerHTML = "<input type='hidden' name="+"'"+objectiveValue+"' "+"value="+"'"+objectiveValue+"'"+">";
            document.getElementById(callingButtonID).style.backgroundColor= "green";
        } else {
            document.getElementById(callingButtonID).style.backgroundColor= "#EEEEEE";
            document.getElementById(objectiveName).innerHTML = "";
        }
    }
    