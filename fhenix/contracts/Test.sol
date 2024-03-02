// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import {FHE, euint8, inEuint8} from "@fhenixprotocol/contracts/FHE.sol";

contract Test {
    
    euint8 _output;
    function setOutput(inEuint8 calldata _encryptedNumber) public  {
        // convert inEuint8 type structure to euint8 
        _output = FHE.asEuint8(_encryptedNumber);
    }
    function _add(euint8 rhs) internal {
        // Perform FHE add on _output
        _output = _output + rhs;
    }
    function addPlaintext(uint8 rhs) public {
        // Note that this transaction will actually reveal some information about _output.
        // Sending a plaintext number and encrypting it inside a transaction can be seen by everyone
        // The following operation will encrypt "rhs" in-place (determenistic encryption)
        _add(FHE.asEuint8(rhs));
    }
    function addPreEncrypted(inEuint8 calldata _encryptedNumber) public  {
        // convert inEuint8 type structure to euint8 
        _add(FHE.asEuint8(_encryptedNumber));
    }
    function reencryptOutput() public {
        // The plaintext value of _output will remain the same but the encrypted representation will be changed
        // FHE is a non-deterministic encryption so encrypting the same value twice won't result with the same output
        _add(FHE.asEuint8(0));
    }
    function getOutput() public view returns (uint8) {
        // Decrypt reveals the secret but it is safe to be used here as part of a QUERY (view function)
        return FHE.decrypt(_output);
    }
    function getSealedOutput(bytes32 publicKey) public view  returns (bytes memory) {
        // Seal the output for a specific publicKey
        return FHE.sealoutput(_output, publicKey);
    }
}