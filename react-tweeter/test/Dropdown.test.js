import Dropdown from '../src/Dropdown.js';

const users = {
    User1: 'User1',
    User2: 'User2',
    User3: 'User3',
    User4: 'User4',
    User5: 'User5',
}

describe('<Dropdown /> rendering', () => {
    it('should render one <select>', () => {
    let wrapper = mount(<Dropdown user='user1' users={users} setUser={jest.fn()}/>);
        expect(wrapper.find('select')).toHaveLength(1);
    });
});

describe('<Dropdown /> interaction', () => {
    it('should render one >', () => {
    let wrapper = mount(<Dropdown user='User 1' users={users} setUser={jest.fn()}/>);
    expect(wrapper.find('select').props().value).toBe('User 1')
    });
});

describe('<Dropdown /> interaction', () => {
    it('should render the correct default user', () => {
        let wrapper = mount(<Dropdown user='User 1' users={users} setUser={jest.fn()}/>);
        expect(wrapper.find('select').props().value).toBe('User 1')
    });
});
