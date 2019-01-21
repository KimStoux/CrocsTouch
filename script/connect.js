import VariableGlobal from "../global/RequestHappi";
import Connect from "./socket/socket";

window.axios = require('./Librairie/axios');

export default function HappiKey(){
    axios.post(VariableGlobal.UrlApiKey,
    "login=&password=$&long_life_token=false")
    .then(function (response){
        VariableGlobal.ApiKey = response.data["key"];
        GetToken();
        });
}
 function GetToken(){
    console.log(VariableGlobal.ApiKey);
    axios.get(VariableGlobal.UrlToken, {
  headers: {
    'apikey': VariableGlobal.ApiKey,
  },
}).then(function (response){
    VariableGlobal.Token = response.data['token'];
    console.log(VariableGlobal.Token);
    GetSessionId();
    }); 
}

function GetSessionId(){
    axios.get(VariableGlobal.UrlConfig)
        .then(function (response){
            VariableGlobal.SessionId = response.data['sessionId'];
            console.log(VariableGlobal.SessionId);
            Connect();
            });
}