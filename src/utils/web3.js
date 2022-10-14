import { contractAddress_usdt, contractAddress, contractAddress_eotc } from './abi';

import PubSub from 'pubsub-js';

import Vue from 'vue';
import loadingToast from '@/components/loading-toast';

import { BuyNft, PayEotc } from '@/api/newReqets';

import { Toast } from 'vant';

import axios from 'axios';

/**
 * ! Reconstruction_ 标记开头的方法进行了 promise化重构
 */

// api  url
import { SetCoinAds, GetHx, EotcLoginmes } from '@/api/trxRequest';

import { clearmymes } from '@/api/payverification';

import $router from '@/router';

import md5 from 'md5';

import { nft_login } from '@/api/newReqets';

var address = '';

var mytron_usdt = null; //是合约对象，生成合约对象后，可以做很多操作，比如获取你的余额，转账等
var mytron = null;

// 主网
// const url = 'https://api.trongrid.io/wallet/gettransactioninfobyid';

// 测试网
const url = 'https://api.shasta.trongrid.io/wallet/gettransactioninfobyid';

const AllCard = [
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

// 合成
const synthesis = 'TXpePr1mdgrtnhS7Ew1vdqJE1aPkUaTocp';

// 手续费合约
const charge = 'TXBdemx22WNUkBqjhbtr3jbw2iZMELXK7e';

// 资金池合约
const capital = 'TW46QNKyZqQe7LVZ8tD2xZAt68h7hWfeNJ';

// NFT交易
const NFTDeal = 'TR9shvNqD5YQiTHaAdkq5K8ei58Et2kKAo';

const trxMin = 30000000;
const trxMes = '为使交易顺畅,请确保钱包中不少于30 TRX';

var signMes = 'EOTC请求您签名确认,签名不消耗GAS.';

function eotcmes(message) {
	console.log(message);
}

function warnmes(mes) {
	console.warn(mes);
	Vue.$toast.warning(mes);
}

function distsmes1(message) {
	console.log(message);
}

export const UserInfo = function () {
	// 主键 6位 唯一标识 id
	const uid = localStorage.getItem('uid');
	//钱包地址
	const myaddress = localStorage.getItem('myaddress');
	//剩余EOTC
	const eotcAmount = localStorage.getItem('eotcAmount');

	// 我的剩余USDT(余额)
	const myamount = localStorage.getItem('myamount');

	const wallet_NFTusdt = localStorage.getItem('usdt_ye');
	const wallet_NFTeotc = localStorage.getItem('eotc_stake');

	return {
		wallet_NFTeotc,
		wallet_NFTusdt,
		uid,
		myaddress,
		eotcAmount,
		myamount
	};
};

export const userBaseMes = async function () {
	// Reconstruction_usdtsend(0,"取消")
	//加载用户数据前必须检验用户是否已经消息签名
	var mysign = localStorage.getItem('mysign');
	if (mysign == null || mysign == '') {
		userSign(signMes); //消息签名
		return false;
	}

	var ads = localStorage.getItem('myaddress');
	if (ads == null) {
		console.warn('请重新连接钱包');
		return false;
	}

	EotcLoginmes({
		wallet: ads
	})
		.then((data) => {
			var it = eval(data.data);
			console.log('用户Uid', it);
			if (it.Uid != '0') {
				localStorage.setItem('uid', it.Uid); // 主键 6位 唯一标识 id
				localStorage.setItem('parentID', it.Paypwd); //推荐人 注册邀请地址  两种形式  1 用户uid  和  邀请者的uid
				localStorage.setItem('email', it.Token); //注册邮箱   邮箱和uid 一一对应 是唯一的
				var myid = it.Item.split('@'); // 姓名、证件号码、电话

				localStorage.setItem('uname', myid[0].trim()); //本人姓名
				localStorage.setItem('ucid', myid[1].trim()); //身份证号码
				localStorage.setItem('uphone', myid[2].trim()); //电话
				localStorage.setItem('iskyc', it.VIP); //是否已实名 -1 审核未通过  0 未实名  1 已提交 未审核或   2 实名认证审核通过
				localStorage.setItem('usdtsq', it.Ztrs); //USDT授权金额

				localStorage.setItem('item', it.item); //节点类型

				//当前购买订单号，0表示当前无购买单   每次购买 必须先处理上一次的订单
				// 0 表示 没有订单，
				localStorage.setItem('xdnum', it.zyman);

				// 当前出售订单号，0表示当前无出售单
				//只能 挂一个出售单
				localStorage.setItem('csnum', it.csnum);
				localStorage.setItem('userdsx', it.iss); //取消下单的次数(每日清零)  max 8次

				//收款 支付方式
				localStorage.setItem('mybank', it.bank.trim()); //收款银行卡
				localStorage.setItem('myalipay', it.tgyj.trim()); //收款支付宝
				localStorage.setItem('mywechat', it.USDT.trim()); //收款微信

				localStorage.setItem('tcoin', it.Tcoin.trim()); //奖励地址（提币地址）

				localStorage.setItem('myeotc', it.eotc); //用户质押的eotc数量  质押5000以上才能成为商家 进行挂单出售

				localStorage.setItem('shnum', it.snum); //未审核的实名认证会员人数
				localStorage.setItem('bsnum', it.bnum); //用户待放币的订单数
				localStorage.setItem('myjifen', it.jifen); //用户积分 至少10分才能 购买 or 出售

				localStorage.setItem('usdt_ye', it.usdt_ye); //USDT余额
				localStorage.setItem('eotc_stake', it.eotc_stake); //EOTC总量

				PubSub.publish('setUid', localStorage.getItem('uid'));
			} else {
				console.warn('请先注册EOTC');
				$router.replace({
					name: 'login'
				});
			}
		})
		.catch((err) => {
			Vue.$toast.warning('数据加载频繁', {
				position: 'bottom-right'
			});
		});
};

export const loadweb3 = async function (func) {
	//bsg为true强制签名
	// console.log(window.tronWeb);
	if (window.tronWeb) {
		var obj = setInterval(async () => {
			if (window.tronWeb.defaultAddress.base58) {
				clearInterval(obj);
				try {
					address = window.tronWeb.defaultAddress.base58;
					console.log('地址', address);
					mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
					mytron = await window.tronWeb.contract().at(contractAddress);
					myUsdtAmount();
					myEOTCAmount();
					// localStorage.setItem('netType', 'trx');
					localStorage.setItem('netType', 'xxx');
					if (address != localStorage.getItem('myaddress')) {
						localStorage.removeItem('myaddress');
						localStorage.removeItem('mysign');
						clearmymes();
						userSign(signMes, func); //首次消息签名
						return false;
					}
					func();
				} catch (error) {
					console.warn(error);
					console.log(localStorage.getItem('myaddress'));
					if (address != localStorage.getItem('myaddress')) clearmymes();
				}
			}
		}, 17);
	} else {
		setTimeout(() => {
			if (!window.tronWeb) {
				Vue.$toast.error('请在支持 TRON 网络的 DAPP 浏览器中访问');
				console.warn('请在支持TRON网络的DAPP浏览器中访问');
			}
		}, 2000);
		console.warn('请在支持TRON网络的DAPP浏览器中访问');
	}
};

//更换连接的钱包(先于loadweb3执行)
window.addEventListener('message', function (e) {
	// if (e.data.message && e.data.message.action == "setAccount") {
	//   clearmymes();
	// }
	// if (e.data.message && e.data.message.action == "accountsChanged") {
	//   clearmymes();
	//   console.warn("未连接钱包,请链接钱包后重试");
	// }
});

//消息签名
export const userSign = async (mes, func) => {
	return new Promise((resolve, reject) => {
		try {
			let tronweb = window.tronWeb;
			tronweb.trx
				.sign(tronweb.toHex(mes))
				.then((signedStr) => {
					if (signedStr.substring(0, 2) === '0x') {
						signedStr = signedStr.substring(2);
					}
					localStorage.setItem('myaddress', tronweb.defaultAddress.base58);
					localStorage.setItem('mysign', md5(signedStr));
					console.log(md5(signedStr));
					if (func != null) {
						func();
					}
					resolve();
				})
				.catch((err) => {
					console.warn('拒绝签名');
					clearmymes();
					reject('拒绝签名');
					console.warn(err);
				});
		} catch (err) {
			console.warn(err);
			reject('签名：', err);
		}
	});
};

// 消息签名！
export const runSign = function () {
	return new Promise((resolve, reject) => {
		try {
			let tronweb = window.tronWeb;
			tronweb.trx
				.sign(tronweb.toHex(signMes))
				.then((signedStr) => {
					if (signedStr.substring(0, 2) === '0x') {
						signedStr = signedStr.substring(2);
					}
					var userSignMD5 = md5(signedStr);
					if (userSignMD5 == localStorage.getItem('mysign')) {
						resolve();
					} else reject('SignaturError');
				})
				.catch((error) => {
					//拒绝签名
					console.warn(error);
					reject('拒绝签名\n' + error);
				});
		} catch (err) {
			reject(err);
		}
	});
};

//usdt合约授权,val适当大一些，就不用多次授权了
export const usdtsend = async function (val, mes) {
	let valmes;
	let ads = window.tronWeb.defaultAddress.base58;
	try {
		// if (mytron_usdt == null)
		mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
		valmes = distsmes1(mes + '授权期间请不要刷新或切换页面！');
		let res = await mytron_usdt.approve(NFTDeal, TronValues(val)).send({
			feeLimit: 100000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		SetCoinAds({
			num: val
		}).then((data) => {
			let it = eval(data.data);
			if (it.State == '1') {
				localStorage.setItem('usdtsq', val);
				eotcmes('授权成功'); //
				Vue.$toast('授权成功');
				// setTimeout(function () {
				//     valmes.style.display = "none";
				// }, 1500);
			}
		});
	} catch (e) {
		console.warn(e);
		warnmes('交易失败：' + e, null);

		// valmes.style.display = "none";
	}
};

export const Approve = async function (func) {
	let ads = window.tronWeb.defaultAddress.base58;
	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
	const value = await mytron_usdt.allowance(ads, contractAddress).call();
	let owancevalue;
	try {
		owancevalue = value.remaining._hex;
	} catch {
		owancevalue = value._hex;
	}
	if (parseInt(owancevalue, 16) / 1000000.0 > 0) func();
	else eotcmes('该地址未授权，无须取消。');
};

//获取钱包余额
export const myUsdtAmount = async function myUsdtAmount() {
	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
	let ads = window.tronWeb.defaultAddress.base58;
	mytron_usdt.balanceOf(ads).call(
		{
			from: ads
		},
		function (error, result) {
			if (!error) {
				var mynum = (result / 1000000).toFixed(2);
				localStorage.setItem('myamount', mynum);
				console.log(mynum);
			} else {
				console.log(error);
			}
		}
	);
};

export const myEOTCAmount = async function myEOTCAmount() {
	let mytron_eotc = await window.tronWeb.contract().at(contractAddress_eotc);
	let ads = window.tronWeb.defaultAddress.base58;
	mytron_eotc.balanceOf(ads).call(
		{
			from: ads
		},
		function (error, result) {
			if (!error) {
				var mynum = (result / 1000000).toFixed(2);
				localStorage.setItem('eotcAmount', mynum);
				// console.log(mynum);
			} else {
				console.log(error);
			}
		}
	);
};

//用户向合约订单质押USDT，执行前需要向USDT合约申请approve授权
export const sellOrder_user = async function (oid, val, sj_ads, errorFun, okFun) {
	let valmes;
	try {
		if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
		valmes = distsmes1('等待区块打包确认，打包期间请不要关闭或刷新该页面');
		let res = await mytron.transferIn1(TronValues(val), oid.toString(), sj_ads.trim()).send({
			feeLimit: 100000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		myUsdtAmount();
		getxh(1, oid, val, res);
		if (okFun != null) okFun();
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		console.log(e);
		if (typeof e.message != 'undefined') {
			warnmes('交易失败：' + e.message, null);
		}
		if (errorFun != null) errorFun();
		valmes.style.display = 'none';
	}
};

//用户从合约订单转出USDT（放币）
export const outOrder_user = async function (oid, val, okFun) {
	let valmes;
	try {
		if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
		valmes = distsmes1('等待区块打包确认，打包期间请不要关闭或刷新该页面');
		let res = await mytron.transferOutfor1(oid.toString(), TronValues(val)).send({
			feeLimit: 100000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		getxh(2, oid, val, res);
		if (okFun != null) okFun();
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		console.log(e);
		warnmes('交易失败：' + e.message, null);
		valmes.style.display = 'none';
	}
};

//商家向合约订单质押USDT，执行前需要向USDT合约申请approve授权
export const sellOrders = async function (val, oid) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			Vue.$toast.warning(
				{
					component: loadingToast,
					props: {
						title: '等待区块打包确认，<br/>打包期间请不要关闭或刷新该页面'
					}
				},
				{
					icon: false,
					timeout: false
				}
			);

			let res = await mytron.transferIn(TronValues(val), oid.toString()).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			console.log(res);
			getxh(3, oid, val, res);
			myUsdtAmount();
			console.log('区块打包认证通过');
			resolve();
			Vue.$toast.clear();
		} catch (e) {
			console.log(e);
			reject(e);
			Vue.$toast.clear();
		}
	});
};

//商家从合约订单转出USDT（放币）
export const outOrder = async function (odid, oid, val, ads) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			Vue.$toast.warning(
				{
					component: loadingToast,
					props: {
						title: '等待区块打包确认，<br/>打包期间请不要关闭或刷新该页面'
					}
				},
				{
					icon: false,
					timeout: false
				}
			);
			let res = await mytron.transferOutfor(oid.toString(), TronValues(val), ads.trim()).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			console.log(res);
			getxh(4, odid, val, res);
			resolve();
		} catch (e) {
			console.log(e);
			warnmes('交易失败：' + e);
			reject(e);
		}
	});
};

