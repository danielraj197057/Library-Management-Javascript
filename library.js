function add(){
var course = document.getElementById("course")
var course_container = document.createElement('div');
course_container.classList.add("course-container");
var box = document.createElement('div');
var cs = document.createElement('div');
cs.classList.add("cs-thumb");
var image = document.createElement('img');
image.src = "https://covers.openlibrary.org/b/id/10573773-L.jpg";

cs.appendChild(image);
box.appendChild(cs);


var details = document.createElement('div');
details.classList.add('cs-details');
var head = document.createElement("h1");
head.innerHTML = "sous Louis XIII";
var para = document.createElement("p");
para.innerHTML = "Roman historique relatant la condamnation de Cinq-Mars et de Thou, décapités en 1642";
var author = document.createElement('h2');
author.innerHTML = "Louis";
author.classList.add("author");
var buy = document.createElement("button");
buy.classList.add('enroll');

details.appendChild(head);
details.appendChild(para);
details.appendChild(author);
details.appendChild(buy);


course_container.appendChild(box);
course_container.appendChild(details);
course.appendChild(course_container);

}