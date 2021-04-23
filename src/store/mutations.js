/*
包含n个由action触发，用于直接更新状态的方法的对象模块
 */
import { MEDO, YOUDO, HEDO, THINKS } from './mutation-types'

export default {
    [YOUDO](state, { ydo }) {
        state.doit = ydo;
    },
    [MEDO](state, { mdo }) {
        state.doit = mdo;
    },
    [HEDO](state, { hdo }) {
        state.doit = hdo;
    },
    [THINKS](state, { think }) {
        state.doit = think;
    }
}