var app = new Vue({
    el: '#header',
    data: {
        isMobileMenuClosed: true
    },
    methods: {
        openMenu: function() {
            this.isMobileMenuClosed = !this.isMobileMenuClosed;
        }
    }
})