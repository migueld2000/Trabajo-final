//nav
function closeOtherCollapses(collapseId) {
    // Obtener todos los collapse que están abiertos
    var collapses = document.querySelectorAll('.collapse.show');

    // Iterar sobre ellos y cerrarlos, excepto el collapse que se está abriendo
    for (var i = 0; i < collapses.length; i++) {
        var collapse = collapses[i];
        if (collapse.id !== collapseId) {
            $(collapse).collapse('hide');
        }
    }
}
//menu 
function closeOtherCollapses(openId) {
    var collabsibles = ['collapseDesayuno', 'collapseAlmuerzos', 'collapseComidas'];
    collabsibles.forEach(function(id) {
        if (id !== openId) {
            var element = document.getElementById(id);
            var bsCollapse = new bootstrap.Collapse(element, {
                toggle: false
            });
            bsCollapse.hide();
            element.style.transition = 'height 0.5s ease, width 0.5s ease';
        }
    });
}
