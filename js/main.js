$(document).ready(function()    {
 
const start = function()  {

  const playEliz = document.getElementById("leah-eliz__index");
  const playDelerue = document.getElementById("leah-delerue__index");
  const playBugsy = document.getElementById("leah-bugsy__index");
  const playRach = document.getElementById("leah-rach__index");
  const playCava = document.getElementById("leah-cava__index");
  const playDays = document.getElementById("leah-days__index");
  const playFatman = document.getElementById("leah-fatman__index");
  const playMice = document.getElementById("leah-mice__index");
  const playPenderecki = document.getElementById("leah-penderecki__index");

    // const playOnegin = document.getElementById("leah-onegin__index");
  // const playButton = document.getElementById("lr-play-btn__index");
  // const pauseButton = document.getElementById("lr-pause-btn__index");
  // const ppButton = document.getElementById("lr-pp-btn__index");

// array that holds Leah Rose titles
const synopsisLeahRose = [`New York City.`,  
`Summer 1929.`, 
`She has it all. Youth. Beauty. A loving husband. A beautiful home. 
Enough money for a lifetime.`, 
`And during the last summer of the 1920s, popular socialite Leah Rose indulges
in all the delights the good life has to offer with husband Alfred and their 
circle of friends.`, 
`But what Leah and no one else around her knows is that these glorious golden days
are numbered. Just a few miles south of her
exclusive Upper East Side address, a storm is brewing on Wall Street. 
Born of years of reckless stock speculation,
the storm will strike at the very heart of the global
economy. And when it does in the final days of October, it leaves Leah's world 
of privilege and security utterly destroyed.`, 
`In the desperate months that follow, while Alfred leaves town to try his hand at 
bootlegging in a bid to restore that cherished world,
Leah grudgingly agrees to stay with a trusted but strapped actor friend from his 
youth in a squalid house he shares with other starving artists, intellectuals 
and people on the fringes of society.`, 
`Living among these Greenwich Village bohemians for whom 
she has little affection, Leah will face hard realities
her pampered existence has left her ill-equipped to meet - an unplanned pregnancy; a landlord who 
wants her out unless she can pay rent; having to find a job with no experience; and with each 
passing day he's gone, the growing fear that Alfred isn't coming back. All against the spectre of 
dangerous new political ideologies on the rise.`, 
`Yet even with all she's lost, Leah will come to gain something far more valuable.
Through her difficult journey and the people she meets along the way, Leah 
will discover who she really is. Learning a trade and sobering up, she reconnects with her roots and 
awakens to the plight of the powerless, and emerges with a sense 
of purpose far greater than anything she's ever known, and the strength and wisdom to 
face whatever the dark days ahead may bring.`, 
`When the world around her lost its way, she made her own.`,
`Leah Rose`, 
`"This is a masterful work that deserves to be recognized and produced."`,
`–– The Austin Film Festival`];



// const soundPlay = function(e) {
//       openCredits.play();
//     //   synopsisLeahRose[0].start();
//       picturePlay();
//       console.log("roll sound!")
//   }

//   $("#lr-play-btn__index").on("click", function() {
//     soundPlay(openCredits);
//    });
 
//   const soundPause = function(e) {
//       openCredits.pause(); 
//     //   picturePause();
//       console.log("pause sound!")
//   }

  // $("#lr-pause-btn__index").on("click", function() {
  //   soundPause(openCredits);
  //  });

/* LEAH ROSE TRAILER */

  const soundTrailerLeahRose = function(e)   {
      if (playFatman.paused)  {
          playFatman.play(); 
          trailerPlay();
          $(".lr-trailer-symbol__index").html("&#8545;");
      }
      else {
          playFatman.pause();
          $(".lr-trailer-symbol__index").html("&#x25ba;");
  }
}

$("#lr-trailer-btn__index").on("click", function() {
    soundTrailerLeahRose(playFatman);
   });

const trailerPlay = function(e)   {
     
      $("#lr-syn1__index").html(synopsisLeahRose[0]).delay(1000).fadeIn(500).delay(6000).fadeOut(500);
      $("#lr-syn2__index").html(synopsisLeahRose[1]).delay(4500).fadeIn(1000).delay(2000).fadeOut(500);
      
      $("#lr-syn3__index").html(synopsisLeahRose[2]).delay(11000).fadeIn(500).delay(50000).fadeOut(500);
      $("#lr-syn4__index").html(synopsisLeahRose[3]).delay(17000).fadeIn(500).delay(44000).fadeOut(500);
      $("#lr-syn5__index").html(synopsisLeahRose[4]).delay(26000).fadeIn(500).delay(35000).fadeOut(500);
      $("#lr-syn6__index").html(synopsisLeahRose[5]).delay(32000).fadeIn(500).delay(29000).fadeOut(500);
      $("#lr-syn7__index").html(synopsisLeahRose[6]).delay(38000).fadeIn(500).delay(23000).fadeOut(500);
      $("#lr-syn8__index").html(synopsisLeahRose[7]).delay(44000).fadeIn(500).delay(17000).fadeOut(500);
      
      $("#lr-tagline__index").html(synopsisLeahRose[8]).delay(65000).fadeIn(500).delay(11000).fadeOut(500);
      $("#lr-title__index").html(synopsisLeahRose[9]).delay(70000).fadeIn(1000).delay(5500).fadeOut(500);
      
      $("#lr-aff-img__index").delay(80000).fadeIn(1000).delay(11500).fadeOut(500);
      $("#lr-quote__index").html(synopsisLeahRose[10]).delay(83000).fadeIn(1000).delay(8500).fadeOut(500);
      $("#lr-aff__index").html(synopsisLeahRose[11]).delay(86000).fadeIn(1000).delay(5500).fadeOut(500);
          

      console.log("play trailer!")
      // return;    
    //   stop();                                     // return to stop function?
  }

//   const picturePause = function(e)   {
//       synopsisLeahRose.pause();
//   }


//   stop();

/* LEAH ROSE CREDITS */

const creditsLeahRose = 
[`Sony Pictures Classics`, 
`Presents`, 
`A`, 
`Colin Larkin`, 
`Picture`,
`JENNIFER LAWRENCE`,
`MICHAEL FASSBENDER`, 
`LEAH ROSE`,
`Music Composed & Conducted by`,
`ENNIO MORRICONE`,
`Director of Photography`,
`ROGER DEAKINS`,
`Produced by`,
`WARREN BEATTY & COLIN LARKIN`,
`Written and Directed by`,
`COLIN LARKIN`];

// How to get two lines to appear one above the other at the same time //


const soundCreditsLeahRose = function(e)   {
  if (playDays.paused)  {
      playDays.play(); 
      creditsPlay();
      $(".lr-credits-symbol__index").html("&#8545;");
  }
  else {
      playDays.pause();
      $(".lr-credits-symbol__index").html("&#x25ba;");
}
}

$("#lr-credits-btn__index").on("click", function() {
soundCreditsLeahRose(playDays);
});

const creditsPlay = function(e)   {
 
  $("#lr-credit1__index").html(creditsLeahRose[0]).delay(1000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit2__index").html(creditsLeahRose[1]).delay(1000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit3__index").html(creditsLeahRose[2]).delay(7000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit4__index").html(creditsLeahRose[3]).delay(7000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit5__index").html(creditsLeahRose[4]).delay(7000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit6__index").html(creditsLeahRose[5]).delay(13000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit7__index").html(creditsLeahRose[6]).delay(19000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit8__index").html(creditsLeahRose[7]).delay(25000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit9__index").html(creditsLeahRose[8]).delay(31000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit10__index").html(creditsLeahRose[9]).delay(31000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit11__index").html(creditsLeahRose[10]).delay(37000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit12__index").html(creditsLeahRose[11]).delay(37000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit13__index").html(creditsLeahRose[12]).delay(43000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit14__index").html(creditsLeahRose[13]).delay(43000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit15__index").html(creditsLeahRose[14]).delay(49000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-credit16__index").html(creditsLeahRose[15]).delay(49000).fadeIn(500).delay(3000).fadeOut(500);
  





  console.log("play credits!")
  // return;    
//   stop();                                     // return to stop function?
}



/* LEAH ROSE MOVIE */

const movieLeahRose = 
[`Sony Pictures Classics Presents`, 
`A Working Title Production`,
`JENNIFER LAWRENCE`,
`MICHAEL FASSBENDER`, 
`LEAH ROSE`,
`Music by`,
`GEORGES DELERUE`,
`Director of Photography`,
`ROGER DEAKINS`,
`Produced by`,
`WARREN BEATTY & COLIN LARKIN`,
`Written and Directed by`,
`COLIN LARKIN`];

const soundMovieLeahRose = function(e)   {
  if (playEliz.paused)  {
      playEliz.play(); 
      moviePlay();
      $(".lr-movie-symbol__index").html("&#10073; &#10073;");
  }
  else {
      playEliz.pause();
      $(".lr-movie-symbol__index").html("&#x25ba;");
} 
}

$("#lr-movie-btn__index").on("click", function() {
  soundMovieLeahRose(playEliz);
 });

 const moviePlay = function(e)   {
 
  $("#lr-movie1__index").html(movieLeahRose[0]).delay(1000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie2__index").html(movieLeahRose[1]).delay(7000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie3__index").html(movieLeahRose[2]).delay(13000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie4__index").html(movieLeahRose[3]).delay(19000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie5__index").html(movieLeahRose[4]).delay(25000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie6__index").html(movieLeahRose[5]).delay(31000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie7__index").html(movieLeahRose[6]).delay(31000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie8__index").html(movieLeahRose[7]).delay(37000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie9__index").html(movieLeahRose[8]).delay(37000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie10__index").html(movieLeahRose[9]).delay(43000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie11__index").html(movieLeahRose[10]).delay(43000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie12__index").html(movieLeahRose[11]).delay(49000).fadeIn(500).delay(3000).fadeOut(500);
  $("#lr-movie13__index").html(movieLeahRose[12]).delay(49000).fadeIn(500).delay(3000).fadeOut(500);


  console.log("play movie!")
  // return;    
//   stop();                                     // return to stop function?
}


};







/* MAIN PAGE */  

// from bottom index, brings us to Leah Rose trailer and plays trailer theme //
// const movieLeahRose = $("#leah-eliz")[0];
// $("#lr-play-symbol__index").on("click", function()   {
//   movieLeahRose.play();
// });


/* LEAH ROSE PAGE */



window.onload = start;

});



 