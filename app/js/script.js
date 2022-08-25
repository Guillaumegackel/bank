const open = document.getElementById('btnHamburger');

open.addEventListener('click', ()=>{
	console.log('ca marche');

	if(open.classList.contains('open')){
		open.classList.remove('open');
	}
	else{
		open.classList.add("open");

	}

})