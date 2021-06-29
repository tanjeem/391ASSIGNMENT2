//WEIGHT
function display_result(){
    var kg = 0.45359237
    var results = ""
    if ($('#weight_unit').val() == "kg") {
        $("#result").html( $("#weight_value").val()*kg+'kg')
    } 
    else {
        $("#result").html( $("#weight_value").val()/kg+'lbs')
    }
};


//NUMBER

function calculate() {
    var values = document.getElementById('box1').value.split(/,/g);
    var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = sum / values.length;
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
  }
  
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };



//MAGIC
//var items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7"];

function clearBox(){
    document.getElementById('items').innerHTML = "";
}

function capitalize() {
    var x = document.getElementById("items").innerHTML;
    document.getElementById("items").innerHTML =x.toUpperCase() ;
}

function Reverse() {
    var birds = document.getElementById("items");
    var birdList = birds.getElementsByTagName("li");
    for (var i = birdList.length - 1; i >= 0; i--) {
        birds.appendChild(birdList[i]);
    }
}



var quotes = [
    {
        quote: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
        source: "Patrick McKenzie",
        category: "#programming"
    },
    {
        quote: "What one programmer can do in one month, two programmers can do in two months.",
        source: "Fred Brooks",
        category: "#programming"
    },
    {
        quote: "No one in the brief history of computing has ever written a piece of perfect software. It's unlikely that you'll be the first.",
        source: "Andy Hunt",
        category: "#programming"
    },
    {
        quote: "One of the best programming skills you can have is knowing when to walk away for awhile.",
        source: "Oscar Godson",
        category: "#programming"
    },
    {
        quote: "Without requirements or design, programming is the art of adding bugs to an empty text file.",
        source: "Louis Srygley",
        category: "#programming"
    },
    {
        quote: "Java is to JavaScript as ham is to hamster.",
        source: "Jeremy Keith",
        category: "#programming"
    },
    {
        quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.",
        source: "Linus Torvolds",
        category: "#programming"
    },
    {
        quote: "A good programmer is someone who always looks both ways before crossing a one-way street.",
        source: "Doug Linder",
        category: "#programming"
    },
    {
        quote: "Functions should do one thing. They should do it well. They should do it only.",
        source: "Robert C. Martin",
        category: "#programming"
    },
    {
        quote: "Eighty percent of success is showing up.",
        source: "Woody Allen",
        category: "#success"
    },
    {
        quote: "Self-education is, I firmly believe, the only kind of education there is.",
        source: "Isaac Asimov",
        category: "#learning"
    },
    {
        quote: "Treat your code like poetry and take it to the edge of the bare minimum.",
        source: "Ilya Dorman",
        category: "#programming"
    },
    {
        quote: "It's all talk until the code runs.",
        source: "Ward Cunningham",
        category: "#programming"
    },
    {
        quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
        source: "John Woods",
        category: "#programming"
    },
    {
        quote: "It is better to fail in originality that to succeed in imitation.",
        source: "Herman Melville",
        category: "#success"
    },
    {
        quote: "I find that the harder I work, the more luck I seem to have.",
        source: "Thomas Jefferson",
        category: "#success"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney",
        category: "#success"
    },
    {
        quote: "If you really want to do something, you'll find a way. If you don't, you'll find an excuse.",
        source: "Jim Rohn",
        category: "#success"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin",
        category: "#learning"
    },
    {
        quote: "Being a student is easy. Learning requires actual work.",
        source: "William Crawford",
        category: "#learning"
    },
    {
        quote: "Anything worth doing well is worth doing poorly at first.",
        source: "Ray Congdon",
        category: "#learning"
    }
];

var colors = [
    {
        background: "#ff2e63", //pink
        button: "#ff2e63"
    },
    {
        background: "#00adb5", //teal
        button: "#00adb5"
    },
    {
        background: "#f38181", //salmon
        button: "#f38181"
    },
    {
        background: "#6639a6", //purple
        button: "#6639a6"
    },
 
];
let timer;

function getRandomQuote() {
    let randomQuote = Math.floor(Math.random() * quotes.length);

    return quotes[randomQuote];
}

function changeBg(color){
    //document.body.style.background = color;
    
    document.getElementById("quote-box").style.background=color;
}

function printQuote() {

    
    let currentQuote = getRandomQuote();

    let html = "<p class='quote'> " + currentQuote.quote + "</p>";
    html += "<p class='source'> " + currentQuote.source;
    if ("citation" in currentQuote) {
        html += "<span class='citation'> " + currentQuote.citation + "</span>";
    }
    if ("date" in currentQuote) {
        html += "<span class='year'> " + currentQuote.date + "</span>";
    }
    html += "<span class='category'> " + currentQuote.category + "</span>";
    document.getElementById("quote-box").innerHTML = html;
  
    }


printQuote();

document.getElementById('loadQuote1').addEventListener("click" ,printQuote, false);
document.getElementById('loadQuote2').addEventListener("click", printQuote, false);
document.getElementById('loadQuote3').addEventListener("click", printQuote, false);
document.getElementById('loadQuote4').addEventListener("click", printQuote, false);