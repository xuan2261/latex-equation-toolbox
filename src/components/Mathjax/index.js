import { h, Component } from 'preact'
import { connect } from 'react-redux'

import MathField from './MathField'
import { simplify } from './solve'
import AlgebraLatex from 'algebra-latex'

import style from './style.sass'

@connect(store => ({
  latex: store.input.latex
}))
export default class Mathjax extends Component {
  render (props) {
    let mathEl = 'Empty math'
    let solution = ''
    let solutionEl = null

    if (props.latex) {
      mathEl = <MathField latex={props.latex} />

      try {
        solution = simplify(props.latex)
        solutionEl = <MathField latex={solution} />
      } catch (e) {
        solution = e.message
        const asciiMath = new AlgebraLatex(props.latex).toMath()
        solutionEl = (
          <div className={style.center}>
            {solution}<br />
            <i>{asciiMath}</i>
          </div>)
      }
    }

    return (
      <div className={style.container}>
        <div>
          <div className={style.header}>Math:</div> {mathEl}
          <div className={style.header}>Simplified:</div> {solutionEl}
        </div>
      </div>
    )
  }
}
