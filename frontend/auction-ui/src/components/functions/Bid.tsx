import { useContractWrite, usePrepareContractWrite } from "wagmi"
//import { contractAddress, contractAbi } from "../../../constants"
import { parseEther } from "viem"

function Bid() {
	const protocolAddress = 0x1 //contractAddress
    const contractAbi = 123
	const amount = parseEther("1000")

	const { config: depositConfig, error: depositError } = usePrepareContractWrite({
		address: protocolAddress as `0x${string}`,
		abi: contractAbi,
		functionName: "deposit",
		args: [amount.toString()],
	})
	const { write: deposit } = useContractWrite(depositConfig)

	depositError && console.log(depositError)

	return (
		<>
        <input className='bg-white rounded-lg text-center' type="text" placeholder='Enter Amount in ETH' />
			<button disabled={!deposit} onClick={() => deposit?.()}>
                <div className="px-3 py-1 mx-4 bg-black rounded-lg font-3xl text-white hover:bg-slate-500">
                    Place a Bid
                </div>
			</button>
		</>
	)
}

export default Bid
