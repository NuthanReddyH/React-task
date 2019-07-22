import configureMockStore from 'redux-mock-store'

const addNewCompany = (data) => ({
  type: 'ADD_COMPANY',
  data
});

// Create a mock store
const mockStore = configureMockStore()
const store = mockStore({})
describe('action creators', () => {
  it('creates ADD_COMPANY when adding a company was successful', () => {
    store.dispatch(addNewCompany(
      {
        companyName: 'Amazon',
        address: '410 Terry Ave Seattle,WA',
        revenue: '100000',
        employees: [],
        phone: '(022)-266-0000'
      }
    ));
    expect(store.getActions()).toMatchSnapshot();
  });
});
