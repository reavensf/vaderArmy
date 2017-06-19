$( document ).ready(function() {
    // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('#vaderForm li').each(function(){
            $(this).addClass('hide-label');
        });  
    
        $('#vaderForm li').find('input').on('keyup blur focus', function(e){
     
            var $this = $(this),
                $parent = $this.parent();
        

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('hide-label').removeClass('onFocus'); 
                } else {
                    $parent.removeClass('hide-label').addClass('onFocus');   
                }                
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('unhighlighted');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('unhighlighted');
                }
            }
        });
    }


    // Learn More Dropdown
    $('.learnMore').on('click', function(e){
        e.preventDefault();
        $('#vaderFacts, .learnMore').toggleClass('open');
    });

    $('#vaderForm').on('submit', function(e){
        e.preventDefault();
        var breath = new Audio('media/darth_vader_breath.mp3');
        var lightsaber = new Audio('media/lightsaber_turn_on.mp3');

        // Check if both fields are empty
        if($('#email').val() == '' && $('#zip').val() == ''){
            $('#email, #zip').addClass('error');
            breath.play();
        }        
        // Check email field is empty 
        if($('#email').val() == ''){
            $('#email').addClass('error');
            breath.play();
        } else {
            $('#email').removeClass('error');
        }
        // Check if Zip field is empty
        if ($('#zip').val() == ''){
            $('#zip').addClass('error');
            breath.play();
        } else {
            $('#zip').removeClass('error');
        }
        // Check for errors
        if($('.error')){
            $('.emptyErrorMsg').fadeIn(500);
        } else {
            $('.emptyErrorMsg').fadeOut(500);
            lightsaber.play();
            $(this).fadeOut(500);
            $('.emptyErrorMsg').fadeOut(500);
            $('.successMessage').delay(700).fadeIn(500);
        }

    });
});

