// 卡牌合成
export const synthesis = '0xCC5020c4f7d69Cc11CBC7bDe26165dbcC8fB9bBE';
export const Abi_synthesis = [
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]'
			}
		],
		name: 'highLevelMerge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'level1Id',
				type: 'uint256[]'
			},
			{
				internalType: 'uint256',
				name: 'level2Id',
				type: 'uint256'
			}
		],
		name: 'level1And2Merge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'level1Id',
				type: 'uint256[]'
			},
			{
				internalType: 'uint256',
				name: 'level2Id',
				type: 'uint256'
			}
		],
		name: 'level1And2TimeLimitMerge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_randomGeneratorAddress',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'level1ById0',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'level1ById1',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'level2ById',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'level3ById',
				type: 'uint256'
			}
		],
		name: 'Level1And2Merge',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'level3Id',
				type: 'uint256[]'
			}
		],
		name: 'level3Merge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'limitedTime',
				type: 'uint256'
			}
		],
		name: 'Level3MergeRealTime',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'level4Id',
				type: 'uint256[]'
			}
		],
		name: 'level4Merge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'limitedTime',
				type: 'uint256'
			}
		],
		name: 'Level4MergeMiddleLevel',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'level5Id',
				type: 'uint256[]'
			}
		],
		name: 'level5Merge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'limitedTime',
				type: 'uint256'
			}
		],
		name: 'Level5MergeHighLevel',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]'
			}
		],
		name: 'middleLevelMerge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256[]',
				name: 'tokenIds',
				type: 'uint256[]'
			}
		],
		name: 'realTimeMerge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newRandomGenerator',
				type: 'address'
			}
		],
		name: 'setRandomGenerator',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldRandomGenerator',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newRandomGenerator',
				type: 'address'
			}
		],
		name: 'SetRandomGenerator',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newTrading',
				type: 'address'
			}
		],
		name: 'setTrading',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldTrading',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newTrading',
				type: 'address'
			}
		],
		name: 'SetTrading',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'timeLimit',
				type: 'uint256'
			}
		],
		name: 'timeLimitMergeOpen',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'eternalHighLevel',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'eternalMiddleLevel',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'eternalRealTime',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'highLevel',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'LEVEL1',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'LEVEL2',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'LEVEL3',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'LEVEL4',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'LEVEL5',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'middleLevel',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'randomGenerator',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'realTime',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'timeLimitMerge',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'trading',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
];

// 资金池
export const capital = '0x953782d1Aca4AFb0bF4177b8972CCFEbE9E60460';
export const Abi_capital = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newDao',
				type: 'address'
			}
		],
		name: '_setDao',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		name: 'daoWithdraw',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'DaoWithdraw',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'deposit',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAmount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'amount',
				type: 'uint256'
			}
		],
		name: 'Deposit',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'nft',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'tokenId',
				type: 'uint256[]'
			}
		],
		name: 'multipleWithdraw',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalWithdraw',
				type: 'uint256'
			}
		],
		name: 'MultipleWithdraw',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldDao',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newDao',
				type: 'address'
			}
		],
		name: 'SetDao',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'withdraw',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAvailable',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'available',
				type: 'uint256'
			}
		],
		name: 'Withdraw',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'amountAvailable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'nft',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'tokenId',
				type: 'uint256[]'
			}
		],
		name: 'amountAvailableList',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'dao',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'daoAvailable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'level3',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'level4',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'level5',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'nftAvailable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		name: 'nftWithdraw',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'token',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'totalNftAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
];

