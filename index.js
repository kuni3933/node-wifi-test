var Wifi = require('rpi-wifi-connection');
var wifi = new Wifi();
 
wifi.connect({ssid:'my-network', psk:'raspberry'}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
