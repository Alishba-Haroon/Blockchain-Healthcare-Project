# 🏥 MediNexus: Healthcare Blockchain System

**MediNexus** is a decentralized healthcare data management platform built with **Flask (Python backend)**, **React.js frontend**, and **Ethereum Smart Contracts**.  
It ensures **secure, transparent, and tamper-proof** sharing of patient medical records between patients, doctors, and hospitals using **IPFS** for distributed storage and **blockchain** for access control.

---

## 🧩 Key Features

- 🔐 **Decentralized Storage** — Medical records stored on IPFS for immutability and transparency.  
- 🧠 **Smart Contract Security** — Ethereum blockchain smart contract enforces data permissions.  
- ⚙️ **Flask REST API** — Acts as a middleware between frontend and blockchain.  
- 🖥️ **React Frontend** — Clean dashboard for patients, doctors, and administrators.  
- 👥 **Role-based Access** — Patients control data visibility and sharing permissions.  
- 🧾 **Tamper-proof Records** — Data integrity guaranteed via blockchain verification.

---

## 🗂️ Project Structure

---
'''
MediNexus-Healthcare-Blockchain/
├── backend/                          # Flask backend API
│   ├── app.py                       # Main Flask application
│   ├── config.py                    # Configuration settings
│   ├── requirements.txt             # Python dependencies
│   ├── services/                    # Business logic services
│   │   ├── blockchain_service.py    # Smart contract integration (Web3.py)
│   │   ├── ipfs_service.py          # IPFS upload/retrieve operations
│   │   └── utils.py                 # Helper functions and utilities
│   ├── models/                      # Data models
│   │   └── models.py                # Database models
│   ├── routes/                      # API routes
│   │   └── api.py                   # API endpoint definitions
│   ├── blockchain/                  # Blockchain related files
│   │   ├── contracts/               # Smart contracts
│   │   │   └── MediNexus.sol        # Main Solidity smart contract
│   │   └── artifacts/               # Compiled contract artifacts
│   │       ├── abi.json            # Contract ABI
│   │       └── bytecode.txt        # Compiled bytecode
│   └── data/                        # Sample data
│       └── sample_records.json      # Sample healthcare records for testing
├── frontend/                        # React.js frontend application
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── common/              # Common components
│   │   │   ├── forms/               # Form components
│   │   │   └── layout/              # Layout components
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.js              # Home page
│   │   │   ├── Dashboard.js         # User dashboard
│   │   │   ├── Records.js           # Medical records page
│   │   │   └── Profile.js           # User profile page
│   │   ├── services/                # API service layer
│   │   │   ├── api.js               # Backend API calls
│   │   │   └── auth.js              # Authentication services
│   │   ├── context/                 # React context for state management
│   │   ├── utils/                   # Frontend utilities
│   │   ├── App.js                   # Main App component
│   │   ├── App.css                  # App styles
│   │   └── index.js                 # Application entry point
│   ├── public/
│   │   ├── index.html               # Main HTML template
│   │   ├── favicon.ico              # Site favicon
│   │   └── manifest.json            # PWA manifest
│   ├── package.json                 # Frontend dependencies
│   └── package-lock.json            # Dependency lock file
├── blockchain/                      # Blockchain development setup
│   ├── contracts/                   # Smart contracts
│   │   └── MediNexus.sol            # Main contract (duplicate or linked)
│   ├── scripts/                     # Deployment and utility scripts
│   │   ├── deploy.js                # Contract deployment script
│   │   └── test.js                  # Contract testing script
│   ├── migrations/                  # Migration files
│   ├── test/                        # Smart contract tests
│   │   └── MediNexus.test.js        # Contract test cases
│   └── hardhat.config.js            # Hardhat configuration
├── docs/                            # Project documentation
│   ├── setup.md                     # Setup instructions
│   ├── api.md                       # API documentation
│   └── deployment.md                # Deployment guide
├── tests/                           # Test files
│   ├── backend_tests/               # Backend tests
│   └── frontend_tests/              # Frontend tests
├── .gitignore                       # Git ignore rules
├── README.md                        # Project documentation
└── LICENSE                          # MIT License
'''
---

## ⚙️ Prerequisites

- 🐍 **Python 3.9+**  
- 🟢 **Node.js 16+** & **npm**  
- 🦊 **MetaMask Wallet** (for Ethereum interaction)  
- 🧱 **Ganache** / **Sepolia Testnet**  
- 🌐 **IPFS Node** (Local or Infura Gateway)

---

## 🚀 Installation & Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/YourUsername/MediNexus-Healthcare-Blockchain.git
cd MediNexus-Healthcare-Blockchain

2️⃣ Backend Setup (Flask)

cd backend
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt
python app.py

3️⃣ Frontend Setup (React)

cd ../frontend
npm install
npm start

🧠 How It Works

🧾 Upload Data — Patient uploads a medical report via the web dashboard.
🔗 IPFS Storage — File stored on IPFS, returning a unique hash.
⛓️ Blockchain Recording — Hash and ownership data saved via smart contract.
👩‍⚕️ Access Control — Only authorized users (validated by blockchain) can access the record.
💻 Frontend Display — React UI fetches and displays verified data.

📊 Example Workflow

Patient registers and uploads a medical report.
File is stored on IPFS, and its hash is stored on Ethereum.
Doctor requests access → Smart contract validates permission.
Verified record is displayed on the React dashboard.

🔮 Future Enhancements

🤖 AI Diagnostic Assistant for predictive health analysis.
🧾 Multi-signature admin verification for hospital data.
🔒 Encrypted storage (HIPAA compliance).
🌍 Multi-chain deployment (Polygon / Binance Smart Chain).

🤝 Contributing
Contributions are welcome!
Fork this repository
Create a feature branch (git checkout -b feature-name)
Commit and push your changes
Submit a Pull Request with a clear description

📜 License

This project is licensed under the MIT License.
