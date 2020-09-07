mkdir -p src/configs/

cat <<EOF >src/configs/env.ts
export const PUBLIC_KEY = '$PUBLIC_KEY';
export const PRIVATE_KEY = '$PRIVATE_KEY';
export const API_URL = '$API_URL';

export const RAPIAPI_URL = '$RAPIAPI_URL';
export const RAPIAPI_KEY = '$RAPIAPI_KEY';
EOF