$(function(){

    $(".to_read button,.to_delete button").click(function(){
        var id=$(this).data('id');
        var CSRF=$(this).data('csrf');
        var URL=$(this).data('url');
        $.ajaxSetup({data:{'csrfmiddlewaretoken':CSRF}
    });
        $.ajax({
            type:'post',
            url:URL,
            data:{'id':id,},
            dataType:'json',
            success:function(ret){
        window.location.reload()},error:function(ret)
        {
        alert(ret.msg)
    }
    })
    })
    });
