export default {
	renKou: {
		data: [
			{
				url: "./static/doc/miss_value.py",
				name: "人口基本信息表信息缺失验证",
				sql: "select table_name, column_name, num_nulls \n" +
				"from ALL_TAB_COLUMNS \n" +
				"where table_name = 'DWI_MDM_PPU_BASE_INFO'\n"
			},
			{
				url: "./static/doc/query.py", name: "证件类型验证", sql: "select  count(CARD_TYPE_ID )\n" +
				"from  DWI_MDM_PPU_BASE_INFO\n" +
				"where CARD_TYPE_ID not in ( '1','2','3','4','5','6','9')\n"
			},
			{
				url: "./static/doc/query.py", name: "证件号码验证", sql: "select(select count(*) \n" +
				"from  DWI_MDM_PPU_BASE_INFO \n" +
				")- (select count(CARD_NO)\n" +
				"from DWI_MDM_PPU_BASE_INFO\n" +
				"where ( CARD_TYPE_ID = '1' and length(CARD_NO) = 18)\n" +
				"     or (CARD_TYPE_ID = '2' and (length(CARD_NO) = 8 or length(CARD_NO) = 10 or length(CARD_NO) = 11))\n" +
				"     or (CARD_TYPE_ID = '3' and length(CARD_NO) = 12)\n" +
				"     or (CARD_TYPE_ID = '4' and length(CARD_NO) = 6)\n" +
				"     or (CARD_TYPE_ID = '5' and (length(CARD_NO) = 8 or length(CARD_NO) = 9))\n" +
				"     or (CARD_TYPE_ID = '4' and length(CARD_NO) = 9))  from dual\n"
			},
			{
				url: "./static/doc/query.py",
				name: "政治面貌验证",
				sql: "select  count(POLITICS_ID )\n" +
				"from  DWI_MDM_PPU_BASE_INFO\n" +
				"where POLITICS_ID not in ( '1','2','3','4','5','6')\n"
			},
			{
				url: "./static/doc/query.py",
				name: "民族验证",
				sql: "select count(NATION_ID)\n" +
				"from  DWI_MDM_PPU_BASE_INFO\n" +
				"where NATION_ID not in ( '1','2','3','4','5','6','7','8','9','10',\n" +
				"                      '11','12','13','14','15','16','17','18','19','20',\n" +
				"                      '21','22','23','24','25','26','27','28','29','30',\n" +
				"                      '31','32','33','34','35','36','37','38','39','40',\n" +
				"                      '41','42','43','44','45','46','47','48','49','50',\n" +
				"                      '51','52','53','54','55','56','99')\n"
			},
			{
				url: "./static/doc/query.py",
				name: "婚姻状态验证",
				sql: "select count(MARITAL_STATUS)\n" +
				"from DWI_MDM_PPU_BASE_INFO\n" +
				"where MARITAL_STATUS not in ('1','2','3','9')\n"
			},
			{
				url: "./static/doc/query.py",
				name: "文化程度验证",
				sql: "select count(EDUCATION_ID)\n" +
				"from DWI_MDM_PPU_BASE_INFO\n" +
				"where MARITAL_STATUS not in (0,1,2,3,4,5,6,7,8,9)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "籍贯验证",
				sql: "select count( NATIVE_PLACE) \n" +
				"from DWI_MDM_PPU_BASE_INFO\n" +
				"where NATIVE_PLACE not in ('11','12','13','14','15','16','17','18','19','20',\n" +
				"                       '21','22','23','24','25','26','27','28','29','30',\n" +
				"                       '31','32','33','34','35','36','37','38','39','40',\n" +
				"                       '41','42','43','44','45','46','47','48','49','50',\n" +
				"                       '51','52','53','54',\n" +
				"                       '61','62','63','64','65',\n" +
				"                       '71',\n" +
				"                       '81','82')\n"
			},
			{
				url: "./static/doc/query.py",
				name: "户口性质验证",
				sql: "select count(HOUSEHOLD_TYPE_ID) \n" +
				"from DWI_MDM_PPU_BASE_INFO\n" +
				"where HOUSEHOLD_TYPE_ID not in (1,11,12,13,14,15)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "社保号验证",
				sql: "select count(INSURANCE_CARD_NO) \n" +
				"from DWI_MDM_PPU_BASE_INFO\n" +
				"where length(INSURANCE_CARD_NO) != 10\n"
			},
		]
	},
	louDong: {
		data: [
			{
				url: "./static/doc/miss_value.py",
				name: "楼栋基本信息表信息缺失验证",
				sql: "select table_name, column_name, num_nulls \n" +
				"from ALL_TAB_COLUMNS \n" +
				"where table_name = 'DWI_MDM_BUILD_BASE_INFO'\n"
			},
			{
				url: "./static/doc/query.py",
				name: "楼栋名称验证",
				sql: "select count(BUILDING_NAME) from DWI_MDM_BUILD_BASE_INFO where REGEXP_LIKE(BUILDING_NAME,'[[:punct]]+' ）or BUILDING_NAME = '无' "
			},
			{
				url: "./static/doc/query.py",
				name: "楼栋类型验证",
				sql: "select count(BUILDING_TYPE)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILDING_TYPE not in ('1','2','3','4','9')\n"
			},
			{
				url: "./static/doc/query.py",
				name: "楼栋性质验证",
				sql: "select count(BUILDING_KIND)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILDING_KIND not in (1,2,3,4,9)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "楼栋结构验证",
				sql: "select count(BUILDING_STRUCTURE)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILDING_STRUCTURE not in (1,2,3,4,5,6,7,8,9)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "特殊楼栋类型验证",
				sql: "select count(BUILDING_SPECIAL_TYPE)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILDING_SPECIAL_TYPE not in (1,2,3,4,5,6,7,8)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "建筑状态验证",
				sql: "select count(BUILD_STATE)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILD_STATE not in (1,2,3,4,5,9)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "建筑类型验证",
				sql: "select count(BUILD_TYPE)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILD_STATE not in (1,2,3,4,5)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "建筑面积验证",
				sql: "select count(BUILD_AREA)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  BUILD_AREA <= 0\n"
			},
			{
				url: "./static/doc/query.py",
				name: "设计用途验证",
				sql: "select count(DESIGN_APPLI)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  DESIGN_APPLI not in (1,2,3,4,5,6,7,8,9)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "使用情况验证",
				sql: "select count(USE_STATE)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  USE_STATE not in (1,2,3,4,5,9)\n"
			},
			{
				url: "./static/doc/query.py",
				name: "使用用途验证",
				sql: "select count(USE_APPLI)\n" +
				"from DWI_MDM_BUILD_BASE_INFO\n" +
				"where  USE_APPLI not in (1,2,3,4,5,6,7,9)\n"
			},
		]
	},
	sheBao: {
		data: [
			{
				url: "./static/doc/miss_value.py",
				name: "社保信息表信息缺失验证",
				sql: "select table_name, column_name, num_nulls \n" +
				"from ALL_TAB_COLUMNS \n" +
				"where table_name = 'DWI_MDM_PPU_SOCIAL_INSU'\n'"
			},
			{
				url: "./static/doc/query.py",
				name: "应缴费天期验证",
				sql: "select count(PAYMENT_DATE)\n" +
				"from DWI_MDM_PPU_SOCIAL_INSU\n" +
				"where PAYMENT_DATE like '%00'\n"
			},
			{
				url: "./static/doc/query.py",
				name: "缴费到账天期验证",
				sql: "select count(ACCT_DATE)\n" +
				"from DWI_MDM_PPU_SOCIAL_INSU\n" +
				"where ACCT_DATE like '%00'\n"
			},
		]
	},
	faRen: {
		data: [
			{
				url: "./static/doc/miss_value.py",
				name: "法人基本信息表信息缺失验证",
				sql: "select table_name, column_name, num_nulls from ALL_TAB_COLUMNS where table_name = 'DWI_MDM_CORPORATION_INFO'"
			},
			{
				url: "./static/doc/query.py",
				name: "法人状态验证",
				sql: "select count(CORP_STATE) from DWI_MDM_CORPORATION_INFO where  CORP_STATE in (0,-1,-2,-3,-4,-5,-6,-9)"
			},
			{
				url: "./static/doc/query.py",
				name: "法人类型验证",
				sql: "select count(CORP_TYPE) from DWI_MDM_CORPORATION_INFO where  CORP_TYPE in (1,2,3,4,5,6,7,8,9,'A','B','C')"
			},
			{
				url: "./static/doc/query_aggretion.py",
				name: "法人地址重复验证",
				sql: "select count(*) from (select count(CORP_ADDR) from DWI_MDM_CORPORATION_INFO group by CORP_ADDR having count(CORP_ADDR) > 30)"
			},
			{
				url: "./static/doc/query_aggretion.py",
				name: "注册号重复验证",
				sql: "select count(*) from (select count(ENT_REG_NO) from DWI_MDM_CORPORATION_INFO group by ENT_REG_NO having count(ENT_REG_NO) > 30)"
			},
		]
	},
	eee: {
		data: [
			{url: "./static/doc/CoordinateSystem_5lyr.py", name: "坐标系验证", sql: "SELECT * FROM lg_coordinate"},
			{url: "./static/doc/PointNotInPolygon.py", name: "人口-房屋点面验证", sql: "SELECT * FROM lg_building_populace"},
		]
	},
	fff: {
		data: [
			{url: "./static/doc/CoordinateSystem_5lyr.py", name: "坐标系验证", sql: "SELECT * FROM lg_coordinate"},
			{url: "./static/doc/FieldValidation1.py", name: "房屋面图层数据准确性验证", sql: "SELECT * FROM lg_building_floor1"},
		]
	},
	ggg: {
		data: [
			{url: "./static/doc/CoordinateSystem_5lyr.py", name: "坐标系验证", sql: "SELECT * FROM lg_coordinate"},
			{url: "./static/doc/lvdi_selfintersection.py", name: "绿地面图层冗余验证", sql: "SELECT * FROM lg_greenbelt"},
		]
	},
	hhh: {
		data: [
			{url: "./static/doc/CoordinateSystem_5lyr.py", name: "坐标系验证", sql: "SELECT * FROM lg_coordinate"},
			{url: "./static/doc/PointInPolygon.py", name: "危险边坡房屋点面验证", sql: "SELECT * FROM lg_building_solpe"},
		]
	},
	iii: {
		data: [
			{url: "./static/doc/CoordinateSystem_5lyr.py", name: "坐标系验证", sql: "SELECT * FROM lg_coordinate"},
			{url: "./static/doc/wangge_gap.py", name: "网格面图层数据缺失交验证", sql: "SELECT * FROM lg_grid_hiatus"},
			{url: "./static/doc/wangge_intersection.py", name: "网格面图层自相交验证", sql: "SELECT * FROM lg_grid_join"},
		]
	},
	
}