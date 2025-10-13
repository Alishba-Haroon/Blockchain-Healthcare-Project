import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [systemStatus, setSystemStatus] = useState({
    encryption: "active",
    blockchain: "syncing",
    ipfs: "active"
  });

  const [featureStats, setFeatureStats] = useState({
    encryptedFiles: 1247,
    blockchainBlocks: 89234,
    ipfsNodes: 156,
    dataSize: "2.4TB"
  });

  // Simulate real-time system monitoring
  useEffect(() => {
    const statusInterval = setInterval(() => {
      setSystemStatus(prev => ({
        encryption: Math.random() > 0.1 ? "active" : "warning",
        blockchain: Math.random() > 0.2 ? "syncing" : "active",
        ipfs: Math.random() > 0.1 ? "active" : "warning"
      }));
    }, 8000);

    const statsInterval = setInterval(() => {
      setFeatureStats(prev => ({
        encryptedFiles: prev.encryptedFiles + Math.floor(Math.random() * 3),
        blockchainBlocks: prev.blockchainBlocks + Math.floor(Math.random() * 15),
        ipfsNodes: prev.ipfsNodes + Math.floor(Math.random() * 2),
        dataSize: prev.dataSize
      }));
    }, 5000);

    return () => {
      clearInterval(statusInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "active": return "#10b981";
      case "warning": return "#f59e0b";
      case "syncing": return "#3b82f6";
      default: return "#6b7280";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "active": return "All Systems Go";
      case "warning": return "Minor Issues";
      case "syncing": return "Syncing Network";
      default: return "Unknown";
    }
  };

  const features = [
    {
      icon: "🔐",
      title: "Secure Storage",
      description: "Military-grade encryption for your sensitive health data",
      stats: `${featureStats.encryptedFiles.toLocaleString()}+ Files Encrypted`,
      status: systemStatus.encryption,
      details: "AES-256 & RSA-2048 Encryption"
    },
    {
      icon: "⛓️",
      title: "Blockchain Verified",
      description: "Immutable records on distributed ledger technology",
      stats: `${featureStats.blockchainBlocks.toLocaleString()}+ Blocks`,
      status: systemStatus.blockchain,
      details: "Ethereum-based Smart Contracts"
    },
    {
      icon: "🌐",
      title: "IPFS Powered",
      description: "Decentralized storage for enhanced security",
      stats: `${featureStats.ipfsNodes.toLocaleString()}+ Nodes Active`,
      status: systemStatus.ipfs,
      details: "Distributed File Storage"
    }
  ];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setMessage(`Selected: ${selectedFile.name}`);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("⚠️ Please choose a file first.");
      return;
    }

    setIsLoading(true);
    setMessage("Encrypting & Uploading...");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("use_server_sign", true);

    try {
      const res = await axios.post("http://127.0.0.1:5000/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage(`✅ Success! IPFS Hash: ${res.data.ipfs}`);
      
      // Update stats on successful upload
      setFeatureStats(prev => ({
        ...prev,
        encryptedFiles: prev.encryptedFiles + 1
      }));
    } catch (err) {
      console.error(err);
      setMessage("❌ Error connecting to backend. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="app-container">
        <div className="header-section">
          <div className="logo">🩺</div>
          <h1>MediNexus</h1>
          <p className="subtitle">Live Blockchain Healthcare Platform</p>
        </div>

        <div className="upload-section">
          <div className="upload-card">
            <h2>Upload Medical Record</h2>
            <p className="card-description">
              Securely store your healthcare data on the blockchain with IPFS integration
            </p>

            <div className="upload-box">
              <label htmlFor="file-upload" className="file-input-label">
                <span className="file-icon">📁</span>
                <span className="file-text">
                  {file ? file.name : "Choose medical record file"}
                </span>
                <span className="browse-btn">Browse</span>
              </label>
              <input
                id="file-upload"
                type="file"
                onChange={handleFileChange}
                className="file-input"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.txt"
              />
              
              <button 
                onClick={handleUpload} 
                className="upload-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Processing...
                  </>
                ) : (
                  <>
                    <span className="btn-icon">🔒</span>
                    Secure Upload to Blockchain
                  </>
                )}
              </button>
            </div>

            {message && (
              <div className={`message ${message.includes("✅") ? "success" : message.includes("❌") ? "error" : "info"}`}>
                {message}
              </div>
            )}
          </div>
        </div>

        <div className="features-section">
          <h3 style={{textAlign: 'center', marginBottom: '30px', color: '#e2e8f0'}}>
            Live System Status
          </h3>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`feature-item ${activeFeature === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div 
                  className="status-indicator"
                  style={{ backgroundColor: getStatusColor(feature.status) }}
                ></div>
                <div className="feature-icon pulse">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-stats">
                  <div className="stat-item">
                    <span className="stat-number">{feature.stats.split('+')[0]}+</span>
                    <span className="stat-label">{feature.stats.split('+')[1]}</span>
                  </div>
                </div>
                <div className="status-message">
                  <span style={{color: getStatusColor(feature.status)}}>
                    ● {getStatusText(feature.status)}
                  </span>
                </div>
                {activeFeature === index && (
                  <div className="feature-tooltip">
                    {feature.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;