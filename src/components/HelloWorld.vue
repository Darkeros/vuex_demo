<template>
  <div class="hello">
    <div v-for="(item, index) in dataList" @click="but(item)">{{item.productId}}</div>
  </div>
</template>

<script>
import {getDateList} from '../api/recommend'
import {mapMutations, mapGetters} from 'vuex'
export default {
  computed: {
  ...mapGetters([
      'dataList'
    ])
  },
  created () {
    this._getDataList()
  },
  methods: {
    ...mapMutations({
      setDataList: 'SET_DATALIST',
      setItemData: 'SET_ITEMDATA'
    }),
    _getDataList () {
      getDateList().then((res) => {
        this.setDataList(res)
      })
    },
    but (item) {
      this.setItemData(item)
      this.$router.push({path: '/hi'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
