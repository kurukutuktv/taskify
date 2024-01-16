document.getElementById("todoForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get task input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new list item
        var listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.appendChild(document.createTextNode(taskText));

        // Create a close button
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-secondary btn-sm float-right";
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>'; // Font Awesome times icon

        // Create a done button
        var doneBtn = document.createElement("button");
        doneBtn.className = "btn btn-success btn-sm mr-2 float-right";
        doneBtn.appendChild(document.createTextNode("Done"));

        // Add click event to close button
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });

        // Add click event to done button
        doneBtn.addEventListener("click", function () {
            // Toggle completed class
            listItem.classList.toggle("completed");

            // Move completed task to the bottom
            document.getElementById("taskList").appendChild(listItem);

            // Disable the "Done" button and change its text to a check symbol
            doneBtn.disabled = true;
            doneBtn.innerHTML = '<i class="fas fa-check"></i>';
        });

        // Append buttons to list item
        listItem.appendChild(deleteBtn);
        listItem.appendChild(doneBtn);

        // Append list item to the task list
        document.getElementById("taskList").appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
});
