/* 主网 */
// export const middleTime = '0x0401116ECC03a3d51Ca19cB1350460C55c6281f0'; //中级有限错误，做测试
// // export const TimeAbi = [
// // 	{
// // 		inputs: [
// // 			{ internalType: 'string', name: 'baseURI_', type: 'string' },
// // 			{ internalType: 'address', name: 'payee_', type: 'address' }
// // 		],
// // 		stateMutability: 'nonpayable',
// // 		type: 'constructor'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
// // 			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
// // 			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'Approval',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
// // 			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
// // 			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
// // 		],
// // 		name: 'ApprovalForAll',
// // 		type: 'event'
// // 	},
// // 	{ anonymous: false, inputs: [{ indexed: false, internalType: 'string', name: 'baseURI', type: 'string' }], name: 'BaseURI', type: 'event' },
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
// // 			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
// // 		],
// // 		name: 'Create',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: false, internalType: 'address', name: 'oldPayee', type: 'address' },
// // 			{ indexed: false, internalType: 'address', name: 'newPayee', type: 'address' }
// // 		],
// // 		name: 'NewPayee',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: false, internalType: 'uint256', name: 'oldAmount', type: 'uint256' },
// // 			{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }
// // 		],
// // 		name: 'NewPricePer',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: false, internalType: 'address', name: 'owner', type: 'address' },
// // 			{ indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'NftBurn',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
// // 			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
// // 		],
// // 		name: 'OwnershipTransferred',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: false, internalType: 'address', name: 'oldMerge', type: 'address' },
// // 			{ indexed: false, internalType: 'address', name: 'newMerge', type: 'address' }
// // 		],
// // 		name: 'SetMerge',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
// // 			{ indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'SynthesisMint',
// // 		type: 'event'
// // 	},
// // 	{
// // 		anonymous: false,
// // 		inputs: [
// // 			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
// // 			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
// // 			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'Transfer',
// // 		type: 'event'
// // 	},
// // 	{ inputs: [], name: 'MAX_SUPPLY_100', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
// // 	{ inputs: [], name: 'MAX_SUPPLY_200', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
// // 	{ inputs: [], name: 'MAX_SUPPLY_300', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'to', type: 'address' },
// // 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'approve',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
// // 		name: 'balanceOf',
// // 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'owner', type: 'address' },
// // 			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
// // 		],
// // 		name: 'burn',
// // 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// // 		name: 'firstHolder',
// // 		outputs: [{ internalType: 'address', name: '', type: 'address' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
// // 		name: 'getApproved',
// // 		outputs: [{ internalType: 'address', name: '', type: 'address' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
// // 		name: 'getIdAndLimitedTime',
// // 		outputs: [
// // 			{ internalType: 'uint256[]', name: '', type: 'uint256[]' },
// // 			{ internalType: 'uint256[]', name: '', type: 'uint256[]' }
// // 		],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// // 		name: 'idByLimitedTime',
// // 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'owner', type: 'address' },
// // 			{ internalType: 'address', name: 'operator', type: 'address' }
// // 		],
// // 		name: 'isApprovedForAll',
// // 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: '', type: 'address' },
// // 			{ internalType: 'uint256', name: '', type: 'uint256' }
// // 		],
// // 		name: 'lotteryList',
// // 		outputs: [
// // 			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
// // 			{ internalType: 'uint256', name: 'reward', type: 'uint256' }
// // 		],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'merge', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: '_recipient', type: 'address' },
// // 			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
// // 		],
// // 		name: 'mint',
// // 		outputs: [
// // 			{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' },
// // 			{ internalType: 'uint256', name: '_time', type: 'uint256' }
// // 		],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'account', type: 'address' },
// // 			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
// // 			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
// // 		],
// // 		name: 'oneSubscribeList',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
// // 		name: 'ownerOf',
// // 		outputs: [{ internalType: 'address', name: '', type: 'address' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'payee', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
// // 	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'from', type: 'address' },
// // 			{ internalType: 'address', name: 'to', type: 'address' },
// // 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'safeTransferFrom',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'from', type: 'address' },
// // 			{ internalType: 'address', name: 'to', type: 'address' },
// // 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
// // 			{ internalType: 'bytes', name: 'data', type: 'bytes' }
// // 		],
// // 		name: 'safeTransferFrom',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'operator', type: 'address' },
// // 			{ internalType: 'bool', name: 'approved', type: 'bool' }
// // 		],
// // 		name: 'setApprovalForAll',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// // 	{ inputs: [{ internalType: 'address', name: 'newMerge', type: 'address' }], name: 'setMerge', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// // 	{ inputs: [{ internalType: 'address', name: 'newPayee', type: 'address' }], name: 'setPayee', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// // 	{ inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }], name: 'setPricePer', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address[]', name: 'account', type: 'address[]' },
// // 			{ internalType: 'uint256[]', name: 'amount', type: 'uint256[]' },
// // 			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
// // 		],
// // 		name: 'subscribeList',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'suffix', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
// // 		name: 'supportsInterface',
// // 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'recipient', type: 'address' },
// // 			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
// // 		],
// // 		name: 'synthesisMint',
// // 		outputs: [
// // 			{ internalType: 'address', name: '', type: 'address' },
// // 			{ internalType: 'uint256', name: '', type: 'uint256' },
// // 			{ internalType: 'uint256', name: '', type: 'uint256' }
// // 		],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
// // 		name: 'tokenByIndex',
// // 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'owner', type: 'address' },
// // 			{ internalType: 'uint256', name: 'index', type: 'uint256' }
// // 		],
// // 		name: 'tokenOfOwnerByIndex',
// // 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
// // 		name: 'tokenURI',
// // 		outputs: [{ internalType: 'string', name: '', type: 'string' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
// // 		name: 'tokensOwnedByIds',
// // 		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
// // 		stateMutability: 'view',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
// // 	{
// // 		inputs: [
// // 			{ internalType: 'address', name: 'from', type: 'address' },
// // 			{ internalType: 'address', name: 'to', type: 'address' },
// // 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// // 		],
// // 		name: 'transferFrom',
// // 		outputs: [],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// // 	{
// // 		inputs: [{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }],
// // 		name: 'withdraw',
// // 		outputs: [
// // 			{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' },
// // 			{ internalType: 'uint256', name: '_time', type: 'uint256' }
// // 		],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	},
// // 	{
// // 		inputs: [
// // 			{ internalType: 'uint256[]', name: 'mintAmount', type: 'uint256[]' },
// // 			{ internalType: 'uint256[]', name: 'limitedTime', type: 'uint256[]' }
// // 		],
// // 		name: 'withdrawList',
// // 		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
// // 		stateMutability: 'nonpayable',
// // 		type: 'function'
// // 	}
// // ];
// export const genesis = '0x085B4B84cCA8F97C950630a08cEBa3D43E4b8e5b'; //创世会错误(用来测试)
// export const genesisAbi = [
// 	{
// 		inputs: [
// 			{ internalType: 'string', name: 'baseURI_', type: 'string' },
// 			{ internalType: 'address', name: 'payee_', type: 'address' }
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'constructor'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
// 			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
// 			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
// 			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
// 			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
// 		],
// 		name: 'ApprovalForAll',
// 		type: 'event'
// 	},
// 	{ anonymous: false, inputs: [{ indexed: false, internalType: 'string', name: 'baseURI', type: 'string' }], name: 'BaseURI', type: 'event' },
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
// 			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
// 		],
// 		name: 'Create',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: false, internalType: 'address', name: 'oldPayee', type: 'address' },
// 			{ indexed: false, internalType: 'address', name: 'newPayee', type: 'address' }
// 		],
// 		name: 'NewPayee',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{ indexed: false, internalType: 'uint256', name: 'oldAmount', type: 'uint256' },
// 			{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }
// 		],
// 		name: 'NewPricePer',
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
// 			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	},
// 	{ inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
// 	{ inputs: [], name: 'allWithdraw', outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }], stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'to', type: 'address' },
// 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// 		],
// 		name: 'approve',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
// 		name: 'balanceOf',
// 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// 	{
// 		inputs: [{ internalType: 'address', name: '', type: 'address' }],
// 		name: 'buyList',
// 		outputs: [
// 			{ internalType: 'address', name: 'account', type: 'address' },
// 			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
// 			{ internalType: 'uint256', name: 'reward', type: 'uint256' }
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
// 	{
// 		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 		name: 'firstHolder',
// 		outputs: [{ internalType: 'address', name: '', type: 'address' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
// 		name: 'getApproved',
// 		outputs: [{ internalType: 'address', name: '', type: 'address' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'owner', type: 'address' },
// 			{ internalType: 'address', name: 'operator', type: 'address' }
// 		],
// 		name: 'isApprovedForAll',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [{ internalType: 'address', name: '_recipient', type: 'address' }],
// 		name: 'mint',
// 		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'account', type: 'address' },
// 			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
// 		],
// 		name: 'oneSubscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
// 	{
// 		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
// 		name: 'ownerOf',
// 		outputs: [{ internalType: 'address', name: '', type: 'address' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'payee', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
// 	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'from', type: 'address' },
// 			{ internalType: 'address', name: 'to', type: 'address' },
// 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'from', type: 'address' },
// 			{ internalType: 'address', name: 'to', type: 'address' },
// 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
// 			{ internalType: 'bytes', name: 'data', type: 'bytes' }
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'operator', type: 'address' },
// 			{ internalType: 'bool', name: 'approved', type: 'bool' }
// 		],
// 		name: 'setApprovalForAll',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// 	{ inputs: [{ internalType: 'address', name: 'newPayee', type: 'address' }], name: 'setPayee', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// 	{ inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }], name: 'setPricePer', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		inputs: [
// 			{ internalType: 'address[]', name: 'account', type: 'address[]' },
// 			{ internalType: 'uint256[]', name: 'amount', type: 'uint256[]' }
// 		],
// 		name: 'subscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'suffix', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// 	{
// 		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
// 		name: 'supportsInterface',
// 		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
// 	{
// 		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
// 		name: 'tokenByIndex',
// 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'owner', type: 'address' },
// 			{ internalType: 'uint256', name: 'index', type: 'uint256' }
// 		],
// 		name: 'tokenOfOwnerByIndex',
// 		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
// 		name: 'tokenURI',
// 		outputs: [{ internalType: 'string', name: '', type: 'string' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
// 		name: 'tokensOwnedByIds',
// 		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
// 	{
// 		inputs: [
// 			{ internalType: 'address', name: 'from', type: 'address' },
// 			{ internalType: 'address', name: 'to', type: 'address' },
// 			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
// 		],
// 		name: 'transferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
// 	{ inputs: [], name: 'withdraw', outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function' },
// 	{
// 		inputs: [{ internalType: 'uint256', name: 'mintAmount', type: 'uint256' }],
// 		name: 'withdrawList',
// 		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	}
// ];

