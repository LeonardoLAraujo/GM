import {LitElement, html, css} from 'https://unpkg.com/lit-element@latest/lit-element.js?module';
import { materialSymbolsCSS } from './materialSymbols.js';
import { ListaLi } from '../lista-li/lista-li.js';

export class Icone extends LitElement{

    static get properties(){
        return{
            nomeIcone: {type: String},
            labelIcone: {type: String},
        }
    }

    static styles = [
        materialSymbolsCSS, 
        css `
            .meu-icone{
                cursor: pointer;
            }

            @media (min-width: 900px){
                .meu-icone{
                    display: none;
                }
            }
    `];

    constructor(){
        super();
        this.lista = new ListaLi();
        
    }

    

    render(){
        return html`
            <span class="meu-icone material-symbols-outlined">${this.nomeIcone}</span>
        `;
    }
}

customElements.define('meu-icone', Icone);