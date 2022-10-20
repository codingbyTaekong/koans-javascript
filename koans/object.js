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
    declareObject_1 : function () {
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
    declareObject_2 : function (arr) {
        return ''
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
    whatisMethod : function () {
        let answer;
        return answer
    },
    /**
     * 자바스크립트에서는 브라우저를 가리키는 특정 객체가 있습니다. 해당 객체의 이름은 무엇일까요?
     * 1: browser
     * 2: window
     * 3: window10
     * 4: windows
     * 5: chrome
     */
    selectBrowser : function () {
        let answer;
        return answer
    },
    /**
     * 자바스크립트에서는 DOM이라는 객체가 있습니다. DOM은 우리가 작성한 HTML 문저에 접근하기 위한 객체입니다.
     * 해당 객체의 이름은 무엇일까요?
     * 1: Dom
     * 2: documents
     * 3: document
     * 4: window
     */
     selectDom : function () {
        let answer;
        return answer
    }

}