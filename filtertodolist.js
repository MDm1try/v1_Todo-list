function FilterTodoList() {
    TodoList.call(this);
    
    this.all = () => {
            var listLI = this.listUl.getElementsByTagName('li');
            for(let i = 0; i < listLI.length; i++){
                listLI[i].style.display = "block";
            }
    }

    this.active = () => {
                var listLI = this.listUl.getElementsByTagName('li');
                for(let i = 0; i < listLI.length; i++){
                    if(listLI[i].getElementsByTagName('label')[0].style.textDecoration == "" || listLI[i].getElementsByTagName('label')[0].style.textDecoration == "none")
                    {
                        listLI[i].style.display = "block";
                    }else {
                        listLI[i].style.display = "none";
                    }
                }
                
    }

    this.completed = () =>{
                var listLI = this.listUl.getElementsByTagName('li');
                for(let i = 0; i < listLI.length; i++){
                    // alert(listLI[i].getElementsByTagName('label')[0].style.textDecoration);
                    if(listLI[i].getElementsByTagName('label')[0].style.textDecoration == "line-through")
                    {
                        listLI[i].style.display = "block";
                    }else {
                        listLI[i].style.display = "none";
                    }
                }   
    }
}
