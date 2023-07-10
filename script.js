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
        Day = 31 - Day;
    }
    else if(Month==2){
        Day = 29 - Day;
    }
    else{
        Day = 30 - Day;
    }
    Hours = 24 - Hours;
    Min = 60 - Min;
    Sec = 60 - Sec;
    document.getElementById("container-year").innerHTML = `${year}`;
    document.getElementById("container-month").innerHTML = `${Month}`;
    document.getElementById("container-day").innerHTML = `${Day}`;
    document.getElementById("container-hour").innerHTML = `${Hours}`;
    document.getElementById("container-minute").innerHTML = `${Min}`;
    document.getElementById("container-second").innerHTML = `${Sec}`;
    if(year==0 && Month==0  && Day==0 && Hours==0 && Min==0 && Sec==0){
        document.getElementById("new-year").innerHTML=`HAPPY NEW YEAR`;
        document.getElementById("container-main").style.display="none";
        document.getElementById("container-sub").innerHTML=`May Your Year Goes with Full of Happiness`;
    }
}
setInterval(timeleft, 1000);