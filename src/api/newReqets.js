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

// NFT/BuyNFT 购买卡牌
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
// type=4(铸造中)
export const myNft = (type) => {
	const data = utils.initFormData({
		ads: localStorage.getItem('myaddress'),
		sign: localStorage.getItem('mysign'),
		// ads: 'TC82gugQF8b5PVVKWhG5bswA4bwKvGaSAZ',
		// sign: '595dc89481298219475b07d74b6b099b',
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

// NFT/PayEotc 卡牌铸造
export const PayEotc = (id, hx) => {
	const data = utils.initFormData({
		ads: localStorage.getItem('myaddress'),
		sign: localStorage.getItem('mysign'),
		id,
		hx
	});

	return request({
		url: '/api/NFT/PayEotc',
		method: 'POST',
		data
	});
};

// OTC/GetAppStake 管理员刷入合约列表

export const GetAppStake = ({ month = 0, date = `${new Date().getFullYear()}/${new Date().getMonth() + 1}/${new Date().getDate()}` }) => {
	const params = {
		month,
		date
	};

	return request({
		url: '/api/OTC/GetAppStake',
		method: 'POST',
		params
	});
};

// OTC/UpdateStakeOrder 管理员批量刷入合约
export const UpdateStakeOrder = (data) => {
	return request({
		method: 'POST',
		url: '/api/OTC/UpdateStakeOrder',
		data
	});
};
