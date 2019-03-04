const quit = {
    template: `<div>Quize route-id {{ $route.params.id }}</div>`
}

const router = new VueRouter({
    routes: [
        { path: '/quiz/:id', component: Quiz}
    ]
})

const app = new Vue({ router }).$mount('#app')