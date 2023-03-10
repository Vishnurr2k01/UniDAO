export default  [
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "addr",
          "type": "address[]"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "initiator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "message",
          "type": "string"
        }
      ],
      "name": "Action",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "address[]",
          "name": "addresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_power",
          "type": "uint256[]"
        },
        {
          "internalType": "bool",
          "name": "_enrol",
          "type": "bool"
        },
        {
          "internalType": "bool",
          "name": "_voter",
          "type": "bool"
        }
      ],
      "name": "createAdminProposal",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "reactions",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "passed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enrol",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "change",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "power",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "voter",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "action",
              "type": "bool"
            }
          ],
          "internalType": "struct UniDAO.ProposalStruct",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
        }
      ],
      "name": "createProposal",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "reactions",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "passed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enrol",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "change",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "power",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "voter",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "action",
              "type": "bool"
            }
          ],
          "internalType": "struct UniDAO.ProposalStruct",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "addresses",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "_power",
          "type": "uint256[]"
        }
      ],
      "name": "enrollVoters",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "performAction",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "choosen",
          "type": "uint256"
        }
      ],
      "name": "performAdminVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "choosen",
          "type": "uint256"
        }
      ],
      "name": "performVote",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "admProposals",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "getAdminProposal",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "reactions",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "passed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enrol",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "change",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "power",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "voter",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "action",
              "type": "bool"
            }
          ],
          "internalType": "struct UniDAO.ProposalStruct",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAdminProposals",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "reactions",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "passed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enrol",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "change",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "power",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "voter",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "action",
              "type": "bool"
            }
          ],
          "internalType": "struct UniDAO.ProposalStruct[]",
          "name": "props",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_proposalId",
          "type": "uint256"
        }
      ],
      "name": "getProposal",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "reactions",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "passed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enrol",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "change",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "power",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "voter",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "action",
              "type": "bool"
            }
          ],
          "internalType": "struct UniDAO.ProposalStruct",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getProposals",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "proposalId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "reactions",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "proposer",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "passed",
              "type": "bool"
            },
            {
              "internalType": "uint256",
              "name": "upvotes",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "downvotes",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "enrol",
              "type": "bool"
            },
            {
              "internalType": "address[]",
              "name": "change",
              "type": "address[]"
            },
            {
              "internalType": "uint256[]",
              "name": "power",
              "type": "uint256[]"
            },
            {
              "internalType": "bool",
              "name": "voter",
              "type": "bool"
            },
            {
              "internalType": "bool",
              "name": "action",
              "type": "bool"
            }
          ],
          "internalType": "struct UniDAO.ProposalStruct[]",
          "name": "props",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isAdmin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isVoter",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalProposal",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];