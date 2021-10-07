// TODO
// dynamic sections for prep and buy
$(document).ready(() => {

    addSection('Buy', 'buy', true);
    addSection('Prep', 'prep', false);
});

function addSection(title, cssClass, shouldReplacePrep) {

    const items = $(`li.${cssClass},span.${cssClass}`);

    if (items.length === 0) return;

    const html = [`<h2>${title}</h2><ul>`];

    items.each((i, e) => {

        let text = $(e).html();
        if (shouldReplacePrep) {
            // Remove prep after the ingredient
            text = text.replace(/<\/em>(.*)/, '</em>');
        }

        html.push('<li>', text, '</li>');
    });
    html.push('</ul>');

    $('body').append(html.join(''));
}