// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract UniDAO is ReentrancyGuard,AccessControl {
    bytes32 private immutable ADMIN_ROLE = keccak256("ADMIN");
    bytes32 private immutable VOTER_ROLE = keccak256("VOTER");

    address[] enrolled;
    

    uint256 public totalProposal;
    uint32 immutable MIN_VOTE_DURATION = 2 minutes;

    mapping(uint256 => ProposalStruct) private raisedProposals;

    struct ProposalStruct {
        uint256 proposalId;
        string  title;
        string  description;
        uint256 reactions;
        address proposer;
        uint256 duration;
        bool passed;
        uint256 upvotes;
        uint256 downvotes;
    }

    struct VotedStruct{
        address voter;
        uint256 timestamp;
        bool choosen;
        uint256 power;
    }

   event Action(      
        address indexed initiator,
       bytes32 role,
       string message);

   





    modifier AdminOnly(){
        require(hasRole(ADMIN_ROLE,msg.sender),"Unauthorized : only for admin");
        _;
    }

    function enrollVoters(address[] memory addresses) private { 
        for(uint256 i=0;i<addresses.length;i++){
            enrolled.push(addresses[i]);
        }
    emit Action(address(this),"ADMIN_ROLE","Addresses added successfully");
    }

    function createProposal( string memory _title,string memory _description,uint256 _duration ) external AdminOnly() returns(ProposalStruct memory){

       uint256 _proposalId = totalProposal++;
         ProposalStruct storage proposal = raisedProposals[_proposalId];


        proposal.proposalId = _proposalId;
        proposal.proposer=msg.sender;
        proposal.title=_title;
        proposal.description=_description;
        proposal.duration=_duration;
        proposal.reactions=0;
        proposal.downvotes=0;
        proposal.upvotes=0;
        proposal.passed=false;

        emit Action(msg.sender,ADMIN_ROLE,"Proposal raised");
    }
}