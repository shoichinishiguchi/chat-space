$(function(){
  function buildHTML(message){
    let html = `<div class="main--contents__wrap" data-msgid="${message.id}">
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



  // last_message_id.data('message-id')

last_message_id = $('.main--contents__wrap').last().data('msgid')


  let reloadMessages = function(){

    $.ajax({
      url: '/groups/:group_id/api/messages',
      type: "get",
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      console.log('success');
    })
    .fail(function(){
      console.log('error');
    });

  }














  $('.jquery-api__form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let href = $(this).attr('action');
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
      $('.main--contents').animate({ scrollTop: $('.main--contents')[0].scrollHeight}, 1000);
      $(document).ready(function(){

  });
    })
    .fail(function(){
      alert('error');
    })
    .always(() => {
      $(".bottom-button").removeAttr("disabled");
    })
  })
})
