// Create PowerpuffGirl objects
function PowerpuffGirl (name, color, superpower) {
    this.name = name;
    this.color = color;
    this.superpower = superpower;
    this.isLeader = false;

    this.displayInfo = function () {
        console.log(` PowerpuffGirl Information:
         Name: ${this.name}
         Color: ${this.color}
         Superpower: ${this.superpower}
         ${this.isLeader ? 'Leader: Yes' : 'Leader: No'}
        `);
    }

    this.becomeLeader = function () {
        this.isLeader = true;
        console.log(`${this.name} has become the leader of the PowerpuffGirls.`);
    }
}

const blossom = new PowerpuffGirl('Blossom', 'Pink', 'Ice Breath');
const buttercup = new PowerpuffGirl('Buttercup', 'Green', 'Super Strenght');
const bubbles = new PowerpuffGirl('Bubbles', 'Blue', 'Flight');


blossom.becomeLeader();

blossom.displayInfo();
buttercup.displayInfo();
bubbles.displayInfo();

/**
 *  PowerpuffGirl Information:
         Name: Blossom
         Color: Pink
         Superpower: Ice Breath
         Leader: Yes
        
 PowerpuffGirl Information:
         Name: Buttercup
         Color: Green
         Superpower: Super Strenght
         Leader: No
        
 PowerpuffGirl Information:
         Name: Bubbles
         Color: Blue
         Superpower: Flight
         Leader: No
 */