
export interface TlsClientHello {
    tlsVersion: string; // e.g., 'TLSv1.2'
    cipherSuites: string[]; // e.g., ['TLS_AES_128_GCM_SHA256', 'TLS_AES_256_GCM_SHA384']
    random: ArrayBuffer; // A Buffer containing the random bytes
    // compressionMethods: number[]; // e.g., [0] (where 0 represents 'null' compression)
    extensions: {
        [key: string]: any; // Extensions can vary, so a generic object is used
    };
}

export interface TlsServerHello {
    tlsVersion: string; // e.g., 'TLSv1.2' or 'TLSv1.3'
    cipherSuite: string; // e.g., 'TLS_AES_128_GCM_SHA256'
    random: ArrayBuffer; // A Buffer containing the random bytes
    extensions: {
        [key: string]: any; // Extensions can vary, so a generic object is used
    };
}

export interface TlsServerCertificate {
    version: string; // e.g., 'v3'
    serialNumber: string; // Serial number of the certificate
    signature: {
        algorithm: string; // e.g., 'SHA256withRSA'
        signature: Buffer; // Signature of the certificate
    };
    issuer: {
        countryName: string;
        stateOrProvinceName: string;
        localityName: string;
        organizationName: string;
        organizationalUnitName: string;
        commonName: string;
    };
    validity: {
        notBefore: Date; // Start date of the certificate's validity
        notAfter: Date; // End date of the certificate's validity
    };
    subject: {
        countryName: string;
        stateOrProvinceName: string;
        localityName: string;
        organizationName: string;
        organizationalUnitName: string;
        commonName: string;
    };
    subjectPublicKeyInfo: {
        algorithm: string; // e.g., 'RSA'
        publicKey: Buffer; // Public key in PEM format
    };
    extensions: {
        [key: string]: any; // Extensions can vary, so a generic object is used
    };
}

export type TlsServerHelloDone = {
    messageType: 'serverHelloDone';
};

export interface TlsClientKeyExchange {
    preMasterSecret: Buffer; // The pre-master secret generated by the client
}

export type TlsChangeCipherSpec = {
    messageType: 'changeCipherSpec';
};

export interface TlsFinished {
    messageType: 'finished';
    verifyData: Buffer; // The encrypted hash of the handshake messages
}


