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
    variable : function() {
        // const introduction = "안녕하세요. 제 이름은 김코딩입니다.";
        const introduction = "";

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
    addVariable : function () {
        const introduction = "안녕하세요. 제 이름은 " + myName + "입니다."
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
    operator : function(){
        const yourCode_1 = ""; 
        const yourCode_2 = ""; 
        const yourCode_3 = ""; 
        const yourCode_4 = ""; 
        

        // 리턴문은 수정하지 마세요🥰
        return [yourCode_1, yourCode_2, yourCode_3, yourCode_4];
    }
    
}