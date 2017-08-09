
// function TodoList() {

//     this.checkStringSpace = function (str) {
//         if(str == '')
//             return false;
//         for(let i = 0; i < str.length; i++){
//                 if(str[i] != ' '){
//                     return true;
//                 }
//         }
//         return false;
//     }

//     this.newWork =  document.getElementById('new-work') ;
//     this.checkboxAll = document.getElementById('checkbox-all');
//     this.listUl = document.getElementById('list');
//     this.filterUl = document.getElementById('filter');
//     this.footer = document.getElementById('footer');
//     this.spanNumber = document.getElementById('spanNumber');
//     this.clearItem = document.getElementById('clearItem');
    

//     this.appearanceButtonClearItem = function () {
//         let listLI = this.listUl.getElementsByTagName('li');
//         for(let i = listLI.length - 1; i >= 0 ; i--){
//             if(listLI[i].getElementsByTagName('input')[0].checked) {
//                 document.getElementById('clearItem').style.display = "block";
//                 return;
//             }else {
//                 document.getElementById('clearItem').style.display = "none";
//             }
//         }
//     }

//     this.addNewField =  (event) => {
//         let checkStr = this.checkStringSpace(this.newWork.value);
//         if(checkStr && event.keyCode == 13) {
//             /////////////////////////////////////////////////////////////
//             let li =  document.createElement("li");
//             li.setAttribute("class", "todoListItem");

//             let div  = document.createElement('div');
//             div.setAttribute("class", "view");

//             let label = document.createElement("label");

//             let inputTxt = document.createElement('input')
//             inputTxt.setAttribute("type", "text");
//             inputTxt.setAttribute("class", "editField");

//             let checkbox  = document.createElement('INPUT');
//             checkbox.setAttribute("type", "checkbox");
//             checkbox.setAttribute("class", "checkLi");

//             let btn = document.createElement('button');
//             // btn.setAttribute("type", "button");
//             btn.setAttribute("class", "destroy");
//             //////////////////////////////////////////////////////////////

            
//             label.innerHTML = this.newWork.value;
//             this.newWork.value = "";
            
//             this.listUl.appendChild(li);
//             li.appendChild(div);
//             div.appendChild(checkbox);
//             div.appendChild(label);
//             div.appendChild(inputTxt);
//             div.appendChild(btn);
//             TodoList.count++;
//             this.spanNumber.innerHTML = TodoList.count + " item left";
//             this.filterUl.getElementsByTagName('li')[0].innerHTML = 'All';
//             this.filterUl.getElementsByTagName('li')[1].innerHTML = 'Active';
//             this.filterUl.getElementsByTagName('li')[2].innerHTML = 'Completed';
//             footer.style.display = "block";
//             document.getElementById('clearItem').style.display = "none";
//             this.appearanceButtonClearItem();
//         }
//     }

// }

// TodoList.count = 0;
// TodoList.checkEditField = undefined;


// function FilterTodoList() {
//     TodoList.call(this);
    
//     this.all = () => {
//             var listLI = this.listUl.getElementsByTagName('li');
//             for(let i = 0; i < listLI.length; i++){
//                 listLI[i].style.display = "block";
//             }
//     }

//     this.active = () => {
//                 var listLI = this.listUl.getElementsByTagName('li');
//                 for(let i = 0; i < listLI.length; i++){
//                     if(listLI[i].getElementsByTagName('label')[0].style.textDecoration == "" || listLI[i].getElementsByTagName('label')[0].style.textDecoration == "none")
//                     {
//                         listLI[i].style.display = "block";
//                     }else {
//                         listLI[i].style.display = "none";
//                     }
//                 }
                
//     }

//     this.completed = () =>{
//                 var listLI = this.listUl.getElementsByTagName('li');
//                 for(let i = 0; i < listLI.length; i++){
//                     // alert(listLI[i].getElementsByTagName('label')[0].style.textDecoration);
//                     if(listLI[i].getElementsByTagName('label')[0].style.textDecoration == "line-through")
//                     {
//                         listLI[i].style.display = "block";
//                     }else {
//                         listLI[i].style.display = "none";
//                     }
//                 }   
//     }
// }




// function ManipulationWithFieldTodoList() {

//     TodoList.call(this);

//     this.deleteItem = (Item) => {
//         this.listUl.removeChild(Item);
//         spanNumber.innerHTML = --TodoList.count + " item left";
//         if(TodoList.count == 0) {
//             footer.style.display = "none";
//         }   
//     }


//     this.lineThroughItem =  (node, flag) => {
        
