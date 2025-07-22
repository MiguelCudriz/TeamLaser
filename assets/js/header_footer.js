// Cargar dinámicamente el header
fetch("header.html")
	.then(res => res.text())
	.then(data => {
		document.getElementById("header-placeholder").innerHTML = data;
	});

// Cargar dinámicamente el footer
fetch("footer.html")
	.then(res => res.text())
	.then(data => {
		document.getElementById("footer-placeholder").innerHTML = data;
	});

// Eliminar clase "is-preload" al cargar la página
window.addEventListener("load", function () {
	document.body.classList.remove("is-preload");
});
