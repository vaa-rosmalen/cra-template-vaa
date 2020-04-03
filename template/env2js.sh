#!/bin/sh

set -x

cat <<END
    window.AUTH_URL='${AUTH_URL}';
    window.API_URL='${API_URL}';
END
