# BATATATI – بطاطتي

Prototype de site de réservation de pommes de terre, bilingue arabe / français (mise en page RTL / LTR).

**Technologie :** HTML, CSS et JavaScript pur. Il n'y a ni React, ni Vite, ni Next.js, ni étape de compilation (`build`). Le dossier se publie tel quel.

> **État du projet : version de démonstration.**
> Le formulaire valide les champs dans le navigateur, calcule le montant (quantité × 60 DA) et affiche une confirmation d'essai avec une référence aléatoire. **Aucune donnée n'est envoyée, enregistrée ou transmise.** Il n'y a pas de base de données, de serveur ni de service externe. Les wilayas, communes, points de vente et coordonnées de contact sont des exemples à remplacer.

## Contenu du projet

```
batatati/
├── index.html              Page unique (accueil, formulaire, sections d'information, pied de page)
├── 404.html                Page d'erreur affichée par Vercel
├── robots.txt              Interdit l'indexation (voir « Indexation »)
├── vercel.json             Configuration Vercel (en-têtes de sécurité, cache des ressources)
├── package.json            Scripts de lancement local et de vérification
├── scripts/check.mjs       Vérifie que tous les fichiers référencés existent
└── assets/
    ├── css/style.css       Tous les styles
    ├── js/app.js           Traductions, formulaire, validation, calcul du montant
    └── img/
        ├── hero-bg.jpg     Arrière-plan : pommes de terre, Mémorial du Martyr, Grande Poste
        ├── logo.svg        Logo BATATATI
        └── favicon.svg     Icône de l'onglet
```

La police **Cairo** est chargée depuis Google Fonts. Sans connexion à ce service, le navigateur utilise la police de secours (Segoe UI, Tahoma, Arial).

## Lancer le site en local

Node.js 18 ou plus récent est nécessaire.

```bash
npm run dev
```

Le site est alors accessible sur http://localhost:3000. Sans Node.js, `python3 -m http.server 3000` dans ce dossier fonctionne aussi. Ouvrir `index.html` directement dans le navigateur marche également.

Pour vérifier les fichiers référencés et la syntaxe du JavaScript :

```bash
npm run check
```

## Publier sur Vercel

**Option A : tableau de bord (la plus simple)**

1. Créez un compte sur https://vercel.com.
2. Déposez ce dossier dans un dépôt GitHub, GitLab ou Bitbucket.
3. Dans Vercel : **Add New… → Project**, puis importez le dépôt.
4. Laissez les réglages par défaut : *Framework Preset* = **Other**, aucune commande de build, dossier de sortie vide (la racine est publiée).
5. Cliquez sur **Deploy**.

**Option B : ligne de commande**

```bash
npm i -g vercel
vercel          # déploiement de prévisualisation
vercel --prod   # déploiement en production
```

**Domaine `batatati.dz` :** dans Vercel, ouvrez *Settings → Domains*, ajoutez le domaine et reportez chez votre bureau d'enregistrement les enregistrements DNS indiqués. Les domaines en `.dz` passent par un registrar agréé (voir le registre algérien des noms de domaine).

## Indexation

Par prudence, la version de démonstration ne doit pas apparaître dans les moteurs de recherche : `robots.txt` interdit l'exploration et `index.html` contient `<meta name="robots" content="noindex, nofollow">`. Pour autoriser l'indexation le jour de la mise en production réelle, supprimez cette balise `<meta>` et remplacez le contenu de `robots.txt` par :

```
User-agent: *
Allow: /
```

## Ce qui reste à faire pour une vraie mise en service

Ce projet ne contient volontairement aucune connexion à un service externe. Avant de collecter de vraies réservations, il faudra :

- un back-end pour recevoir et stocker les réservations (fonction serverless Vercel et base de données, ou autre) ;
- une conformité aux règles de protection des données personnelles (numéro de carte d'identité, date de naissance, téléphone) : base légale, information des personnes, durée de conservation, sécurisation ;
- les vraies listes de wilayas, communes et points de vente, les vrais prix et les vraies conditions de réservation ;
- les vraies coordonnées de contact (actuellement `contact@exemple.invalid` et `+213 00 00 00 00`) ;
- des pages de conditions d'utilisation, de politique de confidentialité et de mentions légales (les liens du pied de page renvoient pour l'instant vers la section « Conditions de réservation »).

Où modifier :

| Élément | Fichier |
|---|---|
| Textes arabes et français | `assets/js/app.js` (objet `T`) |
| Wilayas, communes, points de vente, prix unitaire | `assets/js/app.js` (`GEO`, `SP`, `PRICE`) |
| Couleurs, tailles, mise en page | `assets/css/style.css` |
| Structure de la page | `index.html` |

Le site n'est pas un portail officiel et ne porte ni emblème ni nom d'un organisme public. Si vous le publiez pour le compte d'une institution, utilisez ses propres éléments d'identité et son hébergement institutionnel.
