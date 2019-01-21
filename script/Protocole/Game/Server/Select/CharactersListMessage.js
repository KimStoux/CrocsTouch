import VariableGlobal from "../../../../../global/RequestHappi";

export default function CharactersListMessage(){
    var listPerso = VariableGlobal.dataPacket["characters"];
    var handlerCharactersListMessage = {
        id: listPerso["0"]["id"],
    };
    VariableGlobal.namePacket = "CharacterSelectionMessage";
    return handlerCharactersListMessage;
}