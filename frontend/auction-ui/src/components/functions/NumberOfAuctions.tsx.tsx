import { useContractRead } from 'wagmi'
import EnglishAuctionABI from '../../../constants/abi/EnglishAuction';
import { EnglishAuctionContract } from '../../../constants/contract/EnglishAuction';

function NumberOfAuctions() {
  const { data, isError, isLoading } = useContractRead({
    address: EnglishAuctionContract().sepolia as `0x{string}`,
    abi: EnglishAuctionABI,
    functionName: 'getHunger',
  })

  return (
    <>
    {
  data?: Result
  error?: Error
  isIdle: boolean
  isLoading: boolean
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  isFetched: boolean
  isFetchedAfterMount: boolean
  isRefetching: boolean
  refetch: (options: {
    throwOnError: boolean
    cancelRefetch: boolean
  }) => Promise<Result>
  status: 'idle' | 'error' | 'loading' | 'success'
}

    </>
  )
}
