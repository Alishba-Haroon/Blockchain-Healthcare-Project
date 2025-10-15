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

MediNexus-Healthcare-Blockchain/
│
├── backend/ # Flask backend API
│ ├── app.py # Main Flask app
│ ├── requirements.txt # Python dependencies
│ ├── services/ # Blockchain & IPFS logic
│ │ ├── blockchain_service.py # Smart contract integration (Web3.py)
│ │ ├── ipfs_service.py # IPFS upload/retrieve
│ │ └── utils.py # Helper functions
│ ├── blockchain/ # Contract files & artifacts
│ │ ├── contracts/
│ │ │ └── MediNexus.sol # Solidity smart contract
│ │ └── artifacts/ # Compiled ABI & bytecode
│ └── data/
│ └── sample_records.json # Sample data for testing
│
├── frontend/ # React.js frontend
│ ├── src/
│ │ ├── components/ # UI Components
│ │ ├── pages/ # Page views (Home, Dashboard, Records)
│ │ ├── services/ # API connections to Flask backend
│ │ ├── App.js
│ │ └── index.js
│ ├── public/
│ │ └── index.html
│ └── package.json # Frontend dependencies
│
├── blockchain/ # Optional (Truffle / Hardhat setup)
│ └── scripts/ # Deployment or testing scripts
│
├── README.md


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
See the LICENSE
 file for details.
