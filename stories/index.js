import { storiesOf } from '@storybook/html';
import 'sling-web-component-button';

storiesOf('Button', module)
  .add('with text', () =>
    '<sling-button class="btn">Hello World</sling-button>')
  .add('with emoji', () => {
    const button = document.createElement('sling-button');
    button.innerText = '😀 😎 👍 💯';
    return button;
  });
