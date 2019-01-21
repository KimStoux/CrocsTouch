import VariableGlobal from "../../../global/RequestHappi";

export default function SequenceNumberMessage(){

    VariableGlobal.namePacket = "SequenceNumberMessage";
    var handleSequenceNumberMessage = {
        number: "1",
    }
    return handleSequenceNumberMessage;
}