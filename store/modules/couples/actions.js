export default {
  ACT_GET_COUPLES(context) {
    // fetch dữ liệu trươc khi có api

    const couples = {
      couple_bg:
        'https://cdn.biihappy.com/ziiweb/website/646efde361c1244f4a0ecb71/templates/62ef3cdcf106ea77bb276cc5/64c6bbab5a845787773fb4c9078dea99.jpg',
      couple_items: [
        {
          coule_id: 1,
          couple_name: 'Hữu Thành',
          couple_avatar:
            'https://cdn.biihappy.com/ziiweb/website/646efde361c1244f4a0ecb71/19c3f0f857ecc6c1f0ec8b564edbbc1a.jpeg',
          couple_desc:
            'Tháng sáu rồi mình về với anh nha Đồng ý đi rồi xe hoa đưa đón Váy cưới xinh đủ màu em lựa chọn Trắng, xanh, hồng, nhỏ, lớn…miễn em ưng.',
          couple_facebook: 'https://www.facebook.com/vocvachcungthanh',
          couple_instagram: 'https://www.instagram.com/thanh_dev/',
        },

        {
          coule_id: 2,
          couple_name: 'Thủy Tiên',
          couple_avatar:
            'https://cdn.biihappy.com/ziiweb/website/646efde361c1244f4a0ecb71/c327b4c061ea294eac26a89ecb1e45a9.jpeg',
          couple_desc:
            'Em bước bên anh cười rạng rỡ thật xinh, Anh khẽ bảo "Hôm nay em đẹp nhất!" Váy trắng tinh khôi, một ngày trời rót mật. "Em là cô dâu hạnh phúc nhất trên đời…!"',
          couple_facebook:
            'https://www.facebook.com/profile.php?id=100088781295596',
          couple_instagram: 'https://www.instagram.com/thanh_dev/',
        },
      ],
    }

    context.commit('SET_LIST_COUPLES', couples)
  },
}
