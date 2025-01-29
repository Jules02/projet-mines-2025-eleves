import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class RedMessage extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The text content of the message
     */
    author_name: string;
    /**
     * The text content of the message
     */
    author_username: string;
    /**
     * The text content of the message
     */
    content: string;
    /**
     * The text content of the message
     */
    image_src: string;
    /**
     * The date when the message was published
     */
    likes: number;
    /**
     * The date when the message was published
     */
    date: string;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name: string): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'red-message': RedMessage;
    }
}
//# sourceMappingURL=red-message.d.ts.map