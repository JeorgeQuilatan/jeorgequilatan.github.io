jQuery(document).ready(function(){
  
    jQuery('.aboutsecond-progress-bar').each(function() {
      jQuery(this).find('.aboutsecond-progress-bar-two-content').animate({
        width:jQuery(this).attr('data-percentage')
      },2000);
      
      jQuery(this).find('.aboutsecond-progress-bar-one-wrapper-numbermark').animate(
        {left:jQuery(this).attr('data-percentage')},
        {
         duration: 2000,
         step: function(now, fx) {
           var data = Math.round(now);
           jQuery(this).find('.aboutsecond-progress-bar-one-wrapper-numbermark-percent').html(data + '%');
         }
      });  
    });
  });