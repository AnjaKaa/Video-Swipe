
$(document).ready(function(){
	var duration = 500;


	$('.control-project-list-right').on('click', function(e){
     	if ($(window).width() >768){
     		
	     	 if ($(document).find('.wrap-project-list').hasClass('wrap-project-list-left')){    		 
	     	 	 $(document).find('.bg-video').animate({'margin-left':0,'left':0,'margin-right':0},duration);
	     	 	 $(document).find('.wrap-project-list').removeClass('wrap-project-list-left').removeClass('wrap-project-list-right').animate({'left':'-20%'},duration); 
	     	 	 $('.project-list-btn').hide(0);
	     	 } else if ($(document).find('.wrap-project-list').hasClass('wrap-project-list-right')) {
	     	 	 $(document).find('.bg-video').animate({'margin-left':0,'left':0,'margin-right':0},duration);
	     	 	 $(document).find('.wrap-project-list').removeClass('wrap-project-list-left').removeClass('wrap-project-list-right').animate({'right':'-20%'},duration); 
	     	 	 $('.project-list-btn').hide(0);

	     	 } else {		 
	     	 	 $(document).find('.bg-video').animate({'margin-left':'20%','left':0,'margin-right':0},duration);	
	     	 	 $(document).find('.wrap-project-list').addClass('wrap-project-list-left').css({'left':'-20%'}).animate({'left':0},duration);
	     	 	 $('.project-list-btn').show(0);
	     	 }
     	}

     });

      $('.control-project-list-left').on('click', function(e){
      	if ($(window).width() > 768) {	     	
	     	 if ($(document).find('.wrap-project-list').hasClass('wrap-project-list-left')){    		 
	     	 	 $(document).find('.bg-video').animate({'margin-left':0,'left':0,'margin-right':0},duration);
	     	 	 $(document).find('.wrap-project-list').removeClass('wrap-project-list-left').removeClass('wrap-project-list-right').animate({'left':'-20%'},duration); 
	     	 	 $('.project-list-btn').hide(0);
	     	 } else if ($(document).find('.wrap-project-list').hasClass('wrap-project-list-right')) {
	     	 	 $(document).find('.bg-video').animate({'margin-left':0,'left':0,'margin-right':0},duration);
	     	 	 $(document).find('.wrap-project-list').removeClass('wrap-project-list-left').removeClass('wrap-project-list-right').animate({'right':'-20%'},duration); 
	     	 	 $('.project-list-btn').hide(0);

	     	 }
	     	 else {

	     	 	 $(document).find('.bg-video').animate({'margin-right':'20%','left':'-20%'},duration);
	     		 $(document).find('.wrap-project-list').addClass('wrap-project-list-right').css({'right':0,'left':'auto'}).css({'right':'-20%'}).animate({'right':'0'},duration);	
	     	 	 $('.project-list-btn').show(0);
	     	 }
     	}
    });
    
    $('.company-btn').on('click', function(e){
      	e.preventDefault();
      	$('.control-project-list').css({'display':'none'});      	
      	$('.title').css({'display':'none'});
      	$('.company-container').animate({'height':'100%'},duration);
      });

   	 $('.company-container').on('click', function(e){
      	$('.control-project-list').css({'display':'block'});      	
      	$('.title').css({'display':'block'});
       	$(this).animate({'height':'0'},duration);
    });



$(".wrap-company").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {  
         var widthProjectList = '35%';

         if ($(window).width() <= 768 && $(window).width() >320){		    

	     	if ($(window).width() <= 375) {
	     		widthProjectList= '80%';
	     	}


	     	 if ($(document).find('.wrap-project-list').hasClass('wrap-project-list-left')){
	     	 	$(document).find('.bg-video').animate({'margin-right':0,'margin-left':0,'left':0},duration);
	     	 	$(document).find('.wrap-project-list').removeClass('wrap-project-list-right').removeClass('wrap-project-list-left').animate({'left':'-'+widthProjectList},duration);        	 	 
	     	 	 
	     	 	$('.project-list-btn').hide(0);

	     	 }
	     	 else {

	     	 	 $(document).find('.bg-video').animate({'margin-right':widthProjectList,'left':'-'+widthProjectList},duration);
	     		 $(document).find('.wrap-project-list').addClass('wrap-project-list-right').css({'right':'-'+widthProjectList,'width':widthProjectList,'left':'auto'}).animate({'right':'0'},duration);	
	     	 	 $('.project-list-btn').show(0);
	     	 }
     		}
        },
        swipeRight:function(event, direction, distance, duration, fingerCount) {
        	var widthProjectList= '35%';
        	if ($(window).width() <= 768 && $(window).width() >320){		      

		     	 if ($(window).width() <= 375) {
		     		widthProjectList= '80%';
		     	}	

		     	 if ($(document).find('.wrap-project-list').hasClass('wrap-project-list-right')){    		 
		     	 	 $(document).find('.bg-video').animate({'margin-left':0,'left':0,'margin-right':0},duration);
		     	 	 $(document).find('.wrap-project-list').removeClass('wrap-project-list-left').removeClass('wrap-project-list-right').animate({'right':'-'+widthProjectList},duration); 
		     	 	 $('.project-list-btn').hide(0);
		     	 }
		     	 else {		 
		     	 	console.log('!');
		     	 	 $(document).find('.bg-video').animate({'margin-left':widthProjectList,'left':0,'margin-right':0},duration);	
		     	 	 $(document).find('.wrap-project-list').addClass('wrap-project-list-left').css({'left':'-'+widthProjectList,'width':widthProjectList}).animate({'left':'0'},duration);
		     	 	 $('.project-list-btn').show(0);
		     	 }
	     	}
        },

        threshold: 0
      });
});