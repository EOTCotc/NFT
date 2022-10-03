export const options = [
	{
		id: 1,
		title: '等级卡牌',
		name: [
			{
				id: Math.random() + 10,
				title: '一级',
				status: [
					{ id: Math.random() + 100, title: '合成前' },
					{ id: Math.random() + 100, title: '合成后' }
				]
			},
			{
				id: Math.random() + 10,
				title: '二级',
				status: [
					{ id: Math.random() + 100, title: '合成前' },
					{ id: Math.random() + 100, title: '合成后' }
				]
			},
			{
				id: Math.random() + 10,
				title: '三级',
				status: [
					{ id: Math.random() + 100, title: '合成前' },
					{ id: Math.random() + 100, title: '合成后' }
				]
			},
			{
				id: Math.random() + 10,
				title: '四级',
				status: [
					{ id: Math.random() + 100, title: '合成前' },
					{ id: Math.random() + 100, title: '合成后' }
				]
			},
			{
				id: Math.random() + 10,
				title: '五级',
				status: [
					{ id: Math.random() + 100, title: '合成前' },
					{ id: Math.random() + 100, title: '合成后' }
				]
			}
		]
	},
	{
		id: 2,
		title: '权益卡牌',
		name: [
			{
				id: Math.random() + 10,
				title: '创世会',
				status: [
					{ id: Math.random() + 100, title: '永久' },
					{ id: Math.random() + 100, title: '300天' },
					{ id: Math.random() + 100, title: '200天' },
					{ id: Math.random() + 100, title: '100天' }
				]
			},
			{
				id: Math.random() + 10,
				title: '联合会',
				status: [
					{ id: Math.random() + 100, title: '永久' },
					{ id: Math.random() + 100, title: '300天' },
					{ id: Math.random() + 100, title: '200天' },
					{ id: Math.random() + 100, title: '100天' }
				]
			},
			{
				id: Math.random() + 10,
				title: '实时节点',
				status: [
					{ id: Math.random() + 100, title: '永久' },
					{ id: Math.random() + 100, title: '300天' },
					{ id: Math.random() + 100, title: '200天' },
					{ id: Math.random() + 100, title: '100天' }
				]
			},
			{
				id: Math.random() + 10,
				title: '中级节点',
				status: [
					{ id: Math.random() + 100, title: '永久' },
					{ id: Math.random() + 100, title: '300天' },
					{ id: Math.random() + 100, title: '200天' },
					{ id: Math.random() + 100, title: '100天' }
				]
			},
			{
				id: Math.random() + 10,
				title: '高级节点',
				status: [
					{ id: Math.random() + 100, title: '永久' },
					{ id: Math.random() + 100, title: '300天' },
					{ id: Math.random() + 100, title: '200天' },
					{ id: Math.random() + 100, title: '100天' }
				]
			}
		]
	}
];

// 等级卡牌（未合成）
export const allCard = [
	{ Activate: 1, image: require('@/assets/img/Compose/1.jpg'), title: '一级卡通版犀牛', text: '卡通版犀牛权益卡，最基础的等级卡牌，可以合成更高级的卡牌' },
	{ Activate: 2, image: require('@/assets/img/Compose/2.jpg'), title: '二级玄铁甲犀牛', text: '玄铁甲犀牛权益卡，最基础的等级卡牌，可以合成更高级的卡牌' },
	{ Activate: 3, image: require('@/assets/img/Compose/3-before.png'), title: '三级青铜甲犀牛', text: '青铜甲犀牛权益卡，全球仅限33000张，享有USDT资金池50%中40%的分红权益' },
	{ Activate: 4, image: require('@/assets/img/Compose/4-before.png'), title: '四级白银甲犀牛', text: '白银甲犀牛权益卡，全球仅限5000张，享有USDT资金池50%中30%的分红权益' },
	{ Activate: 5, image: require('@/assets/img/Compose/5-before.png'), title: '五级黄金甲犀牛', text: '黄金甲犀牛权益卡，全球仅限2000张，享有USDT资金池50%中20%的分红权益' }
];

// 等级卡牌（已合成）
export const allCards = [
	{ Activate: 1, image: require('@/assets/img/Compose/1.jpg'), title: '一级卡通版犀牛', text: '一级卡通版犀牛，总发行量60000张' },
	{ Activate: 2, image: require('@/assets/img/Compose/2.jpg'), title: '二级玄铁甲犀牛', text: '二级玄铁甲犀牛，总发行量25000张' },
	{ Activate: 3, image: require('@/assets/img/Compose/3-after.png'), title: '三级青铜甲犀牛', text: '三级青铜甲犀牛，总发行量8000张' },
	{ Activate: 4, image: require('@/assets/img/Compose/4-after.png'), title: '四级白银甲犀牛', text: '四级白银甲犀牛，总发行量5000张' },
	{ Activate: 5, image: require('@/assets/img/Compose/5-after.png'), title: '五级黄金甲犀牛', text: '五级黄金甲犀牛，总发行量2000张' }
];

