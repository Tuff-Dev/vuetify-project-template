<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    :dark="true"
    mobile-breakpoint="960"
    app
    width="260"
    v-bind="$attrs"
  >
    <template v-slot:img="props">
      <v-img
        :gradient="`to bottom, ${barColor}`"
        v-bind="props"
      />
    </template>

    <v-divider class="mb-1" />

    <v-list
      dense
      nav
    >
    </v-list>

    <v-list
      expand
      nav
    >
      <div />

      <template v-for="(item, i) in computedItems">
        <div
          :key="`container-${i}`"
        >
          <base-item-group
            v-if="item.children"
            :key="`group-${i}`"
            :item="item"
          />

          <base-item
            v-else
            :key="`item-${i}`"
            :item="item"
          />
        </div>
      </template>
      <div />
    </v-list>
  </v-navigation-drawer>
</template>

<script>


  export default {
    name: 'AppSideMenu',
    components: {
    },
    props: {

    },

    data: () => ({
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'dashboard',
          to: '/',
        },
        {
          icon: 'mdi-view-dashboard',
          title: 'member-settings',
          to: '/member-settings',
        },
        {
          icon: 'mdi-calendar-star',
          title: 'book-court',
          to: '/book-a-court',
        },
        {
          icon: 'mdi-account-group',
          title: 'member-dir',
          to: '/members',
        },
        {
          icon: 'mdi-pencil',
          title: 'admin-1',
          group: '/admin',
          role: 'ROLE_CLUB_ADMIN',
          children: [
            {
              title: 'manage-members',
              to: 'members',
            },
            {
              title: 'court-management',
              to: 'court-management',
            },
            {
              title: 'manage-box-leagues',
              to: 'box-leagues',
            },
          ],
        },
      ],
    }),

    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      },
      computedItems () {
        return this.items.map(this.mapItem)
      },
    },
    methods: {
      mapItem (item) {
        return {
          ...item,
          children: item.children ? item.children.map(this.mapItem) : undefined,
          title: this.$t(item.title),
        }
      },
    },
  }
</script>

<style lang="sass">
  @import '~vuetify/src/styles/tools/_rtl.sass'

  #core-navigation-drawer
    .v-list-group__header.v-list-item--active:before
      opacity: .24

    .v-btn
      margin-bottom: 20px

    .v-list-item
      &__icon--text,
      &__icon:first-child
        justify-content: center
        text-align: center
        width: 20px

        +ltr()
          margin-right: 24px
          margin-left: 12px !important

        +rtl()
          margin-left: 24px
          margin-right: 12px !important

    .v-list--dense
      .v-list-item
        &__icon--text,
        &__icon:first-child
          margin-top: 10px

    .v-list-group--sub-group
      .v-list-item
        +ltr()
          padding-left: 8px

        +rtl()
          padding-right: 8px

      .v-list-group__header
        +ltr()
          padding-right: 0

        +rtl()
          padding-right: 0

        .v-list-item__icon--text
          margin-top: 19px
          order: 0

        .v-list-group__header__prepend-icon
          order: 2

          +ltr()
            margin-right: 8px

          +rtl()
            margin-left: 8px

  .btn-logout
    display: inline-block
    width: 100%
    margin-bottom: 20px
    text-align: center
    font-size: 1.4em
    color: white

  .current-user
    color: white
    padding-bottom: 10px

</style>
