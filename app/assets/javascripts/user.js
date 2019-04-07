$(function() {

let search_list = $("#chat-group-users-add-list");
let add_list = $("#chat-group-users");
  function appendUser(user){
    let html = `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${user.name}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-name="${user.name}">追加</a>
        <a data-user-id=${user.id}></a>
        </div>
    `
    search_list.append(html);
  }//インクリメンタルサーチ用の関数



  $(document).on("click", ".chat-group-user__btn--add",function(){
    let html = `<div class='chat-group-user clearfix js-chat-member' >
  <input name='group[user_ids][]' type='hidden' value="${$(this).next().data('user-id')}">
  <p class='chat-group-user__name padding-left'>${$(this).data('user-name')}</p>
  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-name="${$(this).data('user-name')}">削除</a>
    <a data-user-id=${$(this).next().data('user-id')}></a>
</div>`
  $(this).parent().remove();
  add_list.append(html);
  });//グループ登録画面へ移動


  $(document).on("click", ".chat-group-user__btn--remove",
    function(){
          let html = `<div class="chat-group-user clearfix">
        <p class="chat-group-user__name">${$(this).data('user-name')}</p>
        <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-name="${$(this).data('user-name')}">追加</a><a data-user-id=${$(this).next().data('user-id')}></a>
        </div>`
    $(this).parent().remove();
    search_list.append(html);
    });//選択場所に戻す

  $(document).on("click", ".remove-forever",
    function(){
    $(this).parent().remove();
    });//グループから削除


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
