import VariableGlobal from "../../../../global/RequestHappi";

export default function CurrentMapMessage(){
    VariableGlobal.namePacket ="MapInformationsRequestMessage";

    var handleMapInformationsRequestMessage ={
        mapId: VariableGlobal.dataPacket["mapId"],
    };
    return handleMapInformationsRequestMessage;
}