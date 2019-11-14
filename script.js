//write first method
function sleep_in(weekday,vacation) {
    if(vacation == true || weekday == false){
        return true;
    }else{
        return false;
    }
}


//write second method
function monkey_trouble(param1, param2) {
    if(param1 == param2){
        return true;
    }else{
        return false;
    }

}

//add 2-10 below here...
function string_times(x, y){
    var num = "";
    for(var i = 1; i <= y; i++){
        num = num + x;
    }
    return num;
}


function front_times(x, y){
    var num = "";
    var word = x.slice(0,3)
    for(var i = 1; i <= y; i++){
        num += word ;
    }
    return num;
}




function string_bits(x, y){
    var num = "";
    for(var i = 0; i < x.length; i=i+2){
        if(i%2 == 0){
            num += x.substring(i,i+1)
        }
    }
    return num;
}


function caughtSpeeding(x,y){
    if(y == true){
        if(x<=65){
            return 0
        }
        if(x>=66 && x<= 85){
            return 1
        }
        if(x>=86){
            return 2
        }
    }else{
        if(x<=60){
            return 0
        }
        if(x>=61 && x<=80){
            return 1
        }
        if(x>=81){
            return 2
        }
    }
}



function fizz_buzz(x){
    var num = ""
    if(x%3==0 && x%5==0){
        num = "FizzBuzz";
    }
    else if(x%3==0) {
        num = "Fizz";
    }
    else if(x%5== 0){
        num = "Buzz";
    }else{
        num = x + "!";
    }
    return num
}








function teaParty(x,y) {
    if(x < 5 || y < 5){
        return 0
    }
    else if(x >= 2 * y  || y >= 2 * x){
        return 2
    }
    else if(x >= 5 && y >= 5){
        return 1
    }else{
        return 0
    }
}


function blackjack(x,y){
    if(x>= 21 && y>=21){
        return 0
    }
    else if(x <= 21 && x > y){
        return x
    }
    else if(y <= 21){
        return y
    }
    else if( x<= 21 && y > x){
        return x
    }

}

function loneSum(x,y,z){
    if( x == y && x == z ){
        return 0
    }


     else if( x == y){
         return z
     }
     else if( y == z ){
         return x
     }
     else if( x == z){
         return y
     }else{
        return x + y + z
    }
}

















//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(true, false);
    document.getElementById("output").innerHTML += front_times(true, false);
    document.getElementById("output").innerHTML += string_bits(true, false);
    document.getElementById("output").innerHTML += caughtSpeeding(true, false);
    document.getElementById("output").innerHTML += fizz_buzz(true, false);
    document.getElementById("output").innerHTML += teaParty(true, false);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}
