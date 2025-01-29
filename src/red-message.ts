import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
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
  `;

  /**
   * The text content of the message
   */
  @property()
  author_name = '';

  /**
   * The text content of the message
   */
  @property()
  author_username = '';

  /**
   * The text content of the message
   */
  @property()
  content = 'Lorem ipsum dolor sit amet, consectetur adipi';

  /**
   * The text content of the message
   */
  @property()
  image_src = '';

  /**
   * The date when the message was published
   */
  @property({type: Number})
  likes = 0;

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
        </div>
        <p class="content">${ this.content }</p>
        <div class="image-container">
          <img class="image" src="${ this.image_src }">
        </div>
        <div class="footer">
          <div class="like-wrapper">
            <button class="like-button">&#x2665</button>
            <span class="like-counter">${ this.likes }</span>
          </div>
          <p class="date">${ this.date }</p>
        </div>
      </div>
    `;
  }

  /*private _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }*/

  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'red-message': RedMessage;
  }
}