

const BidNonFunctional = () => {

    return (
        <>
        <input
                className='py-[10px] bg-white text-black text-lg font-bold rounded-lg text-center'
                type="text"
                placeholder='Enter Auction ID'
               
             
            />

            <input
                className='py-[10px] bg-white text-black text-lg font-bold rounded-lg text-center'
                type="text"
                placeholder='Enter Amount in ETH'
          
            />
            
            <a
               // Updated condition to check for empty string and parse amount as float for comparison
                
                className='w-[210px] h-[50px] py-[10px] px-[17px] text-2xl font-bold inline-flex justify-center items-center gap-[10px] text-white rounded-[10px] bg-[#527BFF] hover:bg-[#3a3f6d80] hover:text-[#8BA2C8] hover:cursor-pointer'
            >
                Place a Bid
            </a>
        </>
    );
}

export default BidNonFunctional;
