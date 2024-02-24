const options = [
    "It is certain",
  "Without a doubt",
  "You may rely on it",
  "Yes definitely",
  "It is decidedly so",
  "As I see it, yes",
  "Most likely",
  "Yes",
  "Outlook good",
  "Signs point to yes",
  "Reply hazy try again",
  "Better not tell you now",
  "Ask again later",
  "Cannot predict now",
  "Concentrate and ask again",
  "Do not count on it",
  "Outlook not so good",
  "My sources say no",
  "Very doubtful",
  "My reply is no"
  ];
  const magicBall = document.getElementById("mb_container");
  const response = document.getElementById("response");
  
  function myFunction() {
    const index = Math.floor(Math.random() * 20);
    const message = options[index];
    magicBall.className = "magicBall_container animate";
    setTimeout(() => {
      response.textContent = message;
      response.style.fontSize = "1.1rem";
      magicBall.className = "magicBall_container";
      setTimeout(timeup, 4000);
    }, 2500);
  
    function timeup() {
      document.getElementById("response").innerHTML = "Ask Again";
      document.getElementById("clear").value = "";
      document.getElementById("response").style.fontSize = "25px";
      document.getElementById("response").style.fontWeight = "600";
    }
  }