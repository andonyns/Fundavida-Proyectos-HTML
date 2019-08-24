function abrirotrapag(){
    document.location.href="file:pagina2.html"
}

function mostrar1(){
    document.getElementById('listasuperior').style.display = 'block';
    document.getElementById('listainferior').style.display = 'none';
    }
function mostrar2(){
    document.getElementById('listainferior').style.display = 'block';
    document.getElementById('listasuperior').style.display = 'none';
    }
 

    function rotar_imagen(){
        var tiempo = 3000;//tiempo en milisegundos
        var arrImagenes = ['https://cdn.shopify.com/s/files/1/0018/4506/7841/products/SlicesStripres_360x.jpg?v=1556666970',
        'https://cdn.shopify.com/s/files/1/0018/4506/7841/products/wizardpage_360x.jpg?v=1562194958',
        'https://cdn.shopify.com/s/files/1/0018/4506/7841/products/VacacionesEspalda_360x.jpg?v=1556667308','https://cdn.shopify.com/s/files/1/0018/4506/7841/products/VacacionesEspalda_360x.jpg?v=1556667308'];
        
        _img = document.getElementById('rotativo');
       
        //cargar la 1er imagen
        _img.src = arrImagenes[0];
        var i=1;
        setInterval(function(){
          _img.src = arrImagenes[i];
          i = (i == arrImagenes.length-1)? 0 : (i+1);
        }, tiempo);
      }
      function abrirmenu(){
        document.location.href="file:pagina1.html"
    }
     function abrirblusas(){
    document.location.href="file:pagina3.html"
}