//商家向合约订单追加质押USDT
export const addSellOrder = async function (val, oid) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			Vue.$toast.warning(
				{
					component: loadingToast,
					props: {
						title: '等待区块打包确认，<br/>打包期间请不要关闭或刷新该页面'
					}
				},
				{
					icon: false,
					timeout: false
				}
			);
			let res = await mytron.transferAdd(TronValues(val), oid.toString()).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			console.log(res);
			myUsdtAmount();
			getxh(5, oid, val, res);

			resolve();
			Vue.$toast.clear();
		} catch (e) {
			console.log(e);
			reject(e);
			Vue.$toast.clear();
		}
	});
};

//商家从合约订单撤出USDT
export const cancelOrders = async function (oid, val) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			let res = await mytron.transferOut(oid.toString(), TronValues(val)).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			console.log(res);
			getxh(6, oid, val, res);
			myUsdtAmount();
			resolve();
		} catch (e) {
			console.log(e);
			warnmes('交易失败：' + e, null);
			reject(e);
		}
	});
};

export const getxh = function (dtype, oid, val, hx) {
	// dtype: 1 用户质押U，2用户释放U，3商家质押U，
	//       4商家释放U，5商家追加U,6商家取回U，7仲裁取回U
	GetHx({
		dtype,
		oid,
		val,
		hx
	}).then((data) => {
		console.log('GetHx', data.data);
	});
};

