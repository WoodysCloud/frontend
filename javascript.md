# JavaScript

## 프로그래밍 문법 공부

> 데이터(자료형)
>
> 변수 - 데이터 타입
>
> 명령 구문 - 조건문(분기문), 반복문
>
> 함수
>
> 배열, 객체(Object), Class

### JS Data Type

https://www.w3schools.com/js/js_datatypes.asp

> 자바스크립트는 대체적으로 데이터 타입을 구분하지 않음
>
> Boolean 타입은 별도로 타입 구분됨

### JS Variable

https://www.w3schools.com/js/js_variables.asp
https://www.w3schools.com/js/js_let.asp
https://www.w3schools.com/js/js_const.asp

> var: ES5
>
> let, const: ES6

### JS Operator

https://www.w3schools.com/js/js_operators.asp

> a = a + 1
>
> => a += 1
>
> => a++

### JS Conditions

https://www.w3schools.com/js/js_if_else.asp

> 조건문 / 분기문
>
> if구문에 사용되는 condition 식은 결과가 true/false가 나올 수 있는 식
>
> JavaScript에서 0 - false, 그 이외의 정수 - true

### JS Switch

https://www.w3schools.com/js/js_switch.asp

> expression은 결과가 true/false의 형태가 아니고 일반 데이터(숫자, 문자) 형태

### JS Loop For

https://www.w3schools.com/js/js_loop_for.asp

### JS Loop While

https://www.w3schools.com/js/js_loop_while.asp

> 조건문(반복문), 반복문은 프로그램 알고리즘의 논리적인 흐름에 관여하는 명령구문

### JS Function

https://www.w3schools.com/js/js_functions.asp

> 함수 선언 기본 형식
>
> 함수에 매개변수 사용하는 형식
>
> 함수에 return을 사용하는 형식

### JS Arrow Function

https://www.w3schools.com/js/js_arrow_function.asp

### JS Array

https://www.w3schools.com/js/js_arrays.asp

> 배열 데이터를 변수에 대입 => 배열변수에는 배열데이터가 저장되어 있는 메모리 위치값 저장
>
> const 키워드를 사용했을 때 전체 배열 데이터의 변화 없이 원소 변경, 추가, 삭제 가능
>
> const 키워드를 사용했을 때 전체 배열 데이터의 변경은 불가능
>
> 배열 데이터도 객체 데이터로 선언됨

### JS Object

https://www.w3schools.com/js/js_objects.asp

> window 브라우저 관련 전역 객체

### JS Class

https://www.w3schools.com/js/js_classes.asp

> 클래스는 객체 데이터를 생성할 수 있도록 하는 설계도

### JS this

https://www.w3schools.com/js/js_this.asp

> this가 사용되는 위치
>
> - Object 안에 있는 method에서 사용: 포함하는 object를 가리킴
> - 전역 공간에서 사용: 전역 객체를 가리킴
> - 함수 공간에서 사용: 전역 객체를 가리킴

### JavaScript에서 사용할 수 있는 객체(제공되는 객체)의 종류

> API: 어플리케이션 프로그래밍을 위해 여러 서비스/프레임워크/라이브러리에서 제공되는 객체 또는 함수

> HTML% API, ES6 API(Object): 내장 객체
>
> - geolocation, ...

> ES5/ES6 Object: 내장 객체
>
> - Math, Date, ...

> DOM(Document Object Model)
>
> - HTML Element를 객체로 만든 것

> BOM(Browser Object Model)
>
> - 브라우저와 연관된 객체

> 외부 API
>
> - 지도 API, 날씨 데이터 API의 객체

### DOM 콘텐츠

> HTML문서에 없던 콘텐츠를 프로그래밍을 통해서 생성 => 동적(Dynamic) 생성

### Finding DOM

> HTML4
>
> getElementById()
>
> getElementsByTagName()
>
> getElementsByClassName()
>
> HTML5
>
> querySelector()
>
> querySelectorAll()
>
> - 한 종류의 메소드로 id, class, tag 요소로 접근하는데 모두 사용 가능
> - CSS Selector 사용방법과 동일한 방법으로 요소 종류를 구분

### Create, Append Element(Node)

> document.createElement()
>
> document.appendChild()

### Vanilla js / Jquery

> Vanilla JS: 라이브러리나 프레임워크 사용없이 순수 자바스크립트로 개발하는 것
>
> jquery: JavaScript 라이브러리
>
> - $() == $(document).ready(): HTML Element가 모두 렌더링된 이후에 실행

### JS Event

https://www.w3schools.com/js/js_htmldom_events.asp

> Event: 상태 변화에 따라 발생되는 신호
>
> 이벤트 종류
>
> - 마우스: 클릭, 움직임, 휠, ...
> - 키보드: 키 누름, ...

### JS Event Listener(Handler)

> addEventListener(이벤트, 함수)
>
> - jquery: on()
