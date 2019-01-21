import VariableGlobal from "../../../../global/RequestHappi";

export default function ServersListMessage(){
    var serverList = VariableGlobal.dataPacket["servers"];
    var HandlerSelectServer = {
        serverId: 403,
    };
    VariableGlobal.namePacket = "ServerSelectionMessage";
    
    return HandlerSelectServer;
}