var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Profile Card
 *
 */
let ProfileCard = class ProfileCard extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The author full name
         */
        this.author_name = '';
        /**
         * The author username
         */
        this.author_username = '';
        /**
         * The text content of the message
         */
        this.content = 'Lorem ipsum dolor sit amet, consectetur adipi';
        /**
         * The source of the uploaded image
         */
        this.image_src = '';
        /**
         * The number of likes
         */
        this.likes = 0;
        this.liked = false;
        /**
         * The date when the message was published
         */
        this.date = '';
    }
    render() {
        return html `
      <div class="author-profile-card">
        <img src="as.jpg" alt="Profile image" class="author-profile-card-img">
        <span>${this.author_name}</span>
        <span>@${this.author_username}</span>
      </div>
    `;
    }
};
ProfileCard.styles = css `
      :host {
          background-color: white;
          
          border: solid 1px red;
      }
      
      img {
          width: 50px;
          border-radius: 50px;
      }
      
  `;
__decorate([
    property()
], ProfileCard.prototype, "author_name", void 0);
__decorate([
    property()
], ProfileCard.prototype, "author_username", void 0);
__decorate([
    property()
], ProfileCard.prototype, "content", void 0);
__decorate([
    property()
], ProfileCard.prototype, "image_src", void 0);
__decorate([
    property({ type: Number })
], ProfileCard.prototype, "likes", void 0);
__decorate([
    property({ type: Boolean })
], ProfileCard.prototype, "liked", void 0);
__decorate([
    property()
], ProfileCard.prototype, "date", void 0);
ProfileCard = __decorate([
    customElement('profile-card')
], ProfileCard);
export { ProfileCard };
//# sourceMappingURL=profile-card.js.map