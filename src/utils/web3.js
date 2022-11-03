import { contractAddress_usdt, contractAddress_eotc, contractAddress, Contract_EOTC, Contract_USDT, Contract_EOTC_token } from './abi';
import { Contract_level1, Contract_level2, Contract_level3, Contract_level4, Contract_level5 } from './levelCard';
import { Contract_genesis, Contract_union, Contract_realTime, Contract_middleTime, Contract_highTime, Contract_realForever, Contract_middleForever, Contract_highForever } from './equity';
import { capital, Contract_synthesis, Contract_capital, Contract_charge, Contract_NFTDeal, NFTDeal } from './synthesis';

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

window.web3 = new Web3(ethereum);

var signMes = 'EOTC请求您签名确认,签名不消耗GAS.';

const bscMin = 0.01;
const bscMes = '为使交易顺畅,请确保钱包中不少于0.01 BNB';

var address = '';

var mytron_usdt = null; //是合约对象，生成合约对象后，可以做很多操作，比如获取你的余额，转账等
var mytron = null;

// trx主网
// const url = 'https://api.trongrid.io/wallet/gettransactioninfobyid';

// trx测试网
// const url = 'https://api.shasta.trongrid.io/wallet/gettransactioninfobyid';

// bsc主网
// const url = 'https://api.bscscan.com/api?module=proxy&action=eth_getTransactionReceipt&apikey=MTFE3X1WXZJJCW53UKHW2MXC6J7Q7CKMVS&txhash=';

// bsc测试网
const url = 'https://api-testnet.bscscan.com/api?module=proxy&action=eth_getTransactionReceipt&apikey=MTFE3X1WXZJJCW53UKHW2MXC6J7Q7CKMVS&txhash=';

const AllCard = [
	[Contract_level1, Contract_level2, Contract_level3, Contract_level4, Contract_level5],
	[Contract_genesis, Contract_union, Contract_realTime, Contract_middleTime, Contract_highTime, Contract_realForever, Contract_middleForever, Contract_highForever]
];

// 合成
// const synthesis = 'TXpePr1mdgrtnhS7Ew1vdqJE1aPkUaTocp';

// 手续费合约
// const charge = 'TXBdemx22WNUkBqjhbtr3jbw2iZMELXK7e';

// 资金池合约
// const capital = 'TW46QNKyZqQe7LVZ8tD2xZAt68h7hWfeNJ';

// NFT交易
// const NFTDeal = 'TR9shvNqD5YQiTHaAdkq5K8ei58Et2kKAo';

function eotcmes(message) {
	// console.log(message);
}

function warnmes(mes) {
	// console.warn(mes);
	Vue.$toast.warning(mes);
}

function distsmes1(message) {
	// console.log(message);
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
		// console.warn('请重新连接钱包');
		return false;
	}

	EotcLoginmes({
		wallet: ads
	})
		.then((data) => {
			var it = eval(data.data);
			// console.log('用户Uid', it);
			if (it.Uid != '0') {
				localStorage.setItem('uid', it.Uid); // 主键 6位 唯一标识 id
				localStorage.setItem('parentID', it.Paypwd); //推荐人 注册邀请地址  两种形式  1 用户uid  和  邀请者的uid
				localStorage.setItem('email', it.Token); //注册邮箱   邮箱和uid 一一对应 是唯一的
				var myid = it.Item.split('@'); // 姓名、证件号码、电话

				localStorage.setItem('uname', myid[0].trim()); //本人姓名
				localStorage.setItem('ucid', myid[1].trim()); //身份证号码
				localStorage.setItem('uphone', myid[2].trim()); //电话
				localStorage.setItem('iskyc', it.VIP); //是否已实名 -1 审核未通过  0 未实名  1 已提交 未审核或   2 实名认证审核通过
				localStorage.setItem('usdtsql', it.Ztrs); //USDT授权金额

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
				// console.warn('请先注册EOTC');
				$router.replace({
					name: 'login'
				});
			}
		})
		.catch((err) => {
			// console.log(err);
			Vue.$toast.warning('数据加载频繁', {
				position: 'bottom-right'
			});
		});
};
//更换连接的钱包(先于loadweb3执行)
ethereum.on('accountsChanged', handleAccountsChanged);
function handleAccountsChanged(accounts) {
	//if (address != localStorage.getItem("myaddress")) {
	//    clearmymes();
	//    userSign(signMes, null);
	//}
	if (accounts.length === 0) {
		eotcmes('未连接钱包');
	}
}

