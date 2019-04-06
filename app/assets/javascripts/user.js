$(function() {

let search_list = $("#chat-group-users-add-list");
let add_list = $
  function appendUser(user){
    let html = `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}", data-user-name="${user.name}">追加</a>
        </div>
    `
    search_list.append(html);
  }

  function addMember(class){

  }


  $(document).on("click", ".chat-group-user__btn--add",function(){
    $(this).parent().remove();

    // $(this).addClass("chat-group-user__btn--remove");
    // $(this).html("削除");


  });

  function appendErrMsgToHTML(){
    let html = '<div class="error">一致するユーザーが見つかりません</div>'
    search_list.append(html);
  }

  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: {keyword: input},
      dataType: 'json'
    })
    .done(function(user){
      $("#chat-group-users-add-list").empty();
      if(user.length !== 0 &&input !== "" ){
        user.forEach(function(user){
          appendUser(user);
        });
      }
      else if(input == ""){
        $("#chat-group-users-add-list").empty();
      }
      else{
        appendErrMsgToHTML()
      }
    })
    .fail(function(){
      aleart('検索に失敗しました');
    })
  });
});
