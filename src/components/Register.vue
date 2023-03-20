<template>
    <div class="main-wrapper ">
        <section class="section section_login">

            <div class="wrapper">
          

                <div class="login-wrap login-wrap_mod">
                     <div class="login-block">
                        <h3>Open an account</h3>
                        <form class="login-form" method="POST" action="https://client.iqmining.io/register">
                            <input type="hidden" name="_token" value="5tp7XoEx3eHLJzUY3b8axKHkA1XJgS612iwNhCYH">
                            <div class="box-field-wrap box-field-wrap_2">
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="text" placeholder="Name" class="form-control" name="name" required=""
                                            value="">
                                    </div>
                                </div>
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="text" placeholder="Surname" class="form-control" name="surname"
                                            required="" value="">
                                    </div>
                                </div>
                            </div>
                       

                            <div class="box-field-wrap box-field-wrap_1">
                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="email" name="email" placeholder="Email (login)" class="form-control"
                                            required="" value="">
                                    </div>
                                </div>

                                <div class="box-field">
                                    <div class="box-field__input ">
                                        <input type="password" name="password" maxlength="20" placeholder="Password"
                                            value="" class="form-control ehh_rvfpihhfcveeqk" autocomplete="off"
                                            style="padding-right: 34px;">
                                    </div>
                                </div>
                                <div class="box-field">
                                    <div class="box-field__input">
                                        <input type="password" name="password_confirmation" maxlength="20"
                                            placeholder="Password confirmation" value="" class="form-control aokhrnpuxcwdj_"
                                            autocomplete="off" style="padding-right: 34px;">
                                    </div>
                                </div>
                            </div>

                            <div class="line">
                                <div class="form-group">
                                    <div id="login-recaptcha" class="g-recaptcha" style=""><input type="hidden"
                                            name="g-recaptcha-response"
                                            value="03AFY_a8VaX4UcDSMl8j58w5T0E_oad5pPH8_fx_734HJVdarEoPrxomYEsxQA7z70nmMEV842IESwoomEGFR5BaE99ygeOQI2G5zxbXLy_i4Tkr03ItJkP39BR0o4YriyfUnGrQyecGLoI0Gc6Xg_SURDm1ea8KQRQfESUZ0PCehcd_anOOEpG-sSt-_z0Mk6xEPT63CKwyVBxTbEntrTSw6YxPhyBzz7uW1Cr6_a4___lsjWLApJsjT6evTFGZUsULJu6IXzPgkSo888EEzD00S29fpR13NosUHygDshZDQAErbRsWkZwnA_mVpAFUGGpNJUOaHBK10_ls0peUeylsn73DDiO6k1zUYPtXCE57twNceM03C2R7PR7TjD7TR9mJzSMO_jTpOhhxyDzvLHC9NqfheEoDK2eCln_c8NK3JQt64fiSdM7Zvcjvfdf2535UTfYcO1EkWluNqQv_A-u0lgB-NqNYJwtmR81IVIRv8N8qDj2L--cnpbuqx2qJVdMbwYjyjnN0WT">
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
                        Already have an account? <a href="/login">Sign in</a>
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