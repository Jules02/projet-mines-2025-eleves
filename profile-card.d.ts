import { LitElement } from 'lit';
/**
 * Profile Card
 *
 */
export declare class ProfileCard extends LitElement {
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
}
declare global {
    interface HTMLElementTagNameMap {
        'profile-card': ProfileCard;
    }
}
//# sourceMappingURL=profile-card.d.ts.map