class FormQuiz4 {
    constructor() {
        //Creating all the elements of the form
        this.button = createButton('Submit');
        this.button1 = createButton('Home Text Marking Language');
        this.button2 = createButton('Home Text Marked Language');
        this.button3 = createButton('Hyper Text Markup Language');
        this.button4 = createButton('Hyper Text Markup Leveler');
        this.question = createElement('h2');
    }
   
    display(){
        //Setting up all the elements of the form
        var selected = 0;
        
        this.question.html("What does HTML stand for");
        this.question.position(10,10);

        this.button1.position(10, 170);
        this.button2.position(210, 170);
        this.button3.position(10, 230);
        this.button4.position(210, 230);
        this.button.position(345, 375);

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

                if(selected == 3) {
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