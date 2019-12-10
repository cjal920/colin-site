$(document).ready(function()    {

  $("#leah-rose-credits").click(function(){
    $("#leah-rose-src1").fadeIn(1000).delay(20000).fadeOut(2000);
    $("#leah-rose-src2").delay(2000).fadeIn(1000).delay(1000).fadeOut(1000);
    $("#leah-rose-src3").delay(6000).fadeIn(1000).delay(1000).fadeOut(1000);
    $("#leah-rose-src4").delay(10000).fadeIn(1000).delay(2000).fadeOut(2000);
    $("#leah-rose-src5").delay(18000).fadeIn(1000).delay(2000).fadeOut(2000);
    playLeahRose.play();
  });

  $("#leah-rose-credits-1").click(function(){
    $("#leah-rose-src1").fadeIn(1000).delay(20000).fadeOut(2000);
    $("#leah-rose-src2").delay(2000).fadeIn(1000).delay(1000).fadeOut(1000);
    $("#leah-rose-src3").delay(6000).fadeIn(1000).delay(1000).fadeOut(1000);
    $("#leah-rose-src4").delay(10000).fadeIn(1000).delay(2000).fadeOut(2000);
    $("#leah-rose-src5").delay(18000).fadeIn(1000).delay(2000).fadeOut(2000);
    playLeahRoseOne.play();
  });

  $("#leah-rose-credits-2").click(function(){
    $("#leah-rose-src1").fadeIn(1000).delay(20000).fadeOut(2000);
    $("#leah-rose-src2").delay(2000).fadeIn(1000).delay(1000).fadeOut(1000);
    $("#leah-rose-src3").delay(6000).fadeIn(1000).delay(1000).fadeOut(1000);
    $("#leah-rose-src4").delay(10000).fadeIn(1000).delay(2000).fadeOut(2000);
    $("#leah-rose-src5").delay(18000).fadeIn(1000).delay(2000).fadeOut(2000);
    playLeahRoseTwo.play();
  });


/* LEAH ROSE PAGE */  

//leah-rose page trailer and credits variables and functions


//plays selected audio
const playLeahRose = $("#leah-audio")[0];
const playLeahRoseOne = $("#leah-audio-1")[0];
const playLeahRoseTwo = $("#leah-audio-2")[0];

//opens leah-rose-trailer page
$("#play-leah-rose").on("click", function() {
  playLeahRose.play();
});


/* LEAH ROSE TRAILER PAGE */

// array that holds Leah Rose trailer synopsis
const trailerLeahRose = [`NEW YORK CITY`, `SUMMER 1929`, `She has it all. Youth. Beauty. A great man. A beautiful home. 
Enough money for a lifetime.`, `And during the last summer of the 1920s, popular socialite Leah Rose indulges
in all the delights the good life has to offer with husband Alfred and their circle of fabulous friends.
`, `But what Leah and no one else around her knows is that these glorious golden days
are numbered. Down on Wall Street, just a few miles south of her
exclusive Upper East Side address, a storm is brewing.
A storm born of years of reckless stock speculation that will strike at the very heart of the global
economy in the final days of October. And when it strikes, it leaves Leah's world 
of privilege and security utterly destroyed.
`, `In the desperate months that follow, while Alfred leaves town to try his hand at bootlegging in a bid to restore some measure of that cherished world,
Leah grudgingly agrees to stay with a trusted but strapped actor friend from 
Alfred's youth in a squalid house he shares with other starving artists, intellectuals 
and people on the fringes of society.`, `Living among these Greenwich Village bohemians for whom she has little affection, 
Leah will face hard realities
her pampered existence has left her ill-equipped to meet - an unplanned pregnancy; a landlord who 
wants her out unless she can pay rent; having to find a job with no experience; and with each 
passing day he's gone, the growing fear that Alfred isn't coming back. All against the spectre of 
dangerous new political ideologies on the rise.`, `   Yet even with all she's lost, Leah will come to gain something far more valuable.
Through her difficult journey and the people she meets along the way, Leah 
will discover who she really is. Awakening to the plight of the powerless, 
reconnecting with her roots, learning a trade and sobering up, she will emerge with a sense 
of purpose far greater than anything she's ever known, with the strength and wisdom to 
face whatever the dark days ahead may bring.`,
`When the world around her lost its way, she made her own.`,
`Leah Rose`,
`"This is a masterful work that deserves to be recognized and produced."`,
`–– The Austin Film Festival`];

//fades in after 1 second//
//fades out after 5 seconds//
  $("#lr-syn1").html(trailerLeahRose[0]).delay(1000).fadeIn(500).delay(6000).fadeOut(500);
  $("#lr-syn2").html(trailerLeahRose[1]).delay(4500).fadeIn(1000).delay(2000).fadeOut(500);
  // $("#outdoor-party").delay(8000).fadeIn(500).delay(5000).fadeOut(17500);
  $("#lr-syn3").html(trailerLeahRose[2]).delay(11000).fadeIn(500).delay(45000).fadeOut(500);
  $("#lr-syn4").html(trailerLeahRose[3]).delay(15000).fadeIn(500).delay(41000).fadeOut(500);
  $("#lr-syn5").html(trailerLeahRose[4]).delay(20000).fadeIn(500).delay(36000).fadeOut(500);
  $("#lr-syn6").html(trailerLeahRose[5]).delay(29000).fadeIn(500).delay(27000).fadeOut(500);
  $("#lr-syn7").html(trailerLeahRose[6]).delay(37000).fadeIn(500).delay(19000).fadeOut(500);
  $("#lr-syn8").html(trailerLeahRose[7]).delay(45000).fadeIn(500).delay(11000).fadeOut(500);
  $("#leah-rose-tag").html(trailerLeahRose[8]).delay(62000).fadeIn(500).delay(7000).fadeOut(1000);
  $(".leah-rose-title-two").html(trailerLeahRose[9]).delay(65000).fadeIn(1000).delay(3500).fadeOut(1000);
  $("#lr-aff-img").delay(74000).fadeIn(1000).delay(7000).fadeOut(1000);
  $("#lr-quote").html(trailerLeahRose[10]).delay(77000).fadeIn(1000).delay(4000).fadeOut(1000);
  $("#lr-aff").html(trailerLeahRose[11]).delay(79000).fadeIn(1000).delay(2000).fadeOut(1000);
});

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});




 