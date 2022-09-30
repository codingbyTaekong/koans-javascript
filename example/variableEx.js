module.exports = {
    /**
    *  Variable test 1
    * 
    *  1. 'test1의 정답은 result' 을 출력하세요
    *  2. 주어진 변수 variable1 사용 할 수 있습니다.
    *  3. 정답은 result에 담아서 return에 넣습니다.
    *  4. return의 형식은 수정하지 않기를 권장합니다.
    */
    variableTest1 : function() {        
        const word = "test1"
        let variable1;
        let result;
        
        // 정답 예시
        // variable1 =  '의 정답은 result';
        // result = word + variable1;     
        
        return result;
    },

    /**
    *  Variable test 2
    * 
    *  1. 전화번호가 바뀌어서 변경하려고 합니다.
    *   주어진 phone_number를 기준으로 바뀐번호 new_phone_number  를 만드세요
    *  2. + - / * % 5가지 연산자를 전부 사용해야됩니다. 사용할 숫자는 제한이 없습니다.
    *  3. 정답은 result에 담아서 return 합니다.
    *  4. return은 수정하지 않기를 권장합니다.
    *  5. *hint  :::    3 % 1 = 3*
    */
     variableTest2 : function () {
        const phone_number = 15771542;      
        const new_phone_number = 10000023; 
        let result;

        // result = + phone_number * 0 / 1 % 1 - 1 + 10000024
      
       return result;
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
        

        return [yourCode_1, yourCode_2, yourCode_3, yourCode_4];
    }
    
}