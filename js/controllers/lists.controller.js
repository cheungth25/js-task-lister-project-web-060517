class ListsController {

  init() {
  }

  static listMyList() {
    for (var i = 0; i < List.all.length; i++) {
      let option = document.createElement('option');
      option.value = List.all[i].id;
      option.innerHTML = List.all[i].title;
      document.getElementById('select_list').append(option)
    }
  }

}; // class ListsController