export const TronValues = function (val) {
	let vl = parseFloat(val).toFixed(6) * Math.pow(10, 6);
	vl = parseInt(vl);
	return vl.toString();
};

export const getTrxBalance = function (func) {
	window.tronWeb.trx.getBalance(window.tronWeb.defaultAddress.base58).then((result) => {
		if (parseInt(result) >= trxMin) func();
		else {
			warnmes(trxMes, null);
		}
	});
};

//下单验证前
export const GetmyUSDT = async function (orderID, gusdt) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			mytron.getInfo_order(orderID.toString()).call(
				{
					from: window.tronWeb.defaultAddress.base58
				},
				function (error, result) {
					console.log(orderID);
					console.log(gusdt);
					if (!error) {
						console.log('result', result);
						console.log('当前钱包地址', window.tronWeb.address.fromHex(result[0]));
						let usdt = (parseInt(result[1]._hex, 16) / 1000000.0).toFixed(6);
						console.log('usdt', usdt);
						if (gusdt <= usdt) resolve();
						else {
							reject('该订单 USDT 数量已不足');
						}
					} else {
						reject('操作失败，请重试  ' + error);
					}
				}
			);
		} catch (err) {
			reject(err);
		}
	});
};

/**
 *
 * @param {*子订单编号} orderID
 * @param {*usdt数量} gusdt
 * @param {*} fuc
 */
export const GetmyUSDT_User = function (orderID, gusdt, businesses = localStorage.getItem('myaddress')) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			mytron.getInfo_orderOut(orderID.toString()).call(
				{
					from: window.tronWeb.defaultAddress.base58
				},
				function (error, result) {
					console.log(result);
					if (!error) {
						let zads = window.tronWeb.address.fromHex(result[2]);
						console.log('===', zads);
						let usdt = (parseInt(result[1]._hex, 16) / 1000000.0).toFixed(6);
						console.log('===', usdt);
						if (gusdt <= usdt && zads == businesses) resolve('合约检测通过');
						else
							reject({
								usdt,
								zads
							});
					} else {
						reject('操作失败，请刷新重试  ' + error);
					}
				}
			);
		} catch (err) {
			console.warn(err);
			reject(err);
		}
	});
};

