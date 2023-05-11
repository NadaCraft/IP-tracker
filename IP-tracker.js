function procCmd(cmd){
var cmd = cmd.split(" ");

if(cmd[0] == "track"){
if(!cmd[1]){
clientMessage("Use /track <IP>");
}else{
track(cmd[1]);}}}

function track(ip){try{
var c = new java.net.URL("http://ip-api.com/json/" + ip).openConnection();
c.setRequestMethod('GET');
var res = JSON.parse(new java.util.Scanner(c.getInputStream(), 'UTF-8').useDelimiter('\\A').next());
clientMessage(res.status === "success" ? "IP: " + res.query + "\nCountry: " + res.country + "\nRegion: " + res.regionName + "\nCity: " + res.city : "§cInvalid IP or incorrect");
c.disconnect();
}catch(e){
c.disconnect();
clientMessage('§cAn unexpected error occurred, please try again');}}
