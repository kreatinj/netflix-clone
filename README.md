# netflix-clone

넷플릭스 클론 프로젝트

# 체크포인트

- [ ] vite 마이그레이션 (vanilla js + typescript)
  - [ ] 상태관리를 편리하게 하기 위해 [Vanilla Javascript로 웹 컴포넌트 만들기](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/) 글 참고하여 컴포넌트 작성
  - [ ] css는 컴포넌트 별로 작성하여 import문으로 불러오기
  - [ ] 캐러셀 메모리 최적화하도록 로직 개선
- [ ] 데이터를 json 파일로 관리
  - [x] fetch로 데이터 불러오기
  - [ ] 불러오는 동안 loading spinner 보여주기
    - [ ] loading spinner는 css로 구현
- [ ] 좋아요 + 찜하기 기능 개발
  - [ ] id와 좋아요 상태 저장
    - [ ] `상태를 javascript runtime에 저장` or ~`상태를 localStorage에 저장`~ or ~`json을 수정하는 서버 개발`~
