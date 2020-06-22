var wpi = require('node-wiring-pi')
wpi.setup('wpi')
var sleep = require('sleep')
var microtime = require('microtime')
var trig =4;
var echo =5;
var pin = 0;
var swit = 2;

wpi.pinMode(swit,wpi.INPUT);
wpi.pinMode(trig,wpi.OUTPUT);
wpi.pinMode(echo, wpi.INPUT);
wpi.pinMode(pin, wpi.OUTPUT);
setInterval(()=>{
    //반복할 행동
    wpi.digitalWrite(trig, wpi.LOW);
    sleep.usleep(2);
    wpi.digitalWrite(trig, wpi.HIGH)
    sleep.usleep(20);
    wpi.digitalWrite(trig, wpi.LOW)
    
    var counter1 = 0;
    var counter2 = 0;
    while(wpi.digitalRead(echo)==wpi.LOW){
        // if(counter1++ >1000){break;}
    }
    var start_time = microtime.now();
    while(wpi.digitalRead(echo)==wpi.HIGH){
        // if(counter1++ >1000){break;}
    }
    var time = microtime.now() - start_time
    console.log('거리는:'+Math.round(time/58) + 'cm입니다.')

    var cm = Math.round(time/58)

    if(cm<=10){
        wpi.digitalWrite(pin, 1)
    } else{
        wpi.digitalWrite(pin, 0)
    }
}, 1000)
//트리거로 펄스를 생성