# netflix-clone

넷플릭스 클론 프로젝트

## 체크포인트

- 검색
  - 검색 결과 노출 (api 응답 받으면 화면에 바로 노출)
  - 검색 서버 구현 (Express로 GET API 구현)
  - api 호출에 debounce 적용
    - setTimeout / clearTimeout 활용
  - (선택) enter 키로 검색하면 최근 검색어 목록에 추가 (PUT API 구현)
    - (선택) 목록 길이 제한이 있다면 PATCH API 구현하여 삭제 또는 PUT API만 구현하고 GET API에서 길이 제한 적용
- 최근 검색어 (focus / blur event 활용)
  - 키보드로 선택 가능 (keydown event 활용하여 up, down, enter, space, esc 처리)
  - 마우스로 선택 가능 (click event 활용)
  - 최근 검색어 API 구현 (Express로 GET API 구현)
- 검색창 애니메이션 (click event 활용)
