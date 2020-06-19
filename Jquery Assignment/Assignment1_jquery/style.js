    		
		let questions = [
			  {
			    id: 1,
			    question: "Q1.What is the full form of RAM ?",
			    answer: "Random Access Memory",
			    options: [
			      "Random Access Memory",
			      "Randomely Access Memory",
			      "Run Aceapt Memory",
			      "None of these"
			    ],
			    correct_option:0
			  },
			  {
			    id: 2,
			    question: "Q2.What is the full form of CPU?",
			    answer: "Central Processing Unit",
			    options: [
			      "Central Program Unit",
			      "Central Processing Unit",
			      "Central Preload Unit",
			      "None of these"
			    ],
			    correct_option:1
			  },
			  {
			    id: 3,
			    question: "Q3.What is the full form of E-mail",
			    answer: "Electronic Mail",
			    options: [
			      "Electronic Mail",
			      "Electric Mail",
			      "Engine Mail",	
			      "None of these"
			    ],

			    correct_option:0
			  }
		];





        var points=0;
		var questionCount=0;
		var user_ans;
		var quiz_complete=false;
		var progressBar_width;
		window.onload=function(){
			if(localStorage.getItem("currentQuestion")!==null && localStorage.getItem("currentQuestion")<=questions.length){
				questionCount=localStorage.getItem("currentQuestion");
			}
			if(localStorage.getItem("progressBar_width")){

			    progressBar_width=localStorage.getItem("progressBar_width");
				//alert(progressBar_width);
				document.getElementById("progressBar").style.width=progressBar_width;
			}
			if(questionCount==0){
				document.getElementById("prevButton").style.display="none";
			}
			if(questionCount==questions.length){
				document.getElementById("nextButton").innerHTML="submit";
			}
			show(questionCount);
		}

		function show(count){
			if(quiz_complete==false){
				var Question=document.getElementById("Question");
				var [first,second,third,fourth]=questions[count].options;

				Question.innerHTML=`<h2>${questions[count].question}</h2>
				<ul class="option-group">
					<li  class="option">${first}</li>
					<li  class="option">${second}</li>
					<li  class="option">${third}</li>
					<li  class="option">${fourth}</li>
				</ul>

				`;

				changeBackground();
			}
			else{
				 
				 quiz_complete=false;
				 questionCount=0;
				 clearStorage();
			}

			
		}

		function changeBackground(){

			if(questionCount==0){
				document.getElementById("prevButton").style.display="none";
			}
			if(questionCount==questions.length-1){
				document.getElementById("nextButton").innerHTML="submit";

			}
			if(questionCount==questions.length){

					document.getElementById("nextButton").innerHTML="Play Again";
					document.getElementById("prevButton").style.display="none";

				/*document.getElementById("nextButton").onclick(function(){
					results();
					quiz_complete=true;
					document.getElementById("nextButton").innerHTML="Play Again";
					document.getElementById("prevButton").style.display="none";

				});*/

			}

			var buttons=document.querySelectorAll("li.option");
			for(let i=0;i<buttons.length;i++){
				if(localStorage.getItem(questionCount)==i){
					buttons[i].classList.add("active");
				}
				else{
					buttons[i].onclick= function(){
						for (let j=0;j<buttons.length;j++){
							if(buttons[j].classList.contains("active")){
								buttons[j].classList.remove("active");
							}
						}
						buttons[i].classList.add("active");

						//var question_no=questions.id;
					    user_ans=i;
						localStorage.setItem(questionCount,i);
					}
				
				}
			}
		}
		
		function nextQuestion(){
			if(localStorage.getItem("progressBar_width")){
				 progressBar_width=localStorage.getItem("progressBar_width");
				//alert(progressBar_width);
				document.getElementById("progressBar").style.width=progressBar_width;
			}


			 progressBar_width=(((questionCount+1)/questions.length)*100)+"%";
			if(questionCount == questions.length){
				results();
				document.getElementById("nextButton").innerHTML="Play Again";
				document.getElementById("prevButton").style.display="none";
				//progressBar_width="0%";
				
				
				quiz_complete=true;
				
				questionCount++;

			}
			else{
				if(quiz_complete==true){
					 quiz_complete=false;
					 questionCount=0;
					 progressBar_width="0%";
					 clearStorage();
					 document.getElementById("nextButton").innerHTML="next";
				}
				else{
					//var actual_ans=questions[questionCount].correct_option;
					//if(user_ans==actual_ans){

						//points=points+1;
					
						localStorage.setItem("currentQuestion", questionCount);
						//localStorage.setItem("score", points);
					//}
					
					questionCount++;

					localStorage.setItem("currentQuestion",questionCount);

					if(questionCount==questions.length){
						document.getElementById("nextButton").innerHTML="submit";
					}
					if(questionCount>0){
						document.getElementById("prevButton").style.display="block";
					}
					show(questionCount);
				}
			}
			
			document.getElementById("progressBar").style.width=progressBar_width;
			localStorage.setItem("progressBar_width",progressBar_width);
		}


		function prevQuestion(){


			questionCount--;
			var currentQuestion=localStorage.getItem("currentQuestion");
			//alert(currentQuestion);
			progressBar_width=(((currentQuestion-1)/questions.length)*100)+"%";
			document.getElementById("progressBar").style.width=progressBar_width;
			
			localStorage.setItem("progressBar_width",progressBar_width);
			localStorage.setItem("currentQuestion",questionCount);
			show(questionCount);
		}	
		 function clearStorage(){
		 	hideScore();
		    for(let i=0;i<questions.length;i++){
		    	localStorage.removeItem(i);
		    }
		    localStorage.removeItem("currentQuestion");
		    show(questionCount);

		 }
		 function results(){
		 	for(let i=0;i<questions.length;i++){
		    	if(localStorage.getItem(i)==questions[i].correct_option){
		    		points++;	
		    	}
		    }
		    let score= (points/questions.length)*100;
			if(score<36){
				document.getElementById("result").innerHTML="FAIL";
				document.getElementById("result").style.backgroundColor="red";
				//$("#result").CSS("backgroundColor","red");
			}
			else if(score < 50 && score >= 36){
				document.getElementById("result").innerHTML="Average";
				document.getElementById("result").style.backgroundColor="#ffa500";
				//$("#result").CSS("backgroundColor","red");
			}
			else if(score < 70 && score >= 50){
				document.getElementById("result").innerHTML="GOOD";
				document.getElementById("result").style.backgroundColor="#008000";
				//$("#result").CSS("backgroundColor","red");
			}
			else if(score < 90 && score >= 70){
				document.getElementById("result").innerHTML="VERY GOOD";
				document.getElementById("result").style.backgroundColor="#004d00";
				//$("#result").CSS("backgroundColor","red");
			}
			else{
				document.getElementById("result").innerHTML="Excellent";
				document.getElementById("result").style.backgroundColor="#FFD700";
				//$("#result").CSS("backgroundColor","red");
			}
	    	document.getElementById("result").style.display="block";
		}

		function hideScore(){
			document.getElementById("result").style.display="none";
		}