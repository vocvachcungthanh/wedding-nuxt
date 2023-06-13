<template>
  <div class="couple" id="couple" :style="bgCouples">
    <div class="container">
      <div class="couple-content">
        <h2 class="couple__title font__dancing">
          <span class="couple__name"> Cô dâu & Chú rể </span>
        </h2>

        <div class="couple__box">
          <CoupleItem
            :name="couples[0].couple_name"
            :avatar="couples[0].couple_avatar"
            :desc="couples[0].couple_desc"
            :facebook="couples[0].couple_facebook"
            :instagram="couples[0].couple_instagram"
          />
          <span class="icon__couple">
            <font-awesome-icon icon="fa-solid fa-heart-pulse" />
          </span>
          <CoupleItem
            :name="couples[1].couple_name"
            :avatar="couples[1].couple_avatar"
            :desc="couples[1].couple_desc"
            :facebook="couples[1].couple_facebook"
            :instagram="couples[1].couple_instagram"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import CoupleItem from './CoupleItem.vue'

export default {
  name: 'CoupleGroup',

  components: {
    CoupleItem,
  },

  computed: {
    couples() {
      return this.getListCouples.couple_items || []
    },

    bgCouples() {
      return `background-image:url(${this.getListCouples.couple_bg})`
    },

    ...mapGetters({
      getListCouples: 'GET_LIST_COUPLES',
    }),
  },

  created() {
    this.actGetCouples()
  },

  methods: {
    ...mapActions({
      actGetCouples: 'ACT_GET_COUPLES',
    }),
  },
}
</script>

<style lang="scss">
.couple {
  position: relative;

  background: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  padding: 7rem 0 12rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 79%);
    z-index: 1;
  }

  .couple-content {
    position: relative;
    z-index: 2;
    color: #fff;
    .couple__title {
      font-size: 5rem;
      font-weight: bold;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .couple__box {
      padding: 10rem 0 0;
      display: flex;
      justify-content: center;
      align-items: center;

      column-gap: 5rem;

      .couple__item {
        flex: 2;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .couple__desc {
          background-color: rgba(255, 255, 255, 0.89);
          border-radius: 10px;
          min-height: 150px;
          flex: 1;
          transform: translateX(100px);
          margin-left: -100px;
          padding: 15px 120px 15px 15px;
          box-shadow: 0px 0px 0px 8px rgba(255, 255, 255, 0.4588235294);
          color: #000;
          display: flex;
          flex-direction: column;
          text-align: justify;

          .couple__link {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-top: auto;

            img {
              width: 24px;
              height: 24px;
            }
          }
        }

        &:hover {
          .couple__avatar {
            .couple__content {
              background-color: rgb(0 0 0 / 57%);
              transform: translate(-50%, -50%) scale(1);
              transition: 0.7s all;
              opacity: 1;

              .couple__name {
                transform: scale(1);
                transition: 0.7s all;
              }
            }
          }
        }

        .couple__avatar {
          flex-shrink: 0;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          position: relative;
          padding: 10px;

          img {
            border-radius: 50%;
          }

          &::before {
            content: '';
            position: absolute;
            width: calc(100% + 25px);
            height: calc(100% + 25px);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: url('~/assets/images/bg_couple.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            animation: rotate_ 10s infinite;
            animation-timing-function: linear;

            filter: #fff;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .couple__content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) scale(0);
            width: 0;
            height: 0;
            z-index: 2;
            border-radius: 50%;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            width: calc(100% - 25px);
            height: calc(100% - 25px);
            font-size: 3rem;
            font-weight: bold;
            opacity: 0;

            transition: 0.7s all;
            cursor: pointer;

            .couple__name {
              transform: scale(0);
              transform: scale(1);
              transition: 0.7s all;
              font-size: 8.5rem;
            }
          }
        }
      }

      .icon__couple {
        font-size: 5rem;

        & + .couple__item {
          .couple__desc {
            order: 2;

            transform: translateX(-100px);
            margin-left: 0px;
            margin-right: -100px;
            padding: 15px 15px 15px 120px;
          }
        }
      }
    }
  }
}
</style>
