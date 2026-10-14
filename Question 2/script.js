const claim = {
  id: 11111,
  category: "Mat - Damage",
  status: "Pending",
  customer: {
    name: "Porter",
    email: "Porter123@gmail.co.za",
  },
  productCode: "Mat001",
  description: "Item is fell and is broken",
};

function displayClaim() {
  const summary = document.getElementById("claimSummary");

  summary.innerHTML = `
<p><strong>Claim ID:</strong>${claim.id}</p>
<p><strong>Category:</strong>${claim.category}</p>
<p><strong>Status:</strong>${claim.status}</p>
<p><strong>Customer Name:</strong>${claim.customer.name}</p>
<p><strong>Customer Email:</strong>${claim.customer.email}</p>
<p><strong>Product Code:</strong>${claim.productCode}</p>
<p><strong>Description:</strong>${claim.description}</p>
`;
}

//display initial claim details
displayClaim();

function changeClaimStatus(newStatus) {
  claim.status = newStatus;
  displayClaim();
}

//Changing the claim status
document.getElementById("statusBtn").addEventListener("click", function () {
  changeClaimStatus("Declined");
});