export const Aireotc = async function (ads, num, uid) {
	var valmes;
	try {
		if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
		valmes = distsmes1('等待区块打包确认，打包期间请不要关闭或刷新该页面');
		let res = await mytron.AirTransfer(ads, num, uid.toString(), contractAddress_eotc).send({
			feeLimit: 1000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		console.log(e);
		warnmes('交易失败：' + e.message, null);
		valmes.style.display = 'none';
	}
};
export const airMsg = async function (ads, num, uid) {
	var valmes;
	try {
		if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
		valmes = distsmes1('等待区块打包确认，打包期间请不要关闭或刷新该页面');
		let res = await mytron.airMsg(ads, num, uid.toString()).send({
			feeLimit: 1000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		console.log(e);
		warnmes('交易失败：' + e.message, null);
		valmes.style.display = 'none';
	}
};
export const verifyUSDT = async function (amount, fuc) {
	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
	let ads = window.tronWeb.defaultAddress.base58;
	mytron_usdt.balanceOf(ads).call(
		{
			from: ads
		},
		function (error, result) {
			if (!error) {
				let mynum = result / 1000000;
				if (mynum >= amount) fuc();
				else eotcmes('钱包余额不足');
				localStorage.setItem('myamount', mynum.toFixed(2));
			} else {
				eotcmes('操作失败，请重试  ' + error);
			}
		}
	);
};

export const myApprove = async function (num, func) {
	let ads = window.tronWeb.defaultAddress.base58;
	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
	const value = await mytron_usdt.allowance(ads, NFTDeal).call();
	let owancevalue;
	try {
		owancevalue = value.remaining._hex;
	} catch {
		owancevalue = value._hex;
	}
	let mnum = parseInt(owancevalue, 16) / 1000000.0; //window.tronWeb.fromSun(result);//window.tronWeb.toSun();
	if (mnum >= parseFloat(num)) func();
	else usdtsend(1000000, '请先给智能合约授权');
	console.log(mnum);
};

export const sfeotc = function (func) {
	window.tronWeb.trx.sendTransaction('THNYKGqFBcs3V6WrEr1Qq4LCV8mvKuK6Hh', 20000000).then((result) => {
		console.log(result);
		func();
	});
};

/**
 * getTrxBalance 监测 trx中是否足够支付当前 手续费
 * myApprove  支付之后  智能合约授权
 * verifyUSDT 钱包余额验证
 *
 * selectpayk  用户的收款方式
 *
 * 转币到合约  分两种情况
 * 1授权  直接进
 *
 * 2未授权 会弹窗钱包签名授权
 *
 */
// 购买 出售  双方交易 货币转让

// export const dealTransForm = () => {
// 弹窗 掉合约需要时间等待

// console.log(usdt, oid, sj_ads, id, mail, selectpayk, type);
//10 '77778513' 'TSQwewG64dNYy9pRr9e1be4GwxDqhNh3tL' 2 'bwdxjg16847@chacuo.net' 'myalipay&12345678' 1

//调用 第三方合约，需要支付 trx
//   return Promise.resolve(Reconstruction_getTrxBalance);
// };

/**
 * 调用 第三方合约，需要支付 trx
 */
export const Reconstruction_getTrxBalance = async function () {
	return new Promise(async (resolve, reject) => {
		try {
			const result = await window.tronWeb.trx.getBalance(window.tronWeb.defaultAddress.base58);
			if (parseInt(result) >= trxMin) {
				console.log('trx 余额足够支付');
				resolve();
			} else {
				reject(trxMes);
			}
		} catch (err) {
			reject(err);
		}
	});
};

/**
 * *放币到合约 授权情况：
 * 1. 已授权，直接调用回调，下一步
 * 2. 未授权，会弹出钱包签名授权，由于授权是异步，需要一定时间。
 * 所以 合约放币将被中断，需要用户重新 放币到合约
 *
 * @param {*Usdt数量} num
 * @param {*已授权的回调} func
 * @returns
 */

export const Reconstruction_myApprove = async function (num) {
	return new Promise(async (resolve, reject) => {
		try {
			let owancevalue;
			let ads = window.tronWeb.defaultAddress.base58;
			if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
			const value = await mytron_usdt.allowance(ads, contractAddress).call();
			try {
				owancevalue = value.remaining._hex;
			} catch {
				owancevalue = value._hex;
			}
			let mnum = window.parseInt(owancevalue, 16) / 1000000.0;
			if (mnum >= window.parseFloat(num)) {
				console.log('合约已经授权');
				resolve('合约已经授权');
			} else {
				// 未授权，
				console.log('未授权');
				await Reconstruction_usdtsend(1000000);
				resolve('授权成功');
			}
			console.log('当前usdt', mnum);
		} catch (err) {
			reject(err);
		}
	});
};

/**
 * !usdt合约授权,value 适当大一些，就不用多次授权了
 * !每次合约授权都需要一定的费用
 *
 * */

export const Reconstruction_usdtsend = function (val, message) {
	// let valmes;
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
			console.log('val', val, resolve, reject);

			// distsmes1 是一个黄色的警示弹窗。
			Vue.$toast.warning(
				{
					component: loadingToast,
					props: {
						title: '请先给智能合约授权,<br/>授权期间请不要刷新或切换页面'
					}
				},
				{
					icon: false,
					timeout: false
				}
			);
			let res = await mytron_usdt.approve(contractAddress, TronValues(val)).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			console.log(res);
			SetCoinAds({
				num: val
			})
				.then((data) => {
					let it = eval(data.data);
					if (it.State == '1') {
						localStorage.setItem('usdtsq', val);
						console.log(`${message}授权成功`);
						resolve(`${message}授权成功`);
						// 授权成功 关闭 警示弹窗
						Vue.$toast.clear();
					}
					if (val < 0) {
						reject('授权已取消');
					}
				})
				.catch((err) => {
					reject('授权失败：', err);
				});
		} catch (e) {
			// 授权s失败  关闭 警示弹窗
			reject('交易失败：' + e);
			Vue.$toast.clear();
		}
	});
};

/**
 * !verifyUSDT 钱包余额验证
 * ! 进行货币售卖，钱包余额必须满足
 * @param {* 本次售卖的 usdt 数量} amountUsdt
 *
 * *tronWeb.contract
 * *创建包装ABI的合约对象。 使您可以轻松地调用合约中的函数。
 * *方式1：通过ABI和合约地址创建合约对象 let instance = await tronWeb.contract(xxxxx)

 * *方式2：先创建一个空合约对象,然后通过at函数指定合约地址。如果链上有ABI,at函数会自动加载链上的abi，
    **如果链上没有  ABI，则需手动加载
**let instance = await tronWeb.contract().at("TREwN2qRkME9TyQUz8dG6HfjEyKGMPHAS5");
 */
export const Reconstruction_verifyUSDT = async function (amountUsdt) {
	console.log(amountUsdt);
	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);

	// 默认地址网， shasta测试网
	let ads = window.tronWeb.defaultAddress.base58;

	return new Promise((resolve, reject) => {
		mytron_usdt.balanceOf(ads).call(
			{
				from: ads
			},
			function (error, result) {
				if (!error) {
					let mynum = result / 1000000;
					if (mynum >= amountUsdt) {
						console.log('钱包余额验证通过，可进行支付');
						resolve('钱包余额验证通过，可进行支付');
					} else {
						console.warn('钱包余额不足');
						reject('钱包余额不足');
					}
					localStorage.setItem('myamount', mynum.toFixed(2));
				} else {
					reject('操作失败，请重试  ' + error);
					console.warn('操作失败，请重试  ' + error);
				}
			}
		);
	});
};

