import { LitElement } from 'lit';
/**
 * An example element.
 *
 */
export declare class RedMessage extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The author full name
     */
    author_name: string;
    /**
     * The author username
     */
    author_username: string;
    /**
     * The text content of the message
     */
    content: string;
    /**
     * The source of the uploaded image
     */
    image_src: string;
    /**
     * The number of likes
     */
    likes: number;
    liked: boolean;
    /**
     * The date when the message was published
     */
    date: string;
    render(): import("lit-html").TemplateResult<1>;
    private handleLike;
}
declare global {
    interface HTMLElementTagNameMap {
        'red-message': RedMessage;
    }
}
//# sourceMappingURL=red-message.d.ts.map