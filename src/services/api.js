/*
====================================================
API CONFIG
====================================================
*/

const API =
    import.meta.env.VITE_API_URL ||
    "http://localhost:3000/api";

/*
====================================================
HÀM CHUNG
====================================================
*/

async function request(url, options = {}) {

    const response = await fetch(url, options);

    let json = {};

    try {

        json = await response.json();

    } catch {

        json = {};

    }

    if (!response.ok) {

        throw new Error(

            json.message || "Có lỗi xảy ra."

        );

    }

    return json;

}

/*
====================================================
TRA CỨU THỦ TỤC
====================================================
*/

export async function searchProcedure(keyword = "") {

    return request(

        `${API}/procedure-status?keyword=${encodeURIComponent(keyword)}`

    );

}

/*
====================================================
LẤY TOÀN BỘ DANH SÁCH
====================================================
*/

export async function getProcedureStatus() {

    return request(

        `${API}/procedure-status`

    );

}

/*
====================================================
UPLOAD PDF
====================================================
*/

export async function uploadPdf(formData) {

    return request(

        `${API}/upload`,

        {

            method: "POST",

            body: formData

        }

    );

}

/*
====================================================
THÊM THỦ TỤC
====================================================
*/

export async function addProcedure(data) {

    return request(

        `${API}/procedure-status`,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        }

    );

}

/*
====================================================
CẬP NHẬT THỦ TỤC
====================================================
*/

export async function updateProcedure(id, data) {

    return request(

        `${API}/procedure-status/${id}`,

        {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(data)

        }

    );

}

/*
====================================================
XÓA THỦ TỤC
====================================================
*/

export async function deleteProcedure(id) {

    return request(

        `${API}/procedure-status/${id}`,

        {

            method: "DELETE"

        }

    );

}

/*
====================================================
ĐƯỜNG DẪN FILE PDF
====================================================
*/

export function getPdfUrl(fileName) {

    if (!fileName) {

        return "";

    }

    const BASE_URL = API.replace("/api", "");

    return `${BASE_URL}/files/${fileName}`;

}
export async function deleteSelected(ids) {

    return request(

        `${API}/procedure-status/batch`,

        {

            method: "DELETE",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({ ids })

        }

    );

}

export async function clearProcedures() {

    return request(

        `${API}/procedure-status/clear`,

        {

            method: "DELETE"

        }

    );

}