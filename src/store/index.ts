import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseInit";
import { bdInterface } from "@/interface/bdInterface";

export default createStore({
  state: {
    bdsList: [] as any,
    showNewForm: false,
    dataLoaded: false,
    mainColor: "#b7daef",
    showLoginForm: false,
  },
  getters: {
    getbdsList: (state) => {
      return state.bdsList;
    },
    getShowNewForm: (state) => {
      return state.showNewForm;
    },
    getShowLoginForm: (state) => {
      return state.showLoginForm;
    },
    dataLoaded: (state) => {
      return state.dataLoaded;
    },
    mainColor: (state) => {
      return state.mainColor;
    },
  },
  mutations: {
    toggleNewForm(state) {
      state.showNewForm = !state.showNewForm;
    },
    toggleLogin(state) {
      state.showLoginForm = !state.showLoginForm;
    },
    setBds(state, bds) {
      state.bdsList = bds;
      state.dataLoaded = true;
    },
    newbd(state, bd: bdInterface) {
      state.bdsList.push(bd);
    },
    deletebd(state, id) {
      state.bdsList = state.bdsList.filter((bd: bdInterface) => bd.id !== id);
    },
  },
  actions: {
    async getBds({ commit }) {
      const bdsCol = collection(db, "bds");
      const bdsSnapshot = await getDocs(bdsCol);
      const bdsList = bdsSnapshot.docs.map((doc) => doc.data());
      const bds = bdsList;
      commit("setBds", bds);
      return 'i did';
    },
  },
  modules: {},
});
