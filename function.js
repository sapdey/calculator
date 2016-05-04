document.addEventListener("DOMContentLoaded", function () {

    var buttons = document.querySelectorAll("button");
    console.log(buttons.length);
    for(var i=0; i<=buttons.length-1; i++)
    {
        buttons[i].addEventListener("click", function(e) {
        //console.log(e.target.value);
        calculate(e.target.value);
        
    })};
    
    var decimalInUse=false;
    var inputVal = "";
    var outputVal = "";
    var displayVal = "";
    var operatorUsed = false;
    var lastItem=0; // 100 for number and 200 for functions
    
    function calculate(value) 
    {
        
        console.log(value);
        if(isNaN(value))
            {
                switch(value) 
                {
                    case "/" : operatorUsed = true;
                            if(lastItem===200 && inputVal[inputVal.length-1]!=='/')
                                {
                                    inputVal=inputVal.substring(0,inputVal.length-1)+'/';                              
                                }
                            else if(lastItem===100)
                                {
                                    inputVal += '/';
                                }lastItem=200;
                               decimalInUse=false;
				break;
                
                    case "*" :operatorUsed = true;
                            if(lastItem===200 && inputVal[inputVal.length-1]!=='*')
                                {
                                                         
                                    inputVal=inputVal.substring(0,inputVal.length-1)+'*';
                                }
                            else if(lastItem===100)
                                {
                                    inputVal += '*';
                                }lastItem=200;
                               decimalInUse=false;break;
            
                    case "-" : operatorUsed = true;
                            if(lastItem===200 && inputVal[inputVal.length-1]!=='-')
                                {
                                    inputVal=inputVal.substring(0,inputVal.length-1)+'-';
                                }
                            else if(lastItem===100)
                                {
                                    inputVal += '-'; 
                                }lastItem=200;
                              decimalInUse=false; break;
                            
                    case "+" : operatorUsed = true;
                            if(lastItem===200 && inputVal[inputVal.length-1]!=='+')
                                {                        
                                    inputVal=inputVal.substring(0,inputVal.length-1)+'+';   
                                }
                            else if(lastItem===100)
                                {
                                    inputVal += '+';
                                }lastItem=200;
                               decimalInUse=false;break;
                               
                    case "del" :	if(inputVal.length>=1){
				 inputVal=inputVal.substring(0,inputVal.length-1);
                              decimalInUse=false;}
				 break;

                    case "." :console.log("DECIMAL IN Use entering -"+decimalInUse);
				

				if(decimalInUse===false){
					inputVal +=".";
					decimalInUse=true;};
				break;

		case "=" : document.getElementsByClassName("input")[0].classList.add("showResult");
			//document.getElementsByClassName("output")[0].classList.add("outputResult");
			equalUsed = true;
                            	
                    
                }
                displayVal = inputVal.replace(/\*/g, "&times;").replace(/\//g, "&divide;");
                document.getElementById("inpVal").innerHTML=displayVal;
                
            }
        else 
            {
                lastItem=100;
                inputVal += value;
                displayVal += value;
		   console.log(inputVal+'--'+inputVal);
                document.getElementById("inpVal").innerHTML=displayVal;
            }
            console.log(eval(inputVal));
        document.getElementById("outVal").innerHTML=eval(inputVal);  //printing output
        };
    




});