function initialState() {
    return {
        allData: [],
        all: [],
        countryInfo: null,
        relationships: {

        },
        query: {},
        loading: false
    }
}

const getters = {

    data: state => {
        let rows = state.all

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order)
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit)
    },
    allData: state => state.all,
    countryInfo: state => state.countryInfo,
    total: state => state.all.length,
    loading: state => state.loading,
    relationships: state => state.relationships
}

const actions = {
    fetchData({ commit, state }, cId) {
        commit('setLoading', true)

        axios.get('/api/v1/getCities/' + cId)
            .then(response => {
                commit('setData', response.data.data)
            })
            .catch(error => {
                message = error.response.data.message || error.message
                commit('setError', message)
                console.log(message)
            })
            .finally(() => {
                commit('setLoading', false)
            })
    },
    destroyData({ commit, state }, id) {
        axios.delete('/api/v1/cities/' + id)
            .then(response => {
                commit('setAll', state.all.filter((item) => {
                    return item.id != id
                }))
            })
            .catch(error => {
                message = error.response.data.message || error.message
                commit('setError', message)
                console.log(message)
            })
    },
    setQuery({ commit }, value) {
        commit('setQuery', purify(value))
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setAll(state, items) {
        state.all = items
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    setQuery(state, query) {
        state.query = query
    },
    setData(state, data) {
        state.all = data.cities;
        state.countryInfo = data.country;
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}