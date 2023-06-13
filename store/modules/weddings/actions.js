export default {
  ACT_GET_WEDDINGS(context) {
    // fletch dữ liệu trước khi có api

    const weddings = [
      {
        wedding_id: 1,
        wedding_title: 'Lễ cưới nhà trai',
        wedding_avatar:
          'https://cdn.biihappy.com/ziiweb/website/646efde361c1244f4a0ecb71/c7cdaea8a64e334d6fb533bb092fdfc6.jpeg',
        wedding_map:
          "https://www.google.com/maps/place/21%C2%B003'17.4%22N+105%C2%B036'05.9%22E/@21.0548313,105.6009933,263m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d21.05483!4d105.601637?entry=ttu",
        wedding_time: '9:00 AM 03/12/2023',
        wedding_address: '199 - Thôn 4 - Hương Ngải - Thạch Thất - Hà Nội',
      },

      {
        wedding_id: 2,
        wedding_title: 'Lễ cưới nhà gái',
        wedding_avatar:
          'https://cdn.biihappy.com/ziiweb/website/646efde361c1244f4a0ecb71/galleries/6470c5264982b7db2c090170/small.jpg',
        wedding_map:
          "https://www.google.com/maps/place/21%C2%B003'17.4%22N+105%C2%B036'05.9%22E/@21.0548313,105.6009933,263m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d21.05483!4d105.601637?entry=ttu",
        wedding_time: '9:00 AM 03/12/2023',
        wedding_address: 'Thôn Thạch - Thạch xá -Thạch Thất - Hà Nội',
      },
    ]

    context.commit('SET_LIST_WEDDINGS', weddings)
  },
}
