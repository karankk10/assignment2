// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; // Import the Counters library

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter; // Use the Counters library

    Counters.Counter private tokenIdCounter; // Declare the counter

    constructor() ERC721("MyNFT", "MNFT") {}

    // Function to mint an NFT with the provided token URI
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner {
        uint256 tokenId = tokenIdCounter.current(); // Get the current tokenId
        tokenIdCounter.increment(); // Increment the tokenId counter
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}
