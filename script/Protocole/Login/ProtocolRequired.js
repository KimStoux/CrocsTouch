import VariableGlobal from "../../../global/RequestHappi";

export default function ProtocolRequired(){
    HandlerProtocolRequired.requiredVersion = VariableGlobal.dataPacket['requiredVersion'];
    HandlerProtocolRequired.currentVersion = VariableGlobal.dataPacket['currentVersion'];

}
const HandlerProtocolRequired = {
    requiredVersion: "",
    currentVersion: "",
}

