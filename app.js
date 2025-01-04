const appObj = {
  data() {
    return {
      courseGoalStart: `Finish course and `,
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    courseGoalEnd() {
      if (Math.random() < 0.5) {
        return "learn Vue.";
      } else {
        return "master Vue.";
      }
    },
  },
};
const app = Vue.createApp(appObj);

app.mount("#user-goal");
