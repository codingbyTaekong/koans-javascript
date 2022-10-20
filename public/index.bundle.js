/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./koans/array.js":
/*!************************!*\
  !*** ./koans/array.js ***!
  \************************/
/***/ ((module) => {

/**
 * 자바스크립트에서 Array는 리스트 형태의 고수준 객체입니다.
 * 배열은 리스트와 비슷한 객체로서 연관배열과 달리 인덱스로 문자열을 사용할 수 없으며 무조건 정수만 허용됩니다.
 * 배열을 생성하는 방법은 두가지가 있습니다.
 * 참고자료 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/@@species
 *? 배열 리터럴 표기법 :
 * TODO : let numbers = [0,1,2,3,4,5];
 * 배열 첫번째 요소
 * ! numbers[0] === 0; // true
 * 배열 마지막 요소
 * ! numbers[numbers.length - 1] === 5;  // true
 *? 단일 매개변수 배열 생성자 :
 * TODO : let myArray = new Array(5);
 *? 복수 매개변수 배열 생성자 :
 *  TODO : let strings = new Array("안녕", "하세요");
 *? 배열의 요소에는 string, number, boolean, undefined, null, object, array, function 등 모든 요소를 담을 수 있습니다.
 * 
 */
module.exports = {
  /**
   * 배열의 length의 속성은 배열의 길이를 반환합니다.
   * 
   * @param {Array} arr 배열 
   * 전달인자로 들어오는 배열의 길이를 리턴하는 함수를 작성해보세요.
   */
  length: function length(arr) {
    // if (!Array.isArray(arr)) throw new Error("전달인자가 올바르지 않습니다.");
    // let result = arr.length;
    // return result;
    return arr.length;
  },
  /**
   * 배열은 순서가 있는 리스트 형태의 타입입니다.
   * 배열에는 여러가지 메소드가 있습니다.
   * 반복 메서드인 forEach를 알아봅시다.
   * forEach 메서드는 배열의 첫 번째 요소부터 마지막 요소까지 각각에 대해 실행합니다.
   * 
   * 문제 : 
   *  forEach 반복문을 활용해서 전달인자로 들어온 배열의 모든 요소의 합을 리턴하는 함수를 만드세요.
   * @returns sum 
   */
  sum: function sum(arr) {
    var sum = 0;
    arr.forEach(function (el) {
      sum += el;
    });
    //
    return sum;
  },
  /**
   * map 메서드는 forEach와 유사하지만 조금은 다른 메서드입니다.
   * forEach 메서드는 배열의 첫 번째 요소부터 마지막 요소까지 각각 실행하는 메서드에 반해,
   * map 메서드는 배열의 첫 번째 요소부터 마지막 요소까지 각각 실행한 후 새로운 배열을 리턴하는 메서드입니다.
   * 
   * 문제 :
   * 전달인자로 들어오는 arr의 모든 요소에 + 5를 더한 뒤 리턴하는 함수를 만드세요
   * @param {*} number 
   */
  addFive: function addFive(arr) {
    var newArr = arr.map(function (el) {
      return el + 5;
    });
    return newArr;
  },
  /**
   * filter 메서드는 배열의 첫 번째 요소부터 마지막 요소까지 각각 실행하면서 조건에 부합하여 true 값을 전달받은 요소들만을 반환하는 메서드입니다.
   * 문제 :
   * 전달인자로 들어오는 arr의 요소 중 짝수만 리턴하는 함수를 만드세요
   * 
   * 예시
   * 인풋 : [0,1,2,3,4,5,6]
   * 아웃풋 : [2,4,6]
   */
  filter: function filter(arr) {
    var newArr = arr.filter(function (el, index) {
      if (el === 0) {
        // 배출하면 안된다.
        return false;
      } else {
        if (el % 2 === 0) {
          // 짝수
          return true;
        } else {
          // 홀수
          return false;
        }
      }
      // if (el === 0) {
      //     return false
      // } else if (el % 2=== 0) {
      //     return true
      // } else {
      //     return false
      // }
    });

    return newArr;
  }
};

/***/ }),

/***/ "./koans/function.js":
/*!***************************!*\
  !*** ./koans/function.js ***!
  \***************************/
