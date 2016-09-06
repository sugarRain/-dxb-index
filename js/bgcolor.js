var bgcolors = function(){
	
}
bgcolors.prototype.defaultSetting = {//divId,liClass1必须传参
	divId:"",
	liClass1:"",
	node1:"li"

}
bgcolors.prototype.main = function(opt){
	var self = this;
	self.defaultSetting= opt;
	self.oDiv = document.getElementById(self.defaultSetting.divId);
	self.aLi = self.oDiv.getElementsByTagName(self.defaultSetting.node1);
	self.clickItem();
}
//点击遍历的index注册单击事件
bgcolors.prototype.clickItem = function(){
	var self = this;
	for(var i= 0;i<self.aLi.length;i++){
		self.aLi[i].index = i;
		self.aLi[i].onclick=function(){
			index = this.index;
			self.moveClass(index);	
		}
	}
}
//遍历li 并对其class进行增添和删除
bgcolors.prototype.moveClass = function(index){
	var self = this;
	for(var j=0;j<self.aLi.length;j++){
		self.aLi[j].className="";
	}
	if(self.aLi[index].className==""){
		self.aLi[index].className=self.defaultSetting.liClass1;
	}else{
		self.aLi[index].className="";
	}
}