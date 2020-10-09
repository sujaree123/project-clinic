export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      sortable: false,
      value: 'name'
    },
    { text: 'Lastname', value: 'lastname' },
    { text: 'Date', value: 'date' },
    { text: 'PhoneNumber', value: 'phonenumber' }
  ]
})
export const mutations = {
  input (state, { name, lastname, date, phonenumber }) {
    state.data.push({ name, lastname, date, phonenumber })
  }
}
export const getters = {
  data (state) {
    return state.data
  }
}
