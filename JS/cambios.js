const myFunction = () =>{
    var x = document.getElementById("myddcontent");
    if(x.className === "ddcontent"){
        x.className+=" responsive";
    }else{
        x.className="ddcontent"
    }
}

const triangleFunction = () =>{
    var y = document.getElementById("triangle");
    if(y.className ==="triangle__cont"){
        y.className+=" visible";
    }else{
        y.className="triangle__cont";
    }
}