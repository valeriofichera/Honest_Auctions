#!/bin/bash

# Set Environment Variables (replace with your own values)
export RPC_URL="your_rpc_url"
export PRIVATE_KEY="your_private_key"

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
forge script script/DeployDenverAuctionNFT.s.sol --broadcast --rpc-url $RPC_URL --private-key $PRIVATE_KEY -vvv

# Deploy EnglishAuction
echo "Deploying EnglishAuction..."
forge script script/DeployEnglishAuction.s.sol --broadcast --rpc-url $RPC_URL --private-key $PRIVATE_KEY -vvv

echo "Deployment completed."
