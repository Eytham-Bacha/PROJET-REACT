# Projet Yuk'AFPA avec REACT

## I.
Pour ce projet j'ai utilisé Next.

## Explication du code utilisé
Pour commencer, dans le layout  j'ai simplement mis le contenu de ma page appelé "Navbar".  
Ensuite j'ai mis le contenu qui apparaît en tant que "children".

### Page "Navbar"
Dans cette page j'ai utilisé Bootstrap pour créer une navbar dans laquelle j'ai intégré le nom de mon site "Yuk'AFPA", mon logo ainsi que mon slogan.  
Ensuite j'ai créer un formulaire qui inclu la barre de recherche ainsi que le bouton pour rechercher.
Pour finir j'ai mis un lien vers une autre page "Qui Sommes Nous ?"  

---
 
Pour cette page j'ai utilisé un fichier scss "globals.scss" dans lequel j'ai modifié la couleur de la navbar, j'ai mis en italique le slogan et j'ai ajouté des animations pour que mon logo ce balance de gauche a droite ainsi qu'une autre animation qui permet qu'une fois que l'utilisateur a cliqué sur le bouton rechercher, le logo effectue un tour sur lui même avant de partir vers le haut comme une fusée.

---

### Page d'acceuil 
Pour la page d'acceuil j'ai simplement mis un "h1" avec le nom "Yuk'AFPA.  

---

### Page "Qui somme nous"
Cette page est uniquement statique j'ai utilisé que du HTML et des CSS simple.

---

### Page Produit 

Cette page est dynamique.  
J'ai utilisé "!product" pour que si le code barre entré par l'utilisateur n'est pas connu de la base de données de l'API d'open Food Facts alors la page renvoyé comportera un texte prévenant l'utilisateur que son code barre est invalide.  
J'ai ajouté une image qui apparaît avec une animation qui fait passé la couleur de l'arrière plan de rouge a jaune avec un effet de zoom durant 3 secondes.  
Si le code barre est valide alors toute les informations de la page changeront est seront reliés a son code barre.
