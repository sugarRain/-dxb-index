	var slider = function(){
		this.index = 0;
		this.timer = null;
	};
	
	slider.prototype.defaultSetting ={//liClass,divId,divClass必填
		liClass:"", 
		divId:"",
		divClass:"",
		node1:"div",
		node2:"li"

	};
	slider.prototype.main =function(opt){
		var self =this;
		self.defaultSetting = opt;
		self.oDiv = document.getElementById(self.defaultSetting.divId);
		self.aLi = this.oDiv.getElementsByTagName(self.defaultSetting.node2);
		self.clickOn();
		self.mouse();
		
	}
	//遍历轮播的序号列表并注册单击事件
	slider.prototype.clickOn = function(){
		var self =this;
		self.start();
		for(var i = 0;i<self.aLi.length;i++){
			self.aLi[i].index=i;
			self.aLi[i].onclick = function(){
				index = this.index;
				self.switchDiv(index);
			};
		};
		
	};
	//遍历所有子代div含有相同div的元素并包装起来
	slider.prototype.findDiv = function(){
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
	//给列表序号和轮播子代添加删除class
	slider.prototype.switchDiv = function(index){
		var self =this;
		var aDiv2 = self.findDiv();
		for (var i = 0;i<aDiv2.length;i++) {
			self.aLi[i].className="";
			aDiv2[i].style.display="none";
		};
		self.aLi[index].className=self.defaultSetting.liClass;
		aDiv2[index].style.display="block";
	};
	//子元素切换
	slider.prototype.move = function(){
		var self =this;
		self.index++;
		if(self.index == self.aLi.length){
			self.index = 0;
		}
		self.switchDiv(self.index );
	};
	//定义计时器
	slider.prototype.start = function(){
		var self =this;
		 self.timer = setInterval(function(){
			self.move();
		}, 2000);
	}

	//鼠标划入停止划出继续
	slider.prototype.mouse = function(){
		var self =this;
		self.oDiv.onmouseover = function(){
		clearInterval(self.timer);
		};

		self.oDiv.onmouseout = function(){
			self.start();
		};
	}
	
