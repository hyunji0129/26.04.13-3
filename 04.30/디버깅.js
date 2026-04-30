// 삭제버튼 클릭-> 삭제 
list.addEventListener('click', function(e) {

  if (e.target.classList.contains('del-btn')) {
    const li = e.target.closest('todo-item');
    if(li) li.remove();
  }

});