import TextareaInput from '../src/TextareaInput';

describe('<TextareaInput /> rendering', () => {
    it('should render one <label>', () => {
        let wrapper = shallow(<TextareaInput newPost='test post' setNewPost={jest.fn()} setNewPost={jest.fn()}/>);
            expect(wrapper.find('label')).toHaveLength(1);
    });

    it('should render one <input>', () => {
        let wrapper = mount(<TextareaInput newPost='test post' setNewPost={jest.fn()} setNewPost={jest.fn()}/>);
        expect(wrapper.find('input')).toHaveLength(1);
    });
})