/***/ ((module) => {

/**
 * 
함수는 입력 값에 따라 출력 값을 만들어내는 블랙 박스와 동일합니다.

일상생활에서도 우리는 함수 블랙 형태의 물건들을 볼 수 있습니다.
동전을 넣고 원하는 것을 누르면 해당 물건이 나오는 자판기,
음식을 넣고 버튼을 누르면 음식이 갈리는 믹서기, ATM기 등이 무심코 사용했던 모든 물건들이 모두 함수의 형태와 비슷하거나 같다고 생각하시면 됩니다.
 */

module.exports = {
  /**
   * 함수는 인풋과 아웃풋이 있습니다.
   * x, y를 전달받아서 x,y 값을 곱한 결과를 리턴하는 함수를 작성해보세요.
   */
  declareFunction: function declareFunction() {
    return '';
  }
  /**
   * 
   */
};

/***/ }),

/***/ "./koans/object.js":
/*!*************************!*\
  !*** ./koans/object.js ***!
  \*************************/
/***/ ((module) => {

/**
 * 
 * 자바스크립트에서 객체는 
 * key : value 로 표현됩니다.
 * 
 * 객체의 특정 값은 key로 접근이가능합니다.
 * 예시)
 * 
 * const person = {
 *  name : "김코딩",
 *  age : 20
 * }
 * console.log(person.name) ===> "김코딩"
 * console.log(person.age) ===> 20
 */

module.exports = {
  /**
   * 어벤져스에는 여러 영웅들이 존재합니다.
   * 어벤져스에 출연하는 캐릭터와 배우이름을 쌍으로 갖는 객체를 생성해보세요.
   * IronMan - Robert John Downey Jr.
   * CaptainAmerica - Christopher Robert Evans
   * Hulk - Mark Alan Ruffalo
   * Thor - Chris Hemsworth
   * 
   */
  declareObject_1: function declareObject_1() {
    return Avengers;
  },
  /**
   * 전달인자로 들어온 arr는 아래와 같은 형태로 들어옵니다.
   * 0 번째 요소 : 이름(name)
   * 1 번째 요소 : 레벨(level)
   * 2 번째 요소 : 직업(job)
   * 4 번째 요소 : 마지막 위치(lastPoint)
   * 5 번째 요소 : 랭킹순위(ranking)
   * 
   * 해당 arr를 객체로 변환하여 리턴하는 함수를 작성해보세요.
   * @param {string} arr
   */
  declareObject_2: function declareObject_2(arr) {
    return '';
  },
  /**
   * 객체에는 문자열, 숫자뿐만 아니라 자바스크립트에서 사용되는 모든 타입을 값으로 가질 수 있습니다.
   * 어떤 객체에서 함수를 값으로 갖는 경우 이를 무엇이라고 표현하나요?
   * 1 : 함수
   * 2 : 클로저
   * 3 : 스코프
   * 4 : 메서드
   * 
   * 1~4번 보기 중 해당하는 명칭을 아래 함수를 통해 리턴하세요.
   */
  whatisMethod: function whatisMethod() {
    var answer;
    return answer;
  },
  /**
   * 자바스크립트에서는 브라우저를 가리키는 특정 객체가 있습니다. 해당 객체의 이름은 무엇일까요?
   * 1: browser
   * 2: window
   * 3: window10
   * 4: windows
   * 5: chrome
   */
  selectBrowser: function selectBrowser() {
    var answer;
    return answer;
  },
  /**
   * 자바스크립트에서는 DOM이라는 객체가 있습니다. DOM은 우리가 작성한 HTML 문저에 접근하기 위한 객체입니다.
   * 해당 객체의 이름은 무엇일까요?
   * 1: Dom
   * 2: documents
   * 3: document
   * 4: window
   */
  selectDom: function selectDom() {
    var answer;
    return answer;
  }
};

/***/ }),

/***/ "./koans/types.js":
/*!************************!*\
  !*** ./koans/types.js ***!
  \************************/
