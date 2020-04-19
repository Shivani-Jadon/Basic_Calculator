var light = document.getElementById("space");
var push = 0;

function toggle(){
    ++push;
    //console.log(push);
    if(push%2 == 1)
        {
            //for toggling sliding button
            var s = document.getElementById("slide");
            s.style.marginLeft = "60%";
            s.style.backgroundColor = "silver";

            //for changing theme
            var scr = document.getElementById("screen");
            scr.style.backgroundColor = "rgba(120, 204, 207, 0.7)";

            var si = document.getElementById("input");
            si.style.color = "rgb(109, 34, 34)";

            var e = document.getElementById("space")
            e.style.backgroundColor = "rgb(99, 69, 73)";

            var b = document.getElementById("board")
            b.style.backgroundColor = "rgb(151, 155, 146)";

            var d = document.body;
            d.style.backgroundColor = "silver";
            
            var t = document.getElementById("calc");
            t.style.backgroundColor = "rgb(99, 69, 73)";
        }
    else{
            //for toggling sliding button
            var s = document.getElementById("slide");
            s.style.marginLeft = "1%";
            s.style.backgroundColor = "black";

            //for changing theme
            var scr = document.getElementById("screen");
            scr.style.backgroundColor = "rgba(0,0,0,0.7)";

            var si = document.getElementById("input");
            si.style.color = "rgba(255, 255, 255, 0.5)";

            var e = document.getElementById("space")
            e.style.backgroundColor = "rgba(127, 140, 69, 0.78)";
            
            var d = document.body;
            d.style.backgroundColor = "black";

            var b = document.getElementById("board")
            b.style.backgroundColor = "rgb(40, 53, 52)";
            
            var t = document.getElementById("calc");
            t.style.backgroundColor = "rgba(127, 140, 69, 0.78)";

    }
};

space.addEventListener("click", toggle);