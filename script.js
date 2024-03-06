setInterval(() => {
    
    var d=new Date();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();

    var hDeg=h*30+m*(360/720);
    var mDeg=m*6+s*(360/3600);
    var sDeg=s*6;

    document.getElementById("hr").style.transform="rotate("+hDeg+"deg)";
    document.getElementById("min").style.transform="rotate("+mDeg+"deg)";
    document.getElementById("sec").style.transform="rotate("+sDeg+"deg)";

}, 1000);