export const realTime = '0x9267e2Cc841334bc9d5eAeF09958c67E24abB0B8'; //实时有限
export const middleTime = '0x8Da6ecD7AF37313beA5a20dD8Ac0f5e4b4e9F987'; //中级有限
export const highTime = '0x2EE0bb3b40137ddEB9b2a25343De4df207010ecd'; //高级有限
//有限卡牌Abi
export const TimeAbi = [
	{
		inputs: [
			{ internalType: 'string', name: 'baseURI_', type: 'string' },
			{ internalType: 'address', name: 'payee_', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: false, internalType: 'string', name: 'baseURI', type: 'string' }], name: 'BaseURI', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'Create',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'oldPayee', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'newPayee', type: 'address' }
		],
		name: 'NewPayee',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'oldAmount', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }
		],
		name: 'NewPricePer',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'NftBurn',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'oldMerge', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'newMerge', type: 'address' }
		],
		name: 'SetMerge',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'SynthesisMint',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{ inputs: [], name: 'MAX_SUPPLY_100', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'MAX_SUPPLY_200', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'MAX_SUPPLY_300', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
		],
		name: 'burn',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'firstHolder',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'getIdAndLimitedTime',
		outputs: [
			{ internalType: 'uint256[]', name: '', type: 'uint256[]' },
			{ internalType: 'uint256[]', name: '', type: 'uint256[]' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'idByLimitedTime',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: '', type: 'address' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		name: 'lotteryList',
		outputs: [
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint256', name: 'reward', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'merge', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: '_recipient', type: 'address' },
			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
		],
		name: 'mint',
		outputs: [
			{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' },
			{ internalType: 'uint256', name: '_time', type: 'uint256' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
		],
		name: 'oneSubscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'payee', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: 'newMerge', type: 'address' }], name: 'setMerge', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: 'newPayee', type: 'address' }], name: 'setPayee', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }], name: 'setPricePer', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address[]', name: 'account', type: 'address[]' },
			{ internalType: 'uint256[]', name: 'amount', type: 'uint256[]' },
			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
		],
		name: 'subscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'suffix', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'recipient', type: 'address' },
			{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }
		],
		name: 'synthesisMint',
		outputs: [
			{ internalType: 'address', name: '', type: 'address' },
			{ internalType: 'uint256', name: '', type: 'uint256' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'tokensOwnedByIds',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'limitedTime', type: 'uint256' }],
		name: 'withdraw',
		outputs: [
			{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' },
			{ internalType: 'uint256', name: '_time', type: 'uint256' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'uint256[]', name: 'mintAmount', type: 'uint256[]' },
			{ internalType: 'uint256[]', name: 'limitedTime', type: 'uint256[]' }
		],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

export const realForever = '0x7DEA2099C0507213A8e8b9C6144974C11A283616'; //实时永久
export const middleForever = '0xE3F02cfeb182E6d94E9fE7871941508ACF588ba2'; //中级永久
export const highForever = '0x64a306f46ACF194cCD6EcBfc20b1bbb31c405d60'; //高级永久
//永久卡牌Abi
export const ForeverAbi = [
	{
		inputs: [
			{ internalType: 'string', name: 'baseURI_', type: 'string' },
			{ internalType: 'address', name: 'payee_', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: false, internalType: 'string', name: 'baseURI', type: 'string' }], name: 'BaseURI', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'Create',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'oldPayee', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'newPayee', type: 'address' }
		],
		name: 'NewPayee',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'oldAmount', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }
		],
		name: 'NewPricePer',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'oldMerge', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'newMerge', type: 'address' }
		],
		name: 'SetMerge',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'SynthesisMint',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{ inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'allWithdraw', outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'firstHolder',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'lotteryList',
		outputs: [
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint256', name: 'reward', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'merge', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: '_recipient', type: 'address' }],
		name: 'mint',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'oneSubscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'payee', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: 'newMerge', type: 'address' }], name: 'setMerge', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: 'newPayee', type: 'address' }], name: 'setPayee', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }], name: 'setPricePer', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address[]', name: 'account', type: 'address[]' },
			{ internalType: 'uint256[]', name: 'amount', type: 'uint256[]' }
		],
		name: 'subscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'suffix', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: 'recipient', type: 'address' }],
		name: 'synthesisMint',
		outputs: [
			{ internalType: 'address', name: '', type: 'address' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'tokensOwnedByIds',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'withdraw', outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'mintAmount', type: 'uint256' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

// 创世会
export const genesis = '0x15b8054314A5a9D34728367327c40b72405c1Bc8'; //创世会
export const genesisAbi = [
	{
		inputs: [
			{ internalType: 'string', name: 'baseURI_', type: 'string' },
			{ internalType: 'address', name: 'payee_', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: false, internalType: 'string', name: 'baseURI', type: 'string' }], name: 'BaseURI', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'Create',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'oldPayee', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'newPayee', type: 'address' }
		],
		name: 'NewPayee',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'oldAmount', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }
		],
		name: 'NewPricePer',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{ inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'allWithdraw', outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'buyList',
		outputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint256', name: 'reward', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'firstHolder',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_recipient', type: 'address' }],
		name: 'mint',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'oneSubscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'payee', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: 'newPayee', type: 'address' }], name: 'setPayee', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }], name: 'setPricePer', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address[]', name: 'account', type: 'address[]' },
			{ internalType: 'uint256[]', name: 'amount', type: 'uint256[]' }
		],
		name: 'subscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'suffix', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'tokensOwnedByIds',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'withdraw', outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'mintAmount', type: 'uint256' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

