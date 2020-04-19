
var expression = "";

var enter = document.getElementsByClassName("btn-op");

//for clear button
enter[0].addEventListener('click', function(){
    var i = document.getElementById("input");
    expression = "";
    i.innerText = "";
});

//for sign button
enter[1].addEventListener('click', function(){
    var i = document.getElementById("input");
    expression += "-";
    i.innerText += "-";
});


//for input of operands 0-9 and .
for(let i=2; i<=12; i++)
{
    enter[i].addEventListener('click', function(){
        var operand = document.getElementById("input");
        var data = enter[i].getAttribute("data-value");
        expression += data;
        operand.innerText += data;
    });
}



//entering operators on the screen
var enter_opr = document.getElementsByClassName("btn-opr");

//for input of operators
// +, -, *, /, %

for(let i=1; i<=5; i++){

    enter_opr[i].addEventListener('click', function(){
        let operator = document.getElementById("input");
        let value = enter_opr[i].getAttribute("data-value");
        expression += value;
        operator.innerText += value;
    });
}


//Evaluation of expression
function evaluate(){
    
    var i = document.getElementById("input");

    //catching errors
    try{
        var res = eval(expression);

        if(isNaN(res) || res=="Infinity" || res==undefined)
        {
            res = "ERROR";
            i.innerText = res;
            //i.innerText = "";
            expression = "";
        }    
        else
        {
            i.innerText = res;
        }
    }
    catch(errors)
    {
        i.innerText = "ERROR";
    }
    
};

//when = is pressed result is evaluated
enter_opr[0].addEventListener('click', evaluate);
