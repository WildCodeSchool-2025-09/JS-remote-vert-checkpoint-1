const bouton = document.getElementById("boutonChanger");


    bouton.addEventListener("click", function() {

      const nouveauTexte = prompt("Entre le nouveau texte à afficher :");


      if (nouveauTexte !== null && nouveauTexte.trim() !== "") {
        const nouvelleCouleur = prompt("Entre la couleur du texte (ex: red, blue, #ff6600, rgb(255,0,0)) :");
        const span = document.getElementById("firstname");
        span.textContent = nouveauTexte;
      }
       if (nouvelleCouleur !== null && nouvelleCouleur.trim() !== "") {
          span.style.color = nouvelleCouleur;
        }
    });


       