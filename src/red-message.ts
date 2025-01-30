import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * An example element.
 *
 */
@customElement('red-message')
export class RedMessage extends LitElement {
  static override styles = css`
      :host {
          width: 80%;
          
          display: flex;
          justify-content: center;
      }
      
      .wrapper {
          
          width: 100%;

          padding: 15px;

          border: solid 1px rgba(0, 48, 73, 0.3);
          border-radius: 3px;
          background-color: white;


          -webkit-box-shadow: 0 0 150px 0 rgba(173,173,173,0.2);
          -moz-box-shadow: 0 0 150px 0 rgba(173,173,173,0.2);
          box-shadow: 0 0 150px 0 rgba(173,173,173,0.2);
      }

      .author-username {
          font-size: 12px;
          font-weight: 100;
      }

      .footer {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
      }


      .like-button {
          font-size: 16px;
          border: none;
          background-color: white;
          padding: 0;
      }

      .like-button:hover {
          cursor: pointer;
      }

      .date {
          font-size: 12px;
          font-weight: 100;
      }

      .image-container {
          text-align: center ;
      }

      .image {
          width: 400px;
      }
      
      profile-card {
          display: none;
      }
      
      .author-wrapper:hover profile-card {
          display: block;
          position: absolute;
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
      <div class="wrapper">
        <div class="author-wrapper">
          <span class="author-name">${ this.author_name }</span> - <span class="author-username">@${ this.author_username }</span>
          <profile-card></profile-card>
        </div>
        <p class="content">${ this.content }</p>
        <div class="image-container">
          <img class="image" src="${ this.image_src }">
        </div>
        <div class="footer">
          <div class="like-wrapper">
            <button class="like-button" @click=${this.handleLike}>${ this.liked ? '♥' : '♡' }</button>
            <span class="like-counter">${ this.likes }</span>
          </div>
          <p class="date">${ formatDistanceToNow(this.date, { addSuffix: true, locale: fr})}</p>
        </div>
      </div>
    `;
  }

  private handleLike() {
    this.liked = !this.liked;
    this.likes += this.liked ? 1 : -1;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'red-message': RedMessage;
  }
}