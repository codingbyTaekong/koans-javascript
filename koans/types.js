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
    printBoolean : function () {
       let isActive;
       return isActive;
    },
    /**
    * - null값을 담고 있는 변수를 생성해보세요.
        개발과정에서 개발자가 의도적으로 null 값을 할당하는 경우가 있습니다.
        개발을 하다보면 어떨 때 사용하면 좋을지 자연스럽게 알게 됩니다.
    */
    printNull : function() {
        let isNull = null;
        return isNull;
    },
    /**
    *- undefined 값을 담고 있는 변수를 생성해보세요.
        변수를 생성한 후 값을 할당하지면 해당 변수는 undefined가 출력됩니다.
    */
    printUndefined : function() {
        let isUndefined;
        return isUndefined;
    },

    /**
    *- 숫자와 문자열을 담고 있는 변수를 생성해보세요.
    */
    printStringAndNumber : function() {
        let myString;
        let myNumber;
        return [myString, myNumber];
    }
}