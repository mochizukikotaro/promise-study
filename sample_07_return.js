// then() の引数として渡された関数(ハンドラ)が値を返した場合は、
// Promise.resolve (値) によって、返値を自動的に Promise でラップします。
// cf. https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/then


/**
 * 上の説明の通り、Pattern 1 ~ 3 は同じ動きになります。
 */


var promiseA = () => {
	console.log("start A")
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 1000)
	})
}

/**
 * Pattern 1
 */
// var promiseB = () => {
// 	return new Promise((resolve, reject) => {
// 		resolve("strB")
// 	})
// }

/**
 * Pattern 2
 */
// var promiseB = () => {
// 	return Promise.resolve("strB")
// }

/**
 * Pattern 3
 */
var promiseB = () => {
	return "strB"
}

var hoge = (y) => {
	console.log("hoge")
	console.log(y + " in hoge")
}

promiseA()
	.then(promiseB)
	.then(hoge)
