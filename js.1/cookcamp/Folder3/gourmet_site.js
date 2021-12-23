  $('.carousel').slick({
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });


$('.eats').modaal();

 $('.share').on('click', (event)=>{
     alert( $(event.currentTarget).attr('data')+'のレシピをシェアしました♪');
     $('.eats').modaal('close');
    });
    
    
   
    