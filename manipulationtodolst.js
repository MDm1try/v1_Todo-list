function ManipulationWithFieldTodoList() {

    TodoList.call(this);

    this.deleteItem = (Item) => {
        this.listUl.removeChild(Item);
        spanNumber.innerHTML = --TodoList.count + " item left";
        if(TodoList.count == 0) {
            footer.style.display = "none";
        }   
    }


    this.lineThroughItem =  (node, flag) => {
        
        while(node.tagName != TodoList.listUl) {
            if(node.tagName == 'LI') {
                if(flag){
                    node.getElementsByTagName('label')[0].style.textDecoration = "line-through";
                }
                else {
                    node.getElementsByTagName('label')[0].style.textDecoration = "none";
                }
                this.appearanceButtonClearItem();
                return;
            }
            node = node.parentNode;
        }   
    }

    
    this.deleteField = (event) => {
        let target = event.target;
        if (target.tagName == 'BUTTON') {
            while(target.tagName != TodoList.listUl) {
                if(target.tagName == 'LI') {

                    this.deleteItem(target);
                    this.appearanceButtonClearItem();
                    return;
                }
                target = target.parentNode;
            }
        }
    }
    
    this.deleteFieldAll = () => {
        let listLI = this.listUl.getElementsByTagName('li');
        for(let i = listLI.length - 1; i >= 0 ; i--){
            if(listLI[i].getElementsByTagName('input')[0].checked) {
                this.deleteItem(listLI[i]);
            }
        }
        this.appearanceButtonClearItem();
    }

    this.completedField = (event) => {
        let target = event.target;
        if (target.tagName == 'INPUT' && target.type == 'checkbox') {
            this.lineThroughItem(target, target.checked);
            
            return;
        }
    }

    this.completedFieldAll = () => {
        let listLiChecked =  this.listUl.getElementsByTagName('input');
        if(this.checkboxAll.checked) {
            for(let i = 0; i < listLiChecked.length; i++){
                listLiChecked[i].checked = true;
                this.lineThroughItem(listLiChecked[i], listLiChecked[i].checked)
            }
        }else {
            for(let i = 0; i < listLiChecked.length; i++){
                listLiChecked[i].checked = false;
                this.lineThroughItem(listLiChecked[i], listLiChecked[i].checked)
            }
        }
    }

    this.editFieldOpen = (event) => {
        let target = event.target;
        
        if (target.tagName == 'LABEL') {

            TodoList.checkEditField = target.parentNode.getElementsByClassName('editField')[0]; 
            TodoList.checkEditField.style.display="block";
            TodoList.checkEditField.focus();
            
            TodoList.checkEditField.value = target.textContent;;
            target.innerHTML = "_";                
            return;
        }
        
    }

    this.saveEditFiled = (event) => {
        let target = event.target;
        
        if (target.tagName == 'INPUT' && target.className == 'editField') { 
                
            
                if(event.keyCode == 13) {
                    
                    if(!this.checkStringSpace(target.value)) {
                        this.deleteItem(target.parentNode.parentNode);
                        return;
                    }
                    target.parentNode.getElementsByTagName('LABEL')[0].innerHTML = target.value;
                    target.style.display="none";
                }

        }
    }

    this.fixedFocusInputText = (event) =>  {
        if(TodoList.checkEditField != undefined  && event.target != TodoList.checkEditField) {
            TodoList.checkEditField.parentNode.getElementsByTagName('LABEL')[0].innerHTML = TodoList.checkEditField.value;
            TodoList.checkEditField.style.display="none";
            TodoList.checkEditField = undefined; 
        }
    }

}