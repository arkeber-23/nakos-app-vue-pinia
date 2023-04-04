import { defineStore } from "pinia";

export const useImagesStore = defineStore("images", {
  state: () => ({ images: [] }),
  getters: {
    getImages(state) {
      return state.images;
    },
  },
  actions: {
    async insertImage() {
        try{
            const resp = await fetch("https://nekos.best/api/v2/neko");
            const { results } = await resp.json();
            const image = {
                artistName: results[0].artist_name,
                artistHref: results[0].artist_href,
                imageUrl: results[0].url,
            };
            this.images.push(image);
        }catch(error){
            console.log(error)
        }
    },
  },
});
