AucSwap is a decentralized cross-blockchain asset transfer protocol. Here we present the architecture of our implementation.

Our experiment test-bed is built on Ethereum. The origin codes are shown on  https://github.com/ethereum/go-ethereum. We present the key codes of our experiment here, including collecting bids, sorting bids, swapping assets via the Atomic Swap protocol, and so on. Based on the Ethereum project, many functions can be implemented by calling the API. For example, it can spread information in the P2P network in the Ethereum system, carry out the hash operation and electronic signature with Crypto function, and execute a smart contract through the ETH calling.

With Ethereum browser, we can easily implement the algorithms and functions of Aucswap protocol. So the main languages here are JavaScript and Go. Our code structure is listed as follows:

The bin folder contains all execution codes. GossipBroadcast implements the broadcast function. Rank sorts the collected bids and returns the highest bid. The KeyPair program generates the secret key pairs used in the exchange process. EthAtomicSwap interacts with Ethereum browser to implement the front-end interaction function of AtomicSwap protocol.

In the Build/Contract folder are the configuration files during the execution progress.

In the Contract folder are the smart contracts used in the exchange process after the auction is completed. The AtomicSwap is the contract used to deploy assets and generate secret keys. Migration contracts are contracts for exchanging.

Modular Folder is a collection of general-purpose modules, including encryption functions and calling Ethereum interfaces.

The rest files are about configuration information.
