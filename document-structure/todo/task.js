const input = document.querySelector(".tasks__input");
const addTask = document.querySelector(".tasks__add");
const taskList = document.querySelector(".tasks__list");

addTask.addEventListener("click", (e) => {
   e.preventDefault();
   if (input.value != '') {
      taskList.insertAdjacentHTML("beforeEnd", `<div class="task">
      <div class="task__title">
       ${input.value}
     </div >
         <a href="#" class="task__remove">&times;</a>
   </div >`)
      const task = Array.from(document.querySelectorAll(".task__remove"));
      task[task.length - 1].addEventListener("click", () => {
         taskList.removeChild(task[task.length - 1].closest(".task"));
      })
      input.value = '';
   }

})

