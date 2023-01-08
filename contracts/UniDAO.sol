// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract UniDAO is ReentrancyGuard,AccessControl {
    bytes32 private immutable ADMIN_ROLE = keccak256("ADMIN");
    bytes32 private immutable VOTER_ROLE = keccak256("VOTER");

    
    

    uint256 public totalProposal;
    uint32 immutable MIN_VOTE_DURATION = 2 minutes;

    mapping(uint256 => ProposalStruct) private raisedProposals;
    mapping(address=>uint256[]) private VoterVotes;
    mapping(uint256 => VotedStruct[]) private VotedOn;

    mapping(address=>VoterStruct) private enrolled;

    //structs
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
        uint256 choosen;
        uint256 power;
    }

    struct VoterStruct{
        uint256 power;
    }

    //events
   event Action(      
        address indexed initiator,
       bytes32 role,
       string message);

   
   //modifiers

    modifier AdminOnly(){
        require(hasRole(ADMIN_ROLE,msg.sender),"Unauthorized : only for admin");
        _;
    }


    //admin actions 
    function enrollVoters(address[] memory addresses,uint256[] memory _power) private { 
        for(uint256 i=0;i<addresses.length;i++){
            VoterStruct storage voter = enrolled[addresses[i]];
            voter.power = _power[i];

        }
    emit Action(address(this),"ADMIN_ROLE","Addresses added successfully");
    }


    //proposal and related functions

    
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

    function performVote(uint256 _proposalId,uint256 choosen,uint256 _power) public {
        ProposalStruct storage proposal = raisedProposals[_proposalId];
        // handleVoting(proposal);

        if(choosen==1)proposal.upvotes+=_power;
        else proposal.downvotes+=_power;

        VoterVotes[msg.sender].push(_proposalId);

        VotedOn[proposal.proposalId].push(
       VotedStruct(payable(msg.sender), block.timestamp, choosen,_power)
        );


        emit Action(
            msg.sender,
            VOTER_ROLE,
            "voted"
        );
    }

    function handleVoting(ProposalStruct storage proposal)private{
        if(proposal.passed || proposal.duration<=block.timestamp){
            proposal.passed=true;
            revert("Proposal has expired");
        }

        uint256[] memory tempVotes = VoterVotes[msg.sender];
        for (uint256 votes = 0; votes < tempVotes.length; votes++) {
            if (proposal.proposalId == tempVotes[votes]) {
                revert("You have already voted");
            }
        }
    }
}