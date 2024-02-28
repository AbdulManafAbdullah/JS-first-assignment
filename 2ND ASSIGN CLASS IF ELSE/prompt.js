
        // Prompt the user for their age
        var age = prompt("plz enter your name")
        
        // Prompt the user for whether they are a student or not
        var studentCheck = prompt("Are you a student? (yes/no)");

        // Initializing Variable For Ticket Price:
        var ticketPrice;

        // Calculating Ticket Price Based On Provided Data:
        if (age < 12) {
            ticketPrice = 5;
        } else if (age >= 12 && age <= 18) {
            if (studentCheck === "yes") {
                ticketPrice = 8;
            } else {
                ticketPrice = 10;
            }
        } else {
            ticketPrice = 12;
        }
        

        // Displaying the ticket price using an alert box
        alert("The ticket price is $" + ticketPrice);