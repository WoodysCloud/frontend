https://www.w3schools.com/

# 프론트엔드 개발

## 표기법

- 사용자가 이름을 지정하는 경우
- 여러 단어를 사용해서 이름을 지정하는 경우

```
html-css: kebab case

html_css: snake case - Python

htmlCss: camel case - Javascript, JAVA, C, C++

HtmlCss: Pascal case - Javascript, JAVA, C, C++ (Class)

Front End

- HTML(class, id): kebab case

- File/Folder name: snake case

- JS: camel case

- JS-Class: Pascal case
```

## HTML

### HTML Introduction

https://www.w3schools.com/html/html_intro.asp

> 웹페이지 구조 표시
>
> 웹페이지 콘텐츠 표시
>
> - 텍스트
> - 멀티미디어 콘텐츠: 이미지, 비디오, 오디오

`(backtick)

```
<tagname>CONTENTS</tagname>

** 시작태그만 있는 Element: Empty element
```

### HTML Element

https://www.w3schools.com/html/html_elements.asp

> 포함관계
>
> - 기준에 따라서 조상요소(Ancestor), 부모요소(Parent), 자식요소(Child), 자손요소(Descendant)

```
<html>
  <body>
    <h1>Web Page</h1>
  </body>
</html>

* html: body의 부모요소, h1의 조상요소

* body: html의 자식요소, h1의 부모요소

* h1: html의 자손요소, body의 자식요소
```

### HTML Attributes

https://www.w3schools.com/html/html_attributes.asp

### HTML Headings

https://www.w3schools.com/html/html_headings.asp

### HTML Paragraphs

https://www.w3schools.com/html/html_paragraphs.asp

### HTML Hyperlink

https://www.w3schools.com/html/html_links.asp

a: Anchor
href: Hypertext REFerence

### HTML URL

https://www.w3schools.com/html/html_urlencode.asp

인터넷 주소

- IP(Internet Protocol) 주소: 192.168.0.1
- 도메인(Domain Name) 주소: www.naver.com
- domain -> DNS(Domain Name Server/System) -> ip

URL(Uniform Resource Location)

- 자세한 주소
- 도메인주소 + 해당 페이지 폴더 위치/파일 위치
- 인터넷 주소를 표현하는 가장 큰 범위
- 프로토콜: http, https, ftp ...

### HTML File Path

https://www.w3schools.com/html/html_filepaths.asp

절대 경로

- 출발 지점에 상관없이 항상 같은 리소스를 찾을 수 있도록 표시하는 주소/경로
- 장점: 항상 같은 자원의 위치로 찾아올 수 있음
- 단점: 주소 표시 길이가 길다
- Ex) 도메인주소/파일(폴더) 경로: https://www.w3schools.com/html/html_filepaths.asp

상대 경로

- 출발 지점을 기준으로 리소스 경로를 표시하는 주소/경로
- 장점: 주소 표시 길이가 상대적으로 짧음
- 단점: 기준에 따라서 표시 방식이 매번 달라짐
- Ex) 파일(폴더) 경로: html/html_filepaths.asp , ../html/html_filepaths.asp
- Ex) 루트 상대 경로: /html/html_filepaths.asp

### HTML Tables

https://www.w3schools.com/html/html_tables.asp

table generator
https://www.tablesgenerator.com/html_tables

### HTML Lists

https://www.w3schools.com/html/html_lists.asp

중첩목록(Nested List): 여러 수준(레벨)으로 구성된 목록

### HTML Images

https://www.w3schools.com/html/html_images.asp

alt: alternative

### HTML Video

https://www.w3schools.com/html/html5_video.asp

### HTML YouTube

https://www.w3schools.com/html/html_youtube.asp

### HTML Semantics

https://www.w3schools.com/html/html5_semantic_elements.asp

### HTML Block & Inline

https://www.w3schools.com/html/html_blocks.asp

> 포함관계에 대한 특성
>
> - 블럭요소: 다른 블럭요소, 인라인 요소, 콘텐츠 모두 포함 가능
> - 인라인 요소: 다른 인라인 요소, 콘텐츠는 포함 가능, 블럭 요소는 포함 불가능
> - 예외: a - 인라인 요소이지만 블럭요소도 포함 가능

### HTML Entities

https://www.w3schools.com/html/html_entities.asp

> HTML 마크업 용도로 fix된 기호는 대체 코드를 사용
> <, >, &, ", '
> 공백을 여러칸 띄울 때: 대체 코드를 사용
> 브라우저 렌더링용 대체코드: © => &copy;

### HTML id, class

https://www.w3schools.com/html/html_id.asp
https://www.w3schools.com/html/html_classes.asp

> id 특성
>
> - 하나의 HTML 문서 내에서 동일한 id 이름을 사용할 수 없음.
> - 하나의 HTML 문서 내에서 고유해야 함.
> - 하나의 HTML Element에 id이름을 여러 개 붙일 수 없음.
>
> class 특성
>
> - 하나의 HTML 문서 내에서 동일한 class이름을 여러번 사용할 수 있음.
> - 하나의 HTML Element에 여러가지 class이름을 붙일 수 있음.

## CSS

### CSS Introduction

https://www.w3schools.com/css/css_intro.asp

### CSS Syntax

https://www.w3schools.com/css/css_syntax.asp

### CSS Selector

https://www.w3schools.com/css/css_selectors.asp

### CSS How To

https://www.w3schools.com/css/css_howto.asp

> js에서 css를 제어할 때 인라인 방식으로 제어함.
