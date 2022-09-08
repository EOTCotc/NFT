import request from '@/utils/request';
import utils from '@/utils/utils';

// NFT/BuyBlindBox 购买盲盒

export const BuyBlindBox = (usdt, eotc) => {
	const data = utils.initFormData({
		ads: localStorage.getItem('myaddress'),
		sign: localStorage.getItem('mysign'),
		usdt: usdt,
		eotc: eotc
	});

	return request({
		url: '/api/NFT/BuyBlindBox',
		method: 'POST',
		data
	});
};

// NFT/BuyNFT

export const BuyNft = (num) => {
	const data = utils.initFormData({
		ads: localStorage.getItem('myaddress'),
		sign: localStorage.getItem('mysign'),
		hx: num
	});

	return request({
		url: '/api/NFT/BuyNFT',
		method: 'POST',
		data
	});
};

// NFT/OpenBlindBox 开盲盒

export const OpenBlindBox = (id) => {
	const data = utils.initFormData({
		ads: localStorage.getItem('myaddress'),
		sign: localStorage.getItem('mysign'),
		id
	});

	return request({
		url: '/api/NFT/OpenBlindBox',
		method: 'POST',
		data
	});
};

// 盲盒列表，权益卡牌，等级卡牌

export const myNft = (type) => {
	const data = utils.initFormData({
		ads: localStorage.getItem('myaddress'),
		sign: localStorage.getItem('mysign'),
		type
	});
	//   const data = utils.initFormData({
	//     ads:'TBo2VnuGP7cKbuhfduML87npaKsxz81n1D',
	//     sign:"2a1be4c825ae6cb3b4c4f21a31741246",
	//     type
	//  });

	return request({
		url: '/api/NFT/MyNFT',
		method: 'POST',
		data
	});
};
