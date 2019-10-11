import { html, LitElement } from 'lit-element';
import style from './helpi-login-styles.js';

class HelpiLogin extends LitElement {
  static get properties() {
    return {
      mode: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.mode = 'signup';
  }

  render() {
    return html`
      <section class="form">
        <article class="container">
          <section class="header">
            <figure>
              <img src="../resources/images/facebook.svg" alt="Logo">
              <!--<h1 style="font-family:sans-serif;font-size: 4rem;color: var(--helpi-app-theme-color-five);margin: 0;">helpi</h1>-->
            </figure>
          </section>
          <section class="body">
            <input placeholder="Usuario" type="text">
            <input placeholder="Contraseña" type="password">
            <button class="login">${this.mode === 'login' ? 'Ingresar' : 'Registrar'}</button>
            <span>${this.mode === 'login' ? 'O inicia con' : 'O registrate con'}</span>
            <div class="social-login">
              <button class="social-login-button facebook">Facebook</button>
              <button class="social-login-button gmail">Gmail</button>
            </div>
            <button @click="${this._doLogin}" class="register">${this.mode === 'login' ? 'Crear una cuenta' : 'Ingresa a tu cuenta'}</button>
          </section>
        </article>
      </section> 
    `;
  }

  _doLogin() {
    this.mode = this.mode === 'login' ? 'signup' : 'login';
  }
}

window.customElements.define("helpi-login", HelpiLogin);
