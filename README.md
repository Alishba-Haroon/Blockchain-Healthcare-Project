# MediNexus: Healthcare Blockchain System

**MediNexus** is a decentralized healthcare data management platform built with **Flask (Python backend)**, **React.js frontend**, and **Ethereum Smart Contracts**.  
It ensures **secure, transparent, and tamper-proof** sharing of patient medical records between patients, doctors, and hospitals using **IPFS** for distributed storage and **blockchain** for access control.

---

<p align="leftr">
  <b>Main Interface</b><br/><br/>
  <img src="https://github.com/Alishba-Haroon/Blockchain-Healthcare-Project/blob/main/MediChain/frontend/public/MediNexus.jpg" alt="Main Interface" width="700"/>
</p>

---

<p align="leftr">
  <b>Output View</b><br/><br/>
  <img src="https://github.com/Alishba-Haroon/Blockchain-Healthcare-Project/blob/main/MediChain/frontend/public/Output%20(3).png" alt="Output View" width="700"/>
</p>

---

<p align="left">
  <b>Background Design</b><br/><br/>
  <img src="https://github.com/Alishba-Haroon/Blockchain-Healthcare-Project/blob/main/MediChain/frontend/public/background.png" alt="Background Design" width="700"/>
</p>


---


##  Key Features

-  **Decentralized Storage** — Medical records stored on IPFS for immutability and transparency.  
-  **Smart Contract Security** — Ethereum blockchain smart contract enforces data permissions.  
-  **Flask REST API** — Acts as a middleware between frontend and blockchain.  
-  **React Frontend** — Clean dashboard for patients, doctors, and administrators.  
-  **Role-based Access** — Patients control data visibility and sharing permissions.  
-  **Tamper-proof Records** — Data integrity guaranteed via blockchain verification.

---

##  Project Structure

```bash
MediNexus-Healthcare-Blockchain/
├── backend/                          # Flask backend API
│   ├── app.py                        # Main Flask application
├── frontend/                         # React.js frontend application
│   ├── src/
│   │   ├── components/               # Reusable UI components
│   │   │   ├── ConnectWallet.js      # Wallet connection logic
│   │   │   ├── UploadRecord.js       # File upload form
│   │   │   └── UploadRecord.css      # Styling for upload component
│   │   ├── abi/                      # Compiled contract ABI
│   │   │   └── MediChain.json
│   │   ├── App.js                    # Main App component
│   │   ├── App.css                   # App styles
│   │   ├── index.js                  # React entry point
│   │   └── index.css                 # Global CSS
│   ├── public/
│   │   ├── index.html                # Main HTML template
│   │   └── manifest.json             # PWA manifest
│   ├── package.json                  # Frontend dependencies
│   └── package-lock.json             # Dependency lock file
├── blockchain/                       # Blockchain development setup
│   ├── contracts/                    # Smart contracts
│   │   └── MediNexus.sol             # Solidity smart contract
│   ├── scripts/                      # Deployment & testing scripts
│   │   ├── deploy.js                 # Contract deployment script
│   │   └── test.js                   # Contract testing script
│   ├── migrations/                   # Contract migration files
│   ├── test/                         # Smart contract test cases
│   │   └── MediNexus.test.js
├── tests/                            # Project tests
│   ├── MediChainTest.js               # Flask backend tests
│   └── frontend_tests/               # React frontend tests
├── .gitignore                        # Git ignore rules
├── README.md                         # Project documentation
└── LICENSE                           # MIT License
````
---

## Installation & Setup

###  Clone Repository

```bash
git clone https://github.com/YourUsername/MediNexus-Healthcare-Blockchain.git
cd MediNexus-Healthcare-Blockchain
```

---

###  Backend Setup (Flask)

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # On Windows
pip install -r requirements.txt
python app.py
```

---

### Frontend Setup (React)

```bash
cd ../frontend
npm install
npm start
```

---


##  How It Works

1.  **Upload Data** — Patient uploads a medical report via the web dashboard.
2.  **IPFS Storage** — File stored on IPFS, returning a unique hash.
3.  **Blockchain Recording** — Hash and ownership data saved via smart contract.
4.  **Access Control** — Only authorized users (validated by blockchain) can access the record.
5.  **Frontend Display** — React UI fetches and displays verified medical records.

---

##  Example Workflow

* Patient registers and uploads a medical report.
* File is stored on IPFS and its hash recorded on Ethereum.
* Doctor requests access → Smart contract validates permissions.
* Verified record is displayed securely in the React dashboard.

---

##  Future Enhancements

*  **AI Diagnostic Assistant** for predictive health analysis.
*  **Multi-signature admin verification** for hospital data.
*  **Encrypted storage** (HIPAA compliance).
*  **Multi-chain deployment** (Polygon / Binance Smart Chain).

---


##  Contributing

Contributions are always welcome!  


---


##  License

This project is licensed under the **MIT License**.
Feel free to use and modify it for educational or research purposes.

---


