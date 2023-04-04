<template>
    <div class="ph">
        <h1>Nekos Best</h1>
        <div class="container">
            <a v-for="image in images" target="_blank" :href="image.artistHref">
                <div class="container-img">
                    <img loading="lazy" :src="image.imageUrl" alt="" class="image" />
                    <span>{{ image.artistName }}</span>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
import { useImagesStore } from '../stores/index.js';
import { mapState, mapActions } from 'pinia';
export default {
    name: "Image",
    methods: {
        ...mapActions(useImagesStore, ['insertImage']),
        time() {
            setTimeout(() => {
                this.insertImage()
            }, 2000)
        }
    },
    computed: {
        ...mapState(useImagesStore, ['images'])
    },
    created() {
        this.insertImage();
    },
    updated() {
        this.time()
    }
};
</script>

<style scoped>
.ph {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.container {
    width: 90%;
    height: 70vh;
    padding: 1rem;
    display: flex;
    gap: 1em;
    flex-wrap: wrap;
    overflow: hidden;
    overflow-y: scroll;
    box-shadow: 0px 0px 4px 2px rgba(92, 90, 90, 0.733);
    border-radius: 16px;
}

.container-img {
    width: 10rem;
    height: 12rem;
    display: flex;
    flex-direction: column;

}

.image {
    width: 10rem;
    height: 10rem;
    border-radius: 16px;
}
</style>
