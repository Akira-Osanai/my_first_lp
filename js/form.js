<script>
function showThxMessage(){
   var email = document.myForm.emailAddress.value;
   if(email !== ''){
       var thxDiv = document.getElementById('thxMessage');
       thxDiv.getElementsByTagName('span')[0].innerHTML = email;
       document.myForm.reset();
       document.getElementById('formWrapper').style.display = 'none';
       thxDiv.style.display = 'block';
   }
}
</script>