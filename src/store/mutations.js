import * as types from './mutation-types'

const matutaions = {
	[types.SET_DATALIST](state, dataList){
		state.dataList = dataList
	},
	[types.SET_ITEMDATA](state, itemData){
		state.itemData = itemData
	}
}
export default matutaions