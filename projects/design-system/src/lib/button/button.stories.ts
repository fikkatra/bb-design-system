import { Meta, Story } from '@storybook/angular/types-6-0';
import { ButtonStyle } from './button-style';

import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonComponent> = (args) => ({
  props: args,
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  label: 'Hello Bytes & Booze',
  buttonStyle: ButtonStyle.Primary,
};

export const Ghost = Template.bind({});
Ghost.args = { ...Primary.args, buttonStyle: ButtonStyle.Ghost };
