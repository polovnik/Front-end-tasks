(function(){
    var submit = $("input[value='Add']");
    submit.click(function(e) {
        e.preventDefault();
        var value = $("#task-name").val();
        if (value.length) {
            $("#tasks-list").prepend("<li><span>" + value + "</span><button id='edit'>Edit</button><button id='complete'>Completed</button><button id='save'>Save</button><button id='cancel'>Cancel</button></li>");
        } 
        else {
            alert("It shouldn't be empty.");
        }
        
        $("li").each(function() {
            var edit = $(this).find('#edit');
            var completed = $(this).find('#complete');
            var button = $(this).find('button');
            var save = $(this).find('#save');
            var cancel = $(this).find('#cancel');

            $(this).mouseenter(function() {
                $(this).addClass('active')
                edit.css('display', 'inline-block');
                completed.css('display', 'inline-block');
                }).mouseleave(function() {
                    $(this).removeClass('active')
                    button.css('display', 'none');
            });

            edit.click(function(){
                var spanTxt = $('#tasks-list li.active span').text();
                $('#tasks-list li.active span').html('<textarea></textarea>');
                $('#tasks-list li.active span textarea').text(spanTxt);
                button.css('display', 'inline-block');
                edit.css('display', 'none');
                completed.css('display', 'none');
                    $('#tasks-list li.active span textarea').mouseleave(function() {
                        button.css('display', 'inline-block');
                        edit.css('display', 'none');
                        completed.css('display', 'none');
                    });
                    cancel.click(function(){
                        $('#tasks-list li.active span').html(spanTxt);
                    });
            });

            completed.click(function(){
                $('#tasks-list li.active').addClass('disabled').css('color', '#ccc');
                button.css('display', 'none');
                    $('#tasks-list li.disabled').hover(function(){
                        button.css('display', 'none');
                    })
            });

            save.click(function(){
                    var newVal = $('#tasks-list li.active span textarea').val();
                    $('#tasks-list li.active span').html(newVal);
                    button.css('display', 'inline-block');
                    save.css('display', 'none');
                    cancel.css('display', 'none');
            });

        });

    });
})();