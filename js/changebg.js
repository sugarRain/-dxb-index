var changebg = function(){
	this.index = 0;
}
changebg.prototype.defaultSetting = {//divId,btnId,liClass1,liClass2必填
	divId:"",
	btnId:"",
	liClass1:"",
	liClass2:"",
	node1:"li"

}
changebg.prototype.main = function(opt){
	var self = this;
	self.defaultSetting= opt;
	self. oDiv = document.getElementById(self.defaultSetting.divId);
	self. aLI = self.oDiv.getElementsByTagName(self.defaultSetting.node1);
	self. oBtn =document.getElementById(self.defaultSetting.btnId);
	self.clickChange();
	self.clickbtn();
}
//给index指向的注册单击事件
changebg.prototype.clickChange = function(){
	var self = this;
	for(var i= 0;i<self.aLI.length;i++){
		self.aLI[i].index = i;
		self.aLI[i].onclick=function(){
			index = this.index;
			self.removebg(index);
		}
	}
}
//判断单击事件指向的是否为需要变色的
changebg.prototype.removebg = function(index){
	var self = this;
	for(var j=0;j<self.aLI.length;j++){
		self.aLI[j].className=self.defaultSetting.liClass1;
	}
	if(self.aLI[index].className==self.defaultSetting.liClass1){
		self.aLI[index].className=self.defaultSetting.liClass2;
	}else{
		self.aLI[index].className=self.defaultSetting.liClass1;
	}
}
//实现循环切换的按钮
changebg.prototype.clickbtn = function(){
	var self = this;
	self.oBtn.onclick = function(){
		self.index++;
		if(self.index == self.aLI.length ){
			self.index = 0;
		}
		self.removebg(self.index);
	}
}