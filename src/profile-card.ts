import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * Profile Card
 *
 */
@customElement('profile-card')
export class ProfileCard extends LitElement {
  static override styles = css`
      :host {
          background-color: white;
          
          border: solid 1px red;
      }
      
      img {
          width: 50px;
          border-radius: 50px;
      }
      
  `;

  /**
   * The author full name
   */
  @property()
  author_name = '';

  /**
   * The author username
   */
  @property()
  author_username = '';

  /**
   * The text content of the message
   */
  @property()
  content = 'Lorem ipsum dolor sit amet, consectetur adipi';

  /**
   * The source of the uploaded image
   */
  @property()
  image_src = '';

  /**
   * The number of likes
   */
  @property({type: Number})
  likes = 0;

  @property({type: Boolean})
  liked = false;

  /**
   * The date when the message was published
   */
  @property()
  date = '';

  override render() {
    return html`
      <div class="author-profile-card">
        <img src="as.jpg" alt="Profile image" class="author-profile-card-img">
        <span>${ this.author_name }</span>
        <span>@${ this.author_username }</span>
      </div>
    `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'profile-card': ProfileCard;
  }
}