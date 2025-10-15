# MediNexus Healthcare Blockchain 🏥🔗

An end-to-end **healthcare data management system** built with **Flask (Python backend)**, **React.js frontend**, and **Ethereum blockchain smart contracts**.  
MediNexus enables **secure, decentralized, and transparent sharing of patient medical records** among patients, doctors, and hospitals, while ensuring privacy using **IPFS** for distributed storage.

---

## 📁 Project Structure

MediNexus-Healthcare-Blockchain/
├── README.md # Project documentation
├── LICENSE # MIT License file
├── backend/ # Flask backend API
│ ├── app.py # Main Flask application
│ ├── requirements.txt # Backend dependencies
│ ├── services/ # Core blockchain & IPFS logic
│ │ ├── blockchain_service.py # Smart contract integration (Web3.py)
│ │ ├── ipfs_service.py # IPFS upload & retrieval
│ │ └── utils.py # Helper functions
│ ├── blockchain/ # Smart contract artifacts
│ │ ├── contracts/
│ │ │ └── MediNexus.sol # Solidity smart contract
│ │ └── artifacts/ # Compiled contract JSON files
│ └── data/ # Temporary or test data storage
│ └── sample_records.json
├── frontend/ # React.js frontend
│ ├── src/
│ │ ├── components/ # UI components (PatientForm, RecordList, etc.)
│ │ ├── pages/ # Pages (Home, Dashboard, Records)
│ │ ├── services/ # API calls to Flask backend
│ │ ├── App.js # Main React app entry
│ │ └── index.js # React DOM entry point
│ ├── public/
│ │ └── index.html
│ └── package.json # Frontend dependencies
└── blockchain/ # Optional Truffle/Hardhat setup
└── scripts/ # Deployment or testing scripts


---

## ✨ Features

- **Decentralized Storage:** Patient records stored on IPFS to ensure immutability and transparency.  
- **Smart Contract Security:** Ethereum blockchain smart contract manages data access permissions.  
- **Flask REST API:** Handles requests between frontend and blockchain layer.  
- **React Frontend:** Intuitive UI for patients, doctors, and admins.  
- **Role-based Access:** Patients control who can view or modify their medical data.  
- **Tamper-proof Records:** Once uploaded, data cannot be altered without blockchain verification.  

---

## ⚙️ Prerequisites

- Python 3.9+  
- Node.js 16+ and npm  
- MetaMask wallet (for interacting with blockchain)  
- Ganache or any Ethereum testnet (Goerli, Sepolia, etc.)  
- IPFS node (local or Infura IPFS Gateway)

---

## 🧩 Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/YourUsername/MediNexus-Healthcare-Blockchain.git
cd MediNexus-Healthcare-Blockchain

2️⃣ Setup Backend (Flask)
cd backend
python -m venv venv
venv\Scripts\activate      # On Windows
pip install -r requirements.txt
python app.py

3️⃣ Setup Frontend (React)
cd ../frontend
npm install
npm start

🧠 How It Works

Data Upload: Patient or hospital uploads medical records via React UI.

IPFS Storage: The file is stored on IPFS, and the resulting hash is recorded on blockchain.

Blockchain Contract: Smart contract (MediNexus.sol) handles ownership and permission control.

Access Control: Only authorized users (with blockchain verification) can retrieve records.

Frontend Display: React dashboard displays verified data fetched via Flask API.

📊 Example Workflow

Patient registers → Uploads medical report (PDF or image).

File → Stored on IPFS → Hash stored on Ethereum blockchain.

Doctor requests access → Smart contract validates permission.

Record displayed securely in frontend dashboard.

🚀 Future Improvements

Add AI diagnostic module (disease prediction).

Integrate multi-signature verification for hospital admins.

Add encrypted file storage for HIPAA compliance.

Enable multi-chain deployment (Polygon, Binance Smart Chain).

💡 Contributing

Pull requests are welcome!

Fork the repository

Create a new feature branch

Submit a pull request with clear description

📜 License

This project is licensed under the MIT License — see the LICENSE
 file for details.

👩‍💻 Author

Alishba Haroon
BS Artificial Intelligence Student | AI + Blockchain Developer
