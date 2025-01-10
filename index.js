var hasValue = true;
var count = 10;
var float = 3.14;
var negative = -1;
var single = 'hello';
var double = "hello";
var back = "hello";
var person = {
    name: "Jack",
    age: 21
};
var fruits = ["Apple", "Banana", "Grape"];
// Tuple型
var book = ["business", 1500, false];
book.push(21); // pushしてもエラーは起きないが、console.log(book[3])と参照するとエラーが出る
// Enum型
// =以降をなしにすると数値があてがわれる
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
coffee.size = CoffeeSize.SHORT;
// any型
var anything = true;
var banana = "banana";
banana = anything; // any型を代入してもエラーにならないので危険
// Union型
// コードの文脈によってエラーが起きたり起きなかったり
var unionType = 10;
var unionTypes = [21, "hello"];
// Literal型
var apple = "apple"; // "apple"しか入れられない。constを使うと自動的にLiteral型になる
var clothSize = "medium"; // Unionと組み合わせてEnumのように使えるが型しか生成してない点が異なる
var cloth = {
    color: "white",
    size: "medium"
};
// 関数に型をつける
// パラメーターには必ずつけること
// 戻り値の型はドキュメント的な役割として必要であれば設定
function add(num1, num2) {
    return num1 + num2;
}
// 戻り値が何もない時はvoidを使う
function sayHello() {
    console.log("Hello!");
}
console.log(sayHello()); // undefinedが返る
// 関数を保持する変数に型をつける
var anotherAdd = add;
var doubleNumber = function (num) { return num * 2; }; // アロー関数
// コールバック関数の型を指定する
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
// unknown型
var unknownInput = "hello";
var text;
// text = unknownInput; 代入できない
// satisfies演算子 / データの型をチェックする
28; //右と左の方が合ってないとエラーを出す
var age = 28; // satisfies以降は無視される
// never型　存在しない
function error(message) {
    throw new Error(message);
}
// console.log(error("エラーです"));
