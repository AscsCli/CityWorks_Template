export default {
	data: [
		{
			id: "renKou",
			name: "人口基本信息表",
			sql: "select table_name, column_name, data_type, data_length,num_distinct,data_default from ALL_TAB_COLUMNS where table_name = 'DWI_MDM_PPU_BASE_INFO'"
		},
		{
			id: "louDong",
			name: "楼栋基本信息表",
			sql: "select table_name, column_name, data_type, data_length,num_distinct,data_default from ALL_TAB_COLUMNS where table_name = 'DWI_MDM_BUILD_BASE_INFO'"
		},
		{
			id: "sheBao",
			name: "社保信息表",
			sql: "select table_name, column_name, data_type, data_length,num_distinct,data_default from ALL_TAB_COLUMNS where table_name = 'DWI_MDM_PPU_SOCIAL_INSU'"
		},
		{
			id: "faRen",
			name: "法人基本信息表",
			sql: "select table_name, column_name, data_type, data_length,num_distinct,data_default from ALL_TAB_COLUMNS where table_name = 'DWI_MDM_CORPORATION_INFO'"
		},
	],
}