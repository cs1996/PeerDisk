msg_v=0;var x=(function(){function sendfeedRequest(xhr){if(xhr){xhr.open("GET","script/php/delivery.php",true);xhr.onreadystatechange=function(){handleResponsefeed(xhr);};xhr.send(null);}};function handleResponsefeed(xhr){if(xhr.readyState==4&&xhr.status==200){var pa=xhr.responseText;var responseOutput=document.getElementById("feed");responseOutput.innerHTML=pa;}};function align(){gWidth=window.outerWidth;gHeight=window.outerHeight;contentheight=gHeight-161;document.getElementById("maincontent").style.height=contentheight+"px";var online=document.getElementById("online");var upload=document.getElementById("upload");var media=document.getElementById("media");var apps=document.getElementById("apps");var frame=document.getElementById("frames");var files=document.getElementById("files");var update=document.getElementById("update");var ubutton=document.getElementById("updatebutton");online.style.height=(contentheight/10)*6.2+"px";upload.style.height=(contentheight/10)+"px";media.style.height=(contentheight/10)*5+"px";apps.style.height=(contentheight/10)*3+"px";frame.style.margin_left="40px";files.style.width=(gWidth/10)*3.6+"px";update.style.width=(gWidth/10)*2.8+"px";update.style.height=(contentheight/13)+"px";ubutton.style.width=(gWidth/10)*0.4+"px";ubutton.style.height=(contentheight/20)+"px";document.getElementById("maincontent").style.visibility="visible";};function online(x){if(x){x.open("GET","script/php/online.php",true);x.onreadystatechange=function(){handleResponseonline(x);};x.send(null);}};function handleResponseonline(x){if(x.readyState==4&&x.status==200){var pa=x.responseText;var responseOutput=document.getElementById("online");responseOutput.innerHTML=pa;}};function profiler(x){if(x){x.open("GET","script/php/profile.php",true);x.onreadystatechange=function(){handleResponseprofiler(x);};x.send(null);}};function handleResponseprofiler(x){if(x.readyState==4&&x.status==200){var pa=x.responseText;var responseOutput=document.getElementById("profile");responseOutput.innerHTML=pa;}};function media(x){if(x){x.open("GET","script/php/media.php",true);x.onreadystatechange=function(){handleResponsemedia(x);};x.send(null);}};function handleResponsemedia(x){if(x.readyState==4&&x.status==200){var pa=x.responseText;var responseOutput=document.getElementById("media");responseOutput.innerHTML=pa;}};function apps(x){if(x){x.open("GET","script/php/apps.php",true);x.onreadystatechange=function(){handleResponseapps(x);};x.send(null);}};function handleResponseapps(x){if(x.readyState==4&&x.status==200){var pa=x.responseText;var responseOutput=document.getElementById("apps");responseOutput.innerHTML=pa;}};window.onload=function onscreen(){align();sendfeedRequest(createobj());apps(createobj());media(createobj());online(createobj());profiler(createobj());};})();function sort(o){g=Math.floor(Math.random()*5+1);o.src="site/file/pic"+g+".jpg";w=(window.outerWidth/10)*3.5-15;h=((window.outerHeight-160)/10)*5-10;o.style.width=w+"px";o.style.height=h+"px";};function visible(od,cmd){if(!cmd){od.style.visibility="visible";}else{var o=document.getElementById(cmd);o.style.visibility="visible";};};function hide(od,cmd){if(!cmd){od.style.visibility="hidden";}else{var o=document.getElementById(cmd);o.style.visibility="hidden";}};function hidepop(o){};var worker;function loads(){var vad=document.getElementById("searchbox");if(vad.value!=""){id=1;worker.postMessage(id+"."+vad.value);worker.onmessage=function(event){var re=document.getElementById("searchresult");re.innerHTML=event.data;re.style.visibility="visible";};}else{var re=document.getElementById("searchresult");re.innerHTML="";re.style.visibility="hidden";}};function startw(){worker=new Worker("sample.js?"+temp_str);};function stopw(){worker.terminate();};randstr(3);function randstr(len){var ch='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',str="";for(i=0;i<len;i++){str=str+ch[Math.floor(Math.random()*ch.length+1)];};temp_str=str;};startw();function createobj(){try{return new XMLHttpRequest();}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0");}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0");}catch(e){}try{return new ActiveXObject("Msxml2.XMLHTTP");}catch(e){}try{return new ActiveXObject("Microsoft.XMLHTTP");}catch(e){}alert("XMLHttpRequest not supported");return null;};function tiggerProfile(){try{var s=document.getElementById("menu");s.style.visibility="visible";}catch(e){DumpException(e);}};function DumpException(o){};function tiggermsg(){var msgframe=document.getElementById("msgframe");if(!msg_v){msg_v=1;msgpump(createobj());msgframe.style.visibility="visible";}else{msg_v=0;msgframe.style.visibility="hidden";}};function msgpump(xhr){if(xhr){xhr.open("GET","script/php/msg.php",true);xhr.onreadystatechange=function(){handleResponsemsgpump(xhr);};xhr.send(null);}};function handleResponsemsgpump(xhr){if(xhr.readyState==4&&xhr.status==200){var pa=xhr.responseText;var responseOutput=document.getElementById("msgframebody");responseOutput.innerHTML=pa;}};