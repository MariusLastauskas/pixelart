'use strict';

var headerController = new Vue({
    el: '#header__controller',
    data: {
        isMobileMenuClosed: true
    },
    methods: {
        openMenu: function openMenu() {
            this.isMobileMenuClosed = !this.isMobileMenuClosed;
        }
    }
});

var loginController = new Vue({
    el: '#login__controller',
    data: {
        emailErr: null,
        loginEmail: '',
        loginPassword: '',
        loginRememberMe: false,
        passwordErr: null
    },
    methods: {
        validateLogin: function validateLogin(e) {
            e.preventDefault();

            this.loginEmail = sanitizeHtml(this.loginEmail);
            this.loginPassword = sanitizeHtml(this.loginPassword);

            if (this.emailValidation(this.loginEmail) && this.passwordValidation(this.loginPassword)) {

                // Code that would be used in real project, with API requests
                // **********************************************************
                // axios.post('http://example.com', {
                //     email: this.loginEmail,
                //     password: this.loginPassword
                // }).then(function(response) {
                //     if (response.data.validationToken) {
                //         window.localStorage.setItem('token', response.data.validationToken);
                //         window.location('http://success.domain');
                //     }
                //     else {
                //         this.passwordErr = 'Wrong credentials';
                //         this.loginPassword = null;
                //     }
                // }).catch(function(error) {
                //     this.passwordErr = 'Wrong credentials';
                //     this.loginPassword = null;
                // });
                // **********************************************************

                if (this.loginPassword != 'password' || this.loginEmail != 'your@email.here') {
                    this.passwordErr = 'Wrong password';
                    this.loginPassword = null;
                } else {
                    this.passwordErr = '';
                    alert('successful login');

                    if (this.loginRememberMe) {
                        window.localStorage.setItem('credentials', '{ "email": "' + btoa(this.loginEmail) + '", \n                        "password": "' + btoa(this.loginPassword) + '" }');
                    } else {
                        window.localStorage.removeItem('credentials');
                    }

                    window.location = 'https://marius-lastauskas.000webhostapp.com/pixel-art/';
                }
            }
        },
        emailValidation: function emailValidation(email) {
            var emailRegex = /^[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/ig;

            if (!email) {
                this.emailErr = 'Enter email';
                return false;
            } else if (!emailRegex.exec(email)) {
                this.emailErr = 'Invalid email';
                return false;
            } else {
                this.emailErr = null;
            }
            return true;
        },
        passwordValidation: function passwordValidation(password) {
            if (!password) {
                this.passwordErr = 'Enter password';
                return false;
            } else {
                this.passwordErr = null;
            }
            return true;
        }
    },
    beforeMount: function beforeMount() {
        var credJson = window.localStorage.getItem('credentials');

        if (credJson) {
            var cred = JSON.parse(credJson);
            this.loginEmail = atob(cred.email);
            this.loginPassword = atob(cred.password);
            this.loginRememberMe = true;
        }
    }
});