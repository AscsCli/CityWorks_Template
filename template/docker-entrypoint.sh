#! /bin/bash

file_path=$ENV_FILE_PATH

env_param=(ENV_CM_SERVER ENV_CM_SERVER_PORT ENV_ARCGIS_SERVER ENV_ARCGIS_SERVER_PORT ENV_CAR_SERVER ENV_CAR_SERVER_PORT MODEL_URL LINE_URL);

replaceEnv(){
    if [ $# != 3 ]; then
        echo "funtion using error : arg1 input file_path, arg2 input param_name , arg3 input replace value "
        exit 1;
    fi;
    param=$2;
    value=$3;
    file_path=$1;
    sed -i "/$param/d" $file_path;
    if [ $value == 'true' -o $value == 'false' ]; then
        echo "$param is boolean"
        echo "const $param = $value;" >> $file_path;
    else
        echo "$param is not boolean"
        echo "const $param = '$value';" >> $file_path;
    fi
}

for env in ${env_param[@]} ; do
    value=$(eval echo \$$env);
    if [ -n "$value" ];then
        echo $file_path $env $value;
        replaceEnv $file_path $env $(eval echo \$$env);
    fi
done;

# # cat $file_path;

nginx -g "daemon off;"
