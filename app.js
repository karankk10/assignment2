document.addEventListener("DOMContentLoaded", async function () {
    // Initialize web3
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
        } catch (error) {
            console.error("User denied account access");
        }
    }

    const web3 = window.web3;

    
    if (typeof web3 === "undefined") {
        alert("Please install Metamask or use a web3-enabled browser.");
        return;
    }

    // Get the user's Ethereum wallet address
    const accounts = await web3.eth.getAccounts();
    const userAddress = accounts[0];

    document.getElementById("wallet-address").textContent = userAddress;

    // Check if MetaMask is installed
if (typeof web3 !== 'undefined') {
    const connectButton = document.getElementById("connect-metamask");

    
    connectButton.addEventListener("click", async () => {
        try {
           
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            
            const userAddress = accounts[0];

          
            console.log("Connected to MetaMask. User Address:", userAddress);
        } catch (error) {
            console.error("Error connecting to MetaMask:", error);
        }
    });
} else {
    console.error("MetaMask is not installed.");
}

    // Mint NFT button 
document.getElementById("mint-nft").addEventListener("click", async () => {
    const nftUrl = document.getElementById("nft-url").value;

    if (!nftUrl) {
        alert("Please enter an IPFS URL.");
        return;
    }

    
    try {
        const contractAddress = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4"; 
        const contractABI = [
            0xd9145CCE52D386f254917e481eB44e9943F39138 
        ];
        const contract = new web3.eth.Contract(contractABI, contractAddress);
        const accounts = await web3.eth.getAccounts();
        const userAddress = accounts[0];

       
        await contract.methods.mintNFT(userAddress, nftUrl).send({ from: userAddress });

        alert("NFT minted successfully!");
    } catch (error) {
        console.error("Error minting NFT:", error);
    }
});
     
    });
