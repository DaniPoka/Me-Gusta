function SignIn(element) {
    element.innerText = "Log Out";
}

function hide(element) {
    element.remove();
}


var like1 = document.querySelector("#like1").innerText;

var like2 = document.querySelector("#like2").innerText;

var like3 = document.querySelector("#like3").innerText;

function clicklike1 ()
{
    parseInt (like1);
    if(document.querySelector(".likes").innerText == "Like"){
        like1++;
        document.querySelector("#like1").innerText = like1;
        document.querySelector(".likes").innerText = "unlike";

    } else if (document.querySelector(".likes").innerText == "unlike") {
    like1--;
    document.querySelector("#like1").innerText = like1;
    document.querySelector(".likes").innerText = "Like";
    }
}

function clicklike2 ()
{
    parseInt (like2);
    if(document.querySelector(".likes2").innerText == "Like"){
        like2++;
        document.querySelector("#like2").innerText = like2;
        document.querySelector(".likes2").innerText = "unlike";

    } else if (document.querySelector(".likes2").innerText == "unlike") {
    like2--;
    document.querySelector("#like2").innerText = like2;
    document.querySelector(".likes2").innerText = "Like";
    }
}

function clicklike3 ()
{
    parseInt (like3);
    if(document.querySelector(".likes3").innerText == "Like"){
        like3++;
        document.querySelector("#like3").innerText = like3;
        document.querySelector(".likes3").innerText = "unlike";

    } else if (document.querySelector(".likes3").innerText == "unlike") {
    like3--;
    document.querySelector("#like3").innerText = like3;
    document.querySelector(".likes3").innerText = "Like";
    }
}