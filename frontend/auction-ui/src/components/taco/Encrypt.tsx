import { ThresholdMessageKit } from '@nucypher/taco';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { DEFAULT_MESSAGE } from './config';
import RenderIfHtml from './RenderIfHtml';

interface Props {
  enabled: boolean;
  encryptedMessage?: ThresholdMessageKit;
  encrypt: (value: string) => void;
}

export const Encrypt = ({ encrypt, encryptedMessage, enabled }: Props) => {
  if (!enabled) {
    return <></>;
  }
  
  const onClick = () => encrypt(DEFAULT_MESSAGE);

  const EncryptedMessageContent = () => {
    if (!encryptedMessage) {
      return <></>;
    }

    const encodedCiphertext = Buffer.from(encryptedMessage.toBytes()).toString(
      'base64',
    );

    return (
      <>
        <div>
          <h3>Encrypted ciphertext:</h3>
          <pre className="ciphertext">{encodedCiphertext}</pre>
          <CopyToClipboard text={encodedCiphertext}>
            <button>Copy to clipboard</button>
          </CopyToClipboard>
          <RenderIfHtml inputText={encodedCiphertext} />
        </div>
      </>
    );
  };

  return (
    <div>
      <h2>Step 2 - Set conditions and Encrypt a message</h2>
      <button onClick={onClick}>Encrypt</button>
      {EncryptedMessageContent()}
    </div>
  );
};
