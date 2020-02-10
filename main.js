function onclicksubmit() {
	document.forms[0].submit();
	var lgmdp = document.getElementById("password").value.length;
	
	if(lgmdp < 4){
		alert("mot de passe non conforme");
	}

}

function controlesaisie(){
	if(document.getElementById("email").value == ""){
		document.getElementById("spanemail").style.display="inline-block";
	}
	else{
		document.getElementById("spanemail").style.display="none";
	}
	if(document.getElementById("password").value == ""){
		document.getElementById("spanmdp").style.display="inline-block";
	}
	else{
		document.getElementById("spanemdp").style.display="none";
	}
	if(document.getElementById("confirmpassword").value == ""){
		document.getElementById("spanmdpconfirm").style.display="inline-block";
	}
	else{
		document.getElementById("spanemdp").style.display="none";
	}

}