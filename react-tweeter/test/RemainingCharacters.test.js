import RemainingCharacters from '../src/RemainingCharacters.js';

describe('<RemainingCharacters /> rendering', () => {
    it('renders', () => {
        let wrapper = shallow(<RemainingCharacters />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render one <p>', () => {
        let wrapper = mount(<RemainingCharacters />);
        expect(wrapper.children('p')).toHaveLength(1);
    });

    it('should render characters remaining given text in text field', () => {
        let wrapper = mount(<RemainingCharacters charCount={30}/>);
        expect(wrapper.text()).toEqual('Characters left: 70');
    });

    it('should render negative number if text exceeds 100 charaters', () => {
        let wrapper = mount(<RemainingCharacters charCount={101}/>);
        expect(wrapper.text()).toEqual('Characters left: -1');
    });
});

