/**
 * A, B, C, hoge と実行する
 * Promise オブジェクトの then でつなげる方法
 * B の引数を A で作成
 */

var promiseA = () => {
	console.log("start A")
	return new Promise((resolve, reject) => {
		setTimeout(resolve("argA"), 1000) // "argA" が B の引数となる
	})
}

var promiseB = (x) => {
	console.log("start B")
	console.log(x)
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

promiseA()
	.then(promiseB)
	.then(promiseC)
	.then(hoge)
