class characters {
    constructor(name,health,attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    
    target(Target) {
        console.log(`${this.name} attacks ${this.name} with ${this.attact}`)
    }

}

class wizards extends characters {
    constructor(name,health,attack,spell) {
        super(name,health,attack);
        this.spell = spell;
    }
    target(Target) {
        console.log(`${this.name} cast ${this.spell} to ${Target.name}}`)    
    }
}

class warriors extends characters {
    constructor(name,health,attack,weapons) {
        super(name,health,attack);
        this.weapons = weapons;
    }
    target(Target) {
        console.log(`${this.name} attacks ${Target.name} with ${this.weapons}`)
    }
}

let Wizard = new wizards("King","100%","andar","Sword")
let Warrior = new warriors("queen","90%","Hands","Fireball")

Wizard.target(Warrior)
Warrior.target(Wizard)



//In this example we are using polymorphism to give the different act to each hero. In short we are doing different things in the same object/Method using polymorphism