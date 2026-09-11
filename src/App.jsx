import { useState } from "react";
import { ethers } from "ethers";

const contractAddress = "0x91Fc2d2582793499256CF32EC7D0B2aB0aBBeD3d";

const contractABI = [
  "function verifyCertificate(uint256) view returns (string, string, bytes32, uint256, address)"
];

function App() {
  const [account, setAccount] = useState("");
  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState(null);
  const [message, setMessage] = useState("");

  async function connectWallet() {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"
    });

    setAccount(accounts[0]);
  }

  async function verifyCertificate() {
    try {
      if (!certificateId) {
        setMessage("Enter certificate ID");
        return;
      }

      const provider = new ethers.BrowserProvider(window.ethereum);

      const contract = new ethers.Contract(
        contractAddress,
        contractABI,
        provider
      );

      const result = await contract.verifyCertificate(certificateId);

      setCertificate({
        studentName: result[0],
        certificateName: result[1],
        hash: result[2],
        issuer: result[4]
      });

      setMessage("Certificate Verified");
    } catch (error) {
      console.log(error);
      setMessage("Certificate not found");
      setCertificate(null);
    }
  }

  return (
    <div>
      <h1>ProofPass</h1>

      <p>Blockchain Certificate Verification</p>

      <button onClick={connectWallet}>
        {account ? "Wallet Connected" : "Connect MetaMask"}
      </button>

      <hr />

      <h2>Verify Certificate</h2>

      <input
        type="number"
        placeholder="Enter Certificate ID"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
      />

      <button onClick={verifyCertificate}>
        Verify Certificate
      </button>

      <h3>{message}</h3>

      {certificate && (
        <div>
          <p>Student: {certificate.studentName}</p>

          <p>
            Certificate: {certificate.certificateName}
          </p>

          <p>
            Hash: {certificate.hash}
          </p>

          <p>
            Issuer: {certificate.issuer}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;