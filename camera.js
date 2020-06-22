var wpi=require('node-wiring-pi')
var exec = require('child_process').exec;
wpi.setup('wpi')
var pin=2;
var result=0;
// var i = new Date().getSeconds()
// console.log(i)
wpi.pinMode(pin, wpi.INPUT)
setInterval(()=>{
    result = wpi.digitalRead(pin);
    var date = new Date()
    if(result){
        console.log('Take a picture')
        exec('raspistill -o /home/pi/apps/mysonic1/'+date.getMinutes()+'_'+date.getSeconds()+'.jpg')
    }
},500)