# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).



Parfait 👌
Je te fais un résumé clair, structuré, comme une mini documentation de ton site LCM.

---

# 🏗 STRUCTURE GÉNÉRALE DU SITE LCM

Tu développes un site Astro statique, gratuit, structuré en **blocs verticaux numérotés**, eux-mêmes composés de sous-blocs (A, B, C).

👉 Une ligne horizontale complète = **Bloc X**
👉 Une subdivision interne = **Bloc AX / BX / CX**

---

# 🧠 NOMENCLATURE DES BLOCS

## 🔢 Bloc 1 = HERO (Accueil)

`Bloc 1 = A1 + B1`

### 🔹 A1 (hero-left)

Partie texte gauche :

* Intro label : *Bienvenue à l’association LCM*
* Titre principal en police Parisienne
* Divider (petit trait accent)
* Disciplines : Chant · Danse · Théâtre
* Phrase poétique

👉 Objectif : impact émotionnel + identité artistique

---

### 🔹 B1 (hero-right)

Partie image droite :

* Affiche LCM
* Ombres latérales
* Alignement à droite
* Image non rognée (contain)
* Responsive

👉 Objectif : impact visuel fort

---

# 🔢 Bloc 2 = ACTUALITÉS

Section interactive type slider.

* Pleine largeur
* Slides avec background coloré
* Flèches droite/gauche
* Indicateurs ronds
* Animation au scroll

Slides actuelles :

1. Forum des associations
2. Inscriptions ouvertes
3. À venir

👉 Navigation via `#actualites`

---

# 🔢 Bloc 3 = PRÉSENTATION RAPIDE

`Bloc 3 = A3 + B3 + C3`

3 encadrés :

* A3 : Les Cours
* B3 : L’équipe
* C3 : Tarifs et inscriptions

Chaque card renvoie vers une page dédiée.

👉 Objectif : navigation claire vers pages internes

---

# 🔢 Bloc 4 = CONTACT

`Bloc 4 = A4 + B4`

### 🔹 A4

Infos contact :

* Adresse
* Téléphone
* Email (mailto + bouton copier)
* Réseaux sociaux (logos officiels)

---

### 🔹 B4

Carte Google Maps :

* Version embed
* Centrée
* Responsive
* Clique ouvre Google Maps

---

# 🧭 NAVIGATION

Menu :

* Accueil → `/`
* Actualités → `/#actualites`
* Contact → `/#contact`
* Planning → `/planning`
* Équipe → `/equipe`
* Tarifs → `/tarifs`

Header sticky + scroll smooth + scroll-padding-top.

---

# 🎨 DESIGN

Palette :

* Primary : `#06031e`
* Accent : `#03084c`
* Background : `#fff8f5`

Police titre artistique : **Parisienne**

Animations :

* Reveal Bloc 1
* Reveal Bloc 2 & 3
* Scroll smooth
* Slider interactif

---

# 📁 STRUCTURE ASTRO

```
src/
 ├── layouts/
 │     └── Layout.astro
 ├── pages/
 │     ├── index.astro
 │     ├── planning.astro
 │     ├── equipe.astro
 │     └── tarifs.astro
```

---

# 🧩 LOGIQUE D’ARCHITECTURE

Tu as choisi :

✔ Une page principale découpée en blocs
✔ Navigation par ancres
✔ Pages secondaires pour contenu long
✔ Design modulaire
✔ Code propre et évolutif

---

# 📌 PHILOSOPHIE DE NOMMAGE

Exemple :

```
Bloc 3
 ├── A3 (colonne gauche)
 ├── B3 (colonne centre)
 └── C3 (colonne droite)
```

Si un bloc futur avait 4 colonnes :

```
Bloc 5
 ├── A5
 ├── B5
 ├── C5
 └── D5
```

Lisible.
Logique.
Évolutif.
Pro.

---

# 🚀 ÉTAT ACTUEL DU PROJET

Tu as maintenant :

* Layout stable
* Header sticky
* Navigation interne fluide
* Slider interactif
* Cartes de navigation
* Section contact complète
* Pages secondaires prêtes

👉 Tu es déjà à un niveau largement supérieur à un Wix standard.

---

Si tu veux, je peux maintenant te faire :

* un schéma visuel de l’architecture
* une version "doc technique propre"
* ou un plan SEO optimisé pour Google

Ton site commence vraiment à devenir solide 👏✨




Readme 2

Parfait 👌
Voici un **résumé clair, structuré et professionnel** de tout ce que vous avez construit pour le site LCM, avec la nomenclature des blocs et la logique d’architecture.

---

# 🏗 STRUCTURE GLOBALE DU SITE LCM

Site statique développé avec **Astro**, organisé en :

* 🔹 Une page principale en blocs verticaux
* 🔹 Des pages secondaires dédiées
* 🔹 Une nomenclature claire et évolutive
* 🔹 Un design cohérent et artistique

---

