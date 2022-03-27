// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@openzeppelin/contracts/token/ERC1155/ERC1155.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract Karma is ERC1155, Ownable {
    constructor() ERC1155('') {}

    uint256 private KarmaCount = 0;

    string public baseURI = '';
    string public baseExtension = '';

    function ownerMint(
        address[] calldata ads,
        uint256[] calldata quantity,
        uint256 typeId
    ) external onlyOwner {
        for (uint256 i = 0; i < ads.length; i++) {
            _mint(ads[i], typeId, quantity[i], '');
            KarmaCount += quantity[i];
        }
    }

    function ownerMint1(address[] calldata ads, uint256 typeId)
        external
        onlyOwner
    {
        for (uint256 i = 0; i < ads.length; i++) {
            _mint(ads[i], typeId, 1, '');
        }
        KarmaCount += ads.length;
    }

    function burnKarmaForAddress(
        uint256 typeId,
        address burnTokenAddress,
        uint256 quantity
    ) external {
        _burn(burnTokenAddress, typeId, quantity);
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function uri(uint256 typeId) public view override returns (string memory) {
        return
            bytes(baseURI).length > 0
                ? string(abi.encodePacked(baseURI, typeId, baseExtension))
                : '';
    }
}
