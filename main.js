function makeHeader() {
    // Get header
    // var header = document.getElementsByTagName("header");
    var header = document.getElementById("header");

    // Create elements to go into header
    var title = document.createElement("a");
    var home = document.createElement("a");
    var past_projects = document.createElement("a");

    // Fill header elements
    title.innerHTML = "Sammie Atkins";
    title.setAttribute("href", "index.html");
    title.setAttribute("id", "sammie_atkins");
    home.innerHTML = "Home";
    home.setAttribute("href", "index.html");
    past_projects.innerHTML = "Past Projects";
    past_projects.setAttribute("href", "past_projects.html");

    // Insert into header
    header.append(title);
    header.append(home);
    header.append(past_projects);
}
