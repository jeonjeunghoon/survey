# Classum 과제

## To Do

### 페이지

- [ ] 에디터 페이지

  - [x] 제목 영역

    - [x] 설문지 제목을 작성할 수 있다.
    - [x] 설문지 설명을 작성할 수 있다.
    - [x] 설문지 제목을 편집할 수 있다.
    - [x] 설문지 설명을 편집할 수 있다.
    - [ ] 제목 카드를 클릭하면 제목과 설명 textarea의 하단 보더 라인이 렌더링된다.
    - [ ] 초기 진입 시 카드의 왼쪽 보더가 렌더링된다.

  - [x] 질문 추가 영역

    - [x] 질문을 추가할 수 있다.
    - [x] 기본 값은 객관식 질문 형식이다.
    - [ ] 기본 위치는 포커싱된 카드의 상단 부분이다.
    - [ ] 위치는 viewport를 벗어날 수 없다.

  - [ ] 질문 영역

    - [x] 질문을 작성할 수 있다.
    - [x] 질문을 편집할 수 있다.
    - [x] 질문의 형식을 변경할 수 있다.
      - [x] 단답형
      - [x] 장문형
      - [x] 객관식 질문(기본값)
      - [x] 체크박스
      - [x] 드롭다운
    - [x] 질문의 옵션을 추가할 수 있다.
    - [x] 질문의 옵션을 삭제할 수 있다.
    - [x] 질문의 옵션의 이름을 변경할 수 있다.
    - [x] 기타를 추가할 수 있다.
    - [x] 질문을 복사할 수 있다.
    - [x] 질문을 삭제할 수 있다.
    - [x] 필수 옵션을 설정할 수 있다.
    - [x] 미리 보기 버튼을 클릭하면 해당 설문지를 미리볼 수 있다.
    - [ ] Drag & Drop으로 질문 순서를 변경할 수 있다.
    - [ ] Drag & Drop으로 질문의 옵션 순서를 변경할 수 있다.
    - [ ] 질문 카드를 클릭하면 질문 제목 textarea에 포커싱된다.
    - [ ] 옵션 추가/기타를 클릭하면 생성된 옵션 input에 포커싱된다.
    - [ ] 질문 카드를 삭제하면 바로 위의 카드가 포커싱된다.
    - [ ] 기타 옵션을 포커싱 할 수 없다.
    - [ ] 새로운 질문이 추가되면 해당 질문에 포커싱된다.

- [ ] 미리 보기 페이지

  - [x] 단답형 질문에 답변을 작성할 수 있다.
  - [x] 장문형 질문에 답변을 작성할 수 있다.
  - [x] 드롭다운 질문의 옵션을 선택할 수 있다.
  - [x] 체크박스 질문의 옵션들을 선택할 수 있다.
  - [x] 객관식 질문의 옵션을 선택할 수 있다.
  - [ ] 기타 옵션에 내 답변을 작성할 수 있다.
  - [ ] [제출] 버튼을 클릭하면 제출 페이지로 이동할 수 있다.

- [ ] 제출 페이지

  - [ ] 사용자가 작성한 데이터를 보여 준다.

### 컴포넌트

- [ ] Textarea

  - [ ] textarea를 클릭하면 포커싱 애니메이션이 렌더링된다.
  - [ ] textarea가 포커싱되어 있을 때 다른 영역을 클릭하면 포커싱이 해제된다.
  - [ ] 호버 스타일 사용 여부를 지정할 수 있다.

- [ ] Input

  - [ ] input을 클릭하면 포커싱 애니메이션이 렌더링된다.
  - [ ] input이 포커싱되어 있을 때 다른 영역을 클릭하면 포커싱이 해제된다.

- [ ] Card

      - [ ] 카드를 클릭하면 왼쪽 보더가 렌더링된다.
      - [ ] 다른 카드를 선택하면 왼쪽 보더가 사라진다.

## 추가 구현 사항 (가산점)

- [x] 제목 영역, 질문 영역, 미리 보기 페이지

  - [x] 질문 데이터를 저장할 수 있다. (브라우저 새로고침 시 유지)

- [ ] 미리 보기 페이지

  - [ ] 양식 지우기를 클릭하면 미리 보기 페이지가 초기화된다.

- [ ] etc
  - [ ] 사용자 친화적인 UI/UX
  - [ ] 렌더링 성능 최적화
