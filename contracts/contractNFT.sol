// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; 

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter; 

    Counters.Counter private tokenIdCounter; 

    constructor() ERC721("MyNFT", "MNFT") {}

    
    function mintNFT(address recipient, string memory tokenURI) public onlyOwner {
        uint256 tokenId = tokenIdCounter.current(); 
        tokenIdCounter.increment();
        _mint(recipient, tokenId);
        _setTokenURI(tokenId, tokenURI);
    }
}
