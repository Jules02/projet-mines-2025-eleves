var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * An example element.
 *
 */
let RedSidebar = class RedSidebar extends LitElement {
    render() {
        return html `
      <input placeholder="Chercher" type="text">
      <div class="trending-container">
        <h3>En tendance aujourd'hui</h3>
        <ol>
          <li><a>BRE-RMA</a></li>
          <li><a>Lorem Ipsum</a></li>
          <li><a>François Bayrou</a></li>
          <li><a>PS</a></li>
          <li><a>Trump</a></li>
        </ol>
      </div>
    `;
    }
};
RedSidebar.styles = css `
      :host {
          background-color: rgba(253, 240, 213, 0.5);
          width: 30%;

          padding: 15px;
      }

      input {
          width: 100%;
          height: 50px;

          box-sizing: border-box;
          padding: 25px;

          background-color: rgba(255, 255, 255, 0.5);

          border-radius: 25px;
          border: none;

          font-size: 15px;
      }

      .trending-container {
          margin-top: 30px;
      }

      .trending-container h3 {
          font-size: 14px;
      }

      .trending-container ol {
          line-height: 2.5;
      }

      .trending-container a {
          text-decoration: underline;
      }
  `;
RedSidebar = __decorate([
    customElement('red-sidebar')
], RedSidebar);
export { RedSidebar };
//# sourceMappingURL=red-sidebar.js.map