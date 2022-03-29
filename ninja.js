class Ninja{
    constructor(name){
        this.name = name;
        this.speed = 10;
        this.force = 40;
        this.health = 80;
    }

    sayName(){
        console.log(this.name);
    }

    get getName(){
        return this.name;
    }

    
    showNinja(){
        console.log(`Name: ${this.name}\nForce: ${this.force}\nSpeed: ${this.speed}\nHealth: ${this.health}`);
    }
    
    drinkSake(){
        this.health+=80;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name)
        this.speed=70;
        this.force=120;
        this.health=150;
        this.knowledge = 100;
    }


    speakWisdom(){
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}


const superSensei = new Sensei("Master Splinter");

superSensei.speakWisdom();

superSensei.showNinja();