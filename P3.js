marks=101;
if(marks>=90 && marks<=100)
{
    console.log("passed with a grade");
}
else if(marks>=80 && marks<90)
{
    console.log("passed with b grade");
}
else if(marks>=70 && marks<80)
{
    console.log("passed with c grade");
}
else if(marks>=60 && marks<70)
{
    console.log("passed with d grade");
}
else if(marks>=50 && marks<60)
{
    console.log("passed with e grade");
}
else if(marks>=40 && marks<50)
{
    console.log("passed with f grade");
}
else if(marks>=35 && marks<40)
{
    console.log("just passed");
}
else if(marks<35 && marks>=0)
{
    console.log("Failed");
}
else if(marks<0 && marks>100)
{
    console.log("bad input");
}