import VariableGlobal from "../../../../global/RequestHappi";

export default function SelectedServerDataMessage(){

    var urlServer = VariableGlobal.dataPacket['_access'];
    VariableGlobal.UrlServer = urlServer.replace(/https/i, 'wss');
    VariableGlobal.ticket = VariableGlobal.dataPacket['ticket'];

}