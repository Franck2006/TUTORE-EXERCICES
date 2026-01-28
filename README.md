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
