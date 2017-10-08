/**
 * A, B, C, hoge と実行する
 * async / await を使う方法
 * B の引数を A で作成
 */

var promiseA = () => {
	console.log("start A")
	return new Promise((resolve, reject) => {
		setTimeout(resolve("argA"), 1000)
	})
}

var promiseB = (x) => {
	console.log("start B")
	console.log(x + " in B")
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000)
	})
}

var promiseC = () => {
	console.log("start C")
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000)
	})
}

var hoge = () => { console.log("hoge") }

var piyo = async () => {
	arg = await promiseA()
	await promiseB(arg)
	await promiseC()
	hoge()
}
piyo()
