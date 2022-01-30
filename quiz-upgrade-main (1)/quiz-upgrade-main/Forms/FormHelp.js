class FormHelp {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Go Back');
        this.instructions = createElement('h4');
        this.instructions1 = createElement('h4');
        this.instructions2 = createElement('h4');
        this.title = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        this.title.html("How to Play");
        this.title.position(663.5, 10);
        
        // this.instructions.html("1. Use the arrow keys to move."); 
        this.instructions.position(663.5,180);

        this.instructions1.html("1. Answer all the questions correctly to win!!");
        this.instructions1.position(570,200);

        // this.instructions2.html("3. And reach to the end to win.")
        this.instructions2.position(693.5,220);

        this.button.position(700, 400);
   
        this.button.mousePressed(()=>{
            //Hiding everything once button is pressed
            this.button.hide();
            this.title.hide();
            this.instructions.hide();
            this.instructions1.hide();
            this.instructions2.hide();

            //Going back to MainForm
            formStart = new FormStart();
            formStart.display();
        });
    }
}