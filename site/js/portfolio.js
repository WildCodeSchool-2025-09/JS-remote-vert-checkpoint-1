const bouton = document.getElementById("boutonChanger");


    bouton.addEventListener("click", function() {
        const span = document.getElementById("firstname");

      const nouveauTexte = prompt("Entre le nouveau texte :", span.textContent);


      if (nouveauTexte !== null && nouveauTexte.trim() !== "") {
        
        span.textContent = nouveauTexte;
      }
      const nouvelleCouleur = prompt("Entre la couleur du texte (ex: red, blue, #ff6600, rgb(255,0,0)) :");
       if (nouvelleCouleur !== null && nouvelleCouleur.trim() !== "") {
        
          span.style.color = nouvelleCouleur;
        }
    });


       