# aspect du project 
- [ ce project n'est pas basé sur un framework c'est juste du ts ]

# les manières importantes à savoir pour coder
- [ coder avec les types ]
```js
    let name: string = "Franck"
    let age: number = 35
    let numbers: number[] = [1,3,3,2,42,]
    let team: string[] = ["Franck","Dan","Victor"]
```
- [ les manières si haut c'est pour certains types]
- [  alors voici comment declarer un object ]

```js 
    interface personInterface {
        name: string
        lastname: string
        age:  number
    }
  
```
- [ la premiere manière de le faire est la suivante ] 
```js 

    const person: personInterface = {
        name: "dan"
        lastname:"AKD"
        age:  12
    }

```
- [ la second manière de le faire est la suivante ] 
```js 

    const person: personInterface | null = null

```


# nous alons commencer sur la serie numero 1.4 serie de 5 exercices étant donné que c'est à partir de la que nous allons apprendre les parties essentielles de la page web et application web et toutes les parties precedentes sont ici

c'est sur cette page où je serai entrain d'assigner les tâches pour signifier que cette partie sera la page de reference 

# 1.4. Serie de 5 Exercices Projects: Développe,ent Frontend

- [ project 1: création d'ine Page d'accueil statique reponsive => sera fait par __*victor*__ ] 
```js
    // le projet sera soit fait en simple HTML CSS ET TS
    // ***** Les compentences à avoir en css ***********:
```
```html
    <div class="container">
        <div  class="box" >box</div>
        <div  class="box" >box</div>
        <div  class="box" >box</div>
    </div>
```

```css
    /* pour rendre le  */
    .container{
        display: flex;
        flex-direction: column;

        /*  les propriétés en dessous sont à maitriser */
        /* justify-content: start, center, end;
        align-items: start, center, end; */
    }

```

```css
    /* pour rendre le flex horizontales */
    .container{
        display: flex;
    }

    .box{
        width: 400px;
        height: 400px;
        /* la ligne border est pour visualiser la boite */
        border: solid 1px rgba(0 0 0/.5)
    }
```

```css
    /* pour rendre flex column  */
    .container{
        display: flex;
        flex-direction: column;
    }

    .box{
        width: 400px;
        height: 400px;
        /* la ligne border est pour visualiser la boite */
        border: solid 1px rgba(0 0 0/.5)
    }
```
```css
    /* // competences en media query */
   /* faites de recherche sur cela  */
```

- [ project 2: galerie d'images interactives => sera fait par __*franck*__ ] 
- [ project 3: formulaire de contact avec validation  => sera fait par __*franck*__ ] 
- [ project 4: Mini-jeu de deviner les nombres  => sera fait par __*dan*__ ] 
- [ project 5: consommation d'une API publique avec fetch   => sera fait par __*dan*__ ] 
```js
    // maitrise de promesses en developpement web 
    // maitrise de async await en ES6
    // maitrise dde pagination en requéte

```
- [ project 6: implementation d'une carrousel d'images / slider images  => sera fait par __*victor*__ ]
- [ project 7: implementation menu navigateur dynamic/ dropdwom  => sera fait par __*franck*__ ]
- [ project 8: systeme de filre cote client   => sera fait par __*victor*__ ] 
```js
    // maîtrise de tableau(array) en js 
    const array = [1,3,2,43,4,3,3]
    console.log(array)

    // maîtrise de méthodes de tableau(array) filter(), join(), map() 
    const evenNumbers = array.filter(nbr => nbr % 2 === 0)
    console.log(evenNumbers)

    // maitrise des objets
    const person = {
        name: "victor",
        lastname: "wasingya",
        age: 32
    }
    console.log(person)
    console.log("name", person.name)
    console.log("lastname", person.lastname)
    console.log("age", person.age)


    // maitrise de combinaison de tableau avec le array
    const people = [
        {
            name: "dan",
            lastname: "akd",
            age: 80,
            isStudent: true,
            gender: "M"
        },
        {
            name: "victor",
            lastname: "wasingya",
            age: 40,
            isStudent: true,
            gender: "M"
        },
        {
            name: "franck",
            lastname: "mg",
            age: 2,
            isStudent: false,
            gender: "M"
        },
        {
            name: "bright",
            lastname: "smith",
            age: 1,
            isStudent: false,
            gender: "F"
        }
    ]

    const lesfemmes = people.filter( person => person.gender === "F")
    const leshommes = people.filter( person => person.gender === "M")
    const lesPlusAgees = people.filter( person => person.age > 30 )
    const lesMoinsAgees = people.filter( person => person.age < 30 )
    const lesetudiants = people.filter( person => person.isStudent === true )


    console.log(lesfemmes)
    console.log(leshommes)
    console.log(lesPlusAgees)
    console.log(lesMoinsAgees)
    console.log(lesetudiants)
```

- [ project 9: implementation du mode sombre   => sera fait par __*dan*__ ] 
- [ project 9: bar de progression de defilement ( scroll progre bar)   => sera fait par __*dan*__ ] 


# NB: CELUI QUI TERMINE AVANT LES AUTRE EST DANS L'OBLIGATION D'AIDER LES AUTRES OU SI TON COEQUIPIER TE DEMANDE DE L'AIDE TU ES DANS L'OBLIGATION DE L'AIDER POUR FINIR A TEMPS, 


# LE TRAVAIL SERA FAIT EN CONEVENTION ET LA OU LA PERSONNE SE VOIR CAPABLE DE FAIRE MEIUX LE TRAVAIL MAIS AVEC L'ACCORD DU GROUPE 

# TOUS LES PROJECT JS AURONT CSS COMME STYLE PAR DEFAUT ET LES PROJETS FRAMEWORKS AURONT TAILWIND CSS COMME STYLE PAR DEFAUT 

