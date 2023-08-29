function makeHeader() {
    // Get header
    // var header = document.getElementsByTagName("header");
    var header = document.getElementById("header");

    // Create elements to go into header
// add a tag to h1 so it can also be the home page?
    var h1 = document.createElement("h1");
    var home = document.createElement("a");
    var past_projects = document.createElement("a");

    // Fill header elements
    h1.innerHTML = "Sammie Atkins";
    home.innerHTML = "Home";
    home.setAttribute("href", "index.html");
    past_projects.innerHTML = "Past Projects";
    past_projects.setAttribute("href", "past_projects.html");

    // Insert into header
    header.append(h1);
    header.append(home);
    header.append(past_projects);
}
makeHeader();