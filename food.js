// TODO
// dynamic sections for prep and buy
$(document).ready(() => {

    addSection('Buy', 'buy', true);
    addSection('Prep', 'prep', false);
});

function addSection(title, cssClass, shouldReplacePrep) {

    const items = $('li.' + cssClass);

    if (items.length === 0) return;

    const html = [`<h2 class="comments">${title}</h2><ul>`];

    const toReplace = ['chopped', 'defrosted', 'diced'];

    items.each((i, e) => {

        let text = $(e).html();
        if (shouldReplacePrep) {
            for (var i in toReplace) {
                text = text.replace(toReplace[i], '');
            }
        }

        html.push('<li>', text, '</li>');
    });
    html.push('</ul>');

    $('body').append(html.join(''));
}