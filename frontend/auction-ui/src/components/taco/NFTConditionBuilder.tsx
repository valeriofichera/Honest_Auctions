import { conditions } from "@nucypher/taco";
import { Mumbai } from "@usedapp/core";
import { DEFAULT_NFT_CONTRACT } from "./config";

interface Props {
  condition?: conditions.condition.Condition | undefined;
  setConditions: (value: conditions.condition.Condition) => void;
}

export const NFTConditionBuilder = ({
  condition,
  setConditions,
}: Props) => {
  const contractAddress = DEFAULT_NFT_CONTRACT;
  const tokenId = "1";
  const chain = Mumbai.chainId;

  const makeCondition = (): conditions.condition.Condition => {
    if (tokenId) {
      return new conditions.base.contract.ContractCondition({
        contractAddress,
        chain,
        standardContractType: "ERC721",
        method: "ownerOf",
        parameters: [parseInt(tokenId, 10)],
        returnValueTest: {
          comparator: "==",
          value: ":userAddress",
        },
      });
    }
    return new conditions.base.contract.ContractCondition({
      contractAddress,
      chain,
      standardContractType: "ERC721",
      method: "balanceOf",
      parameters: [":userAddress"],
      returnValueTest: {
        comparator: ">",
        value: 0,
      },
    });
  };

  const onCreateCondition = (e: any) => {
    e.preventDefault();
    setConditions(makeCondition());
  };

  const prettyPrint = (obj: object | string) => {
    if (typeof obj === "string") {
      obj = JSON.parse(obj);
    }
    return JSON.stringify(obj, null, 2);
  };

  return (
    <>
      <h2>Step 1 - Create A Conditioned Access Policy</h2>
      <div>
        <button onClick={onCreateCondition}>Create Conditions</button>
        {condition && (
          <div>
            <h3>Condition JSON:</h3>
            <textarea
              readOnly={true}
              disabled={true}
              rows={15}
              value={prettyPrint(condition?.toObj() ?? {})}
            />
          </div>
        )}
      </div>
    </>
  );
};
