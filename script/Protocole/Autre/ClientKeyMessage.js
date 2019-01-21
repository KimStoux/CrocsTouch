import VariableGlobal from "../../../global/RequestHappi";

export default function ClientKeyMessage(){
    VariableGlobal.namePacket ="ClientKeyMessage";

    var handleClientKeyMessage = {
        key: generateKey(),
    };

    return handleClientKeyMessage;
}

function generateKey() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 21; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  