// 权益卡片
export const cardList = [
	// 创世会、联合会
	[
		{
			Activate: 1,
			image: require('@/assets/img/equityItem1.png'),
			title: '创世会权益卡',
			text: '创世会，全球仅限66张，享有全网EOTC NFT 1%手续费平均分红，EOTC DAO 治理投票权'
		},
		{
			Activate: 2,
			image: require('@/assets/img/equityItem2.png'),
			title: '联合会权益卡',
			text: '联合会，全球仅限666张，享有全网EOTC NFT 1%手续费平均分红，EOTC DAO 治理投票权'
		}
	],
	// 实时节点
	[
		{
			Activate: 3,
			time: 100,
			image: require('@/assets/img/Compose/actual-100-before.jpg'),
			text: '100天实时节点分红权益卡，全球仅限6600张，享有otc交易所 20%手续费平均分红',
			title: '实时节点分红权益卡'
		},
		{
			Activate: 3,
			time: 200,
			image: require('@/assets/img/Compose/actual-200-before.jpg'),
			text: '200天实时节点分红权益卡，全球仅限6600张，享有otc交易所 20%手续费平均分红',
			title: '实时节点分红权益卡'
		},
		{
			Activate: 3,
			time: 300,
			image: require('@/assets/img/Compose/actual-300-before.jpg'),
			text: '300天实时节点分红权益卡，全球仅限6600张，享有otc交易所 20%手续费平均分红',
			title: '实时节点分红权益卡'
		}
	],
	// 中级节点
	[
		{
			Activate: 4,
			time: 100,
			image: require('@/assets/img/Compose/middle-100-before.jpg'),
			text: '100天中级节点分红权益卡，全球仅限1000张，享有otc交易所 20%手续费平均分红',
			title: '中级节点分红权益卡'
		},
		{
			Activate: 4,
			time: 200,
			image: require('@/assets/img/Compose/middle-200-before.jpg'),
			text: '200天中级节点分红权益卡，全球仅限1000张，享有otc交易所 20%手续费平均分红',
			title: '中级节点分红权益卡'
		},
		{
			Activate: 4,
			time: 300,
			image: require('@/assets/img/Compose/middle-300-before.jpg'),
			text: '300天中级节点分红权益卡，全球仅限1000张，享有otc交易所 20%手续费平均分红',
			title: '中级节点分红权益卡'
		}
	],
	// 高级节点
	[
		{
			Activate: 5,
			time: 100,
			image: require('@/assets/img/Compose/high-100-before.jpg'),
			text: '100天高级节点分红权益卡，全球仅限400张，享有otc交易所 20%手续费平均分红',
			title: '高级节点分红权益卡'
		},
		{
			Activate: 5,
			time: 200,
			image: require('@/assets/img/Compose/high-200-before.jpg'),
			text: '200天高级节点分红权益卡，全球仅限400张，享有otc交易所 20%手续费平均分红',
			title: '高级节点分红权益卡'
		},
		{
			Activate: 5,
			time: 300,
			image: require('@/assets/img/Compose/high-300-before.jpg'),
			text: '300天高级节点分红权益卡，全球仅限400张，享有otc交易所 20%手续费平均分红',
			title: '高级节点分红权益卡'
		}
	],
	// 永久
	[
		{
			Activate: 6,
			image: require('@/assets/img/Compose/actual-forever.jpg'),
			text: '实时节点永久分红权益卡，全球仅限330张，享有otc交易所 20%手续费平均分红',
			title: '实时节点永久分红权益卡'
		},
		{
			Activate: 7,
			image: require('@/assets/img/Compose/middle-forever.jpg'),
			text: '中级节点永久分红权益卡，全球仅限50张，享有otc交易所 20%手续费平均分红',
			title: '中级节点永久分红权益卡'
		},
		{
			Activate: 8,
			image: require('@/assets/img/Compose/high-eiky.jpg'),
			text: '高级节点永久分红权益卡，全球仅限20张，享有otc交易所 20%手续费平均分红',
			title: '高级节点永久分红权益卡'
		}
	]
];

export const selectAll = [
	[
		[0, 0, 0],
		[0, 0, 0],
		[0, 0]
	],
	[[], [], []],
	[
		[[], [], 0],
		[[], [], 0],
		[[], [], 0]
	]
];

// 合约地址
export const contract = [
	['TNLWdgLrBaffdH8icE8At9tUFJBCeFFtzU', 'TDjBpnEB3pd4RdGnbhBV6H7wiayjhjRUqP', 'TKDHJMgVeN9x7j3g564jB9AgLxRNo3WTeN', 'TAooLLSoxxK4zQjCbBrmPtmuu8o5WXbCJW', 'TDaFmDiymkduYmGhbRn7xERGzs4SC1pKPz'],
	[
		'TRXRStGGQC8T397jGeWg48soe6fkqgZkP7',
		'TSUu64YWCPf4BJDwZAvENW1SyDmuU7cd23',
		'TUDftnsHA2qGRwqRRmdM7YcLdMqKqZUjZe',
		'TNfLD3hNgyS1Co7Nw12jrUBEHx6R9KWfYA',
		'TGji72zqprDCtvu61314Jx3FpJ7WsoMEyY',
		'TUUDLWPM2eWsX6hGEJ88yCEPBfry5eoxcp',
		'TA8yzwymfXTymVrRfUysv1QJZQa2oTX89Y',
		'TBoP15gHpQ1P1HnfRmAEXGdazTei7stGem'
	]
];
