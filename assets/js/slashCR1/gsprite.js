var imDisplay;

class Gsprite {
	constructor(context){
		this.xy = [110,20];
		this.images = [];
		this.img_idx=0;
		this.hw = [100,100];
		this.velocity = [0,0];
		
		this.last_animation_time =  new Date().getTime();
		this.time_delta = 100;
		
		//might need to be cap C
		this.context = context;
	}
	

	giveRandom(min, max){
		return Math.random() * (max-min) + min;}
	//gives a random location to the Gem Sprite
	loadLoc(){	
		this.xy[0] = giveRandom(0, window.innerWidth - this.hw[0]);
		this.xy[1] = giveRandom(0, window.innerHeight - this.hw[1]);	
		console.log("Coordix: " + this.xy[0], "Coordiy: " + this.xy[1]);
	}
	
	//makeHarder shrinks the size of the Gem Sprite while makeEasier increases
	makeHarder(){	
		if(this.hw[0] > 10){
		this.hw[0] = this.hw[0] -10;
		this.hw[1] = this.hw[1] -10;
		}
		else if(this.hw[0] == 10){
		this.hw[0] = 5;
		this.hw[1] = 5;
		}
		else if(this.hw[0] == 5){
		this.hw[0] = 3;
		this.hw[1] = 3;
		}
		else if(this.hw[0] == 3){
		this.hw[0] = 1;
		this.hw[1] = 1;
		}
	}
	makeEasier(){
		if(this.hw[0] == 1){
		this.hw[0] = 3;
		this.hw[1] = 3;
		}
		else if(this.hw[0] == 3){
		this.hw[0] = 5;
		this.hw[1] = 5;
		}
		else if(this.hw[0] == 5){
		this.hw[0] = 10;
		this.hw[1] = 10;
		}
		else if(this.hw[0] >= 10 && this.hw[0] < 100){
		this.hw[0] = this.hw[0] + 10;
		this.hw[1] = this.hw[1] + 10;
		}
		else if(this.hw[0] == 100){
		this.hw[0] = this.hw[0];
		this.hw[1] = this.hw[1];
		}
	}
	
	drawRanGem(){
	
		
	}

	drawBlueGem(){
	
		

//var gemImg0 = new Image();
//gemImg0.src = "img/blue0.png"//gems[blue][img]["0"]
//var gemImg1 = new Image();
//gemImg1.src = "img/blue1.png"//gems[blue][img]["1"]
//var gemImg2 = new Image();
//gemImg2.src = "img/blue2.png"//gems[blue][img]["2"]
//var gemImg3 = new Image();
//gemImg3.src = "img/blue3.png"//gems[blue][img]["3"]
//var gemImg4 = new Image();
//gemImg4.src = "img/blue4.png"//gems[blue][img]["4"]
//var gemImg5 = new Image();
//gemImg5.src = "img/blue5.png"//gems[blue][img]["5"]
//var gemImg6 = new Image();
//gemImg6.src = "img/blue6.png"//gems[blue][img]["6"]
//var gemImg7 = new Image();
//gemImg7.src = "img/blue7.png"//gems[blue][img]["7"]
		
		
		
	
//this.images = [gemImg0, gemImg1, gemImg2, gemImg3, gemImg4, gemImg5, gemImg6, gemImg7]	
		
		//context.drawImage(this.images[img_idx], this.xy[0], this.xy[1], this.hw[0], this.hw[1]);
		
//		if(img_idx > 7){
//			img_idx = 0;
//		}
		
//		this.img_idx++;
		
	}
}

