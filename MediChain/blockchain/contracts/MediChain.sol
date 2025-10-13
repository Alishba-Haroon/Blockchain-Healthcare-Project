// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MediChain {
    struct Record {
        address owner; // patient
        string ipfsHash; // pointer to IPFS
        uint256 timestamp;
    }

    // patient address => list of record hashes
    mapping(address => Record[]) private records;

    // patient => grantee (doctor) => allowed
    mapping(address => mapping(address => bool)) private access;

    event RecordAdded(address indexed patient, string ipfsHash, uint256 timestamp);
    event AccessGranted(address indexed patient, address indexed grantee);
    event AccessRevoked(address indexed patient, address indexed grantee);

    function addRecord(string memory _ipfsHash) external {
        records[msg.sender].push(Record(msg.sender, _ipfsHash, block.timestamp));
        emit RecordAdded(msg.sender, _ipfsHash, block.timestamp);
    }

    function grantAccess(address _grantee) external {
        access[msg.sender][_grantee] = true;
        emit AccessGranted(msg.sender, _grantee);
    }

    function revokeAccess(address _grantee) external {
        access[msg.sender][_grantee] = false;
        emit AccessRevoked(msg.sender, _grantee);
    }

    function canAccess(address _patient, address _grantee) public view returns (bool) {
        if (_patient == _grantee) return true;
        return access[_patient][_grantee];
    }

    function getRecords(address _patient) external view returns (Record[] memory) {
        require(msg.sender == _patient || access[_patient][msg.sender], "Access denied");
        return records[_patient];
    }
}