<template>
	<div>
		<p>
			{{itemData}}
		</p>
	</div>
</template>

<script type="text/javascript">
import {mapGetters} from 'vuex'
export default {
	computed: {
		...mapGetters([
	    	'itemData'
	  	])
  	},
  created () {
    console.log(this.itemData)
  },
}
</script>

<style type="text/css">
	
</style>