document.querySelectorAll('.figure-caption:not(.no-cr)').forEach((e)=>{
    e.innerHTML = e.innerHTML + ' <span class="light">&copy; James P. Collins</span>';
});