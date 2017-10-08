/**
 * A, B, C, hoge の順で実行する
 */

var waitA = (X) => {
	console.log("start A")
	setTimeout(X, 1000)
}

var waitB = (X) => {
	console.log("start B")
	setTimeout(X, 1000)
}

var waitC = (X) => {
	console.log("start C")
	setTimeout(X, 1000)
}

var hoge = () => { console.log("hoge") }

waitA(() => {
	waitB(() => {
		waitC(hoge)
	})
})
