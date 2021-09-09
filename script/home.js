a=1;
function f1()
{
if(a==1)
{
document.getElementById("t1").src="image/banner2.png";
a=2;
}
else
if(a==2)
{
document.getElementById("t1").src="image/banner1.png";
a=1;
}

setTimeout("f1()",1500);

}