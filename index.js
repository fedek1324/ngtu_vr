function showDropdown(e) {
    console.log('set dropdown');
    document.getElementsByClassName("welcome_dropdown-content")[0].classList.toggle("l-flex");
    console.log(e)
}

function emptyLink() {
    alert('Это ссылка пуста!')
}

$( "a" ).click(function() {
    alert( "Перехватили событие" );
  });