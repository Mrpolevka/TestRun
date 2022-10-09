/*
Programa para adaptar el diseño de caja para
conservacion de la serie de historieras
"El guerrero Aguila". //Hemeroteca Nacional
Diseño: Ana Laura Peniche
Programacion: Arquiaz (RDE) 
*/

// GUI params
var a = 130.00
var b = 180.80
var c = 150.50
var d = 1.30
var corte = '#00eeee'
var suaje = '#ee00ee'

let width = 1200
let height = 1300

// Save function, saves canvas to SVG format
function keyPressed(s){
    if (key === 's'){
      save('Contendor Historietas_00.svg')
    }
  }  


function setup() {
    createCanvas(width,height, SVG);

    // Create the GUI
    sliderRange(0.00, 300.00, 0.10);
    gui = createGui('Parametros:');
    gui.addGlobals('corte','suaje','a','b','c','d');
  
  }
  
  function draw() {
    background(0);
    noFill()
    translate((width/2)-(c/2),(height/2)+(b/2))
    angleMode(DEGREES)
    rotate(0)

    // All vertex
    p1 = createVector(0,0)
    p2 = p5.Vector.add(p1,[0,-b])
    p3 = p5.Vector.add(p2,[c,0])
    p4 = p5.Vector.add(p3,[0,b])
    p55 = p5.Vector.add(p4,[0,a])
    p6 = p5.Vector.add(p55,[-c,0])
    p7 = p5.Vector.add(p6,[(c/3),0])
    p8 = p5.Vector.add(p7,[0,(-3*d)])
    p9 = p5.Vector.add(p8,[(c/3),0])
    p10 = p5.Vector.add(p9,[0,(3*d)])
    p11 = p5.Vector.add(p55,[0,(a/2)])
    p12 = p5.Vector.add(p11,[-c,0])
    p13 = p5.Vector.add(p11,[0,(3*d)])
    p14 = p5.Vector.add(p13,[-c,0])
    p15 = p5.Vector.add(p13,[(-2*d),(2*d)])
    p16 = p5.Vector.add(p15,[0,((a/2)-(2*d))])
    p17 = p5.Vector.add(p16,[-(((c-(4*d))-(c/3))/2),0])
    p18 = p5.Vector.add(p17,[0,(3*d)])
    p19 = p5.Vector.add(p18,[-(c/3),0])
    p20 = p5.Vector.add(p19,[0,-(3*d)])
    p21 = p5.Vector.add(p20,[-(((c-(4*d))-(c/3))/2),0])
    p22 = p5.Vector.add(p21,[0,-((a/2)-(2*d))])
    p2a = p5.Vector.add(p2,[-d,0])
    p23 = p5.Vector.add(p2a,[0,-(a+(3*d))])
    p24 = p5.Vector.add(p23,[(c+(2*d)),0])
    p3a = p5.Vector.add(p3,[d,0])
    p25 = p5.Vector.add(p23,[0,-((a+(3*d)-(a/5))/2)])
    p26 = p5.Vector.add(p25,[d,0])
    p27 = p5.Vector.add(p26,[0,-(a/5)])
    p28 = p5.Vector.add(p27,[-d,0])
    p29 = p5.Vector.add(p28,[0,-((a+(3*d)-(a/5))/2)])
    p30 = p5.Vector.add(p29,[(c+(2*d)),0])
    p31 = p5.Vector.add(p1,[-a,0])
    p32 = p5.Vector.add(p31,[0,-(a/2)])
    p33 = p5.Vector.add(p2a,[-((a/2)+d),0])
    p34 = p5.Vector.add(p31,[-(c/2),0])
    p35 = p5.Vector.add(p34,[0,-(a/2)])
    p6a = p5.Vector.add(p1,[0,c])
    p36 = p5.Vector.add(p6a,[-(((a-(3*d))-(a/3))/2),0])
    p37 = p5.Vector.add(p36,[0,(2*d)])
    p38 = p5.Vector.add(p37,[-(a/3),0])
    p39 = p5.Vector.add(p38,[0,-(2*d)])
    p40 = p5.Vector.add(p39,[-(((a-(3*d))-(a/3))/2),0])
    p31a = p5.Vector.add(p40,[0,-(c-(3*d))])
    p42 = p5.Vector.add(p23,[-(a+(2*d)),0])
    p41 = p5.Vector.add(p42,[0,(a/2)])
    p43 = p5.Vector.add(p42,[((a/5)*2),0])
    p44 = p5.Vector.add(p43,[0,-d])
    p45 = p5.Vector.add(p44,[(a/5),0])
    p46 = p5.Vector.add(p45,[0,d])
    p47 = p5.Vector.add(p42,[0,-(c/3)])
    p48 = p5.Vector.add(p47,[(a+(2*d)),0])
    p49 = p5.Vector.add(p3a,[((a/2)+d),0])
    p51 = p5.Vector.add(p4,[a,0])
    p50 = p5.Vector.add(p51,[0,-(a/2)])
    p52 = p5.Vector.add(p4,[(a/3),0])
    p53 = p5.Vector.add(p52,[0,-(2*d)])
    p54 = p5.Vector.add(p53,[(a/3),0])
    p55a = p5.Vector.add(p54,[0,(2*d)])
    p56 = p5.Vector.add(p50,[(c/2),0])
    p57 = p5.Vector.add(p56,[0,(a/2)])
    p58 = p5.Vector.add(p51,[-(3*d),(3*d)])
    p59 = p5.Vector.add(p58,[0,((c/2)-(3*d))])
    p60 = p5.Vector.add(p59,[-(a-(3*d)),0])
    p61 = p5.Vector.add(p24,[(a+(2*d)),0])
    p62 = p5.Vector.add(p61,[0,(a/2)])
    p63 = p5.Vector.add(p30,[0,-((c+(2*d))-(a+(3*d)))])
    p64 = p5.Vector.add(p63,[((a+(2*d)-(a/5))/2),0])
    p65 = p5.Vector.add(p64,[(a/5),0])
    p66 = p5.Vector.add(p65,[((a+(2*d)-(a/5))/2),0])
    p64a = p5.Vector.add(p63,[((a+(2*d))/2),0])

    // Trazo Exterior y cortes --> CORTES
    stroke(corte)
    beginShape()
    vertex(p34.x, p34.y)
    vertex(p35.x, p35.y)
    vertex(p32.x, p32.y)
    vertex(p33.x, p33.y)
    vertex(p41.x, p41.y)
    vertex(p42.x, p42.y)
    vertex(p47.x, p47.y)
    vertex(p48.x, p48.y)
    vertex(p25.x, p25.y)
    vertex(p26.x, p26.y)
    vertex(p27.x, p27.y)
    vertex(p28.x, p28.y)
    vertex(p29.x, p29.y)
    vertex(p30.x, p30.y)
    vertex(p63.x, p64.y)
    vertex(p64.x, p64.y)
    endShape()
    arc(p64a.x,p64a.y,(a/5),(a/5),180,0,OPEN)
    beginShape()
    vertex(p65.x, p65.y)
    vertex(p66.x, p66.y)
    vertex(p61.x, p61.y)
    vertex(p62.x, p62.y)
    vertex(p49.x, p49.y)
    vertex(p50.x, p50.y)
    vertex(p56.x, p56.y)
    vertex(p57.x, p57.y)
    vertex(p51.x, p51.y)
    vertex(p58.x, p58.y)
    vertex(p59.x, p59.y)
    vertex(p60.x, p60.y)
    vertex(p55.x, p55.y)
    vertex(p11.x, p11.y)
    vertex(p13.x, p13.y)
    vertex(p15.x, p15.y)
    vertex(p16.x, p16.y)
    vertex(p17.x, p17.y)
    vertex(p18.x, p18.y)
    vertex(p19.x, p19.y)
    vertex(p20.x, p20.y)
    vertex(p21.x, p21.y)
    vertex(p22.x, p22.y)
    vertex(p14.x, p14.y)
    vertex(p12.x, p12.y)
    vertex(p6a.x, p6a.y)
    vertex(p36.x, p36.y)
    vertex(p37.x, p37.y)
    vertex(p38.x, p38.y)
    vertex(p39.x, p39.y)
    vertex(p40.x, p40.y)
    vertex(p31a.x, p31a.y)
    vertex(p31.x, p31.y)
    vertex(p34.x, p34.y)
    endShape()
    beginShape()
    vertex(p7.x, p7.y)
    vertex(p8.x, p8.y)
    vertex(p9.x, p9.y)
    vertex(p10.x, p10.y)
    endShape(CLOSE)
    beginShape()
    vertex(p52.x, p52.y)
    vertex(p53.x, p53.y)
    vertex(p54.x, p54.y)
    vertex(p55a.x, p55a.y)
    endShape(CLOSE)
    beginShape()
    vertex(p43.x, p43.y)
    vertex(p44.x, p44.y)
    vertex(p45.x, p45.y)
    vertex(p46.x, p46.y)
    endShape(CLOSE)

    // Trazo Interior Horizontales --> Suaje
    stroke(suaje)
    beginShape()
    vertex(p42.x, p42.y)
    vertex(p23.x, p23.y)
    vertex(p24.x, p24.y)
    vertex(p61.x, p61.y)
    endShape()
    beginShape()
    vertex(p33.x, p33.y)
    vertex(p2a.x, p2a.y)
    vertex(p2.x, p2.y)
    vertex(p3.x, p3.y)
    vertex(p3a.x, p3a.y)
    vertex(p49.x, p49.y)
    endShape()
    beginShape()
    vertex(p31.x, p31.y)
    vertex(p1.x, p1.y)
    vertex(p4.x, p4.y)
    vertex(p51.x, p51.y)
    endShape()
    line(p6.x,p6.y,p55.x,p55.y)
    line(p12.x,p12.y,p11.x,p11.y)
    line(p14.x,p14.y,p13.x,p13.y)

    // Trazo Interior Verticales --> Suaje
    line(p32.x,p32.y,p31.x,p31.y)
    beginShape()
    vertex(p48.x, p48.y)
    vertex(p23.x, p23.y)
    vertex(p2a.x, p2a.y)
    endShape()
    beginShape()
    vertex(p2.x, p2.y)
    vertex(p1.x, p1.y)
    vertex(p6.x, p6.y)
    vertex(p6a.x, p6a.y)
    endShape()
    beginShape()
    vertex(p30.x, p30.y)
    vertex(p24.x, p24.y)
    vertex(p3a.x, p3a.y)
    endShape()
    beginShape()
    vertex(p3.x, p3.y)
    vertex(p4.x, p4.y)
    vertex(p60.x, p60.y)
    endShape()
    line(p50.x,p50.y,p51.x,p51.y)

  }

// dynamically adjust the canvas to the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  