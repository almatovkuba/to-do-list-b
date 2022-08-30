$(document).ready(function() {                  //Start implementing jQuery
    let addButton = $('.add-button');
    let field = $('.add-field');
    let tasks = $('.tasks');

    // ADD TASK
    addButton.on('click', function() {
        let elem = `<li class="task">
                    <div class="task-checked col-1">
                        <input type="checkbox">
                    </div>
                    <div class="task-text col-2">${field.val()}</div>
                    <div class="task-remove col-3"></div>
                </li>`;
        tasks.append(elem);
        field.val('')
    })
    
     // REMOVE TASK
    tasks.on('click', '.task-remove', function(){               //to be able to remove everyting within the 'ul - unordered list'
        $(this).parent().remove();
    })

     // CHECKED                                                 //to be able to cross-out tasks within the 'ul'
    tasks.on('change', '.task-checked input', function(){
        $(this).parent().next().toggleClass('checked')
    })

    // SORTABLE         (using jquery ui - see index.html)                                        //changing the order of tasks. From outside library
    $('#tasks-list').sortable();                                //special function
});