# 🧭 ARCHITECTURE GÉNÉRALE

## 📁 Structure Astro

```
src/
 ├── layouts/
 │     └── Layout.astro
 ├── pages/
 │     ├── index.astro
 │     ├── planning.astro
 │     ├── equipe.astro
 │     └── tarifs.astro
```

---

# 🎨 IDENTITÉ VISUELLE

## Palette

* Primary : `#06031e`
* Accent : `#03084c`
* Couleur artistique secondaire : `#731e61`
* Background : `#fff8f5`

## Typographie

* Titres artistiques : **Parisienne**
* Texte courant : Arial / sans-serif

## Effets

* Scroll smooth
* Scroll reveal (animation apparition au scroll)
* Hover subtil sur cartes et boutons
* Ombres légères modernes

---

# 🏠 PAGE D’ACCUEIL (index)

Organisation en blocs numérotés :

---

## 🔢 Bloc 1 – HERO

**A1 + B1**

### A1 – Texte gauche

* Titre artistique
* Discipline
* Phrase poétique
* Âges concernés

### B1 – Image droite

* Logo / affiche
* Ombre latérale
* Mise en valeur visuelle forte

---

## 🔢 Bloc 2 – ACTUALITÉS

Slider interactif :

* 3 slides
* Flèches
* Indicateurs
* Animation fluide

---

## 🔢 Bloc 3 – PRÉSENTATION RAPIDE

3 cartes :

* Nos Cours
* Notre équipe
* Tarifs & inscription

Navigation vers pages internes.

---

## 🔢 Bloc 4 – CONTACT

A4 + B4

* Coordonnées
* Réseaux sociaux
* Carte Google Maps embed
* Bloc sombre élégant

---

# 👥 PAGE ÉQUIPE

---

## 🔢 EQ.1 – Photo d’équipe + bandeau

* Grande image
* Bandeau artistique `#731e61`
* Phrase :
  *Se découvrir, se dépasser, transmettre, s’amuser*

---

## 🔢 EQ.2 – Chris Roger

A2 + B2

* Photo gauche
* Texte droite
* Nom en Parisienne
* Fonction
* Description
* Citation en italique

---

## 🔢 EQ.3 – Laurent

A3 + B3 (alternance inversée)

* Texte gauche
* Photo droite
* Même structure que EQ.2
* Alternance visuelle maîtrisée

---

# 📅 PAGE COURS & PLANNING

Structure en **cards horizontales compactes** (Option A validée).

Chaque carte contient :

* Petite photo
* Discipline (titre artistique)
* Enseignant
* Liste des créneaux par âge / style

Cours proposés :

* Comédie musicale
* Chant
* Danse
* Théâtre
* Éveil artistique
* Cours particuliers

Disposition :

* Grille 2 colonnes desktop
* 1 colonne mobile
* Design compact et lisible

---

# 💳 PAGE TARIFS & INSCRIPTION

---

## 🔢 T1 – Formules

4 cartes :

* 1 cours / semaine
* 2 cours / semaine
* 3 cours / semaine
* Illimité

- bloc complémentaire :

* Cours particuliers
* Cours d’essai

Design :

* Cartes modernes
* Formule “Populaire” mise en avant
* Réductions mentionnées

---

## 🔢 T2 – Inscriptions

Structure en 2 étapes :

### Étape 1 – Télécharger les documents

Boutons pleine largeur :

* Feuille d’inscription
* Règlement intérieur
* Autorisation droit à l’image
* Autorisation parentale

### Étape 2 – Finaliser l’inscription

Liste claire :

* Dossier complété
* Cotisation
* Paiement septembre
* Mandat SEPA (si besoin)
* Certificat médical
* Photo portrait

Note :
Certificat et photo peuvent être remis dans le premier mois.

Bloc validation final clair et rassurant.

---

# 🧠 PHILOSOPHIE DE NOMMAGE

Chaque page suit une logique :

```
Bloc X
 ├── AX
 ├── BX
 ├── CX
```

Exemple :

```
EQ.2
 ├── EQ.A2
 └── EQ.B2
```

Lisible
Structuré
Évolutif
Facilement maintenable

---

# 🚀 ÉTAT ACTUEL DU SITE

✔ Architecture claire
✔ Design cohérent
✔ Identité artistique forte
✔ Responsive
✔ Navigation fluide
✔ Structure professionnelle
✔ Aucun outil payant nécessaire
✔ Hébergement gratuit possible

---

# 🎯 Positionnement final du site

LCM apparaît comme :

* Une école artistique structurée
* Sérieuse mais chaleureuse
* Professionnelle mais accessible
* Moderne sans être surchargée

---

Si tu veux, je peux maintenant :

* Te faire un mini document de présentation du site (à montrer au bureau de l’association)
* Ou structurer une roadmap d’améliorations futures
* Ou optimiser encore la hiérarchie typographique

On est déjà à un niveau très solide 👌
