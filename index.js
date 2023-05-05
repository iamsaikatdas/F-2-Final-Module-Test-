let name = document.getElementsByClassName("img-name");
// fetch data

// fetch data by server and shown 100 data
// fetch("mock-data.json")
fetch(
  "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json"
)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    // Do something with the data
    function studentData(sData) {
      const tbody = document.getElementById("my-table-body");
      sData.forEach((item) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `

            <td scope="row">${item.id}</td>
            <td class="img-name"> <img src=${item.img_src}alt=${
          item.first_name
        }> ${item.first_name} ${item.last_name}</td>
            <td>${item.gender}</td>
            <td>${item.class}</td>
            <td>${item.marks}</td>
            <td>${item.passing ? "Passed" : "Failed"}</td>
            <td>${item.email}</td>
        `;
        tbody.appendChild(tr);
      });
    }
    studentData(data);
  });

// for search by user input
// search function
// Add event listener to search button
const searchSubmitButton = document.getElementById("searchSubmitButton");
searchSubmitButton.addEventListener("click", searchData);
function searchData() {
  const searchButton = document.getElementById("searchButton");
  let searchData = searchButton.value.toLowerCase();
  let tableDetails = document.getElementById("student-table");
  let tr = tableDetails.getElementsByTagName("tr");
  console.log(tr);

  for (var i = 1; i < tr.length; i++) {
    var td1 = tr[i].getElementsByTagName("td")[1];
    var td6 = tr[i].getElementsByTagName("td")[6];
    let name = td1.innerText;
    let email = td6.innerText;
    //    console.log(email);
    if (
      name.toLowerCase().indexOf(searchData) > -1 ||
      (email.toLowerCase().includes("@") &&
        email.toLowerCase().indexOf(searchData) > -1)
    ) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}

// for sort by a to z

const sortingBtnAtoZ = document.getElementById("sortAtoZ");
sortingBtnAtoZ.addEventListener("click", sortAtoZ);
function sortAtoZ() {
  const table = document.getElementById("student-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  rows.sort((a, b) => {
    // console.log(a,b);
    const name1 = a.getElementsByTagName("td")[1].innerText;
    const name2 = b.getElementsByTagName("td")[1].innerText;
    // console.log(name1);
    // console.log(name2);
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  });
  // console.log(rows);
  rows.forEach((row) => tbody.appendChild(row));
}

// for sort by z to a
const sortingBtnZtoA = document.getElementById("sortZtoA");
sortingBtnZtoA.addEventListener("click", sortZtoA);
function sortZtoA() {
  const table = document.getElementById("student-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  rows.sort((a, b) => {
    // console.log(a,b);
    const name1 = a.getElementsByTagName("td")[1].innerText;
    const name2 = b.getElementsByTagName("td")[1].innerText;
    // console.log(name1);
    // console.log(name2);
    if (name1 > name2) {
      return -1;
    }
    if (name1 < name2) {
      return 1;
    }
    return 0;
  });
  // console.log(rows);
  rows.forEach((row) => tbody.appendChild(row));
}

// for sort by marks
const sortingViaMarks = document.getElementById("sortByMarks");
sortingViaMarks.addEventListener("click", sortByMarks);
function sortByMarks() {
  const table = document.getElementById("student-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  rows.sort((a, b) => {
    // console.log(a,b);
    const name1 = Number(a.getElementsByTagName("td")[4].innerText);
    const name2 = Number(b.getElementsByTagName("td")[4].innerText);
    console.log(name1);
    console.log(name2);
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  });
  // console.log(rows);
  rows.forEach((row) => tbody.appendChild(row));
}

// for sort by class
const sortingByClass = document.getElementById("sortByClass");
sortingByClass.addEventListener("click", sortByClass);
function sortByClass() {
  const table = document.getElementById("student-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  rows.sort((a, b) => {
    // console.log(a,b);
    const name1 = Number(a.getElementsByTagName("td")[3].innerText);
    const name2 = Number(b.getElementsByTagName("td")[3].innerText);
    console.log(name1);
    console.log(name2);
    if (name1 < name2) {
      return -1;
    }
    if (name1 > name2) {
      return 1;
    }
    return 0;
  });
  // console.log(rows);
  rows.forEach((row) => tbody.appendChild(row));
}

// for sort by is passing or not
const sortingByIsPassing = document.getElementById("sortByIsPassing");
sortingByIsPassing.addEventListener("click", sortByPassing);
function sortByPassing() {
  const table = document.getElementById("student-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));
  for (const row of rows) {
    var passingStatus = row.getElementsByTagName("td")[5].innerText;
    console.log(passingStatus);
    if (passingStatus.includes("Passed")) {
      tbody.appendChild(row);
    } else {
      row.style.display = "none";
    }
  }
}

// for sorty by gender
const sortingByGender = document.getElementById("sortByGender");
sortingByGender.addEventListener("click", sortByGender);

const table1 = document.getElementById("student-table-for-gender");
const tbody1 = table1.getElementsByTagName("tbody")[0];
table1.style.display = "none";

function sortByGender() {
  const table = document.getElementById("student-table");
  const tbody = table.getElementsByTagName("tbody")[0];
  const rows = Array.from(tbody.getElementsByTagName("tr"));

  // table1.style.marginTop = "50px";
  table1.style.display = "block";
  for (const row of rows) {
    var gender = row.getElementsByTagName("td")[2].innerText;
    if (gender.includes("Female")) {
      tbody.appendChild(row);
    } else if (gender.includes("Male")) {
      tbody1.appendChild(row);
    } else {
      row.style.display = "none";
    }
  }
}
