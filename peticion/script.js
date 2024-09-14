document.getElementById("fetchButton").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((data) => {
      const userDataDiv = document.getElementById("userData");
      userDataDiv.innerHTML = `
                <p><strong>Nombre:</strong> ${data.name}</p>
                <p><strong>Usuario:</strong> ${data.username}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Teléfono:</strong> ${data.phone}</p>
                <p><strong>Website:</strong> ${data.website}</p>
            `;
    })
    .catch((error) => console.error("Error:", error));
});
