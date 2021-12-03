<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img :src="require('@/assets/images/nav-logo.svg')" alt="logo">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Для меня</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Для бизнеса</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Что-то еще</a>
            </li>

          </ul>
          <div class="navbar-nav">
            <div class="nav-item">
                <a class="nav-link gold" aria-current="page" href="#">Подписка</a>
            </div>
            <div class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Выход</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar secondary navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Аватар</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Медиа</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Комментарии</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Фейки</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </div>


</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>

</style>