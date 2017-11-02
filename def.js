/* global $*/
$(document).ready(function(){
    $('#Sbutton').click(function(){ 
        $.ajax ({
            type: 'GET',
            url: 'request.php',
            data: {q: $("#input").val()},
            success: function(data){
                $("#result").html(data);
            }
        });
    
    });
    
    $('#Abutton').click(function(){ 
        $.ajax ({
            type: 'GET',
            url: 'request.php',
            data: {q: '&all=true'},
            success: function(data){
                $('#result').html("");
                $("#result").append('<ol></ol>');
                $(data).find('definition').each(function(){
                    var store= '<h3>'+$(this).find("name").text()+'</h3>';
					store += '<p>'+$(this).find("meaning").text()+'</p>';
					store += '<p>'+"-"+$(this).find("author").text()+'</p>';
					$("#result ol").append('<li>'+store+'</li>');
                    
                });
            }
        });
    
    });
    
    
    
})
