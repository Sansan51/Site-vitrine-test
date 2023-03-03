function submitComment() {
  // Récupération du commentaire
  const comment = document.getElementById("comment").value;

  // Récupération des commentaires dans le localStorage
  // JSON.parse() pour transformer le string en objet
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  if (validComment(comment)) {
    // Ajout du commentaire dans le tableau
    comments.unshift(comment);

    // JSON.stringify() pour transformer le tableau en string et le mettre dans le localStorage
    localStorage.setItem("comments", JSON.stringify(comments));

    // Clear the comment
    document.getElementById("comment").value = "";

    displayComments();
  }
}

function validComment(comment) {
  // Vérification du commentaire
  return comment.length < 200 && countWords(comment) >= 3;
}

function countWords(sentence) {
  // Suppression des espaces et split pour transformer la phrase en tableau
  return sentence.trim().split(/\s+/).length;
}

displayComments();

function displayComments() {
  // Récupération des commentaires dans le localStorage
  // JSON.parse() pour transformer le string en objet
  const comments = JSON.parse(localStorage.getItem("comments")) || [];

  // Récupération de la div dans laquelle les commentaires sont affichés
  const commentsList = document.getElementById("comments-list");
  commentsList.innerHTML = "";

  // Création de l'élément HTML du commentaire et affichage du commentaire
  for (const comment of comments) {
    // Création de l'élément HTML du commentaire
    const div = document.createElement("div");

    // Ajout d'une classe à l'élément HTML du commentaire
    div.className = "comment-item";

    // Ajout du commentaire dans l'élément HTML
    div.innerHTML = comment;

    // Ajout de l'élément HTML du commentaire dans la div
    commentsList.appendChild(div);
  }
}

function giveNote(note) {
  // Récupération de toutes les étoiles
  const stars = document.getElementsByClassName("fa-star");

  // Remplacement de classe fa par fa-regular sur les classses non choisies
  for (let i = note; i < stars.length; i++) {
    stars[i].classList.remove("fa");
    stars[i].classList.add("fa-regular");
  }

  // Ajout de classe fa sur les étoiles choisies et suppression de fa-regular
  for (let i = 0; i < note; i++) {
    stars[i].classList.remove("fa-regular");
    stars[i].classList.add("fa");
  }
}
