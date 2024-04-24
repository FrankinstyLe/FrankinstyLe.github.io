document.getElementById("yearForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var birthYear = document.getElementById("birthYear").value;
    fetchResults(birthYear);
});

function fetchResults(year) {
    // You can implement fetching and displaying results here
    // Example: Display the entered year
    document.getElementById("results").innerHTML = "<h2>Results for " + year + "</h2>";
}
