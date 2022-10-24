const Wifi = require('rpi-wifi-connection');
const wifi = new Wifi();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('/home/pi/raspberrypi/Wi-fi_Config.json', 'utf8'));

wifi.connect({ssid:data.ssid, psk:data.password}).then(() => {
    console.log('Connected to network.');
})
.catch((error) => {
    console.log(error);
});
