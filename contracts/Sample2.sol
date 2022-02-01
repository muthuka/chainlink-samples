// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract Sample2 {

    AggregatorV3Interface internal priceFeedBTC;
    AggregatorV3Interface internal priceFeedETH;
    AggregatorV3Interface internal priceFeedUNI;

    /**
     * Network: Kovan
     * Aggregator: ETH/USD
     * Address: 0x9326BFA02ADD2366b30bacB125260Af641031331
     */
    constructor() {
        priceFeedBTC = AggregatorV3Interface(0x6135b13325bfC4B00278B4abC5e20bbce2D6580e);
        priceFeedETH = AggregatorV3Interface(0x9326BFA02ADD2366b30bacB125260Af641031331);
        priceFeedUNI = AggregatorV3Interface(0xDA5904BdBfB4EF12a3955aEcA103F51dc87c7C39);
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice(string memory _tokenFrom) public view returns (int) {

        uint80 roundID;
        int price;
        uint startedAt;
        uint timeStamp;
        uint80 answeredInRound;

        if (keccak256(bytes(_tokenFrom)) == keccak256(bytes("BTC"))) {
            (roundID, price, startedAt, timeStamp, answeredInRound) = priceFeedBTC.latestRoundData();
        } else if (keccak256(bytes(_tokenFrom)) == keccak256(bytes("ETH"))) {
            (roundID, price, startedAt, timeStamp, answeredInRound) = priceFeedETH.latestRoundData();
        } else if (keccak256(bytes(_tokenFrom)) == keccak256(bytes("UNI"))) {
            (roundID, price, startedAt, timeStamp, answeredInRound) = priceFeedUNI.latestRoundData();
        } else {
            revert("Unknown token name!"); 
        }
        
        return price;
    }
}
