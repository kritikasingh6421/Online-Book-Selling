function validate(np,cp){
    password=document.forms['np']
    confirm=document.forms['cp']
    if (password!=confirm){
        document.getElementById('validate').innerHTML="*Not match"
    }
}