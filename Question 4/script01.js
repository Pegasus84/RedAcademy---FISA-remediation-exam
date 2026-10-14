const claimForm = document.getElementById("claimForm");
const disStatus = document.getElementById("disStatus");
const disRecords = document.getElementById("disRecords");
const claimsArray = [];

claimForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const claimName = document.getElementById("cName").value.trim();
  const email = document.getElementById("email").value.trim();
  const productCode = document.getElementById("pCode").value.trim();
  const category = document.getElementById("category").value.trim();
  const description = document.getElementById("description").value.trim();

  if (
    !claimName ||
    !email ||
    !productCode ||
    !category ||
    category === "Select a category" ||
    !description
  ) {
    disStatus.textContent = "Please complete all fields.";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    disStatus.textContent = "Please enter a valid email address.";
    return;
  }
  const claim = {
    id: claimsArray.length + 1,
    claimantName: claimName,
    email: email,
    productCode: productCode,
    category: category,
    description: description,
  };

  claimsArray.push(claim);

  disStatus.textContent = "Claim submitted successfully!";

  const record = document.createElement("p");

  record.textContent =
    "Claim #" +
    claim.id +
    "|" +
    claim.claimantName +
    "|" +
    claim.email +
    "|" +
    claim.productCode +
    "|" +
    claim.category +
    "|" +
    claim.description;

  disRecords.appendChild(record);

  claimForm.requestFullscreen();
});
