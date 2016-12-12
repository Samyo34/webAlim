var numsPage = [];
numsPage[0] = 1;
numsPage[1] = 1;
numsPage[2] = 1;

var isScrollOver = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 	// some code..
 	console.log('android');
	$(document).on("pagecreate","#pageone",function(){

	   var Sy = $(window).height();


		$('.bd').on("tap",function(){
			$('.bd').hide();
			var index = $(this).attr('class')[$(this).attr('class').length - 1];
			var $newDiv = $('<div id="content" class="fullBD"></div>');
			var img = '<img class="fullImage" src="./img/BD/bd'+index+'/p'+numsPage[index-1]+'.jpg" alt="page 1 de la bd"></img>';
		//console.log($(event.target).attr('class')[$(event.target).attr('class').length - 1]);
		//$newDiv.append('<img src="p1-1.jpg" alt="page 1 de la bd">')
			$('#container').before($newDiv);
			//var $newimg = document.createElement("img");
			//$newimg.src = src="./img/bd'+index+'/p1.jpg";
			//$newimg.alt = "page 1 de la bd"
			//console.log(newimg);
			//console.log(Sy);
			$('.fullBD').append(img);
			$('.fullImage').css('height',Sy+'px');



			$('.fullImage').on("scrollstop",function(event){
				var posX = event.target.offsetLeft;
				console.log( event.pageX-posX+ '/'+($(window).width()/2)+'|'+($('.fullImage').width()/2));
				if((event.pageX-posX) > ($(window).width()/2) ||
					(event.pageX-posX) > ($(this).width()/2))
				{
					numsPage[index-1]++;				
				}
				else
				{
					if(numsPage[index-1]>1)
						numsPage[index-1]--;	
				}
				// TODO : passer à la page suivante
				if(!changePage('.fullImage',numsPage,index))
				{
					numsPage[index-1]--;
				}
			});	

		/*$(window).scroll(function() {
			isScrollOver = false;
			clearTimeout( $.data( this, "scrollCheck" ) );
         $.data( this, "scrollCheck", setTimeout(function() {
         	if($(window).scrollTop() + $(window).height() == $(document).height()) {
			       //console.log("bottom! "+ $(window).scrollTop());
			       numsPage[index-1]++;
			       if(changePage('.fullImage',numsPage,index) == false)
			       {
			       	console.log('bottom');
			       	numsPage[index-1]--;
			       }

			   }
			   
			   if($(window).scrollTop()  ==  0)
			   {
			   	console.log(numsPage[index-1]);
			   	if(numsPage[index-1]>1)
							numsPage[index-1]--;

					changePage('.fullImage',numsPage,index);	
			   }
			   //$(window).scrollTop(3);
        // console.log(isScrollOver);
         }, 250) );*/

		});
	});
}
else
{
	$(document).ready(function()
	{
		var Sy = $(window).height();


		$('.bd').click(function(event){
			$('.bd').hide();
			var index = $(event.target).attr('class')[$(event.target).attr('class').length - 1];
			var $newDiv = $('<div id="content" class="fullBD"></div>');
			var img = '<img class="fullImage" src="./img/BD/bd'+index+'/p'+numsPage[index-1]+'.jpg" alt="page 1 de la bd"></img>';
		//console.log($(event.target).attr('class')[$(event.target).attr('class').length - 1]);
		//$newDiv.append('<img src="p1-1.jpg" alt="page 1 de la bd">')
			$('#container').before($newDiv);
			//var $newimg = document.createElement("img");
			//$newimg.src = src="./img/bd'+index+'/p1.jpg";
			//$newimg.alt = "page 1 de la bd"
			//console.log(newimg);
			//console.log(Sy);
			$('.fullBD').append(img);
			$('.fullImage').css('height',Sy+'px');



			$('.fullImage').click(function(event){
				var posX = event.target.offsetLeft;
				console.log( event.pageX-posX+ '/'+($(window).width()/2)+'|'+($('.fullImage').width()/2));
				if((event.pageX-posX) > ($(window).width()/2) ||
					(event.pageX-posX) > ($(this).width()/2))
				{
					numsPage[index-1]++;				
				}
				else
				{
					if(numsPage[index-1]>1)
						numsPage[index-1]--;	
				}
				// TODO : passer à la page suivante
				if(!changePage('.fullImage',numsPage,index))
				{
					if(numsPage[index-1]>1)
						numsPage[index-1]--;
				}
			});	

/*		$(window).scroll(function() {
			isScrollOver = false;
			clearTimeout( $.data( this, "scrollCheck" ) );
         $.data( this, "scrollCheck", setTimeout(function() {
         	if($(window).scrollTop() + $(window).height() == $(document).height()) {
			       //console.log("bottom! "+ $(window).scrollTop());
			       numsPage[index-1]++;
			       if(changePage('.fullImage',numsPage,index) == false)
			       {
			       	console.log('bottom');
			       	numsPage[index-1]--;
			       }

			   }
			   
			   if($(window).scrollTop()  ==  0)
			   {
			   	console.log(numsPage[index-1]);
			   	if(numsPage[index-1]>1)
							numsPage[index-1]--;

					changePage('.fullImage',numsPage,index);	
			   }
			   //$(window).scrollTop(3);
        // console.log(isScrollOver);
         }, 250) );*/
         //console.log('2'+isScrollOver);
         
  /*       if(isScrollOver)
         {
		   	console.log($(window).scrollTop()+':'+$(window).height()+':'+$(document).height());
			   if($(window).scrollTop() + $(window).height() == $(document).height()) {
			       //console.log("bottom! "+ $(window).scrollTop());
			       numsPage[index-1]++;
			       if(!changePage('.fullImage',numsPage,index))
			       {
			       	console.log('bottom');
			       	numsPage[index-1]--;
			       }

			   }
			   
			   if($(window).scrollTop()  ==  0)
			   {
			   	console.log(numsPage[index-1]);
			   	if(numsPage[index-1]>1)
							numsPage[index-1]--;

					changePage('.fullImage',numsPage,index);	
			   }

         }*/
	//	});




		$(document).keyup(function(e) {   // enter
	  		if (e.keyCode === 27)
	  		{
	  			if($('.bd').is(":visible") === false)
	  			{
	  				console.log('esc');
	  				$('.fullBD').remove();
	  				$('.bd').show();
	  			}
	  		} 
	  	});
	});
});
}



	function changePage(divClass,numsPage,index)
	{
		var src = $(divClass).attr('src');
		var newSrc = src.substr(0,src.length-5)+numsPage[index-1]+src.substr(src.length-4);
		console.log(newSrc);
		/*console.log(src + ' '+newSrc);*/
		$.ajax({
			url:newSrc,
			type:'HEAD',
			error:
			function()
			{
				console.log('error hundled '+ newSrc);
				// TODO : go to next bd or forms
				return false;
			},
			success:
			function()
			{
				console.log('success');
				$('.fullImage').attr('src',newSrc);
				$(window).scrollTop(3);
				return true;
			}
		});
	}