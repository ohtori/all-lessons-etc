Vue.createApp({
  data: () => ({
    title: 'i\'m a title',
    myHtml: '<h1>Vue app3</h1>',
    person: {
      firstName: 'Ilia',
      lastName: 'Merzliakov',
      age: 27
    },
    items: [1,2,3,4,5,6,7]
  }),
  methods: {
    addItem() {
      this.items.push(this.$refs.myInput.value);
      this.$refs.myInput.value = '';
    }
  },
  computed: {
    evenItems() {
      return this.items.filter(i => i % 2 === 0)
    }
  }
}).mount('#app');
