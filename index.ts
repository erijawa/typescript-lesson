let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -1;
let single: string = 'hello';
let double: string = "hello";
let back: string = `hello`;

const person: {
  name: string;
  age: number;
} = {
  name: "Jack",
  age: 21
}

const fruits = ["Apple", "Banana", "Grape"];

// Tuple型
const book: [string, number, boolean] = ["business", 1500, false]; 
book.push(21) // pushしてもエラーは起きないが、console.log(book[3])と参照するとエラーが出る

// Enum型
// =以降をなしにすると数値があてがわれる
enum CoffeeSize  {
  SHORT = "SHORT",
  TALL = "TALL",
  GRANDE = "GRANDE",
  VENTI = "VENTI"
}
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
coffee.size = CoffeeSize.SHORT;

// any型
let anything: any = true;
let banana = "banana";
banana = anything; // any型を代入してもエラーにならないので危険

// Union型
// コードの文脈によってエラーが起きたり起きなかったり
let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"]

// Literal型
const apple: "apple" = "apple" // "apple"しか入れられない。constを使うと自動的にLiteral型になる
let clothSize: "small" | "medium" | "large" = "medium" // Unionと組み合わせてEnumのように使えるが型しか生成してない点が異なる
const cloth: {
  color: string,
  size: "small" | "medium" | "large"
} = {
  color: "white",
  size: "medium"
}

// typeエイリアス（型の変数のようなもの）
type NoteSize = "small" | "medium" | "large"

// 関数に型をつける
// パラメーターには必ずつけること
// 戻り値の型はドキュメント的な役割として必要であれば設定
function add(num1: number, num2: number): number {
  return num1 + num2
}
// 戻り値が何もない時はvoidを使う
function sayHello(): void {
  console.log("Hello!");
}
console.log(sayHello()); // undefinedが返る

// 関数を保持する変数に型をつける
const anotherAdd: (n1: number, n2:number) => number = add;
const doubleNumber: (num: number) => number = num => num * 2; // アロー関数
// コールバック関数の型を指定する
function doubleAndHandle(num: number, cb: (num: number)=> number):void {
  const doubleNum = cb(num*2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

// unknown型
let unknownInput: unknown = "hello";
let text: string;
// text = unknownInput; 代入できない

// satisfies演算子 / データの型をチェックする
28 satisfies number //右と左の方が合ってないとエラーを出す
const age = 28 satisfies number // satisfies以降は無視される

// never型　存在しない
function error(message: string): never {
  throw new Error(message);
}
// console.log(error("エラーです"));