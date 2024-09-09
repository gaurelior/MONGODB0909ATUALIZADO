<template>
<table>
          <tr>
            <th>Tipos de Ratos</th>
            <th>Comportamento</th>
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
</template>

<script>
export default {
    name: 'TabelaDiversos',
    props: {
        msg: String 
    }
}
</script>

<!--Add "scoped" atribute to limite css to this component only-->
<style scoped></style>