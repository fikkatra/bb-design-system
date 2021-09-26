import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyle } from './button-style';

/**
 * A button in the Bytes & Booze branding style.
 */
@Component({
  selector: 'ds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  /**
   * The label to display on the button.
   */
  @Input() label!: string;
  /**
   * The style of the button
   */
  @Input() buttonStyle: ButtonStyle = ButtonStyle.Primary;

  /**
   * Fired when the space key is tabbed.
   */
  @Output() spaceKeyUp = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