//         while(node.tagName != TodoList.listUl) {
//             if(node.tagName == 'LI') {
//                 if(flag){
//                     node.getElementsByTagName('label')[0].style.textDecoration = "line-through";
//                 }
//                 else {
//                     node.getElementsByTagName('label')[0].style.textDecoration = "none";
//                 }
//                 this.appearanceButtonClearItem();
//                 return;
//             }
//             node = node.parentNode;
//         }   
//     }

    
//     this.deleteField = (event) => {
//         let target = event.target;
//         if (target.tagName == 'BUTTON') {
//             while(target.tagName != TodoList.listUl) {
//                 if(target.tagName == 'LI') {

//                     this.deleteItem(target);
//                     this.appearanceButtonClearItem();
//                     return;
//                 }
//                 target = target.parentNode;
//             }
//         }
//     }
    
//     this.deleteFieldAll = () => {
//         let listLI = this.listUl.getElementsByTagName('li');
//         for(let i = listLI.length - 1; i >= 0 ; i--){
//             if(listLI[i].getElementsByTagName('input')[0].checked) {
//                 this.deleteItem(listLI[i]);
//             }
//         }
//         this.appearanceButtonClearItem();
//     }

//     this.completedField = (event) => {
//         let target = event.target;
//         if (target.tagName == 'INPUT' && target.type == 'checkbox') {
//             this.lineThroughItem(target, target.checked);
            
//             return;
//         }
//     }

//     this.completedFieldAll = () => {
//         let listLiChecked =  this.listUl.getElementsByTagName('input');
//         if(this.checkboxAll.checked) {
//             for(let i = 0; i < listLiChecked.length; i++){
//                 listLiChecked[i].checked = true;
//                 this.lineThroughItem(listLiChecked[i], listLiChecked[i].checked)
//             }
//         }else {
//             for(let i = 0; i < listLiChecked.length; i++){
//                 listLiChecked[i].checked = false;
//                 this.lineThroughItem(listLiChecked[i], listLiChecked[i].checked)
//             }
//         }
//     }

//     this.editFieldOpen = (event) => {
//         let target = event.target;
        
//         if (target.tagName == 'LABEL') {

//             TodoList.checkEditField = target.parentNode.getElementsByClassName('editField')[0]; 
//             TodoList.checkEditField.style.display="block";
//             TodoList.checkEditField.focus();
            
//             TodoList.checkEditField.value = target.textContent;;
//             target.innerHTML = "_";                
//             return;
//         }
        
//     }

//     this.saveEditFiled = (event) => {
//         let target = event.target;
        
//         if (target.tagName == 'INPUT' && target.className == 'editField') { 
                
            
//                 if(event.keyCode == 13) {
                    
//                     if(!this.checkStringSpace(target.value)) {
//                         this.deleteItem(target.parentNode.parentNode);
//                         return;
//                     }
//                     target.parentNode.getElementsByTagName('LABEL')[0].innerHTML = target.value;
//                     target.style.display="none";
//                 }

//         }
//     }

//     this.fixedFocusInputText = (event) =>  {
//         if(TodoList.checkEditField != undefined  && event.target != TodoList.checkEditField) {
//             TodoList.checkEditField.parentNode.getElementsByTagName('LABEL')[0].innerHTML = TodoList.checkEditField.value;
//             TodoList.checkEditField.style.display="none";
//             TodoList.checkEditField = undefined; 
//         }
//     }

// }



(function Run(){

    let todoList = new TodoList();

    let filterTodoList =  new FilterTodoList();

    let manipulationWithField = new ManipulationWithFieldTodoList();


    todoList.newWork.addEventListener("keypress", todoList.addNewField);

    todoList.listUl.addEventListener("click", manipulationWithField.deleteField);
    
    todoList.listUl.addEventListener("click", manipulationWithField.completedField);

    todoList.listUl.addEventListener('dblclick',manipulationWithField.editFieldOpen);
    
    todoList.listUl.addEventListener('keypress',manipulationWithField.saveEditFiled);

    document.body.addEventListener('click', manipulationWithField.fixedFocusInputText);

    todoList.checkboxAll.addEventListener("click", manipulationWithField.completedFieldAll);

    todoList.clearItem.addEventListener('click', manipulationWithField.deleteFieldAll);


    // all
    todoList.filterUl.getElementsByTagName('li')[0].addEventListener("click", filterTodoList.all);

    // activie
    todoList.filterUl.getElementsByTagName('li')[1].addEventListener("click", filterTodoList.active);

    //completed
    todoList.filterUl.getElementsByTagName('li')[2].addEventListener("click", filterTodoList.completed);

 })()