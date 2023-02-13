import Web3 from 'web3';
import abi from '../constants/abi.json'
import {setGlobalState,getGlobalState,useGLobalState, useGlobalState} from '../store/index'

const {ethereum} = window
window.web3 = new Web3(ethereum)
window.web3 = new Web3(window.web3.currentProvider)


const connectWallet = async ()=>{
    try {
        if(!ethereum)return alert("Please install Metamask");
        const accounts = await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        setGlobalState('connectedAccount', accounts[0].toLowerCase())
    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

const isWalletConnected =async ()=>{
    try {
        if (!ethereum) return alert("Install metamask")
        const accounts = await ethereum.request({ method: 'eth_accounts' })

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload()
        })
        window.ethereum.on('accountsChanged', async () => {
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
            await isWalletConnected()
            
        })

        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0].toLowerCase())
        } else {
            alert('Please connect your wallet')
            console.log("account not found")
        }


    } catch (error) {
        console.log(JSON.stringify(error))
    }
}

const getEthereumContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount')
    if(connectedAccount){

        const networkId = await window.web3.eth.net.getId()
        const networlData = abi.networks[networkId]
        if(networlData){
            const contract = new window.web3.eth.Contract(abi.abi,networlData.address)
            setGlobalState('contract',contract)
            return contract
        }else return null;
        
    }else{
        return getGlobalState('connectedAccount')
    }
}

const setAdminRole = async()=>{
    try {
        if(!ethereum)return alert("Please install Metamask");

        const contract = await getEthereumContract()
        await contract.methods.setAdminRole().send({from:getGlobalState('connectedAccount')})
    } catch (error) {
        console.log(JSON.stringify(error))
        
    }
}
const createProposal = async({title,description,duration})=>{
    try {
        const contract = await getEthereumContract()
        const account = getGlobalState('connectedAccount')

        await contract.methods.createProposal(title,description,duration).send({from:account})

        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}
const createAdminProposal = async ({title,addresses,power,enrol,voter})=>{
        try {
            const contract = await getEthereumContract();
            const account = getGlobalState('connectedAccount');

            await contract.methods.createAdminProposal(title,addresses,power,enrol,voter).send({from:account})
        } catch (error) {
            console.log(JSON.stringify(error))
        }
}

export {connectWallet,isWalletConnected,getEthereumContract,setAdminRole,createProposal,createAdminProposal}