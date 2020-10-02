let time = 0;
let wave = [];
function fourier(num){
    let x = 0;
    let y = 0;
    
    for(let i = 0;i < num;i++)
{
     
        let prevx = x, prevy = y;
        let n =  2*i+1 ;
        let a = 200 / (n * PI);

        x += a *( cos(n/10 * time) );
        y += a *( sin(n/10 * time) );

    
        stroke(255, 0, 320);
        noFill();
        ellipse(prevx,prevy,a*2);


        stroke(255, 100, 20);
        line(prevx,prevy,x,y);
        
        strokeWeight(4);
        point(x,y);
        strokeWeight(1);
    }
    
    wave.unshift(y);

    translate(150,0);
    line(x-150,y,0,wave[0]);
    beginShape();
    noFill();
    
    for(let i = 0;i < wave.length;i++)
    {
        if(num == 5)
        num = 0;
        if((wave.length-i) % 5 == num)
         vertex(i/10,wave[i]);
    }
    endShape();
    translate(-150,0);
}

function setup()
{
    createCanvas(1200,200);

}

function draw()
{
    background(100);
    translate(150,100);
    
    fourier(5);
    translate(0,200);
    
    time += 0.1;
}