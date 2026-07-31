/*
====================================================
API CONFIG
====================================================
*/

const API = "http://localhost:3000/api";

/*
====================================================
HÀM CHUNG
====================================================
*/

async function request(url, options = {}) {

    const response = await fetch(url, options);

    const json = await response.json();

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

    return await request(

        `${API}/procedure-status?keyword=${encodeURIComponent(keyword)}`

    );

}

/*
====================================================
LẤY TOÀN BỘ DANH SÁCH
====================================================
*/

export async function getProcedureStatus() {

    return await request(

        `${API}/procedure-status`

    );

}

/*
====================================================
UPLOAD PDF
====================================================
*/

export async function uploadPdf(formData) {

    return await request(

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

    return await request(

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

    return await request(

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

    return await request(

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

    return `http://localhost:3000/files/${fileName}`;

}