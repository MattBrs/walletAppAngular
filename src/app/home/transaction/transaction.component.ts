import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from "../../shared/transaction.model";
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
  animations: [
    trigger('transAnimation', [
      state('in', style({
        transform: 'translateX(0px)',
        opacity: '1'
      })),
      transition('void => *', [
        style({
          transform: 'translateX(100px)',
          opacity: '0'
        }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ]),
      // transition('void => *', [
      //   query(':leave', [
      //     stagger(100,[
      //       style({
      //         opacity: 0
      //       }),
      //       animate(300)
      //     ]),
      //   ]),
      // ]),
    ])
  ]
})
export class TransactionComponent implements OnInit {
  @Input() trs: Transaction;

  constructor() { }

  ngOnInit(): void {
  }

}
