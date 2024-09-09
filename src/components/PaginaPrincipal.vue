<template>
    <ImagensPrincipal />
    <VideoUnico />
    <TabelaDiversos/>
    <router-link to="/videos">Ir para Videos Diversos</router-link>
</template>

<script>

import  ImagensPrincipal  from './ImagensDiversos.vue';
import VideoUnico from './VideoUnico.vue';
import TabelaDiversos from './TabelaDiversos.vue';
export default {
    name: 'PaginaPrincipal',
    components: {
        ImagensPrincipal, VideoUnico, TabelaDiversos,
    },
    props: {
        msg: String
    }
}
</script>

<!--Add "scoped" atribute to limite css to this component only-->
<style scoped></style>