/**
 * A, B, C, hoge と実行する
 * Promise オブジェクトの then でつなげる方法
 * 
 * B の内部で、A, C を順に呼ぶ
 */


var promiseA = () => {
	console.log("start A")
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000)
	})
}

var promiseB = async () => {
	console.log("start B")

	console.log("===============");
	await promiseA()
	await promiseC()
	console.log("===============");

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
	await promiseA()
	await promiseB()
	await promiseC()
	hoge()
}
piyo()
