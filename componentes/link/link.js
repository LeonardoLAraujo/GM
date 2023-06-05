import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';

export class Link extends LitElement{

    constructor(){
        super();
    }

    static get properties(){
        return{
            texto: {type: String},
            link: {type: String},
            class: {type: String},
        }
    }

    static get styles(){
        return css `
            .meu-link{
                text-decoration: none;
                font-size: 25px;
                color: #fff;
            }

            .meu-link:hover{
                color: #106F0e;
            }

            .link-home{
                border-bottom: 1px solid #fff;
            }
        `;
    }

    render(){
        return html`
            <a class="meu-link ${this.class}" href=${this.link} texto=>${this.texto}</a>
        `;
    }
}

customElements.define("meu-link", Link);