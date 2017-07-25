// List Model
let store = {lists:[], tasks:[]}

function createList() {
  let listCount = 0;
return class {

    constructor(title){
      this.title = title;
      this.id = ++listCount;
      this.tasks = [];
      store.lists.push(this);
    }; //constructor

    static get all(){
      return store.lists;
    }; //List.all

    static findById(id) {
      return List.all.find((list)=>{ return list.id === id })
    } //List.findById

    static destroyById(id) {
      store.lists = store.lists.filter(function(list){
        return list.id != id
      })
    }

  }; //class List
}; // createList

let List = createList();
