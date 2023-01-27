function calculate(){
    var date=document.myform.date.value; 
    var month=document.myform.month.value;
    var year=document.myform.year.value;
    let d=new Date();

    let cd=d.getDate();
    let cm=d.getMonth()+1;
    let cy=d.getFullYear();
    let m;
    let da=Math.abs(cd-date);
    if(month>=cm){
        m=(12-month)+cm;
    }
    else{
        m=cm-month;
    }
    let y=cy-year-1;
    if(m>=12){
        y=y+1;
        m=m-12;
    }
    if(date>31)
    alert("enter correct date");
    else if(month>12)
    alert("enter correct month");
    else if(year>cy)
    alert("enter correct year");
    else if((year==cy) && (month>cm || date>cd))
    alert("Please enter correct date of birth");
    else 
    document.getElementById("out").innerHTML="Your Age is "+y+" years "+m+" months "+da+" days";
}