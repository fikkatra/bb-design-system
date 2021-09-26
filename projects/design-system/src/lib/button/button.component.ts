import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonStyle } from './button-style';

@Component({
  selector: 'ds-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label!: string;
  @Input() buttonStyle: ButtonStyle = ButtonStyle.Primary;

  @Output() spaceKeyUp = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
}
