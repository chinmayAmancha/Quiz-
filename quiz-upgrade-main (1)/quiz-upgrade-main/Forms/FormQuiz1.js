class FormQuiz1 {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Submit');
        this.button1 = createButton('new');
        this.button2 = createButton('old');
        this.button3 = createButton('src');
        this.button4 = createButton('var');
        this.question = createElement('h2');
        this.question1 = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        var selected = 0;
        
        this.question.html("Which keyword is used to create");
        this.question.position(603.5,10);

        this.question1.html("new object");
        this.question1.position(603.5,30);

        this.button1.position(603.5, 170);
        this.button2.position(733.5, 170);
        this.button3.position(603.5, 230);
        this.button4.position(733.5, 230);
        this.button.position(653.5, 375);

        this.button1.mousePressed(()=>{
            selected = 1;
            this.button1.style('background-color', rgb(76, 228, 76));
            this.button2.style('background-color', "white");
            this.button3.style('background-color', "white");
            this.button4.style('background-color', "white");
        });

        this.button2.mousePressed(()=>{
            selected = 2;
            this.button2.style('background-color', rgb(76, 228, 76));
            this.button1.style('background-color', "white");
            this.button3.style('background-color', "white");
            this.button4.style('background-color', "white");
        });

        this.button3.mousePressed(()=>{
            selected = 3;
            this.button3.style('background-color', rgb(76, 228, 76));
            this.button1.style('background-color', "white");
            this.button2.style('background-color', "white");
            this.button4.style('background-color', "white");
        });

        this.button4.mousePressed(()=>{
            selected = 4;
            this.button4.style('background-color', rgb(76, 228, 76));
            this.button1.style('background-color', "white");
            this.button2.style('background-color', "white");
            this.button3.style('background-color', "white");
        });

        this.button.mousePressed(()=>{
            if(selected > 0) {
                this.button.hide();
                this.button1.hide();
                this.button2.hide();
                this.button3.hide();
                this.button4.hide();
                this.question.hide();
                this.question1.hide();

                if(selected == 1) {
                    correctAnswers = correctAnswers + 10;
                    var formCorrect = new FormCorrect();
                    formCorrect.display();
                }

                else{
                    var formWrong = new FormWrong();
                    formWrong.display();
                }
            }
        });
    }
}