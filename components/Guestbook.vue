<template>
  <section class="guestbook">
    <div class="container">
      <div class="guestbook_group">
        <form class="guestbook__form">
          <h2 class="guestbook__title font__dancing">Sổ lưu bút</h2>

          <div class="group">
            <input type="text" class="input" placeholder="Tên của bạn *" />
          </div>
          <div class="group">
            <input type="email" class="input" placeholder="E-mail" />
          </div>
          <div class="group">
            <textarea
              rows="3"
              class="textarea"
              placeholder="Nhập lời chúc của bạn *"
            ></textarea>
          </div>

          <div class="group">
            <button class="btn_save">Gửi lời chúc</button>
          </div>

          <div class="group__footer">
            <h3 class="ceo__title">CEO của Biihappy</h3>

            <p class="ceo__info">
              "Một cuộc hôn nhân thành công đòi hỏi phải yêu nhiều lần, và luôn
              ở cùng một người" - Chúc cho hai bạn sẽ có được một cuộc hôn nhân
              viên mãn, trăm năm hạnh phúc!
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import '~/assets/scss/components/CM_Guestbook.scss'

export default {
  name: 'QuestBook',
}
</script>
