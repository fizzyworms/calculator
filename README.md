# calculator

### 사칙연산이 가능한 계산기 만들기
### 사용 언어 : JavaScript
- 계산하는 핵심적인 방법인 eval()을 사용하려고 했으나 eval()은 인자로 받은 코드를 caller의 권한으로 수행하는 해킹의 가능성이 있는 위험한 함수라고 하여 자바스크립트로 구현하는 방법을 알아보았다. 
### 주요 기능 : AC(all-clear), 숫자 하나씩 지우기, 숫자 및 연산자 선택하기, 화면에 표시하기, 사칙연산(+,-,*,/)
  - swich를 이용하여 사용자가 클릭한 연산자에 맞게 계산한다
  - split()으로 소수점 이전과 이후 숫자를 구분한 후  화면에 표시하고, 소수점 이전 숫자는 1000단위 쉼표 넣어준다 
  - slice()으로 화면 상 숫자 하나씩 지우기 실행 
  - 클래스를 생성하고 내부에 함수를 정의하여 사용한다
  

### 느낀점
- 아직 클래스에 대한 이해가 부족하다는 것을 느꼈다. 
함수를 정의했을 때 그 함수가 반환하는 값이 무엇인지 정확하게 알고 있도록 해야겠다. 
그리고 early exit 하여 조건에 해당하지 않으면 바로 함수를 건너뛰도록 하는 것이 코드 구성에 좋다는 것을 알 수 있었다. 


### 출처
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/eval
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split
https://hianna.tistory.com/441
