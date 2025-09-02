function changeText() {
  const about = document.getElementById("about-text");
  about.textContent = "I love building cool projects with HTML, CSS, and JavaScript!";
}

function addHobby() {
  const hobbies = ["Traveling", "Photography", "Music"];  
  const hobbyList = document.getElementById("hobby-list");

  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    hobbyList.appendChild(li);
  }
}

document.getElementById("color-btn").addEventListener("click", function() {
  const colors = ["#f4f4f9", "#ffe4b5", "#e6e6fa", "#d1f7c4"];
  
  colors.forEach(color => console.log("Possible color:", color));

  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
