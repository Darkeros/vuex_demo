import axios from 'axios'

export function getDateList() {
	const url = 'http://106.14.94.52/plist/get'
	
	const data = {
		pageSize: 10,
		pageIndex: 1,
		catagoryCd: 'BLOAN',
		cityCd: '上海市'
	}

	return axios.get(url, {
		params: data
	}).then((res) => {
		return Promise.resolve(res.data.data)
	})
}