let data = [{
        "id": "1",
        "name": "Aaron Miles",
        "email": "aaron@mailinator.com",
        "role": "member"
    },
    {
        "id": "2",
        "name": "Aishwarya Naik",
        "email": "aishwarya@mailinator.com",
        "role": "member"
    },
    {
        "id": "3",
        "name": "Arvind Kumar",
        "email": "arvind@mailinator.com",
        "role": "admin"
    }
];

// Function to display data in the table
function displayData() {
    const tableBody = document.querySelector("#dataTable tbody");
    tableBody.innerHTML = "";

    data.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.email}</td>
<td>${item.role}</td>
<td>
<button class="edit-btn" onclick="editRow(${item.id})">Edit</button>
<button class="delete-btn" onclick="deleteRow(${item.id})">Delete</button>
</td>
`;
        tableBody.appendChild(row);
    });
}

// Function to add new data
function addData(event) {
    event.preventDefault();
    const newId = parseInt(document.querySelector("#newId").value);
    const newName = document.querySelector("#newName").value;
    const newEmail = document.querySelector("#newEmail").value;
    const newRole = document.querySelector("#newRole").value;

    if (newId && newName && newEmail && newRole) {
        data.push({
            id: newId,
            name: newName,
            email: newEmail,
            role: newRole
        });
        displayData();
        document.querySelector("#newId").value = "";
        document.querySelector("#newName").value = "";
        document.querySelector("#newEmail").value = "";
        document.querySelector("#newRole").value = "admin"; // Set default role here
    } else {
        alert("Please enter valid data in all fields");
    }
}

// Function to edit a specific row
function editRow(id) {
    const newData = prompt("Enter the updated data (name, email, role) separated by commas:");
    if (newData !== null) {
        const newDataArr = newData.split(',').map(item => item.trim());
        const index = data.findIndex(item => item.id === id);
        if (index !== -1) {
            data[index].name = newDataArr[0] || data[index].name;
            data[index].email = newDataArr[1] || data[index].email;
            data[index].role = newDataArr[2] || data[index].role;
            displayData();
        }
    }
}

// Function to delete a specific row
function deleteRow(id) {
    const confirmDelete = confirm("Are you sure you want to delete this entry?");
    if (confirmDelete) {
        data = data.filter(item => item.id !== id);
        displayData();
    }
}


displayData();