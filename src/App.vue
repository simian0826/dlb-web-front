

<template>
	<div id="app" >
			<v-content>
				<router-view></router-view>
			</v-content>

	</div>
</template>

<script>
import store from "./vuex/store";

export default {
	name: 'app',
	components: {
	},
	methods:{

	},
	mounted() {
		let vm = this;
		if (vm.$vuetify.breakpoint.smAndUp){
		  document.body.style.minWidth = '1300px'
		}
		store.commit('INCREMENT', 10);

    store.dispatch('incrementByNum', {num: 10});

    store.dispatch('testA/methodA');
    store.dispatch('testA/methodC', {num: 10});

  },
	updated() {
	  //do something after updating vue instance


	}
}

</script>

<style lang="scss">

html,body {
	width: 100%;
	margin: 0px;
	padding: 0px;

	font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	font-size: 14px;
	-webkit-font-smoothing: antialiased;
	position: relative;
}


#app {
	position: relative;
	top: 0px;
	bottom: 0px;
	width: 100%;
	background: #f0f3ef;
}

a{
	text-decoration: none;
	color: inherit;
}

/* Large Devices, Wide Screens */
// @media only screen and (min-width : 1200px) {
// 	html,body {
// 		min-width: 1600px;
// 	}
//
// 	#app {
// 	 	min-width: 1600px;
// 	}
// }
</style>
