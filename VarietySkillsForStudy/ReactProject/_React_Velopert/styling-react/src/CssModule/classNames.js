import classNames from 'classname';

classNames('one', 'two'); // = 'one two'
classNames('one', {two: true}); // = 'one two'
classNames('one', {two: false}); // = 'one'
classNames('one', ['two', 'three']); // = 'one two three'

const myClass = 'hello';
classNames('one', myClass, { myCondition: true}); // = 'one hello myCondition'


const MyConponent = ({highlighted, theme}) =>{
    <div className={classNames('MyComponent', {highlighted}, theme)}>Hello</div>
}

//original ver.
const MyConponent = ({highlighted, theme}) =>{
    <div className={`'MyComponent' ${theme} ${highlighted}? ' highlighted : ''}`}>Hello</div>
}