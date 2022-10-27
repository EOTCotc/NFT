﻿export const contractAddress = '0xca6dDF79aA21F8298Fe674B3063c0E773C1BEE38'; //rinkeby测试网中的合约
export const contractAbi = [
	{
		constant: false,
		inputs: [{ name: '_tokenAddress', type: 'address' }],
		name: 'withdrawalToken',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'amount', type: 'uint256' },
			{ name: 'orderID', type: 'string' },
			{ name: 'orderads', type: 'address' }
		],
		name: 'transferIn1',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{ name: 'orderID', type: 'string' }],
		name: 'getInfo_arb',
		outputs: [
			{ name: '', type: 'address' },
			{ name: '', type: 'uint256' }
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'orderID', type: 'string' },
			{ name: 'amount', type: 'uint256' }
		],
		name: 'transferOutfor1',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'oid', type: 'string' },
			{ name: 'oads', type: 'address' },
			{ name: 'oads1', type: 'address' },
			{ name: 'amount', type: 'uint256' }
		],
		name: 'SetOrders',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{ name: 'orderID', type: 'string' }],
		name: 'getInfo_orderOut',
		outputs: [
			{ name: '', type: 'address' },
			{ name: '', type: 'uint256' },
			{ name: '', type: 'address' }
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'amount', type: 'uint256' },
			{ name: 'orderID', type: 'string' }
		],
		name: 'transferAdd',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'amount', type: 'uint256' },
			{ name: '_ads', type: 'address' }
		],
		name: 'transferIn2',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_ads', type: 'address[]' },
			{ name: '_amount', type: 'uint256[]' },
			{ name: 'uid', type: 'string' }
		],
		name: 'airMsg',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{ name: 'ads', type: 'address' }],
		name: 'getInfo_air',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'orderID', type: 'string' },
			{ name: 'amount', type: 'uint256' }
		],
		name: 'arbMsgOut',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{ name: 'orderID', type: 'string' }],
		name: 'getInfo_order',
		outputs: [
			{ name: '', type: 'address' },
			{ name: '', type: 'uint256' }
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{ name: '_tokenAddress', type: 'address' }],
		name: 'SetToken_eotc',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{ name: '_tokenAddress', type: 'address' }],
		name: 'SetToken_usdt',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'amount', type: 'uint256' },
			{ name: '_tokenAddress', type: 'address' }
		],
		name: 'transferIn0',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'amount', type: 'uint256' },
			{ name: 'orderID', type: 'string' }
		],
		name: 'transferIn',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'airMsgOut',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'myaddress', type: 'address' },
			{ name: '_eth', type: 'uint256' }
		],
		name: 'withdraw',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'myaddress', type: 'address' },
			{ name: 'amount', type: 'uint256' },
			{ name: '_tokenAddress', type: 'address' }
		],
		name: 'transferOut0',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'orderID', type: 'string' },
			{ name: 'amount', type: 'uint256' },
			{ name: 'orderads', type: 'address' }
		],
		name: 'transferOutfor',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'amount', type: 'uint256' },
			{ name: 'orderID', type: 'string' },
			{ name: '_ads', type: 'address' }
		],
		name: 'arbMsg',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_recipients', type: 'address[]' },
			{ name: '_values', type: 'uint256[]' },
			{ name: 'uid', type: 'string' },
			{ name: '_tokenAddress', type: 'address' }
		],
		name: 'AirTransfer',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: 'orderID', type: 'string' },
			{ name: 'amount', type: 'uint256' }
		],
		name: 'transferOut',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor'
	}
];