/* 联合会 */
export const union = '0x2C1Ca7068914B3cA2982955B354629506E8b2D2E'; //联合会
export const unionAbi = [
	{
		inputs: [
			{ internalType: 'string', name: 'baseURI_', type: 'string' },
			{ internalType: 'address', name: 'payee_', type: 'address' }
		],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'approved', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Approval',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'owner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'operator', type: 'address' },
			{ indexed: false, internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'ApprovalForAll',
		type: 'event'
	},
	{ anonymous: false, inputs: [{ indexed: false, internalType: 'string', name: 'baseURI', type: 'string' }], name: 'BaseURI', type: 'event' },
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'account', type: 'address' },
			{ indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'Create',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'address', name: 'oldPayee', type: 'address' },
			{ indexed: false, internalType: 'address', name: 'newPayee', type: 'address' }
		],
		name: 'NewPayee',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'oldAmount', type: 'uint256' },
			{ indexed: false, internalType: 'uint256', name: 'newAmount', type: 'uint256' }
		],
		name: 'NewPricePer',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
		],
		name: 'OwnershipTransferred',
		type: 'event'
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, internalType: 'address', name: 'from', type: 'address' },
			{ indexed: true, internalType: 'address', name: 'to', type: 'address' },
			{ indexed: true, internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'Transfer',
		type: 'event'
	},
	{ inputs: [], name: 'MAX_SUPPLY', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'allWithdraw', outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'approve',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'balanceOf',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'baseURI', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'address', name: '', type: 'address' }],
		name: 'buyList',
		outputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' },
			{ internalType: 'uint256', name: 'reward', type: 'uint256' }
		],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		name: 'firstHolder',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'getApproved',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'address', name: 'operator', type: 'address' }
		],
		name: 'isApprovedForAll',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_recipient', type: 'address' }],
		name: 'mint',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'name', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'account', type: 'address' },
			{ internalType: 'uint256', name: 'amount', type: 'uint256' }
		],
		name: 'oneSubscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'owner', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'ownerOf',
		outputs: [{ internalType: 'address', name: '', type: 'address' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'payee', outputs: [{ internalType: 'address', name: '', type: 'address' }], stateMutability: 'view', type: 'function' },
	{ inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' },
			{ internalType: 'bytes', name: 'data', type: 'bytes' }
		],
		name: 'safeTransferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'operator', type: 'address' },
			{ internalType: 'bool', name: 'approved', type: 'bool' }
		],
		name: 'setApprovalForAll',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'string', name: 'baseURI_', type: 'string' }], name: 'setBaseURI', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'address', name: 'newPayee', type: 'address' }], name: 'setPayee', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [{ internalType: 'uint256', name: 'newPrice', type: 'uint256' }], name: 'setPricePer', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [
			{ internalType: 'address[]', name: 'account', type: 'address[]' },
			{ internalType: 'uint256[]', name: 'amount', type: 'uint256[]' }
		],
		name: 'subscribeList',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'suffix', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'bytes4', name: 'interfaceId', type: 'bytes4' }],
		name: 'supportsInterface',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'symbol', outputs: [{ internalType: 'string', name: '', type: 'string' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'index', type: 'uint256' }],
		name: 'tokenByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'index', type: 'uint256' }
		],
		name: 'tokenOfOwnerByIndex',
		outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'tokenURI',
		outputs: [{ internalType: 'string', name: '', type: 'string' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'tokensOwnedByIds',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{ inputs: [], name: 'totalSupply', outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], stateMutability: 'view', type: 'function' },
	{
		inputs: [
			{ internalType: 'address', name: 'from', type: 'address' },
			{ internalType: 'address', name: 'to', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'transferFrom',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }], name: 'transferOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
	{ inputs: [], name: 'withdraw', outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }], stateMutability: 'nonpayable', type: 'function' },
	{
		inputs: [{ internalType: 'uint256', name: 'mintAmount', type: 'uint256' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

//
//
//
/* 测试网 */
// export const realTime = '0xB139F98bA950d6D4c4d3a1C8A932D01fa6c7adF3'; //实时有限
// export const middleTime = '0xD9aC711903c6f5A3D0A3d56ba5FF09e008A579F5'; //中级有限
// export const highTime = '0x7A91CFD673EF47d36b644C1a33f572c2923A747a'; //高级有限
//有限卡牌Abi
// export const TimeAbi = [
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'payee_',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'constructor'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'approved',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'ApprovalForAll',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'approve',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'string',
// 				name: 'baseURI',
// 				type: 'string'
// 			}
// 		],
// 		name: 'BaseURI',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: 'tokenId',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'burn',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'create',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'payable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Create',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '_recipient',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'limitedTime',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'mint',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: '_time',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'oldPayee',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'NewPayee',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'oldAmount',
// 				type: 'uint256'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'newAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'NewPricePer',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'NftBurn',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'limitedTime',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'previousOwner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'renounceOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'bytes',
// 				name: 'data',
// 				type: 'bytes'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'setApprovalForAll',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			}
// 		],
// 		name: 'setBaseURI',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newMerge',
// 				type: 'address'
// 			}
// 		],
// 		name: 'setMerge',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'oldMerge',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'newMerge',
// 				type: 'address'
// 			}
// 		],
// 		name: 'SetMerge',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'setPayee',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'newPrice',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'setPricePer',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address[]',
// 				name: 'account',
// 				type: 'address[]'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: 'amount',
// 				type: 'uint256[]'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'limitedTime',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'subscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'recipient',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'limitedTime',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'synthesisMint',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'SynthesisMint',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'transferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'transferOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'limitedTime',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'withdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: '_time',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: 'mintAmount',
// 				type: 'uint256[]'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: 'limitedTime',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'withdrawList',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'balanceOf',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'firstHolder',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'getApproved',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'getBaseURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'getIdAndLimitedTime',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'limitedTime',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'getLimitedTimeOf',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'idByLimitedTime',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			}
// 		],
// 		name: 'isApprovedForAll',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'lotteryList',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'reward',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_SUPPLY_100',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_SUPPLY_200',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_SUPPLY_300',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'merge',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'name',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'owner',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'ownerOf',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'payee',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'bytes4',
// 				name: 'interfaceId',
// 				type: 'bytes4'
// 			}
// 		],
// 		name: 'supportsInterface',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'symbol',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenOfOwnerByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'tokensOwnedByIds',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'totalSupply',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	}
// ];

// export const realForever = '0x30ee224B012C6Db381F78365cE06DFAB6f921CFc'; //实时永久
// export const middleForever = '0x91Ed03491ED9b0e983cC9E447a3201401029025e'; //中级永久
// export const highForever = '0x90d312ea534DE72188b6Df88F9A4c964419e8961'; //高级永久
// //永久卡牌Abi
// export const ForeverAbi = [
// 	{
// 		inputs: [],
// 		name: 'allWithdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'payee_',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'constructor'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'approved',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'ApprovalForAll',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'approve',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'string',
// 				name: 'baseURI',
// 				type: 'string'
// 			}
// 		],
// 		name: 'BaseURI',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'create',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'payable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Create',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '_recipient',
// 				type: 'address'
// 			}
// 		],
// 		name: 'mint',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'oldPayee',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'NewPayee',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'oldAmount',
// 				type: 'uint256'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'newAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'NewPricePer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'previousOwner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'renounceOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'bytes',
// 				name: 'data',
// 				type: 'bytes'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'setApprovalForAll',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			}
// 		],
// 		name: 'setBaseURI',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newMerge',
// 				type: 'address'
// 			}
// 		],
// 		name: 'setMerge',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'oldMerge',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'newMerge',
// 				type: 'address'
// 			}
// 		],
// 		name: 'SetMerge',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'setPayee',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'newPrice',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'setPricePer',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address[]',
// 				name: 'account',
// 				type: 'address[]'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: 'amount',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'subscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'recipient',
// 				type: 'address'
// 			}
// 		],
// 		name: 'synthesisMint',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'SynthesisMint',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'transferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'transferOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'withdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'mintAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'withdrawList',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'balanceOf',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'firstHolder',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'getApproved',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'getBaseURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			}
// 		],
// 		name: 'isApprovedForAll',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		name: 'lotteryList',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'reward',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_SUPPLY',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'merge',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'name',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'owner',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'ownerOf',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'payee',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'bytes4',
// 				name: 'interfaceId',
// 				type: 'bytes4'
// 			}
// 		],
// 		name: 'supportsInterface',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'symbol',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenOfOwnerByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'tokensOwnedByIds',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'totalSupply',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	}
// ];

// export const genesis = '0x697cA53a2cDab07e9ccB5298725F1EEb1eB7AAFA'; //创世会
// //创世会Abi
// export const genesisAbi = [
// 	{
// 		inputs: [],
// 		name: 'allWithdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'payee_',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'constructor'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'approved',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'ApprovalForAll',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'approve',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'string',
// 				name: 'baseURI',
// 				type: 'string'
// 			}
// 		],
// 		name: 'BaseURI',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'create',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'payable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Create',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '_recipient',
// 				type: 'address'
// 			}
// 		],
// 		name: 'mint',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'oldPayee',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'NewPayee',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'oldAmount',
// 				type: 'uint256'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'newAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'NewPricePer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'previousOwner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'renounceOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'bytes',
// 				name: 'data',
// 				type: 'bytes'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'setApprovalForAll',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			}
// 		],
// 		name: 'setBaseURI',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'setPayee',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'newPrice',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'setPricePer',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address[]',
// 				name: 'account',
// 				type: 'address[]'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: 'amount',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'subscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'transferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'transferOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'withdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'mintAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'withdrawList',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'balanceOf',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		name: 'buyList',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'reward',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'firstHolder',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'getApproved',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'getBaseURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			}
// 		],
// 		name: 'isApprovedForAll',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_SUPPLY',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'name',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'owner',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'ownerOf',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'payee',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'bytes4',
// 				name: 'interfaceId',
// 				type: 'bytes4'
// 			}
// 		],
// 		name: 'supportsInterface',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'symbol',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenOfOwnerByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'tokensOwnedByIds',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'totalSupply',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	}
// ];

// export const union = '0x4EbC07DcA0E6343e2E026DBeED0FAB261b42794e'; //联合会
// //联合会Abi
// export const unionAbi = [
// 	{
// 		inputs: [],
// 		name: 'allWithdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'payee_',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'constructor'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'approved',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Approval',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'ApprovalForAll',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'approve',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'string',
// 				name: 'baseURI',
// 				type: 'string'
// 			}
// 		],
// 		name: 'BaseURI',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'create',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'payable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Create',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '_recipient',
// 				type: 'address'
// 			}
// 		],
// 		name: 'mint',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'oldPayee',
// 				type: 'address'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'NewPayee',
// 		type: 'event'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'oldAmount',
// 				type: 'uint256'
// 			},
// 			{
// 				indexed: false,
// 				internalType: 'uint256',
// 				name: 'newAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'NewPricePer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'previousOwner',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'OwnershipTransferred',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [],
// 		name: 'renounceOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'bytes',
// 				name: 'data',
// 				type: 'bytes'
// 			}
// 		],
// 		name: 'safeTransferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'bool',
// 				name: 'approved',
// 				type: 'bool'
// 			}
// 		],
// 		name: 'setApprovalForAll',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'string',
// 				name: 'baseURI_',
// 				type: 'string'
// 			}
// 		],
// 		name: 'setBaseURI',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newPayee',
// 				type: 'address'
// 			}
// 		],
// 		name: 'setPayee',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'newPrice',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'setPricePer',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address[]',
// 				name: 'account',
// 				type: 'address[]'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: 'amount',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'subscribeList',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		anonymous: false,
// 		inputs: [
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				indexed: true,
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'Transfer',
// 		type: 'event'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'from',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'to',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'transferFrom',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'newOwner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'transferOwnership',
// 		outputs: [],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'withdraw',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '_mintTokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'mintAmount',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'withdrawList',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'nonpayable',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'balanceOf',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		name: 'buyList',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: 'account',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'amount',
// 				type: 'uint256'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'reward',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'firstHolder',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'getApproved',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'getBaseURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'address',
// 				name: 'operator',
// 				type: 'address'
// 			}
// 		],
// 		name: 'isApprovedForAll',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'MAX_SUPPLY',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'name',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'owner',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'ownerOf',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'payee',
// 		outputs: [
// 			{
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'bytes4',
// 				name: 'interfaceId',
// 				type: 'bytes4'
// 			}
// 		],
// 		name: 'supportsInterface',
// 		outputs: [
// 			{
// 				internalType: 'bool',
// 				name: '',
// 				type: 'bool'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'symbol',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'index',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenOfOwnerByIndex',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'tokensOwnedByIds',
// 		outputs: [
// 			{
// 				internalType: 'uint256[]',
// 				name: '',
// 				type: 'uint256[]'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenURI',
// 		outputs: [
// 			{
// 				internalType: 'string',
// 				name: '',
// 				type: 'string'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	},
// 	{
// 		inputs: [],
// 		name: 'totalSupply',
// 		outputs: [
// 			{
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		stateMutability: 'view',
// 		type: 'function'
// 	}
// ];

export const Contract_realTime = function Contract_realTime(web3c) {
	return new web3c.eth.Contract(TimeAbi, realTime);
};
export const Contract_middleTime = function Contract_middleTime(web3c) {
	return new web3c.eth.Contract(TimeAbi, middleTime);
};
export const Contract_highTime = function Contract_highTime(web3c) {
	return new web3c.eth.Contract(TimeAbi, highTime);
};
export const Contract_realForever = function Contract_realForever(web3c) {
	return new web3c.eth.Contract(ForeverAbi, realForever);
};
export const Contract_middleForever = function Contract_middleForever(web3c) {
	return new web3c.eth.Contract(ForeverAbi, middleForever);
};
export const Contract_highForever = function Contract_highForever(web3c) {
	return new web3c.eth.Contract(ForeverAbi, highForever);
};
export const Contract_genesis = function Contract_genesis(web3c) {
	return new web3c.eth.Contract(genesisAbi, genesis);
};
export const Contract_union = function Contract_union(web3c) {
	return new web3c.eth.Contract(unionAbi, union);
};
