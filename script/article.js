'use strict';

let articles = [];

function Article (rawDataObj) {
    this.author = rawDataObj.author;
    this.urlLink = rawDataObj.urlLink;
    this.title = rawDataObj.title;
    this.category = rawDataObj.category;
    this.body = rawDataObj.body;
    this.publishedOn = rawDataObj.publishedOn;
}

Article.prototype.toHtml = function() {
    let template = Handlebars.compile($('#article-template').html());
    this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
    this.publishedStatus = this.publishedOn ? `published ${this.daysAgo} days ago` : '(draft)';
    if(this.publishedOn) {
        this.publishStatus = `published ${this.daysAgo} days ago`;
    } else {
        this.publishStatus = '(draft)';
    }
    return template(this);
};

rawData.forEach(articleObject => {
    articles.push(new Article(articleObject));
});
