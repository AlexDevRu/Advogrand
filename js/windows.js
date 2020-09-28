var $= jQuery.noConflict();

$("[data-videolink]").fancybox({
    beforeLoad: function(instance, slide) {
    	var video_id = slide.opts.$orig.data('video_id');
        $('#video_iframe').attr('src', 'https://www.youtube.com/embed/'+video_id);

        var currentTab = $('.comments_tablinks.active').text();

        const defaultText = 'Карта клиента - ';
        $('#text_card').text(defaultText);

	    if(currentTab !== undefined) {
	    	if(currentTab === "семья") {
	    		$('#text_card').append('Family');
	    		$('#image_card').attr('src','img/prices/2.jpg');
	    	}
	    	else if(currentTab === "бизнес") {
	    		$('#text_card').append('Business');
	    		$('#image_card').attr('src','img/prices/3.jpg');
	    	}
	    	else {
	    		$('#text_card').append('Personal');
	    		$('#image_card').attr('src','img/prices/1.jpg');
	    	}
	    }

	    var title = slide.opts.$orig.find($(".video_title")).text();
	    $('#video_title').text(title);
    }
});

$("[data-consultation_button]").fancybox();