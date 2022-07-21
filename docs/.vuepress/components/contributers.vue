<template>
  <div v-if="!loading">
    <h3>Contributors</h3>
    <ul class="ul">
      <li ref="members" v-for="contributor in contributors" class="li" @click="goGithub(contributor.html_url)">
        <img class="avatar" :src="contributor.avatar_url"  />
        <a :href="contributor.html_url" class="a">
          {{ contributor.login }}{{ contributor.permissions.admin ? '(Admin)' : '' }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { $fetch } from 'ohmyfetch'
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
      const value = (await fetch('https://api.github.com/repos/TickNet-Hnust/ticknet-docs/collaborators', {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: 'token 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'
        }
      })).json().then(value => {
        console.log(value)
        this.contributors = value.sort((a, b) => {
          if (a.permissions.admin) {
            return -1
          } else {
            return 1
          }
        })
        this.loading = false
      })
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
    async playAnimation() {
      // this.$refs.members
      setTimeout(async () => {
        await this.playSnow()
        await this.playFast()
      }, 1000);
    },
  },
  mounted() {
    this.fetchContributors()
    this.playAnimation()
    // fetch
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
</style>