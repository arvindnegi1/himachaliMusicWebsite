var a=0;
var dat="MUSIC IS LIFE";
var p;
var temp1=1;
function myFunction()
{if(a<dat.length)
	{document.getElementById("typingtext").innerHTML+=dat.charAt(a);
		
	a++;

	setTimeout(myFunction,140);}
else
del();

}
function del(){
if(temp1==1)
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
setTimeout(del,300);
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
