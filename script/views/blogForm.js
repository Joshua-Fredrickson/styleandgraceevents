'use strict';


article = new Article({
    author: $('#blog-author').val(),
    title: $('#blog-title').val(),
    category: $('#blog-category').val(),
    body: $('#blog-body').val(),
    publishedOn: $('#blog-published:checked').length ? new Date() : null
  });

