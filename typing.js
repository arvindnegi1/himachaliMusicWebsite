var a=0;
var dat="MUSIC IS LIFE";
var p;
var temp1=1;
var temp2="LOVE";
var j=13;
var i;
function myFunction()
{
document.getElementById("typingtext").style.color="blue";
if(a<dat.length)
	{document.getElementById("typingtext").innerHTML+=dat.charAt(a);
		
	a++;

	setTimeout(myFunction,140);}
else
{j=13;
i=9;
del();
}
}
function del(){
document.getElementById("typingtext").innerHTML="MUSIC IS ";
for(i=9;i<j;i++)
{document.getElementById("typingtext").innerHTML+=dat.charAt(i);}
j--;
if(j==8)
{var temp3=0;
var i=0;
document.getElementById("typingtext").style.color="orange";
re();
}
setTimeout(del,300);
/*if(temp1==1)
	{document.getElementById("typingtext").innerHTML="MUSIC IS LIF";
	temp1++;
	}
else if(temp1==2)
	{document.getElementById("typingtext").innerHTML="MUSIC IS LI";
	temp1++;
	}
else if(temp1==3)
	{document.getElementById("typingtext").innerHTML="MUSIC IS L";
	temp1++;
	}
else if(temp1==4)
	{document.getElementById("typingtext").innerHTML="MUSIC IS ";
	temp1++;
	}
else if(temp1==5)
	{document.getElementById("typingtext").innerHTML="MUSIC I ";
	temp1++;
	}
else if(temp1==4)
	{document.getElementById("typingtext").innerHTML="MUSIC IS ";
	temp1++;
	}
else if(temp1==4)
	{document.getElementById("typingtext").innerHTML="MUSIC IS ";
	temp1++;
	}
setTimeout(del,300);*/
}
function re(){
document.getElementById("typingtext").innerHTML="MUSIC IS ";
for(i=0;i<=3;i++)
	{document.getElementById("typingtext").innerHTML+=temp2.charAt(i);
	}
temp3++;	
	//document.getElementById("typingtext").innerHTML=temp3;
//if(i>4)
	//{//document.getElementById("typingtext").innerHTML="MUSIC IS LIFE";
	

	//}
//else
setTimeout(re,1000);
}

function dropdown()
	{var x;
	var temp;
	
	x=document.getElementById("innermore");
		
	temp=x.style.display;
	if(temp=="block")
	x.style.display="none";
	else
	{x.style.display="block";
	
	}
}
function mainplayer()
{var t;
t=document.getElementById("player");	
if(t.pause())
p=0;
if(p==0)
{
t.play();
p=1;
}
else
{t.pause();
p=0;
}
}
