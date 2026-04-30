    // 문자열 공백 제거-trim()
    // 요소 생성-createElement()
    // 클래스 추가-add()
    // 요소 추가-appendChild()
    // 포커스-focus() 
    // 삭제-remove()
    // 상태토글-toggle()
    // 부모찾기-closest()


// 1. 필요한 요소 선택
const input = document.querySelector('#input');
const addBtn = document.querySelector('#add');
const list = document.querySelector('#list');


// 2. 할 일 추가 함수
function addTodo() {
  const text = input.value.trim();

  // 입력값 검사
  if (text === "") {
    alert("입력해옹");
    return; // 함수 종료
  }

  // li 생성
  const li = document.createElement('li');
  li.classList.add('todo-item');

  // 내부 구조 생성
  li.innerHTML = `
    <span>${text}</span>
    <div class="btn-group">
      <button class="done-btn">완료</button>
      <button class="del-btn">삭제</button>
    </div>
  `;

  // 리스트에 추가
  list.appendChild(li);

  // 입력창 초기화
  input.value = "";
  input.focus();
}


// 3. 이벤트 위임 (삭제 + 완료)
list.addEventListener('click', function(e) {

  // 삭제 버튼 처리
  if (e.target.classList.contains('del-btn')) {
    const li = e.target.closest('.todo-item');
    if (li) li.remove();
  }

  // 완료 버튼 처리
  if (e.target.classList.contains('done-btn')) {
    const li = e.target.closest('.todo-item');
    const text = li.querySelector('span');

    // 완료 상태 토글
    text.classList.toggle('done');
  }
});


// 4. 이벤트 등록
addBtn.addEventListener('click', addTodo);

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo;
});