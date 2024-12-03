/**
 * SiteData object that holds various values that are used to populate things in the <head> tag.
 */
export interface SiteData {
    canonicalUrl: string;
    description: string;
    imageUrl: string;
    title: string;
    type: string;
    children?: any;
}
