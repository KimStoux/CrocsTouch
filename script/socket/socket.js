import Primus from "../Librairie/primus";
import VariableGlobal from "../../global/RequestHappi";
import protocole from "../Protocole";

export default function Connect(){

    var primus = Primus.connect('wss://proxyconnection.touch.dofus.com/?STICKER=' + VariableGlobal.SessionId, {transports: 'websocket',transformer: 'engine.io'});
    primus.open();
    console.log(primus.socket.hostname);
    
    primus.on('open', function open() {
        console.log("Function OPEN");
        if(VariableGlobal.GameOrLogin == false){
            console.log('Connect exist');
            primus.write({call: 'connecting', data : { language: 'fr', server: 'login', client: 'ios',appVersion: '1.16.3', buildVersion: '1.37.7'}});
        }
        else{
           
        }
    });
      
    primus.on('data', function message(data) {
        console.log('Receveid data', data);
            VariableGlobal.dataPacket = data;
            try{
                var sending = protocole[data["_messageType"]]();
            }
            catch{
                console.log(data["_messageType"] + " N'existe pas.");
            }
            if(data["_messageType"] != "serverDisconnecting"){
                            if(sending){
                if(data["_messageType"] == "HelloConnectMessage"){
                    SendFunction(sending);
                }
                else if(data["_messageType"] == "CharacterSelectedSuccessMessage"){
                    var packetMutli = ["QuestListRequestMessage",
                    "FriendsGetListMessage", "IgnoredGetListMessage","SpouseGetInformationsMessage",
                      "OfflineOptionsUpdateRequestMessage", "ClientKeyMessage","GameContextCreateRequestMessage", "SequenceNumberMessage"];
                
                      packetMutli.forEach(function(packet){
                        var send = protocole[packet]();
                        SendToData(send);
                      });
                }
                else{
                    SendToData(sending);
                }
            }
            }
            else{
                console.log('test');
                primus.end();
                primus.socket.hostname = "oshimogameproxy.touch.dofus.com";
                 primus.open();
                 var server = {
                    address: "172.31.17.136",
                    port: 5555,
                    id: 403,
                };
              primus.write({call: "connecting", data :{appVersion:'1.16.3',buildVersion:'1.37.7',client: 'ios',language: 'fr',server: server}});
            }
      });

      primus.on('end', function() {
            console.log('SWITCH TO GAME');
            VariableGlobal.GameOrLogin = true;
        console.log("test");
      });

      function SendFunction(dataM){
          console.log(dataM);
            primus.write({call: VariableGlobal.namePacket, data : dataM});
      }

      function SendToData(dataM){
          console.log(dataM);
          if(dataM != "noData"){
            console.log(VariableGlobal.namePacket);
            primus.write({call : "sendMessage", data:{type: VariableGlobal.namePacket, data: dataM}});
          }
          else{
              console.log(VariableGlobal.namePacket);
            primus.write({call : "sendMessage", data:{type: VariableGlobal.namePacket}})
          }
    }
}