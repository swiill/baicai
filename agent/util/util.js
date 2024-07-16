
/** 日期格式化 yyyy-mm-dd
 *  val:传入的日期，默认当天
 *  num:传入的日期+num 天后的时间
 * 
 * 
 */
export const getFormatDate = (num = 0, val) => {
	if(val){
		val=String(val).replace(/-/g, '/');
	}
	let date = isNaN(Date.parse(val)) ? new Date(new Date().getTime() + num * 8.64e7) : new Date(new Date(val).getTime() +
		num * 8.64e7);
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	return year + "-" + month + "-" + day;
}