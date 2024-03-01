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
        <input className='py-[10px] bg-white rounded-lg text-center' type="text" placeholder='Enter Amount in ETH' />
			<button disabled={!deposit} onClick={() => deposit?.()} className='w-[210px] h-[50px] py-[10px] px-[17px] text-2xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer' >
                    Place a Bid
			</button>
		</>
	)
}

export default Bid
