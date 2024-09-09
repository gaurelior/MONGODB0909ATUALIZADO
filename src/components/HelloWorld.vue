<template>
  <!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Ratos</title>
<h1>Ratos</h1>  
<p>"Rato é o nome dado a mamíferos pertencentes à Família Muridae, tendo como características principais o focinho afilado e a cauda comprida. Esses roedores geralmente são onívoros, com olfato bem aguçado e gestação rápida, dando origem a vários descendentes que em pouco tempo já se mostram independentes. Ao todo, são mais de 700 espécies existentes em todo o mundo".</p>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <link rel="stylesheet" href="server.js">
  <div class="containerImagem">
    <img style=" width: 100%;" src="@/assets/1.jpg" alt="imagem 1">
    </div>
    <div class="divImagemMeiaTela">
        <img src="@/assets/2.jpg" alt="imagem 2">
        <img src="@/assets/3.jpg" alt="imagem 3">  
      </div>
      <div class="iframe">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/7XokpexHZPk?si=ik35S0zjqASSaH_E" title="YouTube video player"   
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
        

      
        <br>
        
        <table>
          <tr>
            <th>Tipos de Ratos</th>
            <th>Comportamento</th>
            ,
            
            <th>Imagens</th>
          </tr>
          <tr>
            <td>Rato preto</td>
            <td>Prefere locais altos como telhados e forros para seus ninhos.</td>
            <td><img src="@/assets/download.jpg" width="100px"></td>
          </tr>
          <tr>
            <td>Ratazana</td>
            <td>Tem preferência por tocas, esgotos e lugares baixos. Cavando túneis no solo onde vão construir seus ninhos.</td>
           <td><img src="@/assets/ratazana.jpg" width="100px"></td>
          </tr>
          <tr>
            <td>Camundongo</td>
            <td>Constroem seus ninhos dentro das residências: nas gavetas, armários e outros locais onde ele encontra abrigo e alimento necessário para sua sobrevivência.</td>
            <td><img src="@/assets/camundongo.jpg" width="100px"></td>
          </tr>
          <tr>
            <td>Rato-espigueiro</td>
            <td>O rato-espigueiro é uma espécie de mamíferos roedores da família dos murídeos, presente nas regiões paleoártica e na indo-malaia.</td>
            <td><img src="@/assets/images.jpg" width="100px"></td>
          </tr> 
        
        </table>
      </body>
</html>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #42b983;
  font-size: 30px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
