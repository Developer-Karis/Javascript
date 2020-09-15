# Exo 4
- Créer une class "LeeGofGeek" avec 4 propriété : le nom du personnage, son pouvoir, dégats qu'il produit, santé et bonus
- Créer 2 instances (2personnages). Chaque personnage à ses propriété bien défini. C-à-d que son pouvoir a un nom spécifique, les dégats sont précis(max 15points). Leurs santé est a 100 points par défaut.

- Créer une méthode dans l'objet nommé attaqueBasic. Une fois appelé, il consite a lancé des dégats par défaut sur l'autre personnage. 
- Créer une méthode attaqueSpecial qui consiste à mettre des dégats +- important sur l'autre personnage. (-25point). Par contre cette attaque enleve egalement -15point a son utilisateur.
- Créer une méthode auto-save, qui une fois lancé permet de rajouter 35 points de vie à son utilisateur mais il pert l'acces à sa méthode "joker"
- Créer une méthode joker. Cette méthode est trés particuliere, elle sera utilisable que si le point de vie de l'utilisateur est a < 15 point et vous perdez l'utilisation de votre méthode autoSave.
- Donc c'est soit la méthode "joker" soit la méthode "autoSave"
- La méthode "joker", consiste d'appeler un bonus aléatoire prédéfinis dans un array "bonus". Dans ces bonus il y'a "VieFull" qui permet de revenir à 100 points de vie. il y'a une attaque nommé "dead" qui permet d'eliminer l'ennemie du 1er coup. Il y'a un bonus nommé "null" qui donne aucun pouvoir.

- Une fois que la vie d'un des personnages tombe à zero, un alert s'affiche pour dire que la partie est terminé.