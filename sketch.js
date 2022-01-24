function setup() {
	createCanvas(window.innerWidth,window.innerHeight); // make an HTML canvas element width x height pixels
}

function draw() {
	var background_color;
	var h_color;
	var m_color;
	var s_color;
	var start_color;
	var mid_color;
	var end_color;

	var y_mid = window.innerHeight/2;
	var x_mid = window.innerWidth/2 - 136;

	var h_font_color;
	var m_font_color;
	var s_font_color;

	night = ((hour()-6)/12 > 0);
	if (night){
		background_color = 0;
		h_color = color(65, 37, 52);
		m_color = color(45, 70, 80);
		s_color = color(202, 44, 51);
		start_color = 50;
		mid_color = 70;
		end_color = 90;
		h_font_color = 100;
		m_font_color = 180;
		s_font_color = 255;
	} else {
		background_color = 255;
		h_color = color(145, 117, 122);
		m_color = color(125, 150, 160);
		s_color = color(330, 180, 185);
		start_color = 170;
		mid_color = 200;
		end_color = 230;
		h_font_color = 180;
		m_font_color = 100;
		s_font_color = 0;
	}

	background(background_color);
	textSize(32);
	textFont('Helvetica');
	fill(h_font_color);
	text(hour(), 10, 30);
	fill(m_font_color);
	text(minute(), 10, 60);
	fill(s_font_color);
	text(second(), 10, 90);



	for (let i=0; i<12; i++){
		x = x_mid + 23 * i;
		y = y_mid - 23;
		if (i<4){
			fill(start_color);
			noStroke();
			rect(x, y, 20, 20);
		} else if (i>=4 && i<=7){
			fill(mid_color);
			noStroke();
			rect(x, y, 20, 20);
		} else {
			fill(end_color);
			noStroke();
			rect(x, y, 20, 20);
		}
		if (i < hour()%12){
			fill(h_color);
			noStroke();
			rect(x, y, 20, 20);
		}
	}

	for (let i=0; i<12; i++){
		x = x_mid + 23 * i;
		y = y_mid;
		if (i<4){
			fill(start_color);
			noStroke();
			rect(x, y, 20, 20);
		} else if (i>=4 && i<=7){
			fill(mid_color);
			noStroke();
			rect(x, y, 20, 20);
		} else {
			fill(end_color);
			noStroke();
			rect(x, y, 20, 20);
		}
		if (i < minute()/5){
			fill(m_color);
			noStroke();
			rect(x, y, 20, 20);
		}
	}

	for (let i=0; i<12; i++){
		x = x_mid + 23 * i;
		y = y_mid + 23;

		if (i<4){
			fill(start_color);
			noStroke();
			rect(x, y, 20, 20);
		} else if (i>=4 && i<=7){
			fill(mid_color);
			noStroke();
			rect(x, y, 20, 20);
		} else {
			fill(end_color);
			noStroke();
			rect(x, y, 20, 20);
		}

		if (i < second()/5){
			fill(s_color);
			noStroke();
			rect(x, y, 20, 20);
		}
	}

	// Every time the minute changes (not more frequently), print the value of minute() to the JavaScript console.
	if (second() % 5 == 0){
		console.log(`${hour()}:${minute()}:${second()}`);
	}
}

