const getClaim = document.getElementById("claimForm");
const getResult = document.getElementById("result");
const getStatus = document.getElementById("status");

getClaim.addEventListener("submit", function (event) {
  event.preventDefault();

  const claimName = document.getElementById("cName").value.trim();
  const email = document.getElementById("email").value;
  const description = document.getElementById("description").value;

  try {
    if (description.length < 10) {
      throw new Error("Claim description must contain at least 10 characters.");
    }
    getResult.textContent = `Claim submitted successfully for ${claimName}.`;
  } catch (error) {
    getResult.textContent = `Error: ${error.message}`;
  } finally {
    getStatus.textContent = "Processing complete";
  }
});
