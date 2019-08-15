# countries-info-list


## 요구 사항
- [x] react, webpack을 베이스로 사용하여 개발
- [x] 보일러 플레이트(create-react-app 등)를 사용하지 않아야 함.
- [x] 버튼을 누르면 각 필드별 오름차순, 내림차순 정렬이 되어야 함.
- [x] 검색 창이 있어 통합 검색이 되어야 함. (Case insensitive, 부분일치)
- [x] 각 나라의 데이터 Row에 삭제 버튼이 있어 누르면 삭제되어야 함.
- [x] 나라 정보를 입력해서 Row를 추가할 수 있어야 함.
- [x] 모든 상태(나라 목록, 정렬 상태, 검색어 등)는 데이터 관리 라이브러리(Redux, MobX 등)에 저장되어야 함.
- [x] Network 통신은 redux middleware를 통해 되어야 함.

## 추가 요구 사항
- [x] 일부만 로딩 후 스크롤 아래로 갈 시 추가 로딩
- [x] form 라이브러리(redux-form, formik 등) 사용
- [ ] cross browsing 적용
- [x] 검색 기능 (Rate limiting(debounce, throttle) 적용하여 타이핑 시 바로 검색)

## 실행 방법

### npm run build

build 폴더에 웹팩을 통해 빌드 된 파일들이 생성됩니다.

### npm run start

`webpack-dev-server`와 `react-hot-loader`를 통해 실행 됩니다.

## 대략적인 설명

- 통신 : `saga`를 통한 통신은 한 번만 합니다. (웹이 처음 실행 될 때 url을 통해 json받아 올 때)
- 검색 : debounce함수를 통해 입력이 `300ms`동안 없을 때 검색합니다.
  - 네트워크와 통신하지 않고 입력받은 값으로 store의 `loadedItems`를 검색한 결과를 보여줍니다. (정규식을 통해 검사합니다.)
- 추가 : Ant Design의 Modal과 Form을 통해 값을 입력 받습니다.
  - 보여주기 위해 store의 `loadedItems`과 `list`의 맨 앞에 추가합니다.
  - 검색을 통해서도 추가한 나라를 확인할 수 있습니다.
- 삭제: 각 Row들의 마지막 Column의 버튼을 통해 삭제가 가능합니다.
  - 고유의 key값을 통해 삭제합니다.
- 정렬: 테이블의 헤더를 클릭해 각 항목으로 정렬할 수 있습니다.
  - 헤더의 이름 옆의 아이콘을 통해 정렬 방식(오름차순, 내림차순)을 확인할 수 있습니다.
- store: 스토어는 아래와 같이 구성되어 있습니다.
```
  isLoadingCountriesInfo:boolean;     // 나라 정보 로딩중인지 
  isVisibleAddCountryForm:boolean;    // 추가 폼 보여주는 토글
  loadedItems: [];                    // 요청을 통해 얻은 나라 정보
  list: []                            // 테이블에 보여질 나라 정보
  sort: number;                       // 0 : ascending, 1 : descending 
  sortBy: string;                     // 정렬 기준
  error: string;                      // 로딩 실패시 error message
  loadSize: number;                   // 한 번에 가져올 나라 정보 
```