export const nft_SendUSDT = async function nft_SendUSDT(val) {
	return new Promise(async (resolve, reject) => {
		try {
			let mytron = await window.tronWeb.contract().at(contractAddress_usdt);
			let res = await mytron.transfer('TA6jfgkurdTrwqic3G56GpG2Keh5EWx2kq', TronValues(val)).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			const { data } = await BuyNft(res);
			resolve(data);
		} catch (err) {
			reject(err);
		}
	});

	//res为返回的交易哈希
	//调用BuyNFT接口
};

/**
 *
 * @param {*当前订单 id} oid -->  order id
 * @param {*Usdt 数量} val  --> 当前用户出售的 usdt 数量值
 * @param {*} sj_ads  --> 出售usdt时， 买家的 钱包地址
 * @param {*} errorFun  --成功的回调
 * @param {*} okFun  -- 失败的回调
 */

export const Reconstruction_sellOrder_user = async function (oid, val, sj_ads) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			Vue.$toast.warning(
				{
					component: loadingToast,
					props: {
						title: '等待区块打包确认，<br/>打包期间请不要关闭或刷新该页面'
					}
				},
				{
					icon: false,
					timeout: false
				}
			);

			let res = await mytron.transferIn1(TronValues(val), oid.toString(), sj_ads.trim()).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});

			console.log(res);
			Reconstruction_myUsdtAmount();
			Reconstruction_getxh(1, oid, val, res);

			console.log('区块链打包确认通过');
			resolve('区块链打包确认通过');
		} catch (e) {
			console.warn(e);
			Vue.$toast.clear();
			Vue.$toast.warning('区块繁忙拥堵，请稍后重试', {
				timeout: false
			});
			reject(e);
		}
	});
};

//获取钱包余额
export const Reconstruction_myUsdtAmount = async function myUsdtAmount() {
	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
	let ads = window.tronWeb.defaultAddress.base58;
	mytron_usdt.balanceOf(ads).call(
		{
			from: ads
		},
		function (error, result) {
			if (!error) {
				var mynum = (result / 1000000).toFixed(2);
				localStorage.setItem('myamount', mynum);
				// console.log(mynum);
			} else {
				console.log(error);
			}
		}
	);
};

export const Reconstruction_getxh = function (dtype, oid, val, hx) {
	// dtype: 1 用户质押U，2用户释放U，3商家质押U，
	//       4商家释放U，5商家追加U,6商家取回U，7仲裁取回U
	GetHx({
		dtype,
		oid,
		val,
		hx
	}).then((data) => {
		console.log('GetHx用户质押U', data.data);
	});
};

// 用户给商家放币 用户从合约订单转出USDT（放币）
export const Reconstruction_outOrder_user = async function (oid, val) {
	return new Promise(async (resolve, reject) => {
		try {
			if (mytron == null) mytron = await window.tronWeb.contract().at(contractAddress);
			Vue.$toast.warning(
				{
					component: loadingToast,
					props: {
						title: '等待区块打包确认，<br/>打包期间请不要关闭或刷新该页面'
					}
				},
				{
					icon: false,
					timeout: false
				}
			);
			let res = await mytron.transferOutfor1(oid.toString(), TronValues(val)).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
			console.log(res);
			Reconstruction_getxh(2, oid, val, res);
			resolve();
		} catch (e) {
			console.warn(e);
			Vue.$toast.clear();
			reject(e);
		}
	});
};

export const SetArp = async function SetArp(num) {
	try {
		let mytron1 = await window.tronWeb.contract().at('THNqmcaX1xGRJvwXFa9z5JEjWN5Dy1jDT2');
		let res = await mytron1.SetArp(num).send({
			feeLimit: 1000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
	} catch (e) {
		console.log(e);
		warnmes('交易失败：' + e.message, null);
	}
};
export const getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//手续费转账
export const sfeotc1 = async function (func) {
	let num = getRandom(21, 50);
	// let num = getRandom(1, 2);
	let result = await window.tronWeb.trx.sendTransaction('TA6jfgkurdTrwqic3G56GpG2Keh5EWx2kq', TronValues(num));

	console.log(result);

	localStorage.setItem('apphx', result.txid);
};

//等级卡牌、权益卡牌
export const AllCards = async function AllCards(address, id, m, n, arr) {
	try {
		let mytron = await window.tronWeb.contract().at(AllCard[m][n]);
		let res = await mytron.subscribeList(address, id).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		arr();
		console.log(res);
		Toast.clear();
		Vue.$toast.success('上传成功！');
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('上传失败！');
	}
};

//权益卡牌(有限)
export const AllCardTime = async function AllCardTime(address, num, time, n, arr) {
	try {
		let mytron = await window.tronWeb.contract().at(AllCard[1][n]);
		let res = await mytron.subscribeList(address, num, time).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		arr();
		console.log(res);
		Toast.clear();
		Vue.$toast.success('上传成功！');
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('上传失败！');
	}
};

//单笔领取
export const getCard = async function getCard(m, n, id, arr) {
	try {
		let mytron = await window.tronWeb.contract().at(AllCard[m][n]);

		if (m == 1) {
			let res = await mytron.withdraw().send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
		} else {
			let res = await mytron.withdraw(id).send({
				feeLimit: 100000000,
				callValue: 0,
				shouldPollResponse: false
			});
		}
		arr(1);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		Toast.clear();
		Vue.$toast.warning('取消领取！');
	}
};

//批量领取
export const getCards = async function getCards(m, n, id, arr) {
	try {
		let mytron = await window.tronWeb.contract().at(AllCard[m][n]);
		let res = await mytron.withdrawList(id).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});

		arr(1);
		console.log(res);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		Toast.clear();
		Vue.$toast.warning('取消领取！');
	}
};

