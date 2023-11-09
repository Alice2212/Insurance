  // getting modal form element
  const modal = document.getElementById("my-modal");
  const btn = document.getElementById("open-btn");
  const button = document.getElementById("close-btn");

  // display modal on click add report
  btn.onclick = function () {
    console.log("clicked");
    modal.style.display = "block";
  };

  // close modal on click x
  button.onclick = function () {
    modal.style.display = "none";
  };

  // close the modal when clicked outside
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  // form validation
  function validateForm() {
    // selecting form field elements
    const policyNum = document.getElementById("policyNum").value;
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const status = document.getElementById("status").value;

    // validating fields
    if (policyNum === "") {
      document.getElementById("policyError").innerHTML =
        "Enter a valid policyNo e.g MT/223/1092";
      return false;
    }
    if (name === "") {
      document.getElementById("nameError").innerHTML =
        "Name cannot be empty";
      return false;
    }
    if (date === "") {
      document.getElementById("dateError").innerHTML =
        "Date cannot be empty";
      return false;
    }
    if (status === "") {
      document.getElementById("statusError").innerHTML =
        "Please select a status";
      return false;
    }

    // validate field and create report obj
    if (
      policyNum !== "" &&
      name !== "" &&
      date !== "" &&
      status !== ""
    ) {
      const salesReport = {
        policyNum: policyNum,
        name: name,
        date: date,
        status: status,
      };

      // create db
      let salesReports =
        JSON.parse(localStorage.getItem("sales_report_db")) || [];

      // store report to db
      salesReports.push(salesReport);
      localStorage.setItem("sales_report_db", JSON.stringify(salesReports));

      return true;
    } else {
      return false;
    }
  }

  // function to generate table
  function generateTable() {
    let tableBody = document.getElementById("table-body");
    tableBody.innerHTML = "";

    // Retrieve data from local storage
    let storedData =
      JSON.parse(localStorage.getItem("sales_report_db")) || [];

    // displaying data on table
    storedData.forEach((item, index) => {
      let tableRow = `
    <tr class="border-b pl-10">
      <td class="pl-10">${index + 1}</td>
      <td class="pl-10">${item.policyNum}</td>
      <td class="pl-10">${item.name}</td>
      <td class="pl-10">${item.date}</td>
      <td class="pl-10">${item.status}</td>
    </tr>
  `;

      tableBody.innerHTML += tableRow;
    });
  }

  generateTable();