const options = [
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

export default options;
