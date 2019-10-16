function addNewTask(){
    /* EXERCISE 4: 
        Add a new task to the list.
        Suggestion:
        - Use document.getElementById to get the UL item and the input text
        - Use the document.createElement to create the new List Item
        - Append the child to the UL
    */
   var UlElement = document.getElementById('myTaskList')
   var taskText = document.getElementById('newTask')
   var taskList = document.createElement('li')
   taskList.className = 'taskListItem'
    if (taskText.value !== "") {
        taskList.innerText = taskText.value;
        UlElement.appendChild(taskList)
        taskText.value = ''
    } 

   
}

/* EXERCISE 4: 
    Create a method "removeLast" which removes the last item from the task list
*/

function removeLast() {
    var taskItems = document.querySelectorAll('.taskListItem')
    if (taskItems.length > 0) taskItems[taskItems.length - 1].remove()
    else return;
}

 /* EXERCISE 6: 
    Create a method "removeFirst" which removes the first item from the task list
*/
function removeFirst() {
    var taskItems = document.querySelectorAll('.taskListItem')
    if (taskItems.length > 0) taskItems[0].remove()
    else return
}

/* EXERCISE 7: 
   Create a method "getTasksAsArray" which returns (and print to the console) an array containing the tasks as string
*/
function getTasksAsArray(){
    var taskString =[]
    var taskItems = document.querySelectorAll('.taskListItem')
    for (var task of taskItems) taskString.push(task.innerText)
    console.log(taskString)
    return taskString
}

/* EXERCISE 8:
   Create a method "changeTaskBackgroundColor" which takes the color from the color picker ad apply it as background to every list item
*/
function changeTaskBackgroundColor(){
    var taskItems = document.querySelectorAll('.taskListItem')
    var color = document.getElementById('colorPicker').value
    for (var task of taskItems) {
        task.style.backgroundColor = color
    }
}

/* EXERCISE 9: 
   Create a method "bubbleSort()" which sort the task list alphabetically using the bubble sort algorithm

   Suggestion:
   - Break the code into many function for semplicity 
   - Reuse the functions previously created
*/

function bubbleSort() {
    //TODO
    var tasks = getTasksAsArray().sort()
    var UlElement = document.querySelector('#myTaskList')
     UlElement.innerHTML = ''
    for (var task of tasks){
        var taskList = document.createElement('li')
        taskList.className = 'taskListItem'
        taskList.innerText = task
        UlElement.appendChild(taskList)
    }

}