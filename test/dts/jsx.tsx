import { h, Component } from '../..';

// should support built in dom element
{
  // $ExpectType Element
  (<div></div>);
}

// should support unknown elements
{
  // $ExpectType Element
  (<my-custom-element></my-custom-element>);
}

// should support built in html attributes
{
  // $ExpectType Element
  (<div style='foo'></div>);
}

// should error on invalid attributes
{
  // $ExpectError has no properties in common with type 'HTMLAttributes'
  (<div foo=''></div>);
}

// should support custom data-* attributes
{
  // $ExpectType Element
  (<div data-foo={ 'custom' }></div>);
}

// should error on camel case events
{
  // $ExpectError has no properties in common with type 'HTMLAttributes'
  (<div onClick={()=>{}}></div>);
}

// should support all lower case events
{
  // $ExpectType Element
  (<div onclick={()=>{}}></div>);
}

// should support className attribute
{
  // $ExpectType Element
  (<div className={ '' }></div>);
}

// should support class attribute
{
  // $ExpectType Element
  (<div class={ '' }></div>);
}

// should support nested dom elements
{
  // $ExpectType Element
  (
    <ul>
      <li></li>
    </ul>
  );
}

// should support nested array dom elements
{
  // $ExpectType Element
  (
    <ul>
      <li></li>
      <li></li>
    </ul>
  );
}

// should support nested string node elements
{
  // $ExpectType Element
  (
    <span>
      foo
    </span>
  );
}



// should support attributes with static types
{
  const MyComponent: Component<{ test: string }> = () => (<div />);
  // $ExpectType Element
  (<MyComponent test='foo' />);
}

// should support attributes with dynamic value
{
  const MyComponent: Component<{ test: string }> = () => (<div />);
  // $ExpectType Element
  (<MyComponent test={ 'foo' } />);
}

// should error on missing not optional attribute
{
  const MyComponent: Component<{ test: string }> = () => (<div />);
  // $ExpectError Property 'test' is missing
  (<MyComponent />);
}

// should error on attribute type mismatch
{
  const MyComponent: Component<{ test: string }> = () => (<div />);
  // $ExpectError is not assignable to type 'string'
  (<MyComponent test={ 2 } />);
}

// should support optional attribute (not-given)
{
  const MyComponent: Component<{ test?: string }> = () => (<div />);
  // $ExpectType Element
  (<MyComponent />);
}

// should support optional attribute (given)
{
  const MyComponent: Component<{ test?: string }> = () => (<div />);
  // $ExpectType Element
  (<MyComponent test={ 'foo' } />);
}

// should support optional non string attribute
{
  const MyComponent: Component<{ test?: boolean }> = () => (<div />);
  // $ExpectType Element
  (<MyComponent test={ false } />);
}

// should error on optional attribute type mismatch
{
  const MyComponent: Component<{ test?: boolean }> = () => (<div />);
  // $ExpectError Types of property 'test' are incompatible.
  (<MyComponent test={ 2 } />);
}

// should support nesting custom component
{
  const MyComponent: Component<{ test?: boolean }> = () => (<div />);
  // $ExpectType Element
  (
    <div>
      <MyComponent test={ false } />
    </div>
  );
}

// should support nesting custom component in custom component
{
  const MyComponent: Component<{}> = () => (<div />);
  // $ExpectType Element
  (
    <MyComponent>
      <MyComponent />
    </MyComponent>
  );
}
