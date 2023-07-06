// Naming the ids as variable
console.log("Soumya");
let ulTasks=$('#ulTasks');
let btnAdd=$('#btnAdd'); //abc
let btnReset=$('#btnReset');
let abc=123;
let btnSort=$('#btnSort');
let btnCleanup=$('#btnCleanup');
let inpNewTask=$('#inpNewTask');
let abcdef=123;
function addItem(){
    let todo=inpNewTask.val();
    console.log("clicked");    // raju
    ulTasks.append('<li>'+todo+'</li>');
    inpNewTask.val("");
}

inpNewTask.keypress(function(e){
    // console.log("clicked");
    if(e.which==13)
        addItem();
});

// selects individual from the lists
ulTasks.on("click","li",function(){
    $(this).toggleClass('done');
});

btnAdd.click(addItem);

btnReset.click(function(){
    inpNewTask.val("");
});
btnCleanup.click(function(){
    ulTasks.empty();
    inpNewTask.val("");
});

btnSort.click(sortTasks);
function sortTasks() {
    $('.done').appendTo(ulTasks);  //appenTo after ->append does not work
  }
  