/***/ ((module) => {

module.exports = {
  /*
  자바스크립트의 자료형에는 7가지의 원시 데이터형과 참조 데이터형이 있습니다.
  - 원시 데이터형
      1. Boolean : true || false (참 혹은 거짓)
      2. null : 의도적으로 비어있는 null
      3. undefined : 값이 정이되어 있지 않는 상태
      4. Number : 정수 또는 실수형 숫자
      5. BigInt : 임의 정밀도의 정수(매우 큰 수)
      6. String : 문자열
      7. Symbol : 인스턴스가 고유하고 불변인 데이터 형
  - 참조 데이터형
      1. 배열 : Array 클래스는 리스트 형태의 고수준 객체인 배열을 생성할 때 사용하는 전역 객체입니다.
                [0,1,2,3,4,5] 처럼 순서가 있는 데이터 꾸러미
      2. 객체 : key-value가 쌍으로 이루어져 있는, 순서가 없는 데이터 꾸러미
  */

  /**
  *- boolean형을 담고 있는 변수를 생성해보세요.
     isActive라는 변수는 true 혹은 false의 값을 가져야 합니다.
  */
  printBoolean: function printBoolean() {
    var isActive = false;
    return isActive;
  },
  /**
  * - null값을 담고 있는 변수를 생성해보세요.
      개발과정에서 개발자가 의도적으로 null 값을 할당하는 경우가 있습니다.
      개발을 하다보면 어떨 때 사용하면 좋을지 자연스럽게 알게 됩니다.
  */
  printNull: function printNull() {
    var isNull = null;
    return isNull;
  },
  /**
  *- undefined 값을 담고 있는 변수를 생성해보세요.
      변수를 생성한 후 값을 할당하지면 해당 변수는 undefined가 출력됩니다.
  */
  printUndefined: function printUndefined() {
    var isUndefined = undefined;
    return isUndefined;
  },
  /**
  *- 숫자와 문자열을 담고 있는 변수를 생성해보세요.
  "", '', ``
  */

  printStringAndNumber: function printStringAndNumber() {
    var myString = "안녕";
    var myNumber = 32154684;
    return [myString, myNumber];
  },
  /**
   * mdn 사이트에서 예제를 확인하세요!
   * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
   * @param {string} string 
   * 
   * 파라미터로 들어오는 문자열을 대문자로 변환해서 반환하세요.
   * 
   * 예시:)
   * 인풋 : hello world
   * 아웃풋 : HELLO WORLD
   * 
   * 문자열을 소문자로 바꿔주는 함수에 대해서도 찾아서 공부해보세요.
   */
  toUpperCase: function toUpperCase(string) {
    return string.toUpperCase();
  },
  /**
   * 띄어쓰기를 기준으로 몇 단어를 작성했는지 알려주는 함수를 작성해보세요.
   * mdn 사이트에서 string.split() 메서드에 대해 찾아보면 쉽게 풀 수 있습니다!
   * 
   * @param {string} str 
   * @returns {number}
   * 
   * 예시:)
   * 인풋 : hello world
   * 아웃풋 : 2
   * 
   * 띄어쓰기를 기준으로 단어를 나눈다고 했으니 'hello'와 'world' 두 개의 단어가 있습니다.
   */
  printWordslength: function printWordslength(str) {
    var result = str.split(' ').length;
    return result;
    // return str.split(' ').length
  },

  /**
   * 문장과 찾고 싶은 단어가 주어지고, 
   * 찾고자 하는 단어가 문장에 포함되어 있는 경우,
   * 문장 속에서 단어가 시작되는 위치를 반환하는 함수를 작성해보세요.
   * 
   * string.c 메서드에 대해 공부해보세요!
   * 
   * @param {string} sentence 
   * @param {string} word 
   * @returns {number}
   * 
   * 예시:)
   * 인풋:
   * sentence : 나는 쉬는 날에 코딩을 하거나, 운동을 하면서 지내!
   * word : 코딩
   * 아웃풋 : 9
   */
  findIndexOfWord: function findIndexOfWord(sentence, word) {
    // 문장 : sentence
    // 단어 : word
    var result = sentence.indexOf(word);
    return result;
  }

  /**
   * 참고자료
   * 
   * 
   * 이미 선언한 문자열 혹은 숫자의 타입을 특정 메서드를 통해 변환할 수 있습니다.
   * ex) let number = 100;
   * console.log(typeof number) ====> output : number
   * console.log(typeof String(number)) ===> output : string
   * 
   * let number = "100";
   * console.log(typeof number) ====> output : string
   * console.log(typeof number(number)) ===> output : number
   */
};

/***/ }),

/***/ "./koans/variable.js":
/*!***************************!*\
  !*** ./koans/variable.js ***!
  \***************************/
