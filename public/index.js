const v = require("../koans/variable");
const t = require("../koans/types");
const a = require("../koans/array");
const { expect } = require("chai");
const { describe } = require("mocha");
console.log("연결")
describe("변수와 자료형", function () {
  this.timeout(5000);
  it("변수를 선언하는 방법에 대해 알아봅시다.😁", function (done) {
    const result = v.variable();
    expect(result).to.be.equal("안녕하세요. 제 이름은 김코딩입니다.")
  });
  it("연산자와 변수를 합성하는 방법에 대해 알아봅시다.😁", function () {
    const result = v.addVariable()[0];
    const name = v.addVariable()[1];
    expect(name).to.not.equal(undefined);
    expect(name).to.be.equal("김코딩");
    expect(result).to.be.equal("안녕하세요. 제 이름은 김코딩입니다.")
  })
  
  it("자바스크립트의 기본 연산자에 대해 알아봅시다.😁", function () {
    const result = v.operator();
    result.forEach(value => expect(value).to.be.equal(true));
  })
    
  it("boolean형 데이터를 담고 있는 변수를 생성해봅시다.😁", function () {
    const result = typeof t.printBoolean();
    expect(result).to.be.equals('boolean');
  })

  it("null값을 담고 있는 변수를 생성해봅시다.😁", function () {
    const result = t.printNull();
    expect(result).to.be.equals(null);
  })

  it("undefined값을 담고 있는 변수를 생성해봅시다.😁", function () {
    const result = t.printUndefined();
    expect(result).to.be.equals(undefined);
  })

  it("숫자와 문자열을 담고 있는 변수를 생성해봅시다.😁", function () {
    const result = t.printStringAndNumber();
    expect(typeof result[0]).to.be.equals('string');
    expect(typeof result[1]).to.be.equals('number');
  })
});
describe("문자열과 숫자 기초", function (){
  it("영어의 소문자를 대문자로 바꿔보세요.", function () {
    const result = t.toUpperCase("Believe in yourself");
    expect(result).to.be.equals("BELIEVE IN YOURSELF")
  })
  it("띄어쓰기를 기준으로 몇 단어를 작성했는지 알려주는 함수를 작성해보세요.", function(){
    const temp = "젋음을 낭비하지 마세요.";
    const result = t.printWordslength(temp);
    expect(result).to.be(temp.split(' ').length);
  })
  it("문장과 찾고 싶은 단어가 주어지고, 찾고자 하는 단어가 문장에 포함되어 있는 경우 문장 속에서 단어가 시작되는 위치를 반환하는 함수를 작성해보세요", function(){
    const temp = "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다";
    const result = t.findIndexOfWord(temp, "인생");
    expect(result).to.be(temp.indexOf("인생"));
  })
})
describe("배열 기초", function () {
  it("배열의 길이를 리턴하는 함수를 작성해보세요.", function () {
    const testArr_1 = [0,1,2,3,4,5,6,7];
    const testArr_1_len = a.length(testArr_1);
    const testArr_2 = [null, null, undefined, undefined];
    const testArr_2_len = a.length(testArr_2);
    expect(testArr_1_len).to.be.equals(8);
    expect(testArr_2_len).to.be.equals(4);
  })
  it("1~9까지의 합을 forEach메소드를 활용해서 계산해보세요.", function () {
    const result = a.sum([0,1,2,3,4,5,6,7,8,9]);
    expect(result).to.be.equals(45);
    // expect(typeof result[1]).to.be.equals('number');
  })

  it("전달인자로 들어오는 arr의 모든 요소에 + 5를 더한 뒤 리턴하는 함수를 만드세요.", function () {
    let myArr = [0,1,2,3,4,5,6,7,8,9];
    const result = a.addFive(myArr);
    expect(result).to.have.members(myArr.map(el=> el+5))
  })
})

