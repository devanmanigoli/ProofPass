# ProofPass

## Blockchain-Based Certificate Verification System

ProofPass is a blockchain-based certificate verification system that helps verify the authenticity of certificates using the Avalanche Fuji blockchain.

## Problem

Fake or tampered certificates can be difficult to verify using traditional methods.

## Solution

ProofPass stores a cryptographic fingerprint of a certificate on the blockchain. Each certificate receives a unique Certificate ID that can be used to verify its authenticity.

## Features

- Issue certificates
- Generate unique Certificate IDs
- Store certificate hashes on blockchain
- Verify certificates using Certificate ID
- Display certificate issuer
- Detect certificate tampering through cryptographic hashing

## Technology Stack

- Solidity
- Avalanche Fuji C-Chain
- Remix IDE
- React
- Vite
- ethers.js
- MetaMask

## Smart Contract

**Network:** Avalanche Fuji C-Chain

**Contract Address:**

`0x91Fc2d2582793499256CF32EC7D0B2aB0aBBeD3d`

## Test Certificate

**Certificate ID:** 1

**Student:** Devanmani

**Certificate:** Avalanche Blockchain Workshop

## How It Works

1. An organization issues a certificate.
2. The certificate receives a unique ID.
3. A cryptographic hash is stored on Avalanche.
4. A user enters the Certificate ID.
5. ProofPass retrieves the certificate information directly from the blockchain.
6. The user can verify the certificate and its issuer.

## Project Structure

```text
ProofPass/
├── contracts/
│   └── ProofPass.sol
│
└── proofpass-ui/
    ├── src/
    ├── public/
    ├── package.json
    └── ...