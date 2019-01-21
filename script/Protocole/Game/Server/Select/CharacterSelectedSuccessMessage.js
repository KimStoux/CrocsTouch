import VariableGlobal from "../../../../../global/RequestHappi";

export default function CharacterSelectedSuccessMessage(){
    VariableGlobal.namePacket = "kpiStartSession";

    var handlerkpiStartSession = {
        accountSessionId: VariableGlobal.login,
        isSubscriber: false,
    }

    return handlerkpiStartSession;
}