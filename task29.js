var submitDom = document.getElementById("submit");
var textDom = document.getElementById("txt");
var mesDom = document.getElementById("mes")

function test() {
	var num = 0;
	var name = textDom.value;
	num = getLength(name)
	if (num == 0) {
		mesDom.innerHTML= '姓名不能为空';
		mesDom.className = 'error';
	} else if (num >= 4 && num <=16) {
		mesDom.innerHTML = '符合规范';
		mesDom.className = 'right';

	} else {
		mesDom.innerHTML = '输入不符合规范';
		mesDom.className = 'error';
	}
}

function getLength(str) {
	var len = 0;
	for( var i = 0; i < str.length; i++) {
		charCode = str.charCodeAt(i)
		if(charCode >-1 && charCode <129)
			len += 1;
		else
			len += 2;
	}
	return len;
}
addEvent(submitDom,"click",test);

function addEvent(element, type, handler) {
	if (element.addEventListener) {
		element.addEventListener(type, handler);
	}else if (element.attachEvent) {
		element.attachEvent("on" + type, handler);
	}else {
		element["on" +type] = handler;
	}
}