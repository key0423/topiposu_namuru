$(function () {
  //modalのdataをつけてid名を適宜増やす
  //modalのdata属性の値に＃をつけてid名取得
  $('#js_announce_btn').click(function () {
    $('body').append('<div class="js_overlay"></div>');//#js_announce_btnをクリックでオーバーレイを挿入
    $('.js_overlay').fadeIn('slow');//オーバーレイを表示
    var modal = '#' + $(this).attr('data-modal');
    $(modal).fadeIn('slow');
    //ここまでで表示
    $('.js_overlay').off().click(function () {
      $(modal).fadeOut('slow');
      //コールバック関数でフェードアウトと要素の削除
      $(this).fadeOut('slow', function () {
        $(this).remove();
      });
    });
  });
  $('#js_recruitment_btn').click(function () {
    $('body').append('<div class="js_overlay"></div>');//#js_recruitment_btnをクリックでオーバーレイを挿入
    $('.js_overlay').fadeIn('slow');//オーバーレイを表示
    var modal = '#' + $(this).attr('data-message');
    $(modal).fadeIn('slow');
    //ここまでで表示
    $('.js_overlay').off().click(function () {
      $(modal).fadeOut('slow');
      //コールバック関数でフェードアウトと要素の削除
      $(this).fadeOut('slow', function () {
        $(this).remove();
      });
    });
  });
});

//トップへ戻るボタン
const foot_btn01 = $("#js_foot_btn01");
const foot_btn02 = $("#js_foot_btn02");
foot_btn01.hide();
foot_btn02.hide();

$(function () {
  $(window).on("scroll", function () {
    //300以上にスクロールされた or されている時は50msかけてフェードイン/アウト
    if ($(this).scrollTop() > 100) {
      foot_btn01.fadeIn("50");
      foot_btn02.fadeIn("50");
    } else {
      foot_btn01.fadeOut("50");
      foot_btn02.fadeOut("50");
    }

    bodyHeight = $(document).height();
    scrollBottomPosition = $(window).height() + $(window).scrollTop(); // 現在のスクロール位置の画面下部の高さを取得
    footerHeight = $("footer").innerHeight(); // フッター要素の高さを取得

    // 残りの表示領域がフッターの高さより低ければ
    if (bodyHeight - scrollBottomPosition <= footerHeight) {
      foot_btn01.hide();
      foot_btn02.hide();
    } else {
      foot_btn01.css({
        "position": "fixed",
        "bottom": "72px"
      });
      foot_btn02.css({
        "position": "fixed",
        "bottom": "20px"
      });
    }
  });
});
