<template>
    <div class="main-wrapper ">
        <section class="section section_login">
            <div class="wrapper">
                <div class="login-wrap login-wrap_mod">
                    <div class="login-logo"><img src="/designs/unified2/img/main/logo_6y.svg" alt="logo"></div>
                    <div class="login-block">
                        <h3>Open an account</h3>
                        <form class="login-form" method="POST" action="https://client.iqmining.io/register">
                            <input type="hidden" name="_token" value="5tp7XoEx3eHLJzUY3b8axKHkA1XJgS612iwNhCYH">
                            <div class="box-field-wrap box-field-wrap_2">
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="text" placeholder="Name" class="form-control" name="name" value="">
                                    </div>
                                </div>
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="text" placeholder="Surname" class="form-control" name="surname"
                                            value="">
                                    </div>
                                </div>
                            </div>
                            <div class="box-field-wrap box-field-wrap_2_mod">
                                <div class="box-field">
                                    <div class="box-field__input">
                                        <input type="tel" name="code" value="+371" placeholder="Code" class="form-control">
                                    </div>
                                </div>
                                <div class="box-field">
                                    <div class="box-field__input">
                                        <input type="tel" name="phone" value="" placeholder="Phone" class="form-control">
                                    </div>
                                </div>
                            </div>

                            <div class="box-field-wrap box-field-wrap_1">
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="email" name="email" placeholder="Email (login)" class="form-control"
                                            value="">
                                    </div>
                                </div>

                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="password" name="password" maxlength="20" placeholder="Password"
                                            value="" class="form-control _aojtwqb_kzxppikpkz" autocomplete="off"
                                            style="padding-right: 34px;">
                                    </div>
                                </div>
                                <div class="box-field">
                                    <div class="box-field__input">
                                        <input type="password" name="password_confirmation" maxlength="20"
                                            placeholder="Password confirmation" value="" class="form-control uzdurhoidztbu"
                                            autocomplete="off" style="padding-right: 34px;">
                                    </div>
                                </div>
                            </div>

                            <div class="line">
                                <div class="form-group">
                                    <div id="login-recaptcha" class="g-recaptcha" style=""><input type="hidden"
                                            name="g-recaptcha-response"
                                            value="03AFY_a8VxrYKLK_OND1MyvVw--LUJzYmt6-tS6l4g9W_NVzSM5jR4ta6n4HXhzM14May3tsiqfnoAlKwY-YYiM6gO_4ZaAfWMb76Jwj2BhJBa_49U5t51SqGGTYa7zAF6Pai1digNk1iRJ9Z6sdOrHvUCuJRoT6pDJ1MCAm6p02EfofFuBn94YPUFJGkqnVAJV2e-LlFPX0Al3B9_8rfPU2YTOpA5o0iosXzbisVvSRh0-E_5cCptxd0pWHeaEaznP7uOCw3MRAAPZWdDeTFJ2RDcS7vgi0Mihbdic5kDmIbJZQ7KDanl-SCYTGWhWK7o8frOVBVWIIT71Wf4Tg6RD5eRg5t3nxY5uBTtvX_VqAxGUs_2WyKXFazzi_vkSOiL-sridQd2JgHnjtuYsHlN92kb1H9SEH_7KQcrfaWaVIEnQQQeykN98e9ZA5XafeyZxZ2te9pPWy3D4ilM_g6MnJ1gBykp5fiKK2J7TMaLTAN_-iU-SuLJd_ZI8cC5bnmBUbjLgUimt84V">
                                    </div>
                                </div>
                            </div>

                            <div class="login-check-wrap login-check-wrap_mod">
                                <div class="login-check">
                                    <input type="checkbox" class="checkbox" id="checkbox" name="agree">
                                    <label for="checkbox">
                                        I have read and agree to <a href="https://iqmining.io/terms" target="_blank">the
                                            Terms and Conditions</a>
                                    </label>
                                </div>
                                <div class="login-check">
                                    <input type="checkbox" class="checkbox" name="en_agree" id="checkbox2">
                                    <label for="checkbox2">I confirm, this service is provided to me outside US
                                        territory</label>
                                </div>

                                <div class="login-check">
                                    <input type="checkbox" name="agree_risk" class="checkbox" id="checkbox3">
                                    <label for="checkbox3">
                                        I have read and agree with <a href="https://iqmining.io/risk_statement"
                                            target="_blank">Risk policy</a>
                                    </label>
                                </div>
                            </div>
                            <div class="login-btn login-btn_small"><button type="submit">Register</button></div>

                            <input type="hidden" name="currency" value="USD">
                            <input type="hidden" name="partner" value="">
                        </form>
                    </div>
                    <div class="login-reg-link login-log-link">
                        Already have an account? <a href="https://client.iqmining.io/login">Sign in</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>
export default {
    name: 'Register',
};
</script>