/* 主网 */
export const level1 = '0x1f63F101d93174D3A471687176eDb4fa269946E0';
export const Abi_level1 = [
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
		name: 'Subscribe',
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
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'blindBoxList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'burn',
		outputs: [
			{ internalType: 'address', name: '', type: 'address' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
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
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'oneSubscribe',
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
			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
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
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'withdraw',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
export const level2 = '0x03660E43393a4540FE7405EcCBdf492592a4Dbcd';
export const Abi_level2 = [
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
		name: 'Subscribe',
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
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'blindBoxList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{ internalType: 'address', name: 'owner', type: 'address' },
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'burn',
		outputs: [
			{ internalType: 'address', name: '', type: 'address' },
			{ internalType: 'uint256', name: '', type: 'uint256' }
		],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{ inputs: [], name: 'create', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'payable', type: 'function' },
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
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'oneSubscribe',
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
			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
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
	{
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'withdraw',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
export const level3 = '0xADE404B61BD4d7df5fe2561cbCf01BF2F988dC57';
export const Abi_level3 = [
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
		name: 'Subscribe',
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
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'blindBoxList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
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
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'oneSubscribe',
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
			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
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
			{ internalType: 'address', name: '_owner', type: 'address' },
			{ internalType: 'uint256[]', name: '_tokenIds', type: 'uint256[]' }
		],
		name: 'synthesis',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'address', name: '_recipient', type: 'address' }],
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
	{ inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'tokenIdMarker', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
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
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'withdraw',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
export const level4 = '0x10Af994327d84d2c40242C14B690fbDB9bD1640B';
export const Abi_level4 = [
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
		name: 'Subscribe',
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
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'blindBoxList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
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
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'oneSubscribe',
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
			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
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
			{ internalType: 'address', name: '_owner', type: 'address' },
			{ internalType: 'uint256[]', name: '_tokenIds', type: 'uint256[]' }
		],
		name: 'synthesis',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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
	{ inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'tokenIdMarker', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
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
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'withdraw',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];
export const level5 = '0x10Fc5871FA832f4E17B28aA956347a181D31e2A6';
export const Abi_level5 = [
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
		name: 'Subscribe',
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
		inputs: [{ internalType: 'address', name: 'owner', type: 'address' }],
		name: 'blindBoxList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
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
			{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }
		],
		name: 'oneSubscribe',
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
			{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }
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
			{ internalType: 'address', name: '_owner', type: 'address' },
			{ internalType: 'uint256[]', name: '_tokenIds', type: 'uint256[]' }
		],
		name: 'synthesis',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
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
	{ inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }], name: 'tokenIdMarker', outputs: [{ internalType: 'bool', name: '', type: 'bool' }], stateMutability: 'view', type: 'function' },
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
		inputs: [{ internalType: 'uint256', name: 'tokenId', type: 'uint256' }],
		name: 'withdraw',
		outputs: [{ internalType: 'uint256', name: '_mintTokenId', type: 'uint256' }],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [{ internalType: 'uint256[]', name: 'tokenId', type: 'uint256[]' }],
		name: 'withdrawList',
		outputs: [{ internalType: 'uint256[]', name: '', type: 'uint256[]' }],
		stateMutability: 'nonpayable',
		type: 'function'
	}
];

/* 测试网 */
// export const level1 = '0x2282e44099654523ec662d70D4891534d3521afa';
// export const Abi_level1 = [
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
// 				internalType: 'address',
// 				name: '',
// 				type: 'address'
// 			},
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribe',
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
// 		name: 'Subscribe',
// 		type: 'event'
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
// 				name: 'tokenId',
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
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
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
// 				internalType: 'uint256[]',
// 				name: 'tokenId',
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
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'blindBoxList',
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
// export const level2 = '0x87bcEA6D741fA7a97b0f98d407Ce8fa43F4C437a';
// export const Abi_level2 = [
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
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'burn',
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribe',
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
// 		name: 'Subscribe',
// 		type: 'event'
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
// 				name: 'tokenId',
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
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
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
// 				internalType: 'uint256[]',
// 				name: 'tokenId',
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
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'blindBoxList',
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
// export const level3 = '0x26fBC6A8Ca0A231E1A983C3ad73694F0d614C1AD';
// export const Abi_level3 = [
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribe',
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
// 		name: 'Subscribe',
// 		type: 'event'
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
// 				name: 'tokenId',
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
// 				name: '_owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: '_tokenIds',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'synthesis',
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
// 		inputs: [
// 			{
// 				internalType: 'address',
// 				name: '_recipient',
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
// 		inputs: [
// 			{
// 				internalType: 'uint256',
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
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
// 				internalType: 'uint256[]',
// 				name: 'tokenId',
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
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'blindBoxList',
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
// 		name: 'getBurnIds',
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
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenIdMarker',
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
// export const level4 = '0x8a1e1967A397f5C71c9826ba6cb913e1632dFE45';
// export const Abi_level4 = [
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribe',
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
// 		name: 'Subscribe',
// 		type: 'event'
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
// 				name: 'tokenId',
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
// 				name: '_owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: '_tokenIds',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'synthesis',
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
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
// 				internalType: 'uint256[]',
// 				name: 'tokenId',
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
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'blindBoxList',
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
// 		name: 'getBurnIds',
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
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenIdMarker',
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
// export const level5 = '0x7fC731a688d5c19CeB65e16D86dC978442576F4f';
// export const Abi_level5 = [
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'oneSubscribe',
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
// 		name: 'Subscribe',
// 		type: 'event'
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
// 				name: 'tokenId',
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
// 				name: '_owner',
// 				type: 'address'
// 			},
// 			{
// 				internalType: 'uint256[]',
// 				name: '_tokenIds',
// 				type: 'uint256[]'
// 			}
// 		],
// 		name: 'synthesis',
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
// 				name: 'tokenId',
// 				type: 'uint256'
// 			}
// 		],
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
// 				internalType: 'uint256[]',
// 				name: 'tokenId',
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
// 				internalType: 'address',
// 				name: 'owner',
// 				type: 'address'
// 			}
// 		],
// 		name: 'blindBoxList',
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
// 		name: 'getBurnIds',
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
// 				internalType: 'uint256',
// 				name: '',
// 				type: 'uint256'
// 			}
// 		],
// 		name: 'tokenIdMarker',
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

export const Contract_level1 = function Contract_level1(web3c) {
	return new web3c.eth.Contract(Abi_level1, level1);
};
export const Contract_level2 = function Contract_level2(web3c) {
	return new web3c.eth.Contract(Abi_level2, level2);
};
export const Contract_level3 = function Contract_level3(web3c) {
	return new web3c.eth.Contract(Abi_level3, level3);
};
export const Contract_level4 = function Contract_level4(web3c) {
	return new web3c.eth.Contract(Abi_level4, level4);
};
export const Contract_level5 = function Contract_level5(web3c) {
	return new web3c.eth.Contract(Abi_level5, level5);
};
