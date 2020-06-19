function uname_validation(txt){
	          		if(txt.value.length==0){
	          			alert("UserName cant be left empty");
	          			txt.focus();
	          			return false;
	          		}
	          		else{
	          				 var letters=/^[A-Za-z]+$/;
			                 if(txt.value.match(letters)){
			                  return true;
			                }
			                else{
			                  alert("Only alphabets are allowed");
			                  txt.focus();
			                  return false;
			                }
	          		}

	          }


            function uEmail_validation(txt){
               
	               if(txt.value.length==0){
	          			alert("Email cant be left empty");
	          			txt.focus();
	          			return false;
	          		}
	          		else{
          				var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	                    if(txt.value.match(mailformat)){
	                      return true;
	                    }
	                    else{
	                      alert("You have entered an invalid email address!");
	                      txt.focus();
	                      return false;
	                    }
	          		}
          	}

          	function uCountry_validation(txt){
          		if(txt.value.length==0){
          			alert("Country cant be left empty");
          			txt.focus();
          			return false;
          		}
          		else{
          			return true;
          		}
          	}

          	 function Mobile_validation(txt){
          	 	if(txt.value.length==0){
          	 		return true;
          	 	}
          	 	else if(txt.value.length!=10){
          	 		alert(" Mobile Number should be of 10 digit");
          	 		txt.focus();
          	 		return false;
          	 	}
          	 	else{
          	 		var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
		            if((txt.match(phoneno))){
		                return true;
		              }
		              else{
		                alert("Enter a valid Mobile Number");
		                txt.focus();
		                return false;
		              }
          	 	}
		            
          }

         function Age_validation(txt){
          	  if(txt.value.length==0){
          	  	alert("age cant be left empty");
          	  	txt.focus();
          	  	return false;
          	  }

             else{
                  if(txt.value>60 || txt.value<5){
                      alert("Set age Between Range 5 to 60");
                      txt.focus();
                      return false;
                  }
                  return true;
              }
          }

          function Voter_validation(txt){
                var Age=document.myForm.Age.value;
                // alert(Age);
                if(Age>18){
	                  if(txt.value.length==0){
	                    alert("for an adult voter is must");
	                    txt.focus();
	                    return false;
	                  }
	                  else{
	                    return true;
	                  }
                }
                else
                {
	                  if(Age<18 && txt.value.length!=0){
	                      if(confirm("Are you an Adult")){
	                        document.myForm.Age.focus();
	                        return false;
	                      }
	                  }
	                  else{
	                    return true;
	                  }
                }
          } 




      	  var counter=1;
          function addNewDiv(){
              var newItem=document.createElement('div');
              newItem.innerHTML="Name " + (counter + 1) + " <br><input type='text' name='name' class='form-control'>"+"Email " + (counter + 1) + " <br><input type='email' name='email' class='form-control'>";
                  document.getElementById("newDiv").appendChild(newItem);
                  counter++;

             // alert("new Div will be added here");
          }
         
         function validateForm(){
                 var uname=document.myForm.fname;
                 var uEmail=document.myForm.Email;
                 var uCountry=document.myForm.Country;
                 var umname=document.myForm.name;
                 var umemail=document.myForm.email;
                 var uMobile=document.myForm.Mobile;
                 var uAge=document.myForm.Age;
                 var uVoter_ID=document.myForm.Voter;
                 
	             if(  uname_validation(uname) &&uEmail_validation(uEmail) && uCountry_validation(uCountry) && uname_validation(umname) && uEmail_validation(umemail) && Mobile_validation(uMobile) &&Age_validation(uAge) &&Voter_validation(uVoter_ID)){
	                return true;
	              } 
                  return false;     
        }