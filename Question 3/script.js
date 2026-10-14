const claimsArray = [
  {
    id: 1001,
    category: "Appliances",
    status: "Pending",
    customer: {
      name: "John Smith",
      email: "john.smith123@gmail.co.za",
    },
    ProductCode: "SAM001",
    description: "Device is not working - Damaged.",
  },

  {
    id: 1002,
    category: "Furniture",
    status: "Approved",
    customer: {
      name: "Mary Smith",
      email: "mary.smith123@gmail.co.za",
    },
    ProductCode: "SAM005",
    description: "Water damage.",
  },

  {
    id: 1003,
    category: "Electronic",
    status: "Declined",
    customer: {
      name: "Jon Jameson",
      email: "Jon.Jameson123@gmail.co.za",
    },
    ProductCode: "SAM010",
    description: "Damage due to falling.",
  },

  {
    id: 1004,
    category: "Appliances",
    status: "Pending",
    customer: {
      name: "Sharon Brown",
      email: "Sharon.Brown123@gmail.co.za",
    },
    ProductCode: "SAM201",
    description: "Damage due to neglect.",
  },
];

const filterType = document.getElementById("filterType");
const filterValue = document.getElementById("filterValue");
const claimList = document.getElementById("claimList");

//display claims on the page
function displayClaims(claims) {
  claimList.replaceChildren();

  claims.forEach(function (claim) {
    const listItem = document.createElement("li");

    listItem.textContent =
      `ClaimID: ${claim.id} | ` +
      `Category: ${claim.category} | ` +
      `Status: ${claim.status} | ` +
      `Customer: ${claim.customer.name} | ` +
      `Product: ${claim.productCode} | ` +
      `Description: ${claim.description} | `;

    claimList.appendChild("listItem");
  });

  if (claims.length === 0) {
    const listItem = document.createElement("li");
    listItem.textContent = "No matching claims found.";
    claimList.appendChild(listItem);
  }
}

function updateFilterValues() {
  const selectedType = filterType.value;

  filterValue.replaceChildren();

  const allOption = document.createElement("option");

  allOption.value = "all";
  allOption.textContent = "All Claims";
  filterValue.appendChild(allOption);

  let values = [];

  if (selectedType === "category") {
    values = [...new Set(claimsArray.map((claim) => claim.category))];
  } else if (selectedType === "status") {
    values = [...new Set(claimsArray.map((claim) => claim.status))];
  }

  values.forEach(function (value) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    filterValue.appendChild(option);
  });

  displayClaims(claimsArray);
}

function filterClaims() {
  const selectedType = filterType.value;
  const selectedValue = filterValue.value;

  let filteredClaims = claimsArray;

  if (selectedValue !== "all" && selectedType === "category") {
    filterClaims = claimsArray.filter(function (claim) {
      return claim.category === selectedValue;
    });
  } else if (selectedValue !== "all" && selectedType === "status") {
    filteredClaims = claimsArray.filter(function (claim) {
      return claim.status === selectedValue;
    });
  }

  displayClaims(filteredClaims);

  filterType.addEventListener("change", updateFilterValues);
  filterValue.addEventListener("change", filterClaims);

  displayClaims(claimsArray);
}
