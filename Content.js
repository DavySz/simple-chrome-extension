let willSmithImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/640px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
    "https://image.winudf.com/v2/image1/Y29tLnNlbGZpZS5zZWxmaWV3aXRoV2lsbFNtaXRoX3NjcmVlbl80XzE1NTE0Mjg1MjJfMDQy/screen-4.jpg?fakeurl=1&type=.jpg",
    "https://i.pinimg.com/474x/66/81/16/6681164e16ef2e2f5e7f739887316dd5--s-kids-will-smith-fresh-prince.jpg",
    "https://istoe.com.br/wp-content/uploads/sites/14/2019/07/034202aba56356ece0e2f4337f8523a71977b82f.jpg",
    "https://www.culturamix.com/wp-content/gallery/fotos-de-will-smith-1/Fotos-de-Will-Smith-1.jpg",
    "https://i.pinimg.com/originals/a4/85/33/a4853307e2c9687e0f816e8cfecd8494.jpg",
    "https://br.paipee.com/wp-content/uploads/2020/09/20200812090051458093u.jpg",
    "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
    "https://br.web.img2.acsta.net/pictures/17/02/08/16/50/452749.jpg",
    "https://s2.glbimg.com/aQ72kSkNc5nwJvZ9CSK78LCNT4Y=/e.glbimg.com/og/ed/f/original/2019/02/11/will_1.jpg",
    "https://www.opresente.com.br/wp-content/uploads/2019/02/aladdin-trailer.jpg",
    "https://f.i.uol.com.br/fotografia/2021/03/02/1614702217603e668965c7c_1614702217_3x2_md.jpg",
    "https://epipoca.com.br/wp-content/uploads/2021/07/Pistoleiro-Will-Smith-em-Esquadrao-Suicida-Reproducao.jpg",
    "https://portalpopline.com.br/wp-content/uploads/2021/10/will-smith-3.jpg",
    "https://www.ofuxico.com.br/wp-content/uploads/2021/11/will-smith-sexo.jpg",
    "https://pipocamoderna.com.br/wp-content/uploads/2020/08/thefresh-princeof-belair-willsmith.jpg",
    "https://imagens.brasil.elpais.com/resizer/lC0tWLp0Y8TiD23s1lgd_48wMxw=/1960x1103/ep01.epimg.net/cultura/imagenes/2016/02/22/actualidad/1456130978_972499_1456135599_noticia_fotograma.jpg",
    "https://wallpapersfull.com/wallpapers/2019/wallpaper-ator-will-smith-do-cinema-2309.jpg",
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/12/will-smith.jpg"


];

const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const radomImg = Math.floor(Math.random() * willSmithImages.length)
    imgs[i].src = willSmithImages[radomImg];
}

const picture = document.getElementsByTagName("picture")
for (let i = 0; i < picture.length; i++) {
    const radomImg = Math.floor(Math.random() * willSmithImages.length)
    picture[i].src = willSmithImages[radomImg];
}


const headers = document.getElementsByTagName("h1")
for (let i = 0; i < headers.length; i++) {
    headers[i].innerText = "Will Smith"
}

const h2 = document.getElementsByTagName("h2")
for (let i = 0; i < h2.length; i++) {
    h2[i].innerText = "Will Smith"
}

const h3 = document.getElementsByTagName("h3")
for (let i = 0; i < h3.length; i++) {
    h3[i].innerText = "Will Smith"
}

const p = document.getElementsByTagName("p")
for (let i = 0; i < p.length; i++) {
    p[i].innerText = "Will Smith"
}


const a = document.getElementsByTagName("a")
for (let i = 0; i < a.length; i++) {
    a[i].innerText = "Will Smith"
}


const span = document.getElementsByTagName("span")
for (let i = 0; i < span.length; i++) {
    span[i].innerText = "Will Smith"
}

const zz3gNc = document.getElementsByClassName("zz3gNc")
for (let i = 0; i < zz3gNc.length; i++) {
    zz3gNc[i].innerText = "Will Smith"
}

const update_location = document.getElementsByTagName("update-location")
for (let i = 0; i < update_location.length; i++) {
    update_location[i].innerText = "Will Smith"
}

const blockquote = document.getElementsByTagName("blockquote")
for (let i = 0; i < blockquote.length; i++) {
    blockquote[i].innerText = "Will Smith"
}

const title = document.getElementsByTagName("title")
for (let i = 0; i < title.length; i++) {
    title[i].innerText = "Will Smith"
}

