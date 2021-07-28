import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

export const componentTransition = trigger('componentTransition',[
  state('*', style({
      opacity: 1
    })
  ),
  transition('void => *', [
    style({
      opacity: 0
    }),
    animate(300)
  ]),

  // transition('* => void', [
  //   animate(500, style({
  //     opacity: 0
  //   }))
  // ])
])

