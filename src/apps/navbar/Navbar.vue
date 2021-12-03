<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img :src="require('@/assets/images/nav-logo.svg')" alt="logo">
        </a>
        <div class="collapse navbar-collapse" >
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/">
                Для меня
              </router-link>
              <a class="" aria-current="page" href="#"></a>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/business">
                Для бизнеса
              </router-link>
            </li>
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/something-else">
                Что-то еще
              </router-link>
            </li>

          </ul>
          <div class="navbar-nav">

            <router-link tag="a" class="nav-link gold" to="/subscription">
                Подписка
              </router-link>
            <router-link tag="a" class="nav-link" to="/logout">
                Выход
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <nav class="navbar secondary navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent2">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link tag="a" class="nav-link" to="/" exact>Аватар</router-link>

            </li>
            <li class="nav-item dropdown">
                <router-link tag="a" to="/media" class="nav-link dropdown-toggle" data-bs-auto-close="true"  id="navbarDropdown" role="link" aria-expanded="false">Медиа</router-link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><router-link tag="a" class="dropdown-item" to="/media/photo">Фото</router-link></li>
                  <li><router-link tag="a" class="dropdown-item" to="/media/videos">Видео</router-link></li>
                  <li><router-link tag="a" class="dropdown-item" to="/media/articles">Статьи</router-link></li>
                </ul>
              </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/comments">Комментарии</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link"to="/faces">Фейки</router-link>
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