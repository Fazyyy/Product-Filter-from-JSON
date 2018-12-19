$.getJSON("https://raw.githubusercontent.com/Fazyyy/Fazyyy.github.io/master/data/product.json", function(posts = []) {
  posts.forEach(post => appendToPosts(createPost(post)))
});

function appendToPosts(html) {
  $(".posts").append(html);
}

function createPost(post) {
  return `<li
            data-price='${post.price}' 
            data-reviews='${post.reviews}'
            data-name='${post.name}'
            data-saving='${post.was_price}'>
              <div class='spacer'>
                <img src='./img/${post.img}.jpg' />
                <h2>${post.name}</h2>
                <p>£<span class='price'>${post.price}</span></p>
                ${hasPrice(post)}
                ${hasReviews(post)}
         </li>`;
}

function hasPrice(post) {
  return post.was_price !== false ?
    `<p class='red'>£<span class='strike'>${post.was_price}</span></p>` : '<p>&nbsp;</p>';
}

function hasReviews(post) {
  return post.reviews !== false ?
    `<p class='reviews'>${post.reviews}% reviews score</p><p><a href='#' class='basket'>Add To Basket</a></p>` :
    `<p>&nbsp;</p><p><a href='#' class='basket'>Add To Basket</a></p>`;
}

$( "#price" ).click(function() {
  $(function() {
    $(".posts li").sort(sort_li).appendTo('.posts');
    function sort_li(a, b) {
      return ($(b).data('price')) < ($(a).data('price')) ? 1 : -1;
    }
  });
});

$( "#reviews" ).click(function() {
  $(function() {
    $(".posts li").sort(sort_li).appendTo('.posts');
    function sort_li(a, b) {
      return ($(b).data('reviews')) > ($(a).data('reviews')) ? 1 : -1;
    }
  });
});

$( "#name" ).click(function() {
  $(".posts li").sort(sort_li).appendTo('.posts');
  function sort_li(a, b){
      return ($(b).data('name')) < ($(a).data('name')) ? 1 : -1;    
  }
});

$( "#saving" ).click(function() {
    $(function() {
      $(".posts li").sort(sort_li).appendTo('.posts');
      function sort_li(a, b) {
        return ($(b).data('saving') - $(b).data('price')) > ($(a).data('saving') - $(a).data('price')) ? 1 : -1;
      }
    });
});