// AOS

AOS.init({
  duration:1000
});

// PARTICLES

particlesJS("particles-js", {

  particles: {

    number:{
      value:120
    },

    color:{
      value:["#00f7ff","#b388ff","#ffffff"]
    },

    shape:{
      type:"circle"
    },

    opacity:{
      value:0.6,
      random:true
    },

    size:{
      value:4,
      random:true
    },

    move:{
      enable:true,
      speed:1.5,
      random:true
    },

    line_linked:{
      enable:true,
      distance:150,
      color:"#00f7ff",
      opacity:0.4,
      width:1
    }

  },

  interactivity:{

    events:{

      onhover:{
        enable:true,
        mode:"grab"
      }

    }

  }

});

// TYPING EFFECT

const words = [

  "ECE Engineer",
  "VLSI Enthusiast",
  "RF Systems Researcher",
  "Embedded Systems Developer",
  "ISAC Research Intern"

];

let i = 0;

function typingEffect(){

  let word = words[i].split("");

  let loopTyping = function(){

    if(word.length > 0){

      document.getElementById("typing").innerHTML += word.shift();

    }

    else{

      deletingEffect();
      return false;

    }

    setTimeout(loopTyping,100);

  };

  loopTyping();

}

function deletingEffect(){

  let word = words[i].split("");

  let loopDeleting = function(){

    if(word.length > 0){

      word.pop();

      document.getElementById("typing").innerHTML = word.join("");

    }

    else{

      if(words.length > (i + 1)){

        i++;

      }

      else{

        i = 0;

      }

      typingEffect();
      return false;

    }

    setTimeout(loopDeleting,50);

  };

  loopDeleting();

}

typingEffect();