// 手续费
export const charge = '0x736083022254541A19078F6a9C0A4D496DE6d62a';
export const Abi_charge = [
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newCapitalPool',
				type: 'address'
			}
		],
		name: '_setCapitalPool',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newTechnicalSupport',
				type: 'address'
			}
		],
		name: '_setTechnicalSupport',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newTrade',
				type: 'address'
			}
		],
		name: '_setTrade',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'nft',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'tokenId',
				type: 'uint256[]'
			}
		],
		name: 'multipleWithdrawFee',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_capitalPool',
				type: 'address'
			},
			{
				internalType: 'address',
				name: '_technicalSupport',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalReceive',
				type: 'uint256'
			}
		],
		name: 'MultipleWithdrawFee',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'id',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'owner',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'royalty',
				type: 'uint256'
			}
		],
		name: 'NFTHolderFee',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		inputs: [],
		name: 'poolFeeWithdraw',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256'
			}
		],
		name: 'PoolFeeWithdraw',
		type: 'event'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'offerToken',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'identifier',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: 'quoteToken',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'quoteAmount',
				type: 'uint256'
			}
		],
		name: 'serviceCharge',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldCapitalPool',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newCapitalPool',
				type: 'address'
			}
		],
		name: 'SetCapitalPool',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldTechnicalSupport',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newTechnicalSupport',
				type: 'address'
			}
		],
		name: 'SetTechnicalSupport',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldTrade',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newTrade',
				type: 'address'
			}
		],
		name: 'SetTrade',
		type: 'event'
	},
	{
		inputs: [],
		name: 'technologyFeeWithdraw',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256'
			}
		],
		name: 'TechnologyFeeWithdraw',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'withdrawFee',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'token',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'totalAvailable',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'available',
				type: 'uint256'
			}
		],
		name: 'WithdrawFee',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'amountAvailable',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address[]',
				name: 'nft',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: 'tokenId',
				type: 'uint256[]'
			}
		],
		name: 'amountAvailableList',
		outputs: [
			{
				internalType: 'address[]',
				name: '',
				type: 'address[]'
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			},
			{
				internalType: 'uint256[]',
				name: '',
				type: 'uint256[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'balanceOf',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'capitalPool',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'capitalPoolFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'genesis',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'joint',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'quoteToken',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		name: 'receivedFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'technicalSupport',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'technicalSupportFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'totalAmount',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		name: 'totalNftFee',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'trade',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
];

// 交易
export const NFTDeal = '0x8708Aaa7CD331A33a3F7d5BeA2541867F0633664';
export const Abi_NFTDeal = [
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'orderId',
				type: 'uint256'
			}
		],
		name: 'cancel',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: '_feeCollector',
				type: 'address'
			}
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'orderId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offerer',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offerToken',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'identifier',
				type: 'uint256'
			}
		],
		name: 'Cancel',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint128',
				name: 'orderId',
				type: 'uint128'
			},
			{
				internalType: 'uint128',
				name: 'offerAmount',
				type: 'uint128'
			},
			{
				internalType: 'uint256',
				name: 'endTime',
				type: 'uint256'
			}
		],
		name: 'editOrder',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'uint256',
				name: 'orderId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'offerAmount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'endTime',
				type: 'uint256'
			}
		],
		name: 'EditOrder',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'orderId',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'offerAmount',
				type: 'uint256'
			}
		],
		name: 'fulfillBasicOrder',
		outputs: [
			{
				internalType: 'bool',
				name: '',
				type: 'bool'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'offerer',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offerToken',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'identifier',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'fulfiller',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'quoteToken',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'considerationAmount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'fee',
				type: 'uint256'
			}
		],
		name: 'FulfillBasicOrder',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address'
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'offerToken',
				type: 'address'
			},
			{
				internalType: 'uint128',
				name: 'identifier',
				type: 'uint128'
			},
			{
				internalType: 'uint128',
				name: 'orderType',
				type: 'uint128'
			},
			{
				internalType: 'uint256',
				name: 'offerAmount',
				type: 'uint256'
			},
			{
				internalType: 'uint256',
				name: 'endTime',
				type: 'uint256'
			}
		],
		name: 'postAnOrder',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'offerer',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'orderId',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'offerToken',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'identifier',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'offerAmount',
				type: 'uint256'
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'endTime',
				type: 'uint256'
			}
		],
		name: 'PostAnOrder',
		type: 'event'
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newFeeCollector',
				type: 'address'
			}
		],
		name: 'setFeeCollector',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'oldFeeCollector',
				type: 'address'
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'newFeeCollector',
				type: 'address'
			}
		],
		name: 'SetFeeCollector',
		type: 'event'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address'
			}
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'nft',
				type: 'address'
			},
			{
				internalType: 'uint256',
				name: 'tokenId',
				type: 'uint256'
			}
		],
		name: 'activity',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'offerer',
				type: 'address'
			}
		],
		name: 'allFererOrder',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'orderId',
						type: 'uint256'
					},
					{
						internalType: 'address',
						name: 'offerer',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'offerToken',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'identifier',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'offerAmount',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'orderType',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'endTime',
						type: 'uint256'
					}
				],
				internalType: 'struct MarketOrder[]',
				name: 'market',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'allMarketOrder',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'orderId',
						type: 'uint256'
					},
					{
						internalType: 'address',
						name: 'offerer',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'offerToken',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'identifier',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'offerAmount',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'orderType',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'endTime',
						type: 'uint256'
					}
				],
				internalType: 'struct MarketOrder[]',
				name: 'market',
				type: 'tuple[]'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'feeCollector',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'feeRatio',
		outputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'orderId',
				type: 'uint256'
			}
		],
		name: 'getMarketOrder',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'orderId',
						type: 'uint256'
					},
					{
						internalType: 'address',
						name: 'offerer',
						type: 'address'
					},
					{
						internalType: 'address',
						name: 'offerToken',
						type: 'address'
					},
					{
						internalType: 'uint256',
						name: 'identifier',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'offerAmount',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'orderType',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'endTime',
						type: 'uint256'
					}
				],
				internalType: 'struct MarketOrder',
				name: '',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [],
		name: 'quoteToken',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
];

export const Contract_synthesis = function Contract_level2(web3c) {
	return new web3c.eth.Contract(Abi_synthesis, synthesis);
};

export const Contract_capital = function Contract_level2(web3c) {
	return new web3c.eth.Contract(Abi_capital, capital);
};

export const Contract_charge = function Contract_level2(web3c) {
	return new web3c.eth.Contract(Abi_charge, charge);
};

export const Contract_NFTDeal = function Contract_level2(web3c) {
	return new web3c.eth.Contract(Abi_NFTDeal, NFTDeal);
};
