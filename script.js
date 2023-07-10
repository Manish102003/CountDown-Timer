function timeleft() {
    const currentdate = new Date();
    let year = currentdate.getFullYear();
    let Month = currentdate.getMonth() + 1;
    let Day = currentdate.getDate();
    let Hours = currentdate.getHours();
    let Min = currentdate.getMinutes();
    let Sec = currentdate.getSeconds();
    document.getElementById("new-year").innerHTML=`NEW YEAR ${year+1}`;
    year = 2024 - year - 1;
    Month = 12 - Month;
    if(Month==1 || Month==3 || Month==3 || Month==5 || Month==7 || Month==8 || Month==10 || Month==12)
    {
        D
        document.getElementById("new-year").innerHTML=`HAPPY NEW YEAR`;
        document.getElementById("container-main").style.display="none";
        document.getElementById("container-sub").innerHTML=`May Your Year Goes with Full of Happiness`;
    }
}
setInterval(timeleft, 1000);