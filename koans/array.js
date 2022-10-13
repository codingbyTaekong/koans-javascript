

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
    length : function (arr) {
        if (!Array.isArray(arr)) throw new Error("전달인자가 올바르지 않습니다.");
        let result;
        return result;
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
    sum : function (arr) {
        let sum = 0;
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
    addFive : function (arr) {
        let newArr = [];

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
    filter : function(arr) {
        let newArr = [];

        return newArr;
    },
}