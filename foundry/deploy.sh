#!/bin/bash

# Load environment variables from .env file
if [ -f .env.local ]; then
    export $(cat .env.local | sed 's/#.*//g' | xargs)
else 
    echo ".env file not found"
    exit 1
fi

# Compile the contracts
echo "Compiling contracts..."
forge build

# Check if the build was successful
if [ $? -eq 0 ]; then
    echo "Build successful."
else
    echo "Build failed. Exiting..."
    exit 1
fi

# Deploy DenverAuctionNFT
echo "Deploying DenverAuctionNFT..."
# forge script ./script/DeployDenverAuctionNFT --broadcast --rpc-url $RPC_URL --private-key $PRIVATE_KEY -vvv
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/DenverAuctionNFT.sol:DenverAuctionNFT --constructor-args $PUBLIC_ADDRESS

# Deploy EnglishAuction
echo "Deploying EnglishAuction..."
# forge script ./script/DeployEnglishAuction --broadcast --rpc-url $RPC_URL --private-key $PRIVATE_KEY -vvv
forge create --rpc-url $RPC_URL --private-key $PRIVATE_KEY src/EnglishAuction.sol:EnglishAuction

echo "Deployment completed."
