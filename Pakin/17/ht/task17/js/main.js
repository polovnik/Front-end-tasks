$(function() {
    openClose();
    toggleList();
    tabs();
});



function openClose() {
    $(".box").each(function(index, el) {
        $(el).find(".title").click(function(e) {
            $(el).find(".block").toggle("slow")
            return false;
        });
    });
};

function toggleList() {
    $(".accordion").children().each(function(index, el) {

        var slide = $(el).find('.slider');
        var button = $(el).children().first();

        button.click(function() {
            if (slide.is(":visible")) {
                slide.hide("slow");
                $(el).removeClass("active");
            } else {
                slide.show("slow");
                $(el).addClass("active");
            }
            return false;
        })
    });
};


function tabs() {
	var button = $('ul.tabset li a')
	var tab = $('div.tab-content');
		tab.hide().filter(':first').show();
		button.click(function () {
			button.removeClass("active");
			$(this).addClass("active")
			tab.hide();
			tab.filter(this.hash).show();
			return false;
		})


};
