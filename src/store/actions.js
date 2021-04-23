/*
包含n个用于间接更新状态的方法的对象模块
 */
import { MEDO, YOUDO, HEDO, THINKS } from './mutation-types'

export default {
    youdo({ commit }, ydo) {
        commit(YOUDO, { ydo }) // 传递给mutation的是一个包含数据的对象
    },
    medo({ commit }, mdo) {
        commit(MEDO, { mdo })
    },
    hedo({ commit }, hdo) {
        commit(HEDO, { hdo })
    },
    thinks({ commit }, think) {
        commit(THINKS, { think })
    }
}