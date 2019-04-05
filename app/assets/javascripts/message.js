$(function(){
  function buildHTML(message){
    let html = `<div class="main--contents__wrap">
                  <div class="main--contents__wrap__name-date__name">
                    ${message.user_name}
                  </div>
                  <div class="main--contents__wrap__name-date__date">
                    ${message.created_at}
                  </div>
                </div>`;
    if (message.content != null){
      html = html + `<div class="main--contents__wrap-text">${message.content}</div>`;
    }
    if (message.image != null){
      html = html + `<img class="image" src="${message.image}">`;
    }
    return html;
  }

  $('.jquery-api__form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let href = $(this).attr('action');
    console.log(href)
    $.ajax({
      url: href,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.main--contents').append(html)
      $('.jquery-api__text').val('')
    })
    .fail(function(){
      alert('error');
    })
    .always(() => {
      $(".bottom-button").removeAttr("disabled");
    })
  })
})
