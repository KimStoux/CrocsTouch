import VariableGlobal from "../../../../global/RequestHappi";

export default function HelloGameMessage(){
    VariableGlobal.namePacket = "AuthenticationTicketMessage";
    var handlerHelloGameMessage ={
        ticket: VariableGlobal.ticket,
        lang: "fr",
    }
    return handlerHelloGameMessage;
}