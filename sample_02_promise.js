/**
 * A, B, C, hoge と実行する
 * Promise オブジェクトの then でつなげる方法
 */

var promiseA = () => {
	console.log("start A")
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000)
	})
}

var promiseB = () => {
	console.log("start B")
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
