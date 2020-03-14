
// Getting year automatically

  var d = new Date();
  var n = d.getFullYear();
  var year= document.getElementById("get-year");
  year.innerHTML=n;

  console.log(n);

  // activating scroll spy

  $('body').scrollspy ({target:"#main-nav"});

  $('#main-nav a').on('click',function(e){

  	if(this.hash !==''){
  		e.preventDefault();

  		const hash=this.hash;

  		$('html,body').animate({
  			scrollTop: $(hash).offset().top
  		},800,function(){
  			window.location.hash= hash;
  		});
  	}
  });





