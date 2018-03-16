function getScrollOffset(){
	if(window.pageXOffset){
		return {
			w:window.pageXOffset,
			h:window.pageYOffset
		}
	}
	var dis={
		w:document.body.scrollLeft+document.documentElement.scrollLeft,
		h:document.body.scrollTop+document.documentElement.scrollTop	}
		return dis;
}
function getViewportOffset(){
	if(window.innerWidth){
		return{
			w:window.innerWidth,
			h:window.innerHeight
		}
	}
	if(document.compatMode=="CSS1Compat"){
		return{
			w:document.documentElement.clientWidth,
			h:document.documentElement.clientHeigth
		}
	}
}
Element.prototype.getElementOffset=function(){
		var objData=this.getBoundingClientRect();
		if(objData.width){
			return{
				w:objData.width,
				h:objData.height
			}
		}else{
			return{
				w:objData.right-objData.left,
				h:objData.bottom=objData.top
			}
		}
}
function getStyle(obj,prop){
           	if(obj.currentStyle){
           		return obj.currentStyle[prop];
           	}else{
           		return window.getComputedStyle(obj,null)[prop];
           	}
           }

Element.prototype.getElementPosition=function(){
  var x=0,
      y=0,
      ele=this;
  while(ele!=document.body){
      x+=ele.offsetLeft;
      y+=ele.offsetTop;
      ele=ele.offsetparent;
  }
  return {
    disX:x,
    disX:y
  }
}

function addEvent(elem,type,handle){
    if(elem.addEventListener){
        elem.addEventListener(type,handle,false);
    }else if(elem.attachEvent){
            elem['temp'+type+handle]=handle;
            elem[type+handle]=function(){
                elem['temp'+type + handle].call(elem);
            }
        elem.attachEvent('on' + type,elem[type+handle]);
    }else{
        elem['on'+type]=handle;
    }
}
function removeEvent(elem,type,handle){
    if(elem.removeEventListener){
        elem.removeEventListener(type,handle,false);
    }else if(elem.detachEvent){
        elem.detachEvent('on'+type,handle);
    }else{
        elem['on'+type]=null;
    }
 }
 function stopBubble(event){
  if(event.stopPropagation){
    event.stopPropagation();
  }else{
    event.cancelable=true;
  }
 }
function cancelHandler(event){
if(event.preventDefult){
  event.preventDefult();
}else{
  event.returnValue=false;
}
}




function asyncLoaded(url,callback){
  var script=document.createElement('script');
script.type="text/javascript";
if(script.readyState){
  //IE
  script.onreadystatechange=function(){
    if(script.readyState=="loaded"||script.readyState=="complete"){
      script.onreadystatechange=null;
      callback();
      //handle
    }
  }
  }else{
    //safari chrome opera firefox
    script.onload=function(e){
      callback();
    //handle
}//监听下没下载完
}
script.src=url;//异步的
document.body.appendChild(script);

}
function startMove(obj,json,fn){
    var speed,
          iCur,
          name;
          clearInterval(obj.timer);
         obj.timer=setInterval(
              
            function(){
              var bStop=true;
            for(var attr in json){
              if(attr=='opacity'){
                iCur=parseFloat(getStyle(obj,attr))*100;
                name=attr;
              }else{
                iCur=parseInt(getStyle(obj,attr));
              }
              
              speed=(json[attr]-iCur)/8;
              if(speed>0){
                speed=Math.ceil(speed);
              }else{
                speed=Math.floor(speed);
              }
                if(attr=="opacity"){
                  obj.style.opacity=(iCur+speed)/100;
                }else{
                  obj.style[attr]=iCur+speed+'px';
                }
                if(Math.floor(Math.abs(json[attr]-iCur))!=0){
                  bStop=false;
                }
                if(bStop){
                  if(name=="opacity"){
                  obj.style.opacity=json[attr]/100;
                  fn();
                }
                }

            }
            
            }
            ,30);
  }