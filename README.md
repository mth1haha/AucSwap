AucSwap is a decentralized cross-blockchain asset transfer protocol. Here we give the architecture of the program.

Our experiment environment is built on Ethereum. The basic program is shown on  https://github.com/ethereum/go-ethereum. Our experiment implemented based on this project, so there are many functions that are implemented by calling Ethereum's API.

Here we list some key codes of our experiment, including collecting bids, sorting bids, swapping assets via the Atomic Swap protocol, and so on. Based on the existing Ethereum project, many functions can be implemented by calling the API, which we won't show here. For example, it can spread information in the P2P network in the Ethereum system, carry out the hash operation and electronic signature with Crypto function, and execute a smart contract through the ETH calling.

With Ethereum browser, we can easily implement the algorithms and functions mentioned in the paper. So the main languages here are JavaScript and Go.

Our code structure is listed as follows:

The bin folder contains all execution codes. GossipBroadcast implements the broadcast function. Rank sorts the collected bids and returns the highest bid. The KeyPair program generates the secret key pairs used in the exchange process. EthAtomicSwap interacts with Ethereum browser to implement the front-end interaction function of AtomicSwap protocol.

In the Build/Contract folder are the configuration files during the execution progress.

In the Contract folder are the smart contracts used in the exchange process after the auction is completed. The AtomicSwap is the contract used to deploy assets and generate secret keys. Migration contracts are contracts for exchanging.

Modular Folder is a collection of general-purpose modules, including encryption functions and calling Ethereum interfaces.

The rest files are about configuration information.
