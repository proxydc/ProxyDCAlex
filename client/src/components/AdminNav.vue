<template>
<div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
       <!-- <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>-->

          <div class="collapse navbar-collapse" id="navbarToggler">          
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/addAccount">Add Account</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/appDashboard">Candidats</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">Se déconnecter</a>
              </li>
            </ul>
        </div>
      </nav>
</div>
</template>

<script>
export default {
    name: 'AdminNav'
}
</script>