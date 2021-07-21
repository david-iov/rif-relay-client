export interface RelayInfoUrl {
    relayUrl: string;
}

export interface RelayRegisteredEventInfo extends RelayInfoUrl {
    relayManager: string;
}

export function isInfoFromEvent(info: RelayInfoUrl): boolean {
    return 'relayManager' in info;
}
