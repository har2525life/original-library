const myOriginalLibrary = (a, b) => {
    return console.log(a + b)
}

// myOriginalLibrary(1, 2)
// 本来はテストをしなければならない
// 数字以外のものが入ってきたときにどのような動作をするのか確認する必要がある


module.exports = myOriginalLibrary;