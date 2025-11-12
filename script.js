document.getElementById("healthSurveyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const healthIssues = document.getElementById("healthIssues").value || "None";
  const symptoms = document.getElementById("symptoms").value || "None";
  const comments = document.getElementById("comments").value || "No comments";

  const responseItem = document.createElement("li");
  responseItem.innerHTML = `
    <strong>${name}</strong> (Age: ${age}, Gender: ${gender})<br>
    <strong>Health Issues:</strong> ${healthIssues}<br>
    <strong>Symptoms:</strong> ${symptoms}<br>
    <strong>Comments:</strong> ${comments}
  `;

  document.getElementById("responseList").appendChild(responseItem);

  // Clear form
  document.getElementById("healthSurveyForm").reset();
});