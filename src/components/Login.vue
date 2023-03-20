<template>
    <div class="main-wrapper ">
        <section class="section section_login">

            <div class="wrapper">

                <div class="login-wrap">
                    <div class="login-block">
                        <h3>Login to your account</h3>
                        <form class="login-form" method="POST" action="/login">
                            <input type="hidden" name="_token" value="5tp7XoEx3eHLJzUY3b8axKHkA1XJgS612iwNhCYH">

                            <div class="box-field-wrap box-field-wrap_1">
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="email" name="email" class="form-control" placeholder="Email"
                                            required="" value="">
                                    </div>
                                </div>
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="password" name="password" placeholder="Password"
                                            class="form-control iqvgwbk_ypjfzlmz" value="" autocomplete="off"
                                            style="padding-right: 34px;">
                                    </div>
                                </div>
                                <div class="line">
                                    <div class="form-group">
                                        <div id="login-recaptcha" class="g-recaptcha" style=""><input type="hidden"
                                                name="g-recaptcha-response"
                                                value="03AFY_a8X9mKB-lg4iG4fOJt2lHVB4B9DUzBiLv621fV7H5QFu87yDYmdYg5HuYa_s83-Bp8D6ApyURJS7eaLXxASNf7r8IoHzJ5WpU9VAwaaIDYfcYtihyOqy6QjVJbhK5tJhPwv_Ies5DjgZFjVRA_yprx7X3dRJzn58aBNf5LsEv-l4XK_4iPTOm7rkezvGH2TzvQ_P1Ghr7QD1fF70S6Bh-48tNjy4AAMY5LkH9lTwhcrsmAp9pevIqRaY6qEvgS-FG8bHirDYPiVKXKiFqgsR5YjmBQjMx3VCUI31ZWF4pWITw0kn6a8nkryAAWYJfnHEvP4OyBdFOlWi1vhIfnQkUEXf2KvzQKmgAa9EjsdogUvL6-2POllIw535QIaHj49zHMKnKdGWjogfR6EZmRg9OI7LEa_YHS3Uo6pkd10pLBn7P0n8varFOMpSfPU_8_-mXzN7XWlqpZkbrugt7RwjAFLGMJlVfGnCgoOq2xJt0N-aYbh684QmtuvQmT5sXAfvxl6rnY50">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="login-forgot"><a href="/password/reset">Forgot your password?</a></div>
                            <div class="login-check-wrap">
                                <div class="login-check">
                                    <input type="checkbox" name="remember" value="1" checked="" class="checkbox"
                                        id="checkbox">
                                    <label for="checkbox">Stay logged in</label>
                                </div>
                            </div>
                            <div class="login-btn"><button type="submit">Login</button></div>

                        </form>
                        <div class="login-reg-link">
                            Don't have an account yet? <a href="/register">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
  
  
<script>
export default {
    name: 'Hello',
    methods: {
        activeTab: function activeTab(e) {
            e.preventDefault();
            let elm = e.target;
            let oldactive = elm.closest('ul').querySelector('.active');
            oldactive.classList.remove('active');
            elm.closest('li').classList.add('active');
            let newTab = document.querySelector(elm.getAttribute('href'));
            let oldTab = newTab
                .closest('div.box-tab-cont')
                .querySelector('.tab-cont.active');
            oldTab.classList.remove('active');
            oldTab.classList.add('hide');
            newTab.classList.remove('hide');
            newTab.classList.add('active');
        },
    },
};
</script>
  
<script setup>
import "../style/register.css";
</script>