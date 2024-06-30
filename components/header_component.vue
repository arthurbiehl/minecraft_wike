<template>

    <header>

        <div class="container_header">
            <div class="header_img">
                <img src="../static/logo.jpg" alt="">
            </div>
            <div class="links_header">
                <a href="/">INICIO</a>
                <a href="/bloco">BLOCOS</a>
                <a href="/tool">CRAFTING</a>
                <a href="/pokemon">CRAFTING</a>
            </div>
        </div>

    </header>



</template>



<style>
header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: contain;
    background-color: rgb(39, 39, 39);

}

.container_header {
    width: 90%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header_img {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
}

.header_img img {
    width: 100%;
}

.links_header a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    margin: 10px;
}
</style>