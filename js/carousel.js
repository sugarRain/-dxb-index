var change = function(){

}
change.prototype.defaultSetting = {//div1,class1,class2，class3必填
	div1:"",
	class1:"",
	class2:"",
	class3:"",
	node1:"div",
	node2:"span"
}
change.prototype.main =function(opt){
	var self = this;
	self.defaultSetting = opt;
	self.getArr();
	self.decide();
}
//找到符合需要的class的元素并组成一个数组
change.prototype.getArr= function(){
	var self = this;
	self.oDiv1 = document.getElementById(self.defaultSetting.div1);
	self.aDiv2 =  self.oDiv1.getElementsByTagName(self.defaultSetting.node1);
	var arr = [];
	for(i=0;i<self.aDiv2.length;i++){
		if(self.aDiv2[i].className == self.defaultSetting.class1){
			arr.push(self.aDiv2[i]);
		}
	}
	return arr;
}
//判断ie678与其它浏览器
change.prototype.decide = function(){
	var self = this;
	var a =( !-[1,]);
	var fc = null;
	var ns = null;
	if(a== true){
		fc = "firstChild";
		ns = "nextSibling";
	}else{
		fc =  "firstElementChild";
		ns = "nextElementSibling";
	}
	self.animate(fc,ns);
}
//遍历并给节点添加class和删除class
change.prototype.animate = function(fc,ns){
	var self = this;
	var oDiv3 = self.getArr();
	for (var i = 0;i<oDiv3.length;i++) {	
		oDiv3[i][fc].onclick = function(){
			if(this.className== self.defaultSetting.class2){
				this[ns].style.display="none";
				this.className=self.defaultSetting.class3;
				this.getElementsByTagName(self.defaultSetting.node2)[0].style.backgroundPosition="-104px 0";
			}
			else{
				this[ns].style.display="block";
				this.className= self.defaultSetting.class2;
				this.getElementsByTagName(self.defaultSetting.node2)[0].style.backgroundPosition="-123px 0";
			}
		}
	}
}