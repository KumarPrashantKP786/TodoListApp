// Naming the ids as variables
let ulTasks=$('#ulTasks');
let btnAdd=$('#btnAdd'); 
let btnReset=$('#btnReset');
let btnSort=$('#btnSort'); //abc2
let btnCleanup=$('#btnCleanup');
let inpNewTask=$('#inpNewTask');

function addItem(){
    let todo=inpNewTask.val();
    console.log("clicked");
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
  