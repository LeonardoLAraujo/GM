import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { Link } from '../link/link.js';

export class ListaLi extends LitElement{

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
            .lista__item__desktop{
                display: flex;
                flex-direction: row;
                list-style: none;
                justify-content: space-evenly;
            }

            .lista__item__mobile{
                list-style: none;
                padding: 0.4rem;
                border-bottom: 1px solid #106F0e;
            }
        `;
    }

    render(){
        return html`
            <li class=${this.class} link=${this.link} texto=${this.texto}><meu-link link=${this.link} texto=${this.texto}></meu-link></li>
        `;
    }

}

customElements.define('minha-lista', ListaLi);