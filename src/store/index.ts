import { createStore } from "vuex";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/../firebaseInit";
import { bdInterface } from "@/interface/bdInterface";

export default createStore({
  state: {
    bdsList: [] as any,
    showNewForm: false,
    dataLoaded: false,
    mainColor: "#c493fc",
  },
  getters: {
    getbdsList: (state) => {
      return state.bdsList;
    },
    getShowNewForm: (state) => {
      return state.showNewForm;
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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    setBds(state, bds) {
      state.bdsList = bds;
      state.dataLoaded = true;
    },
    newbd(state, bd: bdInterface) {
      state.bdsList.push(bd);
    },
    deletebd(state, id) {
      console.log("commited " + id);
      state.bdsList = state.bdsList.filter((bd: bdInterface) => bd.id !== id);
      console.log(state.bdsList);
    },
  },
  actions: {
    async getBds({ commit }) {
      const bdsCol = collection(db, "bds");
      const bdsSnapshot = await getDocs(bdsCol);
      const bdsList = bdsSnapshot.docs.map((doc) => doc.data());
      const bds = bdsList;
      commit("setBds", bds);
      return true;
    },
  },
  modules: {},
});
