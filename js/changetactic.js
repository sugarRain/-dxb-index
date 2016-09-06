var tactic = function(){
	this.index = 0;
	this.timer = null;
};

tactic.prototype.defaultSetting ={//liClass,divId,divClass必填
	liClass:"", 
	divId:"",
	divId1:"",
	methId:"",
	lifeId:"",
	rightId:"",
	divClass:"t",
	node1:"div",
	node2:"li"

};
tactic.prototype.main =function(opt){
	var self =this;
	self.defaultSetting = opt;
	self.oDiv = document.getElementById(self.defaultSetting.divId);
	self.oDiv1 = document.getElementById(self.defaultSetting.divId1);
	self.oMeth = document.getElementById(self.defaultSetting.methId);
	self.aLi = self.oDiv1.getElementsByTagName(self.defaultSetting.node2);
	self.oLeft = document.getElementById(self.defaultSetting.lifeId);
	self.oRight = document.getElementById(self.defaultSetting.rightId);
	self.aDiv2 = self.findDiv();
	self.clickOn();
	self.move();
	
}

tactic.prototype.clickOn = function(){
	var self =this;
	for(var i = 0;i<self.aLi.length;i++){
		self.aLi[i].index=i;
		self.aLi[i].onclick = function(){
			index = this.index;
			self.switchDiv(index);
		};
	};
	
};
tactic.prototype.findDiv = function(){
	var self =this;
	var aDiv = self.oDiv.getElementsByTagName(self.defaultSetting.node1);
	var arr = [];
	for (var i = 0;i<aDiv.length;i++) {
	if(aDiv[i].className == self.defaultSetting.divClass ){
			arr.push(aDiv[i]);
		};
	};
	return arr;	
};

tactic.prototype.switchDiv = function(index){
	var self =this;
	// var aDiv2 = self.findDiv();
	for (var i = 0;i<self.aDiv2.length;i++) {
		self.aLi[i].className="";
		self.aDiv2[i].style.display="none";
	};
	self.aLi[index].className=self.defaultSetting.liClass;
	self.aDiv2[index].style.display="block";
	self.oMeth.innerHTML="0"+(index+1)+"/05";
};

tactic.prototype.move = function(){
	var self =this;
	self.oLeft.onclick = function(){
		self.index++;
		if(self.index == self.aDiv2.length){
			self.index = 0;
		}
		self.switchDiv(self.index);
	};
	self.oRight.onclick = function(){
		
		self.index--;
		if(self.index == -1){
			self.index = self.aDiv2.length - 1;
		}
		self.switchDiv(self.index);
	};
};




















var oDiv2 = document.getElementById("con-left");
		var oDiv7 = document.getElementById("con-right-body");
		var oMeth = document.getElementById("meth");
		var aLi3 = oDiv2.getElementsByTagName("li");
		var index = 0;

		function f(){
			var aDiv7 = oDiv7.getElementsByTagName("div");
			var arr3 = [];
			for (var i = 0;i<aDiv7.length;i++) {
				if(aDiv7[i].className == "con-right" ){
						arr3.push(aDiv7[i]);
					};
				};
				return arr3;	
			};
		var aDiv4 = f();
			
		for (var i = 0;i<aLi3.length;i++) {
			aLi3[i].index = i;
			aLi3[i].onclick=function(){
				index = this.index;
				// this.className="con-left-top bg-change";
				switchDiv2(this.index)
			}
		};
		function switchDiv2(index){
			for(var i=0;i<aDiv4.length;i++){
				aLi3[i].className = "";
				aDiv4[i].style.display = "none";
			}
			aLi3[index].className="con-left-top bg-change";
			aDiv4[index].style.display = "block";
			oMeth.innerHTML="0"+(index+1)+"/05";
		
		};
		var oLeft = document.getElementById("con-left-bottom-lef");
		var oRight = document.getElementById("con-left-bottom-rig");
		oRight.onclick = function(){
			alert("a");
			index--;
			if(index == -1){
				index = aDiv4.length - 1;
			}
			switchDiv2(index);
		};
		oLeft.onclick = function(){
			index++;
			if(index == aDiv4.length){
				index = 0;
			}
			switchDiv2(index);
		};