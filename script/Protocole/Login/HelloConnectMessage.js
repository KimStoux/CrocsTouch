import VariableGlobal from "../../../global/RequestHappi";

export default function HelloConnectMessage(){
    var HandlerHelloConnectMessage = {
        username: VariableGlobal.login,
        token: VariableGlobal.Token,
        salt: "",
        key: "",
        version: VariableGlobal.Version,
    };
    HandlerHelloConnectMessage.salt = VariableGlobal.dataPacket['salt'];
    HandlerHelloConnectMessage.key = VariableGlobal.dataPacket['key'];
    VariableGlobal.namePacket = "login";
    return HandlerHelloConnectMessage;
}