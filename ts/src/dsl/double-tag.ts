import * as a from "./abstracts"
import * as single from "./single-tag"

export const literals = [
    'a',
    'abbr',
    'acronym',
    'address',
    'applet',
    'article',
    'aside',
    'audio',
    'b',
    'basefont',
    'bdi',
    'bdo',
    'big',
    'blockquote',
    'body',
    'button',
    'canvas',
    'caption',
    'center',
    'cite',
    'code',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'font',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'html',
    'i',
    'iframe',
    'ins',
    'kbd',
    'label',
    'li',
    'main',
    'map',
    'mark',
    'meter',
    'nav',
    'noframes',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'picture',
    'pre',
    'progress',
    'q',
    'rp',
    'rt',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'small',
    'span',
    'strike',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'tt',
    'u',
    'ul',
    'var',
    'video',
] as const

type NeverIntersectionChecker = (typeof literals[number]) 
    & (typeof single.literals[number])

export type T = a.render.T<typeof literals[number]>

export const renderer: T = {
} as T
literals.forEach(l => {
    renderer[l] = (params, content) => {
        return `<${l}${a.record.render(params)}>${content}</${l}>`
    }
})