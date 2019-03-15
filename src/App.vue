

<template>
	<div id="app" >
		<v-app style="background: #f0f3ef">
			<v-content>
				<router-view></router-view>
			</v-content>

		</v-app>
	</div>
</template>

<script>
export default {
	name: 'app',
	components: {
	},
	methods:{

	},
	mounted() {
		let vm = this;
    if (vm.$vuetify.breakpoint.smOnly){
      document.body.style.minWidth = '1300px'
    }


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
