
function TodoList() {

    this.newWork =  document.getElementById('new-work') ;
    this.checkboxAll = document.getElementById('checkbox-all');
    this.listUl = document.getElementById('list');
    this.filterUl = document.getElementById('filter');
    this.footer = document.getElementById('footer');
    this.spanNumber = document.getElementById('spanNumber');
    this.clearItem = document.getElementById('clearItem');
    

    this.appearanceButtonClearItem = function () {
        let listLI = this.listUl.getElementsByTagName('li');
        for(let i = listLI.length - 1; i >= 0 ; i--){
            if(listLI[i].getElementsByTagName('input')[0].checked) {
                document.getElementById('clearItem').style.display = "block";
                return;
            }else {
                document.getElementById('clearItem').style.display = "none";
            }
        }
    }

    this.checkStringSpace = function (str) {
        if(str == '')
            return false;
        for(let i = 0; i < str.length; i++){
                if(str[i] != ' '){
                    return true;
                }
        }
        return false;
    }

    this.addNewField =  (event) => {
        let checkStr = this.checkStringSpace(this.newWork.value);
        if(checkStr && event.keyCode == 13) {
            /////////////////////////////////////////////////////////////
            let li =  document.createElement("li");
            li.setAttribute("class", "todoListItem");

            let div  = document.createElement('div');
            div.setAttribute("class", "view");

            let label = document.createElement("label");

            let inputTxt = document.createElement('input')
            inputTxt.setAttribute("type", "text");
            inputTxt.setAttribute("class", "editField");

            let checkbox  = document.createElement('INPUT');
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("class", "checkLi");

            let btn = document.createElement('button');
            // btn.setAttribute("type", "button");
            btn.setAttribute("class", "destroy");
            //////////////////////////////////////////////////////////////

            
            label.innerHTML = this.newWork.value;
            this.newWork.value = "";
            
            this.listUl.appendChild(li);
            li.appendChild(div);
            div.appendChild(checkbox);
            div.appendChild(label);
            div.appendChild(inputTxt);
            div.appendChild(btn);
            TodoList.count++;
            this.spanNumber.innerHTML = TodoList.count + " item left";
            this.filterUl.getElementsByTagName('li')[0].innerHTML = 'All';
            this.filterUl.getElementsByTagName('li')[1].innerHTML = 'Active';
            this.filterUl.getElementsByTagName('li')[2].innerHTML = 'Completed';
            footer.style.display = "block";
            document.getElementById('clearItem').style.display = "none";
            this.appearanceButtonClearItem();
        }
    }

}

TodoList.count = 0;
TodoList.checkEditField = undefined;
