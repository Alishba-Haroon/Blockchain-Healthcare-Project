import React, { useState } from "react";
import axios from "axios";

const UploadRecord = () => {
  const [file, setFile] = useState(null);
  const [ipfsUrl, setIpfsUrl] = useState("");
  const [txHash, setTxHash] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);
      const response = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const { ipfs, tx } = response.data;
      setIpfsUrl(ipfs);
      if (tx) setTxHash(tx);
      alert("✅ File uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("❌ Upload failed. Check backend logs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload Record"}
      </button>

      {ipfsUrl && (
        <div style={{ marginTop: "20px" }}>
          <p>🌐 IPFS URL: <a href={ipfsUrl} target="_blank" rel="noreferrer">{ipfsUrl}</a></p>
          {txHash && <p>🔗 Transaction: {txHash}</p>}
        </div>
      )}
    </div>
  );
};

export default UploadRecord;
