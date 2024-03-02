import {
  conditions,
  decrypt,
  domains,
  encrypt,
  getPorterUri,
  initialize,
  ThresholdMessageKit,
} from '@nucypher/taco';
import { Mumbai, Sepolia, useEthers } from '@usedapp/core';
import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import { useProvider, useSigner, useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi';
import { Decrypt } from './Decrypt';
import { Encrypt } from './Encrypt';
import { NFTConditionBuilder } from './NFTConditionBuilder';
import { Spinner } from './Spinner';
import { DEFAULT_DOMAIN, DEFAULT_RITUAL_ID } from './config';

export default function Taco() {
  const provider = useProvider();
  const { data: signer } = useSigner();
  const { isConnected } = useAccount();
  const { disconnect: deactivate } = useDisconnect();

  const [loading, setLoading] = useState(false);
  const [condition, setCondition] = useState<conditions.condition.Condition>();
  const [encryptedMessage, setEncryptedMessage] =
    useState<ThresholdMessageKit>();
  const [decryptedMessage, setDecryptedMessage] = useState<string>();
  const [decryptionErrors, setDecryptionErrors] = useState<string[]>([]);

  useEffect(() => {
    initialize();
  }, []);

  const encryptMessage = async (message: string) => {
    if (!condition || !signer || !provider) {
      return;
    }
    setLoading(true);

    const encryptedMessage = await encrypt(
      provider,
      DEFAULT_DOMAIN,
      message,
      condition,
      DEFAULT_RITUAL_ID,
      signer,
    );

    setEncryptedMessage(encryptedMessage);
    setLoading(false);
  };

  const decryptMessage = async (encryptedMessage: ThresholdMessageKit) => {
    if (!condition || !signer || !provider) {
      return;
    }
    setLoading(true);
    setDecryptedMessage('');
    setDecryptionErrors([]);

    const decryptedMessage = await decrypt(
      provider,
      DEFAULT_DOMAIN,
      encryptedMessage,
      getPorterUri(DEFAULT_DOMAIN),
      signer,
    );

    setDecryptedMessage(new TextDecoder().decode(decryptedMessage));
    setLoading(false);
  };

  if (!isConnected) {
    return (
      <div>
        <h2>Web3 Provider</h2>
      </div>
    );
  }

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div>
      <NFTConditionBuilder
        enabled={true}
        condition={condition}
        setConditions={setCondition}
      />

      <Encrypt
        enabled={!!condition}
        encrypt={encryptMessage}
        encryptedMessage={encryptedMessage!}
      />

      <Decrypt
        enabled={!!encryptedMessage}
        decrypt={decryptMessage}
        decryptedMessage={decryptedMessage}
        decryptionErrors={decryptionErrors}
      />
    </div>
  );
}
