$(document).ready(function(){

// play button
   $('#edit').click(function(){
     $('#edit_post').toggle();
   })

   $('#myModal').on('shown.bs.modal', function () {
     $('#myInput').focus()
   })


});
