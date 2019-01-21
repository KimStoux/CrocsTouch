import VariableGlobal from "../../../global/RequestHappi";

export default function IdentificationSuccessMessage(){
    VariableGlobal.login = VariableGlobal.dataPacket["login"];
}