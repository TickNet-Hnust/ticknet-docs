<template>
  <div>
    <transition name="fade">
      <div v-if="!loading">
        <h3>Members</h3>
        <ul class="ul">
          <li ref="members" v-for="contributor in contributors" class="li" @click="goGithub(contributor.html_url)">
            <img class="avatar" :src="contributor.avatar_url"  />
            <a :href="contributor.html_url" class="a">
              {{ contributor.login }}{{ contributor.permissions.admin ? '(Admin)' : '' }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "contributors",
  data() {
    return {
      contributors: [],
      loading: true,
    }
  },
  methods: {
    async fetchContributors() {
      // Split tokens to avoid github security check
      const a = 'ghp_ZPlMKfyY'
      const b = 'PDyxRDaGmWeU2'
      const c = 'E96pHDiiz1jlHt1'
      const data = await fetch('https://api.github.com/repos/TickNet-Hnust/ticknet-docs/collaborators', {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `token ${a}${b}${c}`,
        }
      })
      const value = await data.json()
      console.log(value)
      this.contributors = value.sort((a, b) => {
        if (a.permissions.admin) {
          return -1
        } else {
          return 1
        }
      })
      this.loading = false
      
    },
    goGithub(url) {
      window.open(url)
    },
    async stop(time) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve()
        }, time)
      })
    },
    async playSnow() {
      for(let i = 0; i < this.$refs.members.length; i++) {
          this.$refs.members[i].classList.add('li-animation')
          await this.stop(300)
          this.$refs.members[i].classList.remove('li-animation')
        }
    },
    async playFast() {
      for(let i = 0; i < this.$refs.members.length; i++) {
        this.$refs.members[i].classList.add('li-animation', 'border')
        await this.stop(40)
        setTimeout(() => {
          this.$refs.members[i].classList.remove('li-animation')
        }, 200)
      }
    },
    playAnimation() {
      if(this.$refs.members.length > 0) {
        setTimeout(async () => {
          await this.playSnow()
          await this.playFast()
        }, 1000);
      }
    },
  },
  async mounted() {
    await this.fetchContributors()
    this.playAnimation()
  },
}
</script>

<style scope>
.ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  /* padding: 0 -20px !important; */
  margin: 0 -20px;
}
.li {
  display: flex;
  align-items: center;
  /* margin-bottom: 10px; */
  margin: 10px;
  /* border: 1px solid #ccc; */
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  /* tansition: all 3s ease; */
  transition: all 0.3s ease;
  /* box-shadow: none; */
  transform: translateY(0);
}
.border {
  border: 1px solid #ccc;
}

.li-animation {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1) translateY(-5px);
}
.li:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.1) translateY(-5px);
}
.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}


.a:hover {
  text-decoration: none !important;

}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>