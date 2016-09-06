var option = function(){

}
option.prototype.defaultSetting ={//liClass,divId1,divId2必须填写
		liClass:"", 
		divId1:"",
		divId2:"",
		node1:"li"
		
};
option.prototype.main = function(opt){
	var self = this;
	self.defaultSetting = opt;
	self.oDiv = document.getElementById(self.defaultSetting.divId1);
	self.aLi = this.oDiv.getElementsByTagName(self.defaultSetting.node1);
	self.aDiv = document.getElementById(self.defaultSetting.divId2).children;
	self.changeTo();
}
//改变单击的模块display值
option.prototype.changeTo = function(){
	var self = this;
	for (var i = 0;i<self.aLi.length ;i++) {
		self.aLi[i].index = i;
		self.aLi[i].onclick = function(){
			for (var i = 0;i<self.aLi.length; i++) {
				self.aLi[i].className = "";
				self.aDiv[i].style.display="none";
			}
			this.className = self.defaultSetting.liClass;
			self.aDiv[this.index].style.display="inline-block";
		};
	};
}