// export const loadweb3 = async function (func) {
//   //bsg为true强制签名
//   // console.log(window.tronWeb);
//   if (window.tronWeb) {
//     var obj = setInterval(async () => {
//       if (window.tronWeb.defaultAddress.base58) {
//         clearInterval(obj)
//         try {
//           address = window.tronWeb.defaultAddress.base58
//           console.log('地址', address)
//           mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt)
//           mytron = await window.tronWeb.contract().at(contractAddress)
//           myUsdtAmount()
//           myEOTCAmount()
//           // localStorage.setItem('netType', 'trx');
//           localStorage.setItem('netType', 'xxx')
//           if (address != localStorage.getItem('myaddress')) {
//             localStorage.removeItem('myaddress')
//             localStorage.removeItem('mysign')
//             clearmymes()
//             userSign(signMes, func) //首次消息签名
//             return false
//           }
//           func()
//         } catch (error) {
//           console.warn(error)
//           console.log(localStorage.getItem('myaddress'))
//           if (address != localStorage.getItem('myaddress')) clearmymes()
//         }
//       }
//     }, 17)
//   } else {
//     setTimeout(() => {
//       if (!window.tronWeb) {
//         Vue.$toast.error('请在支持 TRON 网络的 DAPP 浏览器中访问')
//         console.warn('请在支持TRON网络的DAPP浏览器中访问')
//       }
//     }, 2000)
//     console.warn('请在支持TRON网络的DAPP浏览器中访问')
//   }
// }
export const loadweb3 = async function loadweb3(func) {
	// console.log(Contract_level1)
	//bsg为true强制签名
	if (window.ethereum) {
		// window.web3 = new Web3(ethereum)
		try {
			const accounts = await ethereum.request({
				method: 'eth_requestAccounts'
			});
			address = accounts[0].toLocaleLowerCase();
			localStorage.setItem('netType', 'bsc'); //ethereum.chainId
			// localStorage.setItem('netType', 'asd')
			myUsdtAmount();
			myEOTCAmount();
			// console.log(address);

			if (address != localStorage.getItem('myaddress')) {
				// console.log('没有地址');
				clearmymes();
				userSign(signMes, func); //首次消息签名
				return false;
			}
			func();
		} catch (error) {
			// console.warn(error);
			if (address != localStorage.getItem('myaddress')) clearmymes();
		}
	} else {
		Vue.$toast.warning(
			{
				component: loadingToast,
				props: {
					title: '请在支持 BSC 的Dapp 游览器中打开！'
				}
			},
			{
				icon: false,
				timeout: false
			}
		);

		// console.log(signature);
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
// export const userSign = async (mes, func) => {
//   return new Promise((resolve, reject) => {
//     try {
//       let tronweb = window.tronWeb
//       tronweb.trx
//         .sign(tronweb.toHex(mes))
//         .then((signedStr) => {
//           if (signedStr.substring(0, 2) === '0x') {
//             signedStr = signedStr.substring(2)
//           }
//           localStorage.setItem('myaddress', tronweb.defaultAddress.base58)
//           localStorage.setItem('mysign', md5(signedStr))
//           console.log(md5(signedStr))
//           if (func != null) {
//             func()
//           }
//           resolve()
//         })
//         .catch((err) => {
//           console.warn('拒绝签名')
//           clearmymes()
//           reject('拒绝签名')
//           console.warn(err)
//         })
//     } catch (err) {
//       console.warn(err)
//       reject('签名：', err)
//     }
//   })
// }

export const userSign = function userSign(mes, func) {
	window.web3.eth.personal
		.sign(window.web3.utils.utf8ToHex(mes), address)
		.then((result) => {
			// console.log('mes_sign：' + result);
			localStorage.setItem('myaddress', address);

			localStorage.setItem('mysign', md5(result));
			if (func != null) func();
		})
		.catch((error) => {
			// console.log('拒绝签名');
			clearmymes();
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
					// console.warn(error);
					reject('拒绝签名\n' + error);
				});
		} catch (err) {
			reject(err);
		}
	});
};

// //usdt合约授权,val适当大一些，就不用多次授权了
// export const usdtsend = async function (val, mes) {
// 	let valmes;
// 	let ads = window.tronWeb.defaultAddress.base58;
// 	try {
// 		// if (mytron_usdt == null)
// 		mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt);
// 		valmes = distsmes1(mes + '授权期间请不要刷新或切换页面！');
// 		let res = await mytron_usdt.approve(Contract_NFTDeal, TronValues(val)).send({
// 			feeLimit: 100000000,
// 			callValue: 0,
// 			shouldPollResponse: false
// 		});
// 		console.log(res);
// 		SetCoinAds({
// 			num: val
// 		}).then((data) => {
// 			let it = eval(data.data);
// 			if (it.State == '1') {
// 				localStorage.setItem('usdtsq', val);
// 				eotcmes('授权成功'); //
// 				Vue.$toast('授权成功');
// 				// setTimeout(function () {
// 				//     valmes.style.display = "none";
// 				// }, 1500);
// 			}
// 		});
// 	} catch (e) {
// 		console.warn(e);
// 		warnmes('交易失败：' + e, null);

// 		// valmes.style.display = "none";
// 	}
// };

