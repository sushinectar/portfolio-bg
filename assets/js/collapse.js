window.addEventListener('load', function() {
    var info1 = document.getElementById('info1');
    var info2 = document.getElementById('info2');
    
    info1.style.display = 'flex'; // Exibir "info1" inicialmente
    info2.style.display = 'none'; // Ocultar "info2" inicialmente
    
    document.getElementById('toggleButton').addEventListener('click', function() {
        if (info1.style.display === 'flex') {
            info1.style.display = 'none';
            info2.style.display = 'flex';
        } else {
            info1.style.display = 'flex';
            info2.style.display = 'none';
        }
    });
});
