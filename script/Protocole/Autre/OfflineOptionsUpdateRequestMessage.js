import VariableGlobal from "../../../global/RequestHappi";

export default function OfflineOptionsUpdateRequestMessage(){
    VariableGlobal.namePacket ="OfflineOptionsUpdateRequestMessage";
    var handleOfflineOptionsUpdateRequestMessage = {
        option: "1, 0,PAN + PVN",
    }
    return handleOfflineOptionsUpdateRequestMessage;
}