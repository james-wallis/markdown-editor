import MarkdownIt from 'markdown-it';


export const removeMarkdownFromString = (str) => str.replace(/#|\s{1,}/g, '');

export const convertMarkdownToHTML = (markdown) => {
    const md = new MarkdownIt();
    const html = md.render(markdown);
    console.log(html);
};
