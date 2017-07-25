// Initialize
function render(html, into) {
  $(into).empty()
  $(into).append(html)
}

function listsHtml(lists) {
  return lists.map(function(list) {
    return `<div class="list">
  			<h2>
  				<button data-listNumber="${list.id}" class="destroy-list">x
  				</button>
  				<span>${list.title}</span>
  			</h2>
  			<ul id="list-1" data-id="1"></ul>
  		</div>`
  }).join(' ')
}

$(function() { // on document ready
  listController = new ListsController();
  listController.init();
  tasksController = new TasksController();
  tasksController.init();

  // create section for lists
  //$('body').append(`<section id="lists"></section>`)

  $('form').on('submit', function(event){
    event.preventDefault();
    let userInput = $( "input:first" )
    let userSelectedList = $("#select_list")
    let userDescription = $("#task_description")
    let userPriority = $("#task_priority")
      if (userInput.val()) {
        new List(userInput.val())
      }
      if (userDescription.val() && userPriority.val()) {
        let userList = List.findById(parseInt(userSelectedList.val()))
        let userTask = new Task(userDescription.val(), userPriority.val(), userList)
        userList.tasks.push(userTask)
      }
      // Select drop down ... replicated render() -> empty -> append
      $('#select_list').empty()
      ListsController.listMyList();

      render(listsHtml(store.lists), "section#lists")

      //clear input fields
      userInput.val("")
      userSelectedList.val("")
      userDescription.val("")
      userPriority.val("")
  });

  //destroy list
  $("body").on("click", ".destroy-list", function(event){
    event.preventDefault;
    List.destroyById(parseInt(event.target.dataset.listnumber))
    render(listsHtml(store.lists), "section#lists")
  })
});