/***/ ((module) => {

module.exports = {
  /**
  *< Variable basic 1>
  변수를 선언하는 방법에 대해 알아봅시다.😁
  변수는 데이터를 저장하기 위해 프로그램에 의해 이름을 할당받는 메모리 공간을 의미합니다.
  자바스크립트에서 변수를 선언하는 방법으로는 var / let / const가 존재하며,
  var 와 let의 경우 선언한 변수의 값을 재할당이 가능하지만
  const는 변수의 값을 상수화하기 때문에 재할당이 불가능합니다.
    - 아래의 문자열이 출력되도록 코드를 작성해보세요.
      출력예시 : 안녕하세요. 제 이름은 김코딩입니다.
  */
  variable: function variable() {
    // const introduction = "안녕하세요. 제 이름은 김코딩입니다.";
    var introduction = "안녕하세요. 제 이름은 김코딩입니다.";

    // 리턴문은 수정하지 마세요🥰
    return introduction;
  },
  /**
  *< Variable basic 2>
  연산자와 변수를 합성하는 방법에 대해 알아봅시다.
    - 아래의 문자열이 출력되도록 코드를 작성해보세요.
      출력예시 : 안녕하세요. 제 이름은 김코딩입니다.
  */
  /**
   * 아래 주석되어 있는 코드는 템플릿 리터럴을 활용한 코드입니다.
   * 구글링을 통해 템플릿 리터럴에 대해 공부해보세요.😘
   * @returns Array<String, String>
   */
  addVariable: function addVariable() {
    var myName = "김코딩";
    var introduction = "안녕하세요. 제 이름은 " + myName + "입니다.";
    // const introduction = `안녕하세요. 제 이름은 ${myName}입니다.`

    // 리턴문은 수정하지 마세요🥰
    return [introduction, myName];
  },
  /**
  *< operator basic>
  
  자바스크립트에서 가장 기본적인 연산자는 +, -, *, /, %, ===, !==입니다.
  ※ 여기서 꼭 이해하고 가야할 연산자는 /, %입니다.
      - "/" : 두 수를 나눈 몫을 리턴해줍니다.
      - "%" : 두 수를 나눈 나머지를 리턴해줍니다.
      - "===" : 비교할 두 값이 완전히 일치하는지 판별합니다.
      - "!==" : 비교할 두 값이 완전히 불일치하는지 판별합니다.
  
  *- 아래의 문장을 코드로 작성하여 변수에 할당해 보세요.
      1) 6 더하기 5는 11과 같습니다.
      2) 100 빼기 1은 101과 같지 않습니다.
      3) 9 나누기 3의 몫은 3과 같습니다.
      4) 10 나누기 3의 나머지는 0과 같지 않å습니다.
  */
  operator: function operator() {
    var yourCode_1 = 6 + 5 === 11;
    var yourCode_2 = 100 - 1 !== 101;
    var yourCode_3 = 9 / 3 === 3;
    var yourCode_4 = 10 % 3 !== 0;

    // 리턴문은 수정하지 마세요🥰
    return [yourCode_1, yourCode_2, yourCode_3, yourCode_4];
  }
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var v = __webpack_require__(/*! ../koans/variable */ "./koans/variable.js");
var t = __webpack_require__(/*! ../koans/types */ "./koans/types.js");
var a = __webpack_require__(/*! ../koans/array */ "./koans/array.js");
var o = __webpack_require__(/*! ../koans/object */ "./koans/object.js");
var f = __webpack_require__(/*! ../koans/function */ "./koans/function.js");
// const { expect } = require("chai");
describe("변수와 자료형", function () {
  this.timeout(5000);
  it("변수를 선언하는 방법에 대해 알아봅시다.😁", function () {
    var result = v.variable();
    expect(result).to.be.equal("안녕하세요. 제 이름은 김코딩입니다.");
  });
  it("연산자와 변수를 합성하는 방법에 대해 알아봅시다.😁", function () {
    var result = v.addVariable()[0];
    var name = v.addVariable()[1];
    expect(name).to.not.equal(undefined);
    expect(name).to.be.equal("김코딩");
    expect(result).to.be.equal("안녕하세요. 제 이름은 김코딩입니다.");
  });
  it("자바스크립트의 기본 연산자에 대해 알아봅시다.😁", function () {
    var result = v.operator();
    result.forEach(function (value) {
      return expect(value).to.be.equal(true);
    });
  });
  it("boolean형 데이터를 담고 있는 변수를 생성해봅시다.😁", function () {
    var result = _typeof(t.printBoolean());
    expect(result).to.be.equals('boolean');
  });
  it("null값을 담고 있는 변수를 생성해봅시다.😁", function () {
    var result = t.printNull();
    expect(result).to.be.equals(null);
  });
  it("undefined값을 담고 있는 변수를 생성해봅시다.😁", function () {
    var result = t.printUndefined();
    expect(result).to.be.equals(undefined);
  });
  it("숫자와 문자열을 담고 있는 변수를 생성해봅시다.😁", function () {
    var result = t.printStringAndNumber();
    expect(_typeof(result[0])).to.be.equals('string');
    expect(_typeof(result[1])).to.be.equals('number');
  });
});
describe("문자열과 숫자 기초", function () {
  it("영어의 소문자를 대문자로 바꿔보세요.", function () {
    var result = t.toUpperCase("Believe in yourself");
    expect(result).to.be.equals("BELIEVE IN YOURSELF");
  });
  it("띄어쓰기를 기준으로 몇 단어를 작성했는지 알려주는 함수를 작성해보세요.", function () {
    var temp = "젋음을 낭비하지 마세요.";
    var result = t.printWordslength(temp);
    expect(result).to.be.equals(temp.split(' ').length);
  });
  it("문장과 찾고 싶은 단어가 주어지고, 찾고자 하는 단어가 문장에 포함되어 있는 경우 문장 속에서 단어가 시작되는 위치를 반환하는 함수를 작성해보세요", function () {
    var temp = "절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다";
    var result = t.findIndexOfWord(temp, "인생");
    expect(result).to.be.equals(temp.indexOf("인생"));
  });
});
describe("배열 기초", function () {
  it("배열의 길이를 리턴하는 함수를 작성해보세요.", function () {
    var testArr_1 = [0, 1, 2, 3, 4, 5, 6, 7];
    var testArr_1_len = a.length(testArr_1);
    var testArr_2 = [null, null, undefined, undefined];
    var testArr_2_len = a.length(testArr_2);
    expect(testArr_1_len).to.be.equals(8);
    expect(testArr_2_len).to.be.equals(4);
  });
  it("1~9까지의 합을 forEach메소드를 활용해서 계산해보세요.", function () {
    var result = a.sum([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(result).to.be.equals(45);
    // expect(typeof result[1]).to.be.equals('number');
  });

  it("전달인자로 들어오는 arr의 모든 요소에 + 5를 더한 뒤 리턴하는 함수를 만드세요.", function () {
    var myArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = a.addFive(myArr);
    expect(result).to.have.members(myArr.map(function (el) {
      return el + 5;
    }));
  });
  it("전달인자로 들어오는 arr의 요소 중 짝수만 리턴하는 함수를 만드세요", function () {
    var numbers = [0, 1, 2, 4, 5, 3, 6, 8, 4, 7, 10, 16, 14, 15, 21, 22, 24];
    var result = a.filter(numbers);
    expect(result).to.have.members(numbers.filter(function (el) {
      if (el === 0) {
        return false;
      } else {
        if (el % 2 === 0) {
          return true;
        } else {
          return false;
        }
      }
    }));
  });
});
describe("함수 기초", function () {
  it("x, y를 전달받아서 x,y 값을 곱한 결과를 리턴하는 함수를 작성해보세요.", function () {
    var result = f.declareFunction;
    expect(_typeof(result)).to.be.equals('function');
    expect(result(5, 10)).to.be.equals(50);
  });
});
describe("객체 기초", function () {
  it("어벤져스에 출연하는 캐릭터와 배우이름을 쌍으로 갖는 객체를 생성해보세요.", function () {
    var result = o.declareObject_1();
    expect(result).to.deep.include({
      IronMan: "Robert John Downey Jr.",
      CaptainAmerica: "Christopher Robert Evans",
      Hulk: "Mark Alan Ruffalo",
      Thor: "Chris Hemsworth"
    });
  });
  it("전달인자로 들어온 arr 객체로 변환하여 리턴하는 함수를 작성해보세요.", function () {
    var result = o.declareObject_2(["최태호", 30, "프로그래머", "더픽트", 100]);
    expect(result).to.deep.include({
      name: "최태호",
      level: 30,
      job: "프로그래머",
      lastPoint: "더픽트",
      ranking: 100
    });
  });
  it("특정 객체에서 함수를 값으로 갖는 경우 이를 무엇이라고 표현하나요?", function () {
    var result = o.whatisMethod();
    expect(result).to.be.equals(4);
  });
  it("자바스크립트에서는 브라우저를 가리키는 특정 객체가 있습니다. 해당 객체의 이름은 무엇일까요?", function () {
    var result = o.selectBrowser();
    expect(result).to.be.equals(2);
  });
  it("자바스크립트에서는 DOM이라는 객체가 있습니다. 해당 객체의 이름은 무엇일까요?", function () {
    var result = o.selectDom();
    expect(result).to.be.equals(3);
  });
});
})();

/******/ })()
;
//# sourceMappingURL=index.bundle.js.map