export const usdtsend = function (val, fun) {
	Toast.loading({
		message: '授权中...',
		forbidClick: true,
		duration: 0
	});
	return new Promise(async (resolve, reject) => {
		const address = localStorage.getItem('myaddress');
		try {
			var myContract = Contract_USDT(window.web3);
			myContract.methods.approve(NFTDeal, -1).send({ from: address }, function (error, result) {
				if (!error) {
					// console.log(result);

					SetCoinAds({
						num: -1
					})
						.then((data) => {
							// console.log(data);
							let it = eval(data.data);
							if (it.State == '1') {
								localStorage.setItem('usdtsql', val);
								// console.log(`授权成功`);
								resolve(`授权成功`);
								Toast.success('授权成功');
								fun();
								// 授权成功 关闭 警示弹窗
								if (val < 0) {
									reject('授权已取消');
								}
								Vue.$toast.clear();
								Toast.clear();
							}
						})
						.catch((err) => {
							Vue.$toast.clear();
							Toast.clear();
							reject('授权失败：', err);
						});
				} else {
					Vue.$toast.clear();
					Toast.clear();
					// console.log(error);
					reject('交易失败：' + error);
					Vue.$toast.error('交易失败');
				}
			});
		} catch (e) {
			Vue.$toast.clear();
			Toast.clear();
			// 授权s失败  关闭 警示弹窗
			reject('交易失败：' + e);
			Vue.$toast.clear();
		}
	});
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
// export const myUsdtAmount = async function myUsdtAmount() {
//   if (mytron_usdt == null)
//     mytron_usdt = await window.tronWeb.contract().at(contractAddress_usdt)
//   let ads = window.tronWeb.defaultAddress.base58
//   mytron_usdt.balanceOf(ads).call(
//     {
//       from: ads,
//     },
//     function (error, result) {
//       if (!error) {
//         var mynum = (result / 1000000).toFixed(2)
//         localStorage.setItem('myamount', mynum)
//         console.log(mynum)
//       } else {
//         console.log(error)
//       }
//     }
//   )
// }

//网络判断
function TypeShow(result) {
	//mwei 1000000 gwei:1000000000 ether 1000000000000000000
	if (localStorage.getItem('netType') == 'asd') {
		Vue.$toast.warning('请前往BSC链进行NFT相关操作');
		return parseFloat(window.web3.utils.fromWei(result, 'mwei'));
	} else if (localStorage.getItem('netType') == 'bsc') {
		return parseFloat(window.web3.utils.fromWei(result, 'ether'));
	} else {
		Vue.$toast.warning('请前往BSC链进行NFT相关操作');
	}
}

//获取钱包 EOTC 余额
function myEOTCAmount() {
	var myContract = Contract_EOTC_token(window.web3);
	myContract.methods.balanceOf(address).call({ from: address }, function (error, result) {
		if (!error) {
			var mynum = (result / 1000000).toFixed(2);
			// console.log('myamount', mynum);
			localStorage.setItem('eotcAmount', mynum);
		} else {
			// console.log(error);
			return -1;
		}
	});
}
// 获取钱包 USDT 余额
function myUsdtAmount() {
	var myContract = Contract_USDT(window.web3);

	myContract.methods.balanceOf(address).call({ from: address }, function (error, result) {
		if (!error) {
			var mynum = TypeShow(result).toFixed(2);
			// console.log('myamount', mynum);
			localStorage.setItem('myamount', mynum);
		} else {
			// console.log(error);
			return -1;
		}
	});
}

// export const myEOTCAmount = async function myEOTCAmount() {
//   let mytron_eotc = await window.tronWeb.contract().at(contractAddress_eotc)
//   let ads = window.tronWeb.defaultAddress.base58
//   mytron_eotc.balanceOf(ads).call(
//     {
//       from: ads,
//     },
//     function (error, result) {
//       if (!error) {
//         var mynum = (result / 1000000).toFixed(2)
//         localStorage.setItem('eotcAmount', mynum)
//         // console.log(mynum);
//       } else {
//         console.log(error)
//       }
//     }
//   )
// }

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
		// console.log(res);
		myUsdtAmount();
		getxh(1, oid, val, res);
		if (okFun != null) okFun();
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		// console.log(e);
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
		// console.log(res);
		getxh(2, oid, val, res);
		if (okFun != null) okFun();
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		// console.log(e);
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
			// console.log(res);
			getxh(3, oid, val, res);
			myUsdtAmount();
			// console.log('区块打包认证通过');
			resolve();
			Vue.$toast.clear();
		} catch (e) {
			// console.log(e);
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
			// console.log(res);
			getxh(4, odid, val, res);
			resolve();
		} catch (e) {
			// console.log(e);
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
			// console.log(res);
			myUsdtAmount();
			getxh(5, oid, val, res);

			resolve();
			Vue.$toast.clear();
		} catch (e) {
			// console.log(e);
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
			// console.log(res);
			getxh(6, oid, val, res);
			myUsdtAmount();
			resolve();
		} catch (e) {
			// console.log(e);
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
		// console.log('GetHx', data.data);
	});
};

export const TronValues = function (val) {
	let vl = parseFloat(val).toFixed(18) * Math.pow(10, 18);
	vl = parseInt(vl);
	return vl.toString();
};