//批量领取(有限)
export const getCardsTime = async function getCardsTime(time, n, num, arr) {
	try {
		let mytron = await window.tronWeb.contract().at(AllCard[1][n]);
		let res = await mytron.withdrawList(num, time).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});

		arr(1);
		console.log(res);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		Toast.clear();
		Vue.$toast.warning('取消领取！');
	}
};

//全部领取
export const getAllCards = async function getAllCards(m, n, arr) {
	try {
		let mytron = await window.tronWeb.contract().at(AllCard[m][n]);
		let res = await mytron.allWithdraw().send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});

		arr(1);
		console.log(res);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		Toast.clear();
		Vue.$toast.warning('取消领取！');
	}
};

// 三级合成
export const level3 = async function level3(Array, func, fun) {
	try {
		let mytron = await window.tronWeb.contract().at(synthesis);
		let res = await mytron.level3Merge(Array).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		setTimeout(() => {
			hx(res).then((result) => {
				let str = result.contractResult[0].slice(-4);
				let num = parseInt(str, 16);
				Toast.clear();
				func(num);
				fun();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 四级合成
export const level4 = async function level4(Array, func, fun) {
	try {
		let mytron = await window.tronWeb.contract().at(synthesis);
		let res = await mytron.level4Merge(Array).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		console.log(res);
		setTimeout(() => {
			hx(res).then((result) => {
				let str = result.contractResult[0].slice(-4);
				let num = parseInt(str, 16);
				Toast.clear();
				func(num);
				fun();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 五级合成
export const level5 = async function level5(Array, func, fun) {
	try {
		let mytron = await window.tronWeb.contract().at(synthesis);
		let res = await mytron.level5Merge(Array).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: true
		});
		console.log(res);
		setTimeout(() => {
			hx(res).then((result) => {
				let str = result.contractResult[0].slice(-4);
				let num = parseInt(str, 16);
				Toast.clear();
				func(num);
				fun();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 实时节点合成
export const realTime = async function realTime(Array, func, fun) {
	try {
		let mytron = await window.tronWeb.contract().at(synthesis);
		let res = await mytron.realTimeMerge(Array).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		setTimeout(() => {
			hx(res).then((result) => {
				Toast.clear();
				func();
				fun();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 中级节点合成
export const middleLevel = async function middleLevel(Array, func, fun) {
	try {
		let mytron = await window.tronWeb.contract().at(synthesis);
		let res = await mytron.middleLevelMerge(Array).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		setTimeout(() => {
			hx(res).then((result) => {
				Toast.clear();
				func();
				fun();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 高级节点合成
export const highLevel = async function highLevel(Array, func, fun) {
	try {
		let mytron = await window.tronWeb.contract().at(synthesis);
		let res = await mytron.highLevelMerge(Array).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		setTimeout(() => {
			hx(res).then((result) => {
				Toast.clear();
				func();
				fun();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 查询有限权益卡牌周期
export const idByLimitedTimes = async function (n, id, str) {
	let address = AllCard[1][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.idByLimitedTime(id).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					str.push(parseInt(result._hex, 16) / 100 - 1);
					res(result);
					console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询待领取等级卡牌
export const inquire = async function (n, Array) {
	let address = AllCard[0][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.blindBoxList(localStorage.getItem('myaddress')).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [];
					result.forEach((e) => data.push(parseInt(e._hex, 16)));
					res(result);

					for (let i of data) {
						const asd = {};
						asd.num = i;
						asd.Activate = n + 1;
						Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询全部已拥有卡牌
export const already = async function (m, n, Array) {
	let address = AllCard[m][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.tokensOwnedByIds(localStorage.getItem('myaddress')).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [];
					result.forEach((e) => data.push(parseInt(e._hex, 16)));
					res(result);
					for (let i of data) {
						const asd = {};
						asd.num = i;
						asd.Activate = n + 1;
						Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询已拥有(已合成)等级卡牌
export const alreadySyn = async function (n, Array) {
	let address = AllCard[0][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.getBurnIds(localStorage.getItem('myaddress')).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [];
					result.forEach((e) => data.push(parseInt(e._hex, 16)));
					res(result);

					for (let i of data) {
						const asd = {};
						asd.num = i;
						asd.Activate = n + 1;
						Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询有限权益卡牌(已拥有)
export const alreadyEquity = async function (n, Array) {
	let address = AllCard[1][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.getIdAndLimitedTime(localStorage.getItem('myaddress')).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [[], []];
					result[0].forEach((val) => data[0].push(parseInt(val._hex, 16)));
					result[1].forEach((val) => data[1].push(parseInt(val._hex, 16)));

					res(result);
					for (let i = 0; i < data[0].length; i++) {
						const asd = {};
						// 编号
						asd.number = data[0][i];
						// 对应下标
						asd.Activate = n - 1;
						// 100/200/300
						asd.id = data[1][i] / 100 - 1;
						Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询有限权益卡牌(待领取)
export const notEquityTime = async function (n, time, Array) {
	let address = AllCard[1][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.lotteryList(localStorage.getItem('myaddress'), time).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [[], []];
					data[0].push(parseInt(result.amount._hex, 16));
					data[1].push(parseInt(result.reward._hex, 16));
					res(result);
					for (let i = 0; i < data[0].length; i++) {
						const asd = {};
						// 数量
						asd.number = data[0][i] - data[1][i];
						// 对应下标
						asd.Activate = n - 1;
						// 100/200/300
						asd.m = time / 100 - 1;
						asd.number && Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询永久权益卡牌(待领取)
export const notEquity = async function (n, Array) {
	let address = AllCard[1][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.lotteryList(localStorage.getItem('myaddress')).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [[], []];
					data[0].push(parseInt(result.amount._hex, 16));
					data[1].push(parseInt(result.reward._hex, 16));
					res(result);
					for (let i = 0; i < data[0].length; i++) {
						const asd = {};
						// 数量
						asd.number = data[0][i] - data[1][i];
						asd.Activate = n + 1;
						asd.number && Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询创世-联合权益卡(待领取)
export const genesis = async function (n, Array) {
	let address = AllCard[1][n];
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.buyList(localStorage.getItem('myaddress')).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					let data = [[], []];
					data[0].push(parseInt(result.amount._hex, 16));
					data[1].push(parseInt(result.reward._hex, 16));
					res(result);
					for (let i = 0; i < data[0].length; i++) {
						const asd = {};
						// 数量
						asd.number = data[0][i] - data[1][i];
						// 下标
						asd.Activate = n;
						asd.number && Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

export const hx = function (num) {
	return new Promise((resolve, reject) => {
		function asd(num) {
			const options = {
				method: 'POST',
				url: url,
				headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
				data: { value: num }
			};
			axios.request(options).then(function (response) {
				console.log(response.data.receipt);
				if (response.data.receipt == undefined) {
					setTimeout(() => {
						asd(num);
					}, 500);
				} else {
					console.log(response.data);
					if (response.data.receipt.result == 'SUCCESS') {
						resolve(response.data);
						return;
					} else if (response.data.receipt.result == 'REVERT') {
						resolve('REVERT');
						return;
					}
				}
			});
		}
		asd(num);
	});
};

// 查询NFT第一持有人
export const firstHolders = async function (address, id) {
	let mytron = await window.tronWeb.contract().at(address);
	return new Promise((res, rej) => {
		mytron.firstHolder(id).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
					// holder(window.tronWeb.address.fromHex(result));
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 获取市场所有订单
export const allMarketOrders = async function (Array) {
	let mytron = await window.tronWeb.contract().at(NFTDeal);
	return new Promise((res, rej) => {
		mytron.allMarketOrder().call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
					let data = [[], [], [], [], [], [], []];
					// 订单id
					result[0].forEach((val) => data[0].push(parseInt(val._hex, 16)));
					// 指定购买者
					// result[1].forEach((val) => data[1].push(window.tronWeb.address.fromHex(val)));
					// 出售者
					result[1].forEach((val) => data[1].push(window.tronWeb.address.fromHex(val)));
					// NFT地址
					result[2].forEach((val) => data[2].push(window.tronWeb.address.fromHex(val)));
					// NFT ID
					result[3].forEach((val) => data[3].push(parseInt(val._hex, 16)));
					// 卡牌售价
					result[4].forEach((val) => data[4].push(parseInt(val._hex, 16)));
					// 卡牌状态
					result[5].forEach((val) => data[5].push(parseInt(val._hex, 16)));
					// 结束时间
					result[6].forEach((val) => data[6].push(parseInt(val._hex, 16)));

					res(result);

					console.log(data);
					for (let i = 0; i < data[0].length; i++) {
						const asd = {};
						// 订单id
						asd.id = data[0][i];
						// // 买方
						// data[1][i] == 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb' ? (asd.buyer = '') : (asd.buyer = data[1][i]);
						// 卖方
						asd.seller = data[1][i];
						// NFT地址
						asd.NFTaddress = data[2][i];
						// NFT ID
						asd.NFTid = data[3][i];
						// 卡牌售价
						asd.price = data[4][i];
						// 卡牌状态  1为已合成
						asd.state = data[5][i];
						// 结束时间
						asd.endTime = data[6][i];
						asd.id != 0 && Array.push(asd);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询项目状态
// export const projectState = async function (address, id, Array) {
// 	let mytron = await window.tronWeb.contract().at(NFTDeal);
// 	return new Promise((res, rej) => {
// 		mytron.projectStatus(address, id).call(
// 			{
// 				from: window.tronWeb.defaultAddress.base58
// 			},
// 			function (error, result) {
// 				if (!error) {
// 					res(result);
// 					console.log(result);

// 					let data = [[], [], [], [], []];
// 					// 订单事件
// 					result[0].forEach((val) => data[0].push(parseInt(val._hex, 16)));
// 					// 订单报价
// 					result[1].forEach((val) => data[1].push(parseInt(val._hex, 16)));
// 					// 订单提供者
// 					result[2].forEach((val) => data[2].push(window.tronWeb.address.fromHex(val)));
// 					// 订单完成者
// 					result[3].forEach((val) => data[3].push(window.tronWeb.address.fromHex(val)));
// 					// 事件时间
// 					result[4].forEach((val) => data[4].push(parseInt(val._hex, 16)));

// 					console.log(data);
// 					for (let i = data[0].length - 1; i >= 0; i--) {
// 						const asd = {};
// 						// 订单事件
// 						asd.id = data[0][i];
// 						// 订单报价
// 						asd.price = data[1][i];
// 						// 订单提供者
// 						asd.seller = data[2][i];
// 						// 订单完成者
// 						data[3][i] == 'T9yD14Nj9j7xAB4dbGeiX9h8unkKHxuWwb' ? (asd.buyer = '') : (asd.buyer = data[3][i]);
// 						// 事件时间
// 						asd.time = data[4][i];
// 						Array.push(asd);
// 					}
// 				} else {
// 					Vue.$toast.error(error);
// 					rej(error);
// 				}
// 			}
// 		);
// 	});
// };

// 查询卡牌是否授权
export const isApprovedForAlls = async function (conAddress) {
	let mytron = await window.tronWeb.contract().at(conAddress);
	return new Promise((res, rej) => {
		mytron.isApprovedForAll(localStorage.getItem('myaddress'), NFTDeal).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 卡牌授权
export const setApprovalForAlls = async function setApprovalForAlls(conAddress) {
	try {
		let mytron = await window.tronWeb.contract().at(conAddress);
		let res = await mytron.setApprovalForAll(NFTDeal, 'true').send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		Vue.$toast('授权成功');
		console.log(res);
	} catch (e) {
		console.log(e);
	}
};

// 上架NFT订单
export const postAnOrders = async function postAnOrders(NFTaddress, NFTid, price, endTime, func) {
	try {
		console.log(NFTaddress, NFTid, price, endTime);
		let mytron = await window.tronWeb.contract().at(NFTDeal);
		let res = await mytron.postAnOrder(NFTaddress, NFTid, TronValues(price), endTime).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});

		console.log(res);
		setTimeout(() => {
			hx(res).then((res) => {
				Toast.clear();
				console.log(res);
				Vue.$toast(`发布成功\n\n请前往<市场>页面查看相关信息`);
				func();
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		console.log(e);
		Vue.$toast.error('取消发布');
	}
};

// 查询卡牌是否在出售中
export const orderActivitys = async function (address, id) {
	let mytron = await window.tronWeb.contract().at(NFTDeal);
	return new Promise((res, rej) => {
		mytron.orderActivity(address, id).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 购买卡牌
export const fulfillBasicOrders = async function fulfillBasicOrders(id, price, arr) {
	try {
		console.log(id, price);
		let mytron = await window.tronWeb.contract().at(NFTDeal);
		let res = await mytron.fulfillBasicOrder(id, TronValues(price)).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});

		console.log(res);
		setTimeout(() => {
			hx(res).then((res) => {
				console.log(res);
				if (res == 'REVERT') {
					Toast.clear();
					Vue.$toast('购买失败');
				} else {
					arr();
					Toast.clear();
					Vue.$toast('购买成功');
				}
			});
		}, 1000);
	} catch (e) {
		// arr();
		Toast.clear();
		console.log(e);
		Vue.$toast.error('取消购买');
	}
};

// 取消订单
export const cancels = async function cancels(id, arr) {
	try {
		console.log(id);
		let mytron = await window.tronWeb.contract().at(NFTDeal);
		let res = await mytron.cancel(id).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});

		console.log(res);
		setTimeout(() => {
			hx(res).then((res) => {
				arr();
				Toast.clear();
				console.log(res);
				Vue.$toast('订单取消成功');
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		console.log(e);
		Vue.$toast.error('继续出售');
	}
};

// 编辑订单
export const editOrders = async function editOrders(id, price, endTime, arr) {
	console.log(endTime);
	try {
		let mytron = await window.tronWeb.contract().at(NFTDeal);
		let res = await mytron.editOrder(id, TronValues(price), endTime).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		setTimeout(() => {
			hx(res).then((res) => {
				arr();
				Toast.clear();
				console.log(res);
				Vue.$toast('修改成功');
			});
		}, 1000);
	} catch (e) {
		Toast.clear();
		console.log(e);
		Vue.$toast.error('取消修改');
	}
};

// 用户等级卡牌待领取额度
export const amountAvailableLists = async function (address, id, array) {
	let mytron = await window.tronWeb.contract().at(capital);
	return new Promise((res, rej) => {
		mytron.amountAvailableList(address, id).call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
					result[1].forEach((val) => array[0].push(parseInt(val._hex, 16)));
					result[2].forEach((val) => array[1].push(parseInt(val._hex, 16) / 1000000));
					console.log(array);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 用户等级卡牌资金领取
export const multipleWithdraws = async function multipleWithdraws(address, id, array) {
	try {
		let mytron = await window.tronWeb.contract().at(capital);
		let res = await mytron.multipleWithdraw(address, id).send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		Toast.clear();
		Vue.$toast.success('领取成功');
		console.log(res);
		array();
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		console.log(e);
	}
};

// DAO组织可领取的资金
export const daoAvailables = async function () {
	let mytron = await window.tronWeb.contract().at(capital);
	return new Promise((res, rej) => {
		mytron.daoAvailable().call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// DAO资金领取
export const daoWithdraws = async function daoWithdraws() {
	try {
		let mytron = await window.tronWeb.contract().at(capital);
		let res = await mytron.daoWithdraw().send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		Toast.clear();
		Vue.$toast.success('领取成功');
		console.log(res);
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		console.log(e);
	}
};

// 技术支持待领取的手续费
export const technicalSupportFees = async function () {
	let mytron = await window.tronWeb.contract().at(charge);
	return new Promise((res, rej) => {
		mytron.technicalSupportFee().call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 技术支持手续费领取
export const technologyFeeWithdraws = async function technologyFeeWithdraws() {
	try {
		let mytron = await window.tronWeb.contract().at(charge);
		let res = await mytron.technologyFeeWithdraw().send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		Toast.clear();
		Vue.$toast.success('领取成功');
		console.log(res);
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		console.log(e);
	}
};

// 资金池合约可领取的手续费
export const capitalPoolFees = async function () {
	let mytron = await window.tronWeb.contract().at(charge);
	return new Promise((res, rej) => {
		mytron.capitalPoolFee().call(
			{
				from: window.tronWeb.defaultAddress.base58
			},
			function (error, result) {
				if (!error) {
					res(result);
					console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 资金池手续费领取
export const poolFeeWithdraws = async function poolFeeWithdraws() {
	try {
		let mytron = await window.tronWeb.contract().at(charge);
		let res = await mytron.poolFeeWithdraw().send({
			feeLimit: 5000000000,
			callValue: 0,
			shouldPollResponse: false
		});
		Toast.clear();
		Vue.$toast.success('领取成功');
		console.log(res);
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		console.log(e);
	}
};
