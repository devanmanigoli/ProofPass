// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ProofPass {

    struct Certificate {
        string studentName;
        string certificateName;
        bytes32 certificateHash;
        uint256 issuedAt;
        address issuer;
    }

    mapping(uint256 => Certificate) public certificates;

    uint256 public certificateCount;

    function issueCertificate(
        string memory _studentName,
        string memory _certificateName,
        bytes32 _certificateHash
    ) public {
        certificateCount++;

        certificates[certificateCount] = Certificate(
            _studentName,
            _certificateName,
            _certificateHash,
            block.timestamp,
            msg.sender
        );
    }

    function verifyCertificate(uint256 _certificateId)
        public
        view
        returns (
            string memory,
            string memory,
            bytes32,
            uint256,
            address
        )
    {
        Certificate memory cert = certificates[_certificateId];

        return (
            cert.studentName,
            cert.certificateName,
            cert.certificateHash,
            cert.issuedAt,
            cert.issuer
        );
    }
}