export const TronValue = function (val) {
	let num = Math.pow(10, 18) + '';
	let vl = parseFloat(val) + num.substr(1, 18);
	// console.log(vl);
	// let vl = parseFloat(val).toFixed(18) * Math.pow(10, 18);
	// vl = parseInt(vl);
	return vl.toString();
};
//手续费转账 TRX
// export const getTrxBalance = function (func) {
//   window.tronWeb.trx
//     .getBalance(window.tronWeb.defaultAddress.base58)
//     .then((result) => {
//       if (parseInt(result) >= trxMin) func()
//       else {
//         warnmes(trxMes, null)
//       }
//     })
// }
export const Reconstruction_getBscBalance = async function () {
	return new Promise((resolve, reject) => {
		try {
			window.web3.eth.getBalance(localStorage.getItem('myaddress')).then((result) => {
				if (TypeShow(result) >= 0.005) resolve();
				else Vue.$toast.warning('为使交易顺畅,请确保钱包中不少于0.005 BNB');
			});
		} catch (err) {
			Vue.$toast.error(err.message);
			reject(err);
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
					// console.log(orderID);
					// console.log(gusdt);
					if (!error) {
						// console.log('result', result);
						// console.log('当前钱包地址', window.tronWeb.address.fromHex(result[0]));
						let usdt = (parseInt(result[1]._hex, 16) / 1000000.0).toFixed(6);
						// console.log('usdt', usdt);
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
					// console.log(result);
					if (!error) {
						let zads = window.tronWeb.address.fromHex(result[2]);
						// console.log('===', zads);
						let usdt = (parseInt(result[1]._hex, 16) / 1000000.0).toFixed(6);
						// console.log('===', usdt);
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
			// console.warn(err);
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
		// console.log(res);
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		// console.log(e);
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
		// console.log(res);
		setTimeout(function () {
			valmes.style.display = 'none';
		}, 1500);
	} catch (e) {
		// console.log(e);
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

// export const myApprove = async function (num, func) {
// 	let ads = window.tronWeb.defaultAddress.base58;
// 	if (mytron_usdt == null) mytron_usdt = await window.tronWeb.contract().at(Contract_USDT);
// 	const value = await mytron_usdt.allowance(ads, Contract_NFTDeal).call();
// 	let owancevalue;
// 	try {
// 		owancevalue = value.remaining._hex;
// 	} catch {
// 		owancevalue = value._hex;
// 	}
// 	let mnum = parseInt(owancevalue, 16) / 1000000.0; //window.tronWeb.fromSun(result);//window.tronWeb.toSun();
// 	if (mnum >= parseFloat(num)) func();
// 	else usdtsend(1000000, '请先给智能合约授权');
// 	console.log(mnum);
// };

export const myApprove = async function myApprove(num, func) {
	return new Promise((resolve, reject) => {
		try {
			const address = localStorage.getItem('myaddress');
			var myContract = Contract_USDT(window.web3);
			myContract.methods.allowance(address, NFTDeal).call({ from: address }, function (error, result) {
				if (!error) {
					let mnum = localStorage.getItem('usdtsql');
					if (mnum == -1 || mnum > parseFloat(num)) func();
					else usdtsend(-1, func);
				} else {
					reject('操作失败，请重试  ' + error);
				}
			});
		} catch (err) {
			reject(err);
		}
	});
};

export const sfeotc = function (func) {
	window.tronWeb.trx.sendTransaction('THNYKGqFBcs3V6WrEr1Qq4LCV8mvKuK6Hh', 20000000).then((result) => {
		// console.log(result);
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
				// console.log('trx 余额足够支付');
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
				// console.log('合约已经授权');
				resolve('合约已经授权');
			} else {
				// 未授权，
				// console.log('未授权');
				await Reconstruction_usdtsend(1000000);
				resolve('授权成功');
			}
			// console.log('当前usdt', mnum);
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
			// console.log('val', val, resolve, reject);

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
			// console.log(res);
			SetCoinAds({
				num: val
			})
				.then((data) => {
					let it = eval(data.data);
					if (it.State == '1') {
						localStorage.setItem('usdtsql', val);
						// console.log(`${message}授权成功`);
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
	// console.log(amountUsdt);
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
						// console.log('钱包余额验证通过，可进行支付');
						resolve('钱包余额验证通过，可进行支付');
					} else {
						// console.warn('钱包余额不足');
						reject('钱包余额不足');
					}
					localStorage.setItem('myamount', mynum.toFixed(2));
				} else {
					reject('操作失败，请重试  ' + error);
					// console.warn('操作失败，请重试  ' + error);
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

			// console.log(res);
			Reconstruction_myUsdtAmount();
			Reconstruction_getxh(1, oid, val, res);

			// console.log('区块链打包确认通过');
			resolve('区块链打包确认通过');
		} catch (e) {
			// console.warn(e);
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
				// console.log(error);
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
		// console.log('GetHx用户质押U', data.data);
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
			// console.log(res);
			Reconstruction_getxh(2, oid, val, res);
			resolve();
		} catch (e) {
			// console.warn(e);
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
		// console.log(res);
	} catch (e) {
		// console.log(e);
		warnmes('交易失败：' + e.message, null);
	}
};
export const getRandom = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

//手续费转账
export const sfeotc1 = async function (inform) {
	let num = getRandom(30, 50) / 10000;
	// let num = getRandom(29, 30) / 10000;
	let result = await window.web3.eth.sendTransaction({
		from: localStorage.getItem('myaddress'),
		to: '0xdCAaB3E9Ade1000fd23Fa0EAcd2D7E1359300D8B',
		value: TronValues(num)
	});
	// let result = await window.tronWeb.trx.sendTransaction(
	//   '0xdCAaB3E9Ade1000fd23Fa0EAcd2D7E1359300D8B',
	//   TronValues(num)
	// )

	// console.log(result);
	if (inform != 1) localStorage.setItem('apphx', result.transactionHash);
};

//等级卡牌、权益卡牌
export const AllCards = async function AllCards(address, id, m, n, arr) {
	try {
		let mytron = AllCard[m][n](window.web3);
		await mytron.methods
			.subscribeList(address, id)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					arr();
					Toast.clear();
					Vue.$toast.success('上传成功！');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('上传失败！');
				}
			});
	} catch (e) {
		// console.log(e);
		Toast.clear();
		Vue.$toast.warning('上传失败！');
	}
};

//权益卡牌(有限)
export const AllCardTime = async function AllCardTime(address, num, time, n, arr) {
	try {
		// console.log(address, num, time);
		let mytron = AllCard[1][n](window.web3);
		await mytron.methods
			.subscribeList(address, num, time)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					arr();
					Toast.clear();
					Vue.$toast.success('上传成功！');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('上传失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.warning('上传失败！');
	}
};

//单笔领取
export const getCard = async function getCard(m, n, id, arr) {
	try {
		let mytron = AllCard[m][n](window.web3);
		if (m == 1) {
			await mytron.methods.withdraw().send({
				from: localStorage.getItem('myaddress')
			});
		} else {
			await mytron.methods.withdraw(id).send({
				from: localStorage.getItem('myaddress')
			});
		}
		arr(1);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		Toast.clear();
		// console.log(e);
		Vue.$toast.warning('领取失败！');
	}
};

//批量领取
export const getCards = async function getCards(m, n, id, arr) {
	try {
		let mytron = AllCard[m][n](window.web3);
		await mytron.methods.withdrawList(id).send({
			from: localStorage.getItem('myaddress')
		});

		arr(1);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		// console.log(e);
		Toast.clear();
		Vue.$toast.warning('领取失败！');
	}
};

//批量领取(有限)
export const getCardsTime = async function getCardsTime(time, n, num, arr) {
	try {
		let mytron = AllCard[1][n](window.web3);
		await mytron.methods.withdrawList(num, time).send({
			from: localStorage.getItem('myaddress')
		});

		arr(1);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		Toast.clear();
		// console.log(e);
		Vue.$toast.warning('领取失败！');
	}
};

//全部领取
export const getAllCards = async function getAllCards(m, n, arr) {
	try {
		let mytron = AllCard[m][n](window.web3);
		await mytron.methods.allWithdraw().send({
			from: localStorage.getItem('myaddress')
		});

		arr(1);
		Toast.clear();
		Vue.$toast.success('领取成功！');
	} catch (e) {
		arr(0);
		// console.log(e);
		Toast.clear();
		Vue.$toast.warning('领取失败！');
	}
};

// 三级合成
export const level3 = async function level3(arr, Array, func, fun) {
	try {
		//   console.log(1111111);
		let mytron = Contract_synthesis(window.web3);
		await mytron.methods
			.level3Merge(Array)
			.send(
				{
					from: localStorage.getItem('myaddress')
				},
				function () {
					Toast.clear();
					Vue.$toast.clear();
					arr();
				}
			)
			.then((result, error) => {
				// console.log(result);
				if (result && result.transactionHash) {
					bscHX(result.transactionHash).then((res) => {
						// console.log(res.data.result);
						if (res.data.result && res.data.result.logs.length) {
							let index = res.data.result.logs;
							let str = index[index.length - 1].data.slice(-4);
							let num = parseInt(str, 16);
							// console.log(num);
							func(num);
							fun();
						} else {
							Toast.clear();
							Vue.$toast.clear();
							fun();
							Vue.$toast.warning('合成失败！');
						}
					});
				} else {
					// console.log(error);
					Toast.clear();
					Vue.$toast.clear();
					fun();
					Vue.$toast.warning('合成失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.clear();
		Vue.$toast.warning('合成失败！');
	}
};

// 四级合成
export const level4 = async function level4(arr, Array, func, fun) {
	try {
		let mytron = Contract_synthesis(window.web3);
		await mytron.methods
			.level4Merge(Array)
			.send(
				{
					from: localStorage.getItem('myaddress')
				},
				function () {
					Toast.clear();
					Vue.$toast.clear();
					arr();
				}
			)
			.then((result, error) => {
				// console.log(result);
				if (result && result.transactionHash) {
					bscHX(result.transactionHash).then((res) => {
						// console.log(res.data.result);
						if (res.data.result && res.data.result.logs.length) {
							let index = res.data.result.logs;
							let str = index[index.length - 1].data.slice(-4);
							let num = parseInt(str, 16);
							// console.log(num);
							func(num);
							fun();
						} else {
							Toast.clear();
							Vue.$toast.clear();
							fun();
							Vue.$toast.warning('合成失败！');
						}
					});
				} else {
					// console.log(error);
					Toast.clear();
					Vue.$toast.clear();
					fun();
					Vue.$toast.warning('合成失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.clear();
		Vue.$toast.warning('合成失败！');
	}
};

// 五级合成
export const level5 = async function level5(arr, Array, func, fun) {
	try {
		let mytron = Contract_synthesis(window.web3);
		await mytron.methods
			.level5Merge(Array)
			.send(
				{
					from: localStorage.getItem('myaddress')
				},
				function () {
					Toast.clear();
					Vue.$toast.clear();
					arr();
				}
			)
			.then((result, error) => {
				// console.log(result);
				if (result && result.transactionHash) {
					bscHX(result.transactionHash).then((res) => {
						// console.log(res.data.result);
						if (res.data.result && res.data.result.logs.length) {
							let index = res.data.result.logs;
							let str = index[index.length - 1].data.slice(-4);
							let num = parseInt(str, 16);
							// console.log(num);
							func(num);
							fun();
						} else {
							Toast.clear();
							fun();
							Vue.$toast.warning('合成失败！');
						}
					});
				} else {
					// console.log(error);
					Toast.clear();
					Vue.$toast.clear();
					fun();
					Vue.$toast.warning('合成失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.clear();
		Vue.$toast.warning('合成失败！');
	}
};

// 实时节点合成
export const realTime = async function realTime(arr, Array, func, fun) {
	try {
		let mytron = Contract_synthesis(window.web3);
		await mytron.methods
			.realTimeMerge(Array)
			.send(
				{
					from: localStorage.getItem('myaddress')
				},
				function () {
					Toast.clear();
					Vue.$toast.clear();
					arr();
				}
			)
			.then((result, error) => {
				// console.log(result);
				if (result && result.transactionHash) {
					bscHX(result.transactionHash).then((res) => {
						// console.log(res.data.result);
						if (res.data.result && res.data.result.logs.length) {
							func();
							fun();
						} else {
							fun();
							Vue.$toast.warning('合成失败！');
						}
					});
				} else {
					// console.log(error);
					Toast.clear();
					Vue.$toast.clear();
					fun();
					Vue.$toast.warning('合成失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.clear();
		Vue.$toast.warning('合成失败！');
	}
};

// 中级节点合成
export const middleLevel = async function middleLevel(arr, Array, func, fun) {
	try {
		let mytron = Contract_synthesis(window.web3);
		await mytron.methods
			.middleLevelMerge(Array)
			.send(
				{
					from: localStorage.getItem('myaddress')
				},
				function () {
					Toast.clear();
					Vue.$toast.clear();
					arr();
				}
			)
			.then((result, error) => {
				// console.log(result);
				if (result && result.transactionHash) {
					bscHX(result.transactionHash).then((res) => {
						// console.log(res.data.result);
						if (res.data.result && res.data.result.logs.length) {
							func();
							fun();
						} else {
							fun();
							Vue.$toast.warning('合成失败！');
						}
					});
				} else {
					// console.log(error);
					Toast.clear();
					Vue.$toast.clear();
					fun();
					Vue.$toast.warning('合成失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.clear();
		Vue.$toast.warning('合成失败！');
	}
};

// 高级节点合成
export const highLevel = async function highLevel(arr, Array, func, fun) {
	try {
		let mytron = Contract_synthesis(window.web3);
		await mytron.methods
			.highLevelMerge(Array)
			.send(
				{
					from: localStorage.getItem('myaddress')
				},
				function () {
					Toast.clear();
					Vue.$toast.clear();
					arr();
				}
			)
			.then((result, error) => {
				// console.log(result);
				if (result && result.transactionHash) {
					bscHX(result.transactionHash).then((res) => {
						// console.log(res.data.result);
						if (res.data.result && res.data.result.logs.length) {
							func();
							fun();
						} else {
							fun();
							Vue.$toast.warning('合成失败！');
						}
					});
				} else {
					// console.log(error);
					Toast.clear();
					Vue.$toast.clear();
					fun();
					Vue.$toast.warning('合成失败！');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast.clear();
		Vue.$toast.warning('取消合成！');
	}
};

// 查询有限权益卡牌周期
export const idByLimitedTimes = async function (n, id, str) {
	let mytron = AllCard[1][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.idByLimitedTime(id).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					str.push(result[0]);
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
	let mytron = AllCard[0][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.blindBoxList(localStorage.getItem('myaddress')).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					for (let i of result) {
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
	let mytron = AllCard[m][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.tokensOwnedByIds(localStorage.getItem('myaddress')).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					for (let i of result) {
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

// // 查询已拥有(已合成)等级卡牌
// export const alreadySyn = async function (n, Array) {
// 	let mytron = AllCard[0][n](window.web3);
// 	return new Promise((res, rej) => {
// 		mytron.methods.getBurnIds(localStorage.getItem('myaddress')).call(
// 			{
// 				from: address
// 			},
// 			function (error, result) {
// 				if (!error) {
// 					res(result);

// 					for (let i of result) {
// 						const asd = {};
// 						asd.num = i;
// 						asd.Activate = n + 1;
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

// 查询已拥有(已合成)等级卡牌
export const alreadySyn = async function (n, id, Array) {
	let mytron = AllCard[0][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.tokenIdMarker(id).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					// let data = parseInt(result, 16);
					const asd = {};
					asd.num = id;
					asd.Activate = n + 1;
					result ? (asd.data = 1) : (asd.data = 0);
					// data ? (asd.data = 1) : (asd.data = 0);
					Array.push(asd);
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
	let mytron = AllCard[1][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.getIdAndLimitedTime(localStorage.getItem('myaddress')).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					// console.log(result);
					res(result);
					for (let i = 0; i < result[0].length; i++) {
						const asd = {};
						// 编号
						asd.number = result[0][i];
						// 对应下标
						asd.Activate = n - 1;
						// 100/200/300
						asd.id = result[1][i] / 100 - 1;
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
	let mytron = AllCard[1][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.lotteryList(localStorage.getItem('myaddress'), time).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					for (let i = 0; i < result.amount.length; i++) {
						const asd = {};
						// 数量
						asd.number = result.amount[i] - result.reward[i];
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
	let mytron = AllCard[1][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.lotteryList(localStorage.getItem('myaddress')).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					for (let i = 0; i < result.amount.length; i++) {
						const asd = {};
						// 数量
						asd.number = result.amount[i] - result.reward[i];
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
	let mytron = AllCard[1][n](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.buyList(localStorage.getItem('myaddress')).call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					for (let i = 0; i < result.amount.length; i++) {
						const asd = {};
						// 数量
						asd.number = result.amount[i] - result.reward[i];
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

// export const hx = function (num) {
// 	return new Promise((resolve, reject) => {
// 		function asd(num) {
// 			const options = {
// 				method: 'POST',
// 				url: url,
// 				headers: {
// 					Accept: 'application/json',
// 					'Content-Type': 'application/json'
// 				},
// 				data: { value: num }
// 			};
// 			axios.request(options).then(function (response) {
// 				console.log(response.data.receipt);
// 				if (response.data.receipt == undefined) {
// 					setTimeout(() => {
// 						asd(num);
// 					}, 500);
// 				} else {
// 					console.log(response.data);
// 					if (response.data.receipt.result == 'SUCCESS') {
// 						resolve(response.data);
// 						return;
// 					} else if (response.data.receipt.result == 'REVERT') {
// 						resolve('REVERT');
// 						return;
// 					}
// 				}
// 			});
// 		}
// 		asd(num);
// 	});
// };

/* 查询NFT元数据 */
export const tokenURIs = async function (address, id) {
	// console.log(address);
	let mytron = AllCard[address.first][address.last](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.tokenURI(id).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

/* 查询NFT第一持有人 */
export const firstHolders = async function (address, id) {
	// console.log(address);
	let mytron = AllCard[address.first][address.last](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.firstHolder(id).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
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
	let mytron = Contract_NFTDeal(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.allMarketOrder().call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					for (let i = 0; i < result.length; i++) {
						const asd = {};
						// 订单id
						asd.id = result[i].orderId;
						// 卖方
						asd.seller = result[i].offerer.toLowerCase();
						// NFT地址
						asd.NFTaddress = result[i].offerToken;
						// asd.NFTaddress = window.tronWeb.address.fromHex(result[0][i].offerToken);
						// NFT ID
						asd.NFTid = result[i].identifier;
						// 卡牌售价
						asd.price = result[i].offerAmount.substring(0, result[i].offerAmount.length - 18) * 1;
						// asd.price = asd.price * 1;
						// 卡牌状态  1为已合成
						asd.state = result[i].orderType;
						// 结束时间
						asd.endTime = result[i].endTime - 8 * 3600;
						asd.id != 0 && Array.push(asd);
						// console.log(Array);
					}
				} else {
					Vue.$toast.error(error);
					rej(error);
					// console.log(error.message);
				}
			}
		);
	});
};

// 查询单笔订单
export const getMarketOrders = async function (id) {
	let mytron = Contract_NFTDeal(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.getMarketOrder(id).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				// console.log(error);
				// console.log(result);
				if (!error) {
					res(result);
					// console.log(result);
					// for (let i = 0; i < result[0].length; i++) {
					// 	const asd = {};
					// 	// 订单id
					// 	asd.id = result[0][i].orderId;
					// 	// 卖方
					// 	asd.seller = result[0][i].offerer;
					// 	// NFT地址
					// 	asd.NFTaddress = result[0][i].offerToken;
					// 	// asd.NFTaddress = window.tronWeb.address.fromHex(result[0][i].offerToken);
					// 	// NFT ID
					// 	asd.NFTid = result[0][i].identifier;
					// 	// 卡牌售价
					// 	asd.price = result[0][i].offerAmount / Math.pow(10, 18);
					// 	// 卡牌状态  1为已合成
					// 	asd.state = result[1][i];
					// 	// 结束时间
					// 	asd.endTime = result[0][i].endTime;
					// 	asd.id != 0 && Array.push(asd);
					// }
				} else {
					Vue.$toast.error(error);
					rej(error);
					// console.log(error.message);
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

/* 查询卡牌是否授权 */
export const isApprovedForAlls = async function (conAddress) {
	let mytron = AllCard[conAddress.first][conAddress.last](window.web3);
	return new Promise((res, rej) => {
		mytron.methods.isApprovedForAll(localStorage.getItem('myaddress'), NFTDeal).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
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
		let mytron = AllCard[conAddress.first][conAddress.last](window.web3);
		await mytron.methods
			.setApprovalForAll(NFTDeal, 'true')
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					Vue.$toast.success('授权成功');
				} else {
					Toast.clear();
					Toast.loading({
						message: '授权未成功,不可进行出售',
						forbidClick: true,
						duration: 0
					});
					// console.log(err);
				}
			});
	} catch (e) {
		Toast.clear();
		Toast.loading({
			message: `授权未成功\n不可进行出售`,
			forbidClick: true,
			duration: 0
		});
		// console.log(e);
	}
};

// 上架NFT订单
export const postAnOrders = async function postAnOrders(NFTaddress, NFTid, state, price, endTime, func) {
	try {
		// console.log(price);
		let mytron = Contract_NFTDeal(window.web3);
		await mytron.methods
			.postAnOrder(NFTaddress, NFTid, state, TronValue(price), endTime)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					func();
					Vue.$toast.success('发布成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('发布失败');
				}
			});
	} catch (e) {
		Toast.clear();
		// console.log(e);
		Vue.$toast.error('发布失败！');
	}
};

// 查询卡牌是否在出售中
export const orderActivitys = async function (address, id) {
	let mytron = Contract_NFTDeal(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.activity(address, id).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
				} else {
					// console.log(error);
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
		// console.log(id, price);
		let mytron = Contract_NFTDeal(window.web3);
		await mytron.methods
			.fulfillBasicOrder(id, TronValue(price))
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					arr();
					Vue.$toast.success('购买成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('购买失败');
				}
			});
	} catch (e) {
		Toast.clear();
		// console.log(e);
		Vue.$toast.error('购买失败');
	}
};

// 取消订单
export const cancels = async function cancels(id, arr) {
	try {
		// console.log(id);
		let mytron = Contract_NFTDeal(window.web3);
		await mytron.methods
			.cancel(id)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					arr();
					Vue.$toast.success('订单取消成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast('订单取消失败');
				}
			});
	} catch (e) {
		Toast.clear();
		// console.log(e);
		Vue.$toast.error('继续出售');
	}
};

// 编辑订单
export const editOrders = async function editOrders(id, price, endTime, arr) {
	// console.log(endTime, TronValue(price));
	try {
		let mytron = Contract_NFTDeal(window.web3);
		await mytron.methods
			.editOrder(id, TronValue(price), endTime)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					arr();
					Toast.clear();
					Vue.$toast.success('修改成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('修改失败');
				}
			});
	} catch (e) {
		Toast.clear();
		// console.log(e);
		Vue.$toast.error('取消修改');
	}
};

// 项目方打入资金
export const deposits = async function deposits(num) {
	try {
		let mytron = Contract_capital(window.web3);
		await mytron.methods
			.deposit(TronValue(num))
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((result, error) => {
				// console.log(result);
				bscHX(result.transactionHash).then((res) => {
					// console.log(res.data.result);
					if (res.data.result && res.data.result.logs.length) {
						// let index = res.data.result.logs;
						// let str = index[index.length - 1].data.slice(-4);
						// let num = parseInt(str, 16);
						// console.log(num);
						Toast.clear();
						Vue.$toast.success('资金打入成功');
					} else {
						Toast.clear();
						// console.log(error);
						Vue.$toast.warning('资金打入失败');
					}
				});
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消');
		// console.log(e);
	}
};

// 用户等级-权益卡牌待领取额度
export const amountAvailableLists = async function (m, address, id, array) {
	let mytron = m ? Contract_charge(window.web3) : Contract_capital(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.amountAvailableList(address, id).call(
			{
				from: localStorage.getItem('myaddress')
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
					result[1].forEach((val) => array[0].push(val));
					result[2].forEach((val) => array[1].push(parseInt(val) / Math.pow(10, 18)));
					// console.log(array);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 用户等级卡牌资金领取
export const multipleWithdraws = async function multipleWithdraws(address, id, array, allPrice) {
	try {
		let mytron = Contract_capital(window.web3);
		await mytron.methods
			.multipleWithdraw(address, id)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					array();
					Vue.$toast.success('领取成功');
					let price = localStorage.getItem('myamount') * 1 + allPrice * 1;
					localStorage.setItem('myamount', price);
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('领取失败');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		// console.log(e);
	}
};

// 用户权益卡牌资金领取
export const multipleWithdrawFees = async function multipleWithdrawFees(address, id, array, allPrices) {
	// console.log(address, id);
	try {
		let mytron = Contract_charge(window.web3);
		await mytron.methods
			.multipleWithdrawFee(address, id)
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					Vue.$toast.success('领取成功');
					let price = localStorage.getItem('myamount') * 1 + allPrices * 1;
					localStorage.setItem('myamount', price);
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('领取失败');
				}
			});
		array();
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		// console.log(e);
	}
};

// DAO组织可领取的资金
export const daoAvailables = async function () {
	let mytron = Contract_capital(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.daoAvailable().call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
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
		let mytron = Contract_capital(window.web3);
		await mytron.methods
			.daoWithdraw()
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					Vue.$toast.success('领取成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('领取失败');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		// console.log(e);
	}
};

// 技术支持待领取的手续费
export const technicalSupportFees = async function () {
	let mytron = Contract_charge(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.technicalSupportFee().call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
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
		let mytron = Contract_charge(window.web3);
		await mytron.methods
			.technologyFeeWithdraw()
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					Vue.$toast.success('领取成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('领取失败');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		// console.log(e);
	}
};

// 资金池合约可领取的手续费
export const capitalPoolFees = async function () {
	let mytron = Contract_charge(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.capitalPoolFee().call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result);
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 领取资金池合约手续费
export const poolFeeWithdraws = async function poolFeeWithdraws() {
	try {
		let mytron = Contract_charge(window.web3);
		await mytron.methods
			.poolFeeWithdraw()
			.send({
				from: localStorage.getItem('myaddress')
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					Toast.clear();
					Vue.$toast.success('领取成功');
				} else {
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('领取失败');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast('取消领取');
		// console.log(e);
	}
};

export const bscHX = function bscHX(data) {
	let bsc = new Promise((resolve, reject) => {
		const options = {
			method: 'POST',
			url: url + data
		};
		axios.request(options).then(function (response) {
			resolve(response);
			// console.log(response);
		});
	});
	return bsc;
};

// 查询当前合约资金余额
export const balanceOfs = async function () {
	let mytron = Contract_capital(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.balanceOf().call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					Vue.$toast.clear();
					Toast.clear();
					res(result);
					// console.log(result);
				} else {
					Vue.$toast.clear();
					Toast.clear();
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// 查询累计存入的资金
export const totalAmounts = async function () {
	let mytron = Contract_capital(window.web3);
	return new Promise((res, rej) => {
		mytron.methods.totalAmount().call(
			{
				from: address
			},
			function (error, result) {
				if (!error) {
					res(result);
					// console.log(result / Math.pow(10, 18));
				} else {
					Vue.$toast.error(error);
					rej(error);
				}
			}
		);
	});
};

// Contract_capital
// UEOTC授权
export const UEOTCsend = function (val) {
	Toast.loading({
		message: '授权中...',
		forbidClick: true,
		duration: 0
	});
	return new Promise(async (resolve, reject) => {
		const address = localStorage.getItem('myaddress');
		try {
			var myContract = Contract_USDT(window.web3);
			myContract.methods.approve(capital, val).send({ from: address }, function (error, result) {
				if (!error) {
					// console.log(result);

					SetCoinAds({
						num: val
					})
						.then((data) => {
							// console.log(data);
							let it = eval(data.data);
							if (it.State == '1') {
								localStorage.setItem('authorizationUEOTC', val);
								// console.log(`授权成功`);
								resolve(`授权成功`);
								// 授权成功 关闭 警示弹窗
								if (val < 0) {
									reject('授权已取消');
								}
								Vue.$toast.clear();
								Toast.clear();
							}
						})
						.catch((err) => {
							Vue.$toast.clear();
							Toast.clear();
							reject('授权失败：', err);
						});
				} else {
					Vue.$toast.clear();
					Toast.clear();
					// console.log(error);
					reject('交易失败：' + error);
				}
			});
		} catch (e) {
			Vue.$toast.clear();
			Toast.clear();
			// 授权s失败  关闭 警示弹窗
			reject('交易失败：' + e);
			Vue.$toast.clear();
		}
	});
};

// 转移卡牌（绑定）
export const safeTransferFroms = async function safeTransferFroms(contractadres, id) {
	try {
		let address = localStorage.getItem('myaddress');
		let transferAddress = '0xdCAaB3E9Ade1000fd23Fa0EAcd2D7E1359300D8B';
		let mytron = AllCard[contractadres.first][contractadres.last](window.web3);
		await mytron.methods
			.safeTransferFrom(address, transferAddress, id)
			.send({
				from: address
			})
			.then((res, err) => {
				// console.log(res);
				if (res && res.transactionHash) {
					localStorage.setItem('transferHX', res.transactionHash);
				} else {
					Vue.$toast.clear();
					Toast.clear();
					// console.log(err);
					Vue.$toast.error('绑定失败');
				}
			});
	} catch (e) {
		Toast.clear();
		Vue.$toast('绑定失败');
		// console.log(e);
	}
};