export const contractAddress_usdt = '0x9F7e2625794505F3b0CcCd46e56cDF2aC4c840BB'; //rinkeby测试网中自发行的USDT
export const contractAbi_usdt = [
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_spender',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'approve',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [
			{
				name: '',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_from',
				type: 'address'
			},
			{
				name: '_to',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'transferFrom',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [
			{
				name: '',
				type: 'uint8'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'founder',
		outputs: [
			{
				name: '',
				type: 'address'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'version',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '_owner',
				type: 'address'
			}
		],
		name: 'balanceOf',
		outputs: [
			{
				name: 'balance',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [
			{
				name: '',
				type: 'string'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_to',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'transfer',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_spender',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			},
			{
				name: '_extraData',
				type: 'bytes'
			}
		],
		name: 'approveAndCallcode',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{
				name: '_spender',
				type: 'address'
			},
			{
				name: '_value',
				type: 'uint256'
			},
			{
				name: '_extraData',
				type: 'bytes'
			}
		],
		name: 'approveAndCall',
		outputs: [
			{
				name: 'success',
				type: 'bool'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{
				name: '_owner',
				type: 'address'
			},
			{
				name: '_spender',
				type: 'address'
			}
		],
		name: 'allowance',
		outputs: [
			{
				name: 'remaining',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				name: 'supply',
				type: 'uint256'
			}
		],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		payable: false,
		stateMutability: 'nonpayable',
		type: 'fallback'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: '_from',
				type: 'address'
			},
			{
				indexed: true,
				name: '_to',
				type: 'address'
			},
			{
				indexed: false,
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'Transfer',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: '_owner',
				type: 'address'
			},
			{
				indexed: true,
				name: '_spender',
				type: 'address'
			},
			{
				indexed: false,
				name: '_value',
				type: 'uint256'
			}
		],
		name: 'Approval',
		type: 'event'
	}
];

export const contractAddress_eotc = '0xa10Bc38b56675F1721e5F329d6836f40dE67CDB1';
export const contractAbi_eotc = [
	{
		constant: true,
		inputs: [],
		name: 'mintingFinished',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'name',
		outputs: [{ name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_spender', type: 'address' },
			{ name: '_value', type: 'uint256' }
		],
		name: 'approve',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'totalSupply',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_from', type: 'address' },
			{ name: '_to', type: 'address' },
			{ name: '_value', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'decimals',
		outputs: [{ name: '', type: 'uint8' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'unpause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_to', type: 'address' },
			{ name: '_amount', type: 'uint256' }
		],
		name: 'mint',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'paused',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_spender', type: 'address' },
			{ name: '_subtractedValue', type: 'uint256' }
		],
		name: 'decreaseApproval',
		outputs: [{ name: 'success', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [{ name: '_owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [],
		name: 'pause',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'owner',
		outputs: [{ name: '', type: 'address' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'symbol',
		outputs: [{ name: '', type: 'string' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_to', type: 'address' },
			{ name: '_value', type: 'uint256' }
		],
		name: 'transfer',
		outputs: [{ name: '', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [],
		name: 'mintTotal',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [
			{ name: '_spender', type: 'address' },
			{ name: '_addedValue', type: 'uint256' }
		],
		name: 'increaseApproval',
		outputs: [{ name: 'success', type: 'bool' }],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		constant: true,
		inputs: [
			{ name: '_owner', type: 'address' },
			{ name: '_spender', type: 'address' }
		],
		name: 'allowance',
		outputs: [{ name: '', type: 'uint256' }],
		payable: false,
		stateMutability: 'view',
		type: 'function'
	},
	{
		constant: false,
		inputs: [{ name: 'newOwner', type: 'address' }],
		name: 'transferOwnership',
		outputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [],
		payable: false,
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{ payable: true, stateMutability: 'payable', type: 'fallback' },
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: 'to', type: 'address' },
			{ indexed: false, name: 'amount', type: 'uint256' }
		],
		name: 'Mint',
		type: 'event'
	},
	{ anonymous: false, inputs: [], name: 'Pause', type: 'event' },
	{ anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
	{
		anonymous: false,
		inputs: [{ indexed: true, name: 'previousOwner', type: 'address' }],
		name: 'OwnershipRenounced',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: 'previousOwner', type: 'address' },
			{ indexed: true, name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: 'owner', type: 'address' },
			{ indexed: true, name: 'spender', type: 'address' },
			{ indexed: false, name: 'value', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: 'from', type: 'address' },
			{ indexed: true, name: 'to', type: 'address' },
			{ indexed: false, name: 'value', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	}
];

/* 正式网 */
// export const contractAddress = '0xe643216f6225851e9ff030e67268ebcfc2420a42';
// export const contractAbi = [
// 	{ constant: false, inputs: [{ name: '_tokenAddress', type: 'address' }], name: 'withdrawalToken', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: 'orderID', type: 'string' },
// 			{ name: 'orderads', type: 'address' }
// 		],
// 		name: 'transferIn1',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: true,
// 		inputs: [{ name: 'orderID', type: 'string' }],
// 		name: 'getInfo_arb',
// 		outputs: [
// 			{ name: '', type: 'address' },
// 			{ name: '', type: 'uint256' }
// 		],
// 		payable: false,
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'orderID', type: 'string' },
// 			{ name: 'amount', type: 'uint256' }
// 		],
// 		name: 'transferOutfor1',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'oid', type: 'string' },
// 			{ name: 'oads', type: 'address' },
// 			{ name: 'oads1', type: 'address' },
// 			{ name: 'amount', type: 'uint256' }
// 		],
// 		name: 'SetOrders',
// 		outputs: [],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: true,
// 		inputs: [{ name: 'orderID', type: 'string' }],
// 		name: 'getInfo_orderOut',
// 		outputs: [
// 			{ name: '', type: 'address' },
// 			{ name: '', type: 'uint256' },
// 			{ name: '', type: 'address' }
// 		],
// 		payable: false,
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: 'orderID', type: 'string' }
// 		],
// 		name: 'transferAdd',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: '_ads', type: 'address' }
// 		],
// 		name: 'transferIn2',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_ads', type: 'address[]' },
// 			{ name: '_amount', type: 'uint256[]' },
// 			{ name: 'uid', type: 'string' }
// 		],
// 		name: 'airMsg',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [{ name: 'ads', type: 'address' }], name: 'getInfo_air', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'orderID', type: 'string' },
// 			{ name: 'amount', type: 'uint256' }
// 		],
// 		name: 'arbMsgOut',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: true,
// 		inputs: [{ name: 'orderID', type: 'string' }],
// 		name: 'getInfo_order',
// 		outputs: [
// 			{ name: '', type: 'address' },
// 			{ name: '', type: 'uint256' }
// 		],
// 		payable: false,
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ constant: false, inputs: [{ name: '_tokenAddress', type: 'address' }], name: 'SetToken_eotc', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{ constant: false, inputs: [{ name: '_tokenAddress', type: 'address' }], name: 'SetToken_usdt', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: '_tokenAddress', type: 'address' }
// 		],
// 		name: 'transferIn0',
// 		outputs: [],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: 'orderID', type: 'string' }
// 		],
// 		name: 'transferIn',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: false, inputs: [], name: 'airMsgOut', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'myaddress', type: 'address' },
// 			{ name: '_eth', type: 'uint256' }
// 		],
// 		name: 'withdraw',
// 		outputs: [],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'myaddress', type: 'address' },
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: '_tokenAddress', type: 'address' }
// 		],
// 		name: 'transferOut0',
// 		outputs: [],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'orderID', type: 'string' },
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: 'orderads', type: 'address' }
// 		],
// 		name: 'transferOutfor',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'amount', type: 'uint256' },
// 			{ name: 'orderID', type: 'string' },
// 			{ name: '_ads', type: 'address' }
// 		],
// 		name: 'arbMsg',
// 		outputs: [],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_recipients', type: 'address[]' },
// 			{ name: '_values', type: 'uint256[]' },
// 			{ name: 'uid', type: 'string' },
// 			{ name: '_tokenAddress', type: 'address' }
// 		],
// 		name: 'AirTransfer',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: 'orderID', type: 'string' },
// 			{ name: 'amount', type: 'uint256' }
// 		],
// 		name: 'transferOut',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' }
// ];
// export const contractAddress_usdt = '0x55d398326f99059fF775485246999027B3197955';
// export const contractAbi_usdt = [
// 	{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
// 			{ indexed: true, internalType: 'address', name: 'spender', type: 'address' },
// 			{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
// 			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
// 			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
// 			{ indexed: false, internalType: 'uint256', name: 'value', type: 'uint256' }
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	},
// 	{ constant: true, inputs: [], name: '_decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: true, inputs: [], name: '_name', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: true, inputs: [], name: '_symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: true,
// 		inputs: [
// 			{ internalType: 'address', name: 'owner', type: 'address' },
// 			{ internalType: 'address', name: 'spender', type: 'address' }
// 		],
// 		name: 'allowance',
// 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 		payable: false,
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ internalType: 'address', name: 'spender', type: 'address' },
// 			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
// 		],
// 		name: 'approve',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: true,
// 		inputs: [{ internalType: 'address', name: 'account', type: 'address' }],
// 		name: 'balanceOf',
// 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 		payable: false,
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
// 		name: 'burn',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'decimals', outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ internalType: 'address', name: 'spender', type: 'address' },
// 			{ internalType: 'uint256', name: 'subtractedValue', type: 'uint256' }
// 		],
// 		name: 'decreaseAllowance',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'getOwner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ internalType: 'address', name: 'spender', type: 'address' },
// 			{ internalType: 'uint256', name: 'addedValue', type: 'uint256' }
// 		],
// 		name: 'increaseAllowance',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [{ internalType: 'uint256', name: 'amount', type: 'uint256' }],
// 		name: 'mint',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: true, inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: false, inputs: [], name: 'renounceOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{ constant: true, inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: true, inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ internalType: 'address', name: 'recipient', type: 'address' },
// 			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
// 		],
// 		name: 'transfer',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: false,
// 		inputs: [
// 			{ internalType: 'address', name: 'sender', type: 'address' },
// 			{ internalType: 'address', name: 'recipient', type: 'address' },
// 			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
// 		],
// 		name: 'transferFrom',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: false, inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' }
// ];

// export const contractAddress_eotc = '0x52445374E55a63C0De647445D5B6a4244702980C';
// export const contractAbi_eotc = [
// 	{ constant: true, inputs: [], name: 'mintingFinished', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: true, inputs: [], name: 'name', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_spender', type: 'address' },
// 			{ name: '_value', type: 'uint256' }
// 		],
// 		name: 'approve',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'totalSupply', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_from', type: 'address' },
// 			{ name: '_to', type: 'address' },
// 			{ name: '_value', type: 'uint256' }
// 		],
// 		name: 'transferFrom',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'decimals', outputs: [{ name: '', type: 'uint8' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: false, inputs: [], name: 'unpause', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_to', type: 'address' },
// 			{ name: '_amount', type: 'uint256' }
// 		],
// 		name: 'mint',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'paused', outputs: [{ name: '', type: 'bool' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_spender', type: 'address' },
// 			{ name: '_subtractedValue', type: 'uint256' }
// 		],
// 		name: 'decreaseApproval',
// 		outputs: [{ name: 'success', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [{ name: '_owner', type: 'address' }], name: 'balanceOf', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: false, inputs: [], name: 'pause', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{ constant: true, inputs: [], name: 'owner', outputs: [{ name: '', type: 'address' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{ constant: true, inputs: [], name: 'symbol', outputs: [{ name: '', type: 'string' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_to', type: 'address' },
// 			{ name: '_value', type: 'uint256' }
// 		],
// 		name: 'transfer',
// 		outputs: [{ name: '', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ constant: true, inputs: [], name: 'mintTotal', outputs: [{ name: '', type: 'uint256' }], payable: false, stateMutability: 'view', type: 'function' },
// 	{
// 		constant: false,
// 		inputs: [
// 			{ name: '_spender', type: 'address' },
// 			{ name: '_addedValue', type: 'uint256' }
// 		],
// 		name: 'increaseApproval',
// 		outputs: [{ name: 'success', type: 'bool' }],
// 		payable: false,
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		constant: true,
// 		inputs: [
// 			{ name: '_owner', type: 'address' },
// 			{ name: '_spender', type: 'address' }
// 		],
// 		name: 'allowance',
// 		outputs: [{ name: '', type: 'uint256' }],
// 		payable: false,
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ constant: false, inputs: [{ name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], payable: false, stateMutability: 'nonpayable', type: 'function' },
// 	{ inputs: [], payable: false, stateMutability: 'nonpayable', type: 'constructor' },
// 	{ payable: true, stateMutability: 'payable', type: 'fallback' },
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, name: 'to', type: 'address' },
// 			{ indexed: false, name: 'amount', type: 'uint256' }
// 		],
// 		name: 'Mint',
// 		type: 'event'
// 	},
// 	{ anonymous: false, inputs: [], name: 'Pause', type: 'event' },
// 	{ anonymous: false, inputs: [], name: 'Unpause', type: 'event' },
// 	{ anonymous: false, inputs: [{ indexed: true, name: 'previousOwner', type: 'address' }], name: 'OwnershipRenounced', type: 'event' },
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, name: 'previousOwner', type: 'address' },
// 			{ indexed: true, name: 'newOwner', type: 'address' }
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, name: 'owner', type: 'address' },
// 			{ indexed: true, name: 'spender', type: 'address' },
// 			{ indexed: false, name: 'value', type: 'uint256' }
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, name: 'from', type: 'address' },
// 			{ indexed: true, name: 'to', type: 'address' },
// 			{ indexed: false, name: 'value', type: 'uint256' }
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	}
// ];

export const Contract_EOTC = function Contract_EOTC(web3c) {
	return new web3c.eth.Contract(contractAbi, contractAddress);
};
export const Webs_infura = function Webs_infura() {
	//返回infura的Web3对象
	var i_web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/3b5e58462f7a4daaa7ae10f44d93be36'));
	return new i_web3.eth.Contract(contractAbi, contractAddress);
};
export const Contract_USDT = function Contract_USDT(web3c) {
	return new web3c.eth.Contract(contractAbi_usdt, contractAddress_usdt);
};
export const Contract_EOTC_token = function Contract_EOTC_token(web3c) {
	return new web3c.eth.Contract(contractAbi_eotc, contractAddress_eotc);
};
