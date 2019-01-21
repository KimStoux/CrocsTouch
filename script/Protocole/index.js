import HelloConnectMessage from "./Login/HelloConnectMessage";
import ProtocolRequired from "./Login/ProtocolRequired";
import ServersListMessage from "./Login/Server/ServersListMessage";
import SelectedServerDataMessage from "./Login/Server/SelectedServerDataMessage";
import HelloGameMessage from "./Game/Server/HelloGameMessage";
import TrustStatusMessage from "./Autre/TrustStatusMessage";
import CharactersListMessage from "./Game/Server/Select/CharactersListMessage";
import IdentificationSuccessMessage from "./Login/IdentificationSuccessMessage";
import CharacterSelectedSuccessMessage from "./Game/Server/Select/CharacterSelectedSuccessMessage";
import moneyGoultinesAmountRequest from "./Autre/moneyGoultinesAmountRequest";
import QuestListRequestMessage from "./Game/Quests/QuestListRequestMessage";
import FriendsGetListMessage from "./Game/Friends/FriendsGetListMessage";
import IgnoredGetListMessage from "./Game/Friends/IgnoredGetListMessage";
import SpouseGetInformationsMessage from "./Game/Spouse/SpouseGetInformationsMessage";
import bakSoftToHardCurrentRateRequest from "./Autre/bakSoftToHardCurrentRateRequest";
import bakHardToSoftCurrentRateRequest from "./Autre/bakHardToSoftCurrentRateRequest";
import restoreMysteryBox from "./Autre/restoreMysteryBox";
import ClientKeyMessage from "./Autre/ClientKeyMessage";
import SequenceNumberMessage from "./Autre/SequenceNumberMessage";
import GameContextCreateRequestMessage from "./Autre/GameContextCreateRequestMessage";
import OfflineOptionsUpdateRequestMessage from "./Autre/OfflineOptionsUpdateRequestMessage";
import CurrentMapMessage from "./Game/Map/CurrentMapMessage";
import ExchangeRequestedTradeMessage from "./Game/Exchange/ExchangeRequestedTradeMessage";

export default {
    HelloConnectMessage,
    ProtocolRequired,
    ServersListMessage,
    SelectedServerDataMessage,
    HelloGameMessage,
    TrustStatusMessage,
    CharactersListMessage,
    IdentificationSuccessMessage,
    CharacterSelectedSuccessMessage,
    moneyGoultinesAmountRequest,
    QuestListRequestMessage,
    FriendsGetListMessage,
    IgnoredGetListMessage,
    SpouseGetInformationsMessage,
    bakSoftToHardCurrentRateRequest,
    bakHardToSoftCurrentRateRequest,
    restoreMysteryBox,
    ClientKeyMessage,
    SequenceNumberMessage,
    GameContextCreateRequestMessage,
    OfflineOptionsUpdateRequestMessage,
    CurrentMapMessage,
    ExchangeRequestedTradeMessage,
}