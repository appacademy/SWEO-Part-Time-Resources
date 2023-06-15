class Pokemon {
    constructor(name, level, type, trainer) {
        this.name = name;
        this.level = level;
        this.type = type;
        this.trainer = trainer;
    };

    levelUp() {
        this.level += 1;
        console.log(`${this.name} has leveled up to ${this.level}`);
    };

    run() {
        console.log(`${this.name} has fled from battle`);
    };
};

class Pikachu extends Pokemon {
    constructor(level, trainer, moveSets) {
        super("Pikachu", level, "Electric", trainer) // call the parent's constructor
        this.atk = 50;
        this.def = 25;
        this.spd = 100;
        this.moveSets = moveSets;
    };

    useThunderbolt() {
        console.log(`${this.name} has used Thunderbolt`);
        console.log(`${this.atk * 1.2} damage has been dealt`);
    };
};
