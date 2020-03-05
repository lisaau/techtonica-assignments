import Messages from '../src/Messages.js';

function createTestProps(props) {
    return {
        messages: [],
        ...props,
    };
}

function createTestMessage(message) {
    let date = new Date();
    return {
            date,
            key: date.toString(),
            text: 'default message',
            user: 'user',
            ...message
        }
}

describe('<Messages /> rendering', () => {
    it('should render one <div> if no messages', () => {
        let props = createTestProps();
        let wrapper = mount(<Messages {...props}/>);
        expect(wrapper.children('div')).toHaveLength(1);
    });

    describe('one message', () => {
        it('should render a <ul>', () => {
            let message = createTestMessage();
            // console.log(message);
            let wrapper = mount(<Messages messages={[message]}/>);
            expect(wrapper.find('ul')).toHaveLength(1);
        });
        it('should render one <li>', () => {
            let messages = [createTestMessage({key:1}), createTestMessage({key:2}), createTestMessage({key:3})];
            let wrapper = mount(<Messages messages={messages}/>);
            expect(wrapper.find('li')).toHaveLength(3);
        